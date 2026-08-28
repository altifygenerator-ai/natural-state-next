import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="siteHeader">
      <div className="utilityBar">
        <div className="shell utilityInner">
          <span>Licensed · Bonded · Insured</span>
          <span className="utilityArea">Serving Hot Springs & nearby communities</span>
          <a href={site.officePhoneHref}>Office {site.officePhoneDisplay}</a>
        </div>
      </div>

      <div className="shell masthead">
        <BrandLockup />

        <nav className="mainNav" aria-label="Main navigation">
          <Link href="/gallery">Our Work</Link>
          <div className="navGroup">
            <span>Services</span>
            <div className="navDrop">
              <Link href="/services/interior-remodeling">Interior Remodeling</Link>
              <Link href="/services/bathroom-remodeling-custom-tile">Bathrooms & Tile</Link>
              <Link href="/services/exterior-remodeling-siding">Exterior & Siding</Link>
              <Link href="/services/decks-outdoor-construction">Decks & Outdoor</Link>
            </div>
          </div>
          <div className="navGroup">
            <span>Service Area</span>
            <div className="navDrop">
              <Link href="/areas/lake-hamilton">Lake Hamilton</Link>
              <Link href="/areas/malvern">Malvern</Link>
              <Link href="/areas/hot-springs-village">Hot Springs Village</Link>
              <Link href="/areas/benton">Benton</Link>
            </div>
          </div>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact#quote" className="headerCta">Get an estimate</Link>
      </div>

      <div className="mobileNav shell">
        <Link href="/gallery">Work</Link>
        <Link href="/#services">Services</Link>
        <Link href="/contact#quote">Estimate</Link>
        <a href={site.officePhoneHref}>Call</a>
      </div>
    </header>
  );
}
