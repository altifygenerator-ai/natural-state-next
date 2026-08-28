"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: { sitekey: string; theme?: "light" | "dark" | "auto" }) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileHost = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileReady || !window.turnstile || !turnstileHost.current || turnstileWidgetId.current) return;

    turnstileWidgetId.current = window.turnstile.render(turnstileHost.current, {
      sitekey: turnstileSiteKey,
      theme: "light",
    });

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, [turnstileReady, turnstileSiteKey]);

  function resetTurnstile() {
    if (turnstileWidgetId.current) window.turnstile?.reset(turnstileWidgetId.current);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "We couldn't send your request. Please try again or give us a call.");

      setStatus("sent");
      setMessage("Thanks. We received your request and will be in touch.");
      formElement.reset();
      resetTurnstile();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't send your request. Please try again or give us a call.");
      resetTurnstile();
    }
  }

  return (
    <>
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
          onReady={() => setTurnstileReady(true)}
        />
      )}
      <form className={`quoteForm ${compact ? "quoteFormCompact" : ""}`} onSubmit={submit}>
        <div className="formHeading">
          <span>Tell us about the job</span>
          <strong>Request an estimate</strong>
        </div>

        <div className="formGrid">
          <label>
            <span>Name</span>
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          {!compact && (
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
          )}
          <label>
            <span>Project location</span>
            <select name="area" defaultValue="Hot Springs">
              <option>Hot Springs</option>
              <option>Lake Hamilton</option>
              <option>Malvern</option>
              <option>Hot Springs Village</option>
              <option>Benton</option>
              <option>Other nearby area</option>
            </select>
          </label>
          <label className="span2">
            <span>What do you need done?</span>
            <textarea name="details" rows={compact ? 3 : 5} placeholder="Bathroom, siding, deck, flooring, remodel…" required />
          </label>
        </div>

        <div className="formTrap" aria-hidden="true">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {turnstileSiteKey ? <div className="turnstileWrap" ref={turnstileHost} /> : null}

        <button className="formSubmit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request an estimate"}
        </button>
        <p className="formNote">
          Prefer to call? Office <a href={site.officePhoneHref}>{site.officePhoneDisplay}</a> · Cell <a href={site.cellPhoneHref}>{site.cellPhoneDisplay}</a>
        </p>
        {message && <p className={`formStatus ${status}`}>{message}</p>}
      </form>
    </>
  );
}
