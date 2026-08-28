import { NextResponse } from "next/server";

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

function cleanLine(value: unknown, max = 250) {
  return clean(value, max).replace(/[\r\n]+/g, " ");
}

async function verifyTurnstile(token: string, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: false, unavailable: true };
  if (!token) return { ok: false, unavailable: false };

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const cfIp = request.headers.get("cf-connecting-ip");
  const remoteIp = cfIp || forwardedFor;
  if (remoteIp) formData.append("remoteip", remoteIp);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
    cache: "no-store",
  }).catch(() => null);

  if (!response?.ok) return { ok: false, unavailable: true };
  const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
  return { ok: Boolean(result?.success), unavailable: false };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { message: "We couldn't read that request. Please try again or call the office at 501-625-3925." },
      { status: 400 }
    );
  }

  // Quiet honeypot for basic automated form spam.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = cleanLine(body.name);
  const phone = cleanLine(body.phone);
  const email = cleanLine(body.email);
  const area = cleanLine(body.area);
  const details = clean(body.details);
  const turnstileToken = clean(body["cf-turnstile-response"], 3000);

  if (!name || !phone || !details) {
    return NextResponse.json(
      { message: "Please include your name, phone number and a few details about the project." },
      { status: 400 }
    );
  }

  const captcha = await verifyTurnstile(turnstileToken, request);
  if (captcha.unavailable) {
    return NextResponse.json(
      { message: "Online estimate requests are temporarily unavailable. Please call the office at 501-625-3925 or the cell at 501-318-4082." },
      { status: 503 }
    );
  }
  if (!captcha.ok) {
    return NextResponse.json(
      { message: "Please complete the spam check and try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL || "jonmunz@gmail.com";
  const from = process.env.QUOTE_FROM_EMAIL || "Natural State Website <website@hometownwebservices.cc>";

  if (!apiKey) {
    return NextResponse.json(
      { message: "Online estimate requests are temporarily unavailable. Please call the office at 501-625-3925 or the cell at 501-318-4082." },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email || undefined,
      subject: `Natural State estimate request — ${name}`,
      text: [
        "New estimate request from naturalstateexteriors.net",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Project location: ${area || "Not provided"}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "We couldn't send the request right now. Please call the office at 501-625-3925 or the cell at 501-318-4082." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
