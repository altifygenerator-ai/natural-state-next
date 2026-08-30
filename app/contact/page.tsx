import type { Metadata } from "next";
import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Estimates",
  description: "Request an estimate from Natural State Interior-Exterior Solutions in Hot Springs, Arkansas. Call the office or cell, or send project details online.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Natural State Interior-Exterior Solutions" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="contactHero shell">
        <div className="contactPhoto"><Image src="/images/1599.jpg" alt="Exterior project by Natural State in the Hot Springs area" fill priority sizes="(max-width: 850px) 100vw, 42vw" /></div>
        <div className="contactCopy">
          <span className="eyebrow">Contact Natural State</span>
          <h1>Tell us what you&apos;re working on.</h1>
          <p>Call us or send a few details about the job. With more than 30 years of construction and home improvement experience, we can talk through everything from one-room updates and repairs to larger remodels and new construction.</p>
          <div className="contactFacts">
            <div className="contactPhone"><span>Office</span><a href={site.officePhoneHref}>{site.officePhoneDisplay}</a></div>
            <div className="contactPhone"><span>Cell</span><a href={site.cellPhoneHref}>{site.cellPhoneDisplay}</a></div>
            <span>{site.address}</span>
            <strong>Licensed · Bonded · Insured</strong>
          </div>
        </div>
      </section>

      <section className="quoteSection shell contactQuote" id="quote">
        <div className="quoteCopy">
          <span className="eyebrow">Request an estimate</span>
          <h2>Start with a few details.</h2>
          <p>Tell us what you need done, where the job is and the best number to reach you. Estimates are free and there&apos;s no pressure.</p>
          <div className="proofLinks"><a href={site.google} target="_blank" rel="noreferrer">Find us on Google →</a><a href={site.facebook} target="_blank" rel="noreferrer">Visit us on Facebook →</a></div>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
