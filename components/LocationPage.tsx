import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { services, site } from "@/lib/site";

type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export function LocationPage({
  city,
  intro,
  note,
  hero = "/images/1597.jpg",
  projectImages = [],
}: {
  city: string;
  intro: string;
  note: string;
  hero?: string;
  projectImages?: ProjectImage[];
}) {
  return (
    <main>
      <section className="locationHero">
        <Image src={hero} alt={`Natural State remodeling and construction serving ${city}`} fill priority sizes="100vw" />
        <div className="locationScrim" />
        <div className="shell locationHeroContent">
          <span className="eyebrow light">Serving {city}</span>
          <h1>General contracting & remodeling around {city}.</h1>
          <p>{intro}</p>
          <Link href="/contact#quote" className="solidButton">Request an estimate</Link>
        </div>
      </section>

      <section className="shell locationTrust">
        <div className="locationNote">
          <strong>Solid work. Straightforward communication.</strong>
          <p>{note}</p>
        </div>
        <div className="licenseBlock"><span>Licensed</span><span>Bonded</span><span>Insured</span></div>
      </section>

      {projectImages.length > 0 && (
        <section className="shell locationProjectSection">
          <div className="locationProjectIntro">
            <span className="eyebrow">Recent work</span>
            <h2>See the work, not just the sales pitch.</h2>
            <p>Finished details and in-progress photos from the kind of remodeling and construction work we handle every day.</p>
          </div>
          <div className="locationProjectGrid">
            {projectImages.map((project, index) => (
              <figure className={`locationProjectPhoto locationProjectPhoto${index + 1}`} key={project.src}>
                <div>
                  <Image src={project.src} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 40vw" />
                </div>
                <figcaption>{project.label}</figcaption>
              </figure>
            ))}
          </div>
          <Link href="/gallery" className="quietLink">See the full project gallery →</Link>
        </section>
      )}

      <section className="shell areaServices">
        <div className="sectionIntro"><span>What we do</span><h2>Interior, exterior and outdoor projects.</h2></div>
        <div className="areaServiceLinks">
          {services.map((s) => (
            <Link href={s.href} key={s.href}>
              <span>{s.kicker}</span><strong>{s.title}</strong><em>View service →</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="quoteSection shell" id="quote">
        <div className="quoteCopy">
          <span className="eyebrow">Project in {city}?</span>
          <h2>Tell us what you need done.</h2>
          <p>Send a few details about the job and a good number to reach you. You can also call us directly when you&apos;re ready to talk.</p>
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
