import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerTop">
        <div className="footerBrand">
          <BrandLockup footer />
          <p className="muted">Licensed · Bonded · Insured</p>
        </div>

        <div className="footerLinks">
          <Link href="/gallery">Our Work</Link>
          <Link href="/#services">Services</Link>
          <Link href="/areas/lake-hamilton">Lake Hamilton</Link>
          <Link href="/areas/malvern">Malvern</Link>
          <Link href="/areas/hot-springs-village">Hot Springs Village</Link>
          <Link href="/areas/benton">Benton</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footerContact">
          <div className="footerPhone">
            <span>Office</span>
            <a href={site.officePhoneHref}>{site.officePhoneDisplay}</a>
          </div>
          <div className="footerPhone">
            <span>Cell</span>
            <a href={site.cellPhoneHref}>{site.cellPhoneDisplay}</a>
          </div>
          <span>{site.address}</span>
          <div className="socialLinks">
            <a href={site.google} target="_blank" rel="noreferrer">Google Business Profile</a>
            <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>{site.name}</span>
        <span>Serving Hot Springs, Lake Hamilton, Malvern, Hot Springs Village, Benton & nearby areas.</span>
        <a className="hometownTag" href={site.hometownWebServices} target="_blank" rel="noreferrer">
          Website by Hometown Web Services
        </a>
      </div>
    </footer>
  );
}
