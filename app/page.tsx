import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionIntro } from "@/components/SectionIntro";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "General Contractor & Remodeling in Hot Springs, AR",
  description:
    "Natural State Interior-Exterior Solutions is a licensed, bonded and insured general contractor serving Hot Springs with remodeling, roofing, siding, custom tile, decks, drywall, painting and construction services.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Natural State Interior-Exterior Solutions | Hot Springs, AR",
    description: "General contracting, interior and exterior remodeling, custom tile, siding, decks, drywall, painting and construction around Hot Springs, Arkansas.",
  },
};

export default function Home() {
  return (
    <main>
      <section className="homeHero shell">
        <div className="heroPhoto">
          <Image src="/images/1597.jpg" alt="Exterior remodeling project by Natural State in the Hot Springs area" fill priority sizes="(max-width: 900px) 100vw, 62vw" />
          <div className="heroPhotoLabel"><span>Hot Springs area</span><strong>Interior + Exterior</strong></div>
        </div>

        <div className="heroContent">
          <div className="heroRule" />
          <p className="eyebrow">Natural State Interior-Exterior Solutions</p>
          <h1>Good work speaks for itself.</h1>
          <p className="heroLead">General contracting, interior and exterior remodeling, custom tile, siding, decks and more for homeowners around Hot Springs and the surrounding area.</p>
          <div className="heroTrust"><span>Licensed</span><span>Bonded</span><span>Insured</span></div>
          <div className="heroActions">
            <a href={site.officePhoneHref} className="phoneButton">Call the office · {site.officePhoneDisplay}</a>
            <Link href="/gallery" className="quietLink">See our work →</Link>
          </div>
        </div>
      </section>

      <section className="experienceStrip" id="about">
        <div className="shell experienceGrid">
          <div className="experienceLead">
            <span className="eyebrow">Built on experience</span>
            <h2>Over 30 years in construction and home improvement.</h2>
            <div className="experienceTrust"><span>Licensed</span><span>Bonded</span><span>Insured</span></div>
          </div>
          <div className="experienceCopy">
            <p>Natural State Interior &amp; Exterior Solutions brings more than 30 years of hands-on experience to projects around Hot Springs. We handle roofing and siding, interior and exterior painting, custom tile for kitchens and bathrooms, flooring, drywall repairs and patches, larger remodels and new construction.</p>
            <p>We got our start in drywall and finishing, including spray texture, and that attention to the finish still carries through the work today. Expect clear communication, a clean job site and a straightforward, no-pressure estimate before the work begins.</p>
          </div>
        </div>
      </section>

      <section className="workSection shell">
        <SectionIntro eyebrow="Recent projects" title="Take a look at the work." copy="Bathrooms, siding, decks, interior updates and exterior improvements from jobs around the Hot Springs area." />
        <div className="workGrid">
          <Link href="/services/bathroom-remodeling-custom-tile" className="workTile workTileTall">
            <Image src="/images/1616.jpg" alt="Custom tile walk-in shower" fill sizes="(max-width: 800px) 100vw, 40vw" />
            <div className="workCaption"><span>Bathroom remodel</span><strong>Custom tile & walk-in shower</strong></div>
          </Link>
          <Link href="/services/exterior-remodeling-siding" className="workTile workTileWide">
            <Image src="/images/1625.png" alt="Siding color and exterior work examples" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="workCaption"><span>Exterior work</span><strong>Siding & finish work</strong></div>
          </Link>
          <Link href="/services/decks-outdoor-construction" className="workTile">
            <Image src="/images/1600.jpg" alt="Wood deck and ramp construction" fill sizes="(max-width: 800px) 100vw, 25vw" />
            <div className="workCaption"><span>Outdoor construction</span><strong>Decks & ramps</strong></div>
          </Link>
          <Link href="/services/interior-remodeling" className="workTile">
            <Image src="/images/1598.jpg" alt="Kitchen and interior finish work" fill sizes="(max-width: 800px) 100vw, 25vw" />
            <div className="workCaption"><span>Interior remodeling</span><strong>Kitchen & finish details</strong></div>
          </Link>
        </div>
        <div className="sectionLink"><Link href="/gallery">See more of our work →</Link></div>
      </section>

      <section className="serviceSection" id="services">
        <div className="shell serviceShell">
          <div className="serviceHeading">
            <span className="eyebrow light">What we do</span>
            <h2>From the inside out, we handle the work your home needs.</h2>
            <p>Some jobs are one trade. Others touch several parts of the house. As a general contractor, Natural State handles a broad range of remodeling and construction work so the project can come together without turning into a runaround.</p>
          </div>
          <div className="serviceStack">
            {services.map((service) => (
              <Link className="serviceRow" href={service.href} key={service.href}>
                <div className="serviceImage"><Image src={service.image} alt="" fill sizes="(max-width: 800px) 32vw, 18vw" /></div>
                <div className="serviceRowCopy"><span>{service.kicker}</span><h3>{service.title}</h3><p>{service.description}</p></div>
                <div className="serviceArrow" aria-hidden="true">↗</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="shell tagRail" aria-label="Additional services">
          {site.serviceTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="reputationSection shell">
        <div className="reputationImage">
          <Image src="/images/1623.jpg" alt="Natural State Interior-Exterior Solutions work trailer" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div className="reputationCopy">
          <span className="eyebrow">A name you can check</span>
          <h2>Know who you&apos;re hiring.</h2>
          <p>Natural State is a licensed, bonded and insured general contractor based in Hot Springs with more than 30 years of construction and home improvement experience. Look through our work, find us on Google or Facebook and give us a call when you&apos;re ready to talk about the job.</p>
          <div className="proofLinks"><a href={site.google} target="_blank" rel="noreferrer">Find us on Google →</a><a href={site.facebook} target="_blank" rel="noreferrer">Visit us on Facebook →</a></div>
          <div className="addressBlock">
            <span>Hot Springs</span>
            <strong>{site.address}</strong>
            <a href={site.officePhoneHref}>Office · {site.officePhoneDisplay}</a>
            <a href={site.cellPhoneHref}>Cell · {site.cellPhoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="areaSection">
        <div className="shell areaShell">
          <div className="areaHeading"><span className="eyebrow light">Service area</span><h2>Based in Hot Springs. Working across the local area.</h2><p>Not sure if you&apos;re in range? Give us a call and ask about your location.</p></div>
          <div className="areaRoute areaRouteFive">
            <div className="routeLine" />
            <div className="areaStop main"><span>Based in</span><strong>Hot Springs</strong><em>Primary service area</em></div>
            <Link href="/areas/lake-hamilton" className="areaStop"><span>Serving</span><strong>Lake Hamilton</strong><em>Area details →</em></Link>
            <Link href="/areas/malvern" className="areaStop"><span>Serving</span><strong>Malvern</strong><em>Area details →</em></Link>
            <Link href="/areas/hot-springs-village" className="areaStop"><span>Serving</span><strong>Hot Springs Village</strong><em>Area details →</em></Link>
            <Link href="/areas/benton" className="areaStop"><span>Serving</span><strong>Benton</strong><em>Area details →</em></Link>
          </div>
        </div>
      </section>

      <section className="quoteSection shell" id="quote">
        <div className="quoteCopy">
          <span className="eyebrow">Ready to talk about it?</span>
          <h2>Tell us what you need done.</h2>
          <p>Send a few details about the job, where it is and the best way to reach you. We&apos;ll take it from there.</p>
          <div className="phoneStack">
            <a className="phoneBig" href={site.officePhoneHref}><span>Office</span>{site.officePhoneDisplay}</a>
            <a className="phoneBig secondaryPhone" href={site.cellPhoneHref}><span>Cell</span>{site.cellPhoneDisplay}</a>
          </div>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
