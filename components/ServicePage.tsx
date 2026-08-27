import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export function ServicePage({
  eyebrow,
  title,
  intro,
  hero,
  points,
  gallery,
  detailTitle,
  detailCopy,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  points: string[];
  gallery: string[];
  detailTitle: string;
  detailCopy: string;
}) {
  return (
    <main>
      <section className="subHero shell">
        <div className="subHeroCopy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="trustLine"><strong>Licensed</strong><strong>Bonded</strong><strong>Insured</strong></div>
          <Link className="textArrow" href="/contact#quote">Ask about your project →</Link>
        </div>
        <div className="subHeroImage"><Image src={hero} alt={`${eyebrow} project by Natural State`} fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div>
      </section>

      <section className="serviceDetail shell">
        <div className="serviceListPanel">
          <span className="eyebrow">Services include</span>
          <ul>{points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="serviceNarrative">
          <h2>{detailTitle}</h2>
          <p>{detailCopy}</p>
          <p>Serving homeowners throughout Hot Springs, Lake Hamilton, Malvern and nearby communities.</p>
        </div>
      </section>

      <section className="projectBand">
        <div className="shell projectBandHead">
          <span className="eyebrow light">Project photos</span>
          <h2>A closer look at the work.</h2>
        </div>
        <div className="shell detailGallery">
          {gallery.map((src, i) => <div className={`detailPhoto detailPhoto${i + 1}`} key={src}><Image src={src} alt={`${eyebrow} work by Natural State`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>)}
        </div>
      </section>

      <section className="quoteSection shell" id="quote">
        <div className="quoteCopy">
          <span className="eyebrow">Have a job like this?</span>
          <h2>Tell us what you&apos;re looking at.</h2>
          <p>Send a few details about the project and the best way to reach you. We&apos;ll follow up from there.</p>
          <a className="phoneBig" href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
