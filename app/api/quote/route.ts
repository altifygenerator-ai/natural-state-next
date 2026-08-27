import { NextResponse } from "next/server";

function clean(value: unknown) {
  return String(value ?? "").trim().slice(0, 4000);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ message: "We couldn't read that request. Please try again or call 501-625-3925." }, { status: 400 });

  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const area = clean(body.area);
  const details = clean(body.details);

  if (!name || !phone || !details) {
    return NextResponse.json({ message: "Please include your name, phone number and a few details about the project." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { message: "Online estimate requests aren't available right now. Please call 501-625-3925 and we'll be glad to talk about the job." },
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
      subject: `Estimate request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nArea: ${area || "Not provided"}\n\nProject details:\n${details}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "We couldn't send the request right now. Please call 501-625-3925." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
