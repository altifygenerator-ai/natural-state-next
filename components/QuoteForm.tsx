"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = new FormData(e.currentTarget);
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
      e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't send your request. Please try again or give us a call.");
    }
  }

  return (
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
            <option>Other nearby area</option>
          </select>
        </label>
        <label className="span2">
          <span>What do you need done?</span>
          <textarea name="details" rows={compact ? 3 : 5} placeholder="Bathroom, siding, deck, flooring, remodel…" required />
        </label>
      </div>
      <button className="formSubmit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request an estimate"}
      </button>
      <p className="formNote">Rather talk first? Call <a href={site.phoneHref}>{site.phoneDisplay}</a>.</p>
      {message && <p className={`formStatus ${status}`}>{message}</p>}
    </form>
  );
}
