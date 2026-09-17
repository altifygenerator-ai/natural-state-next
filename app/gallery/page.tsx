import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "See remodeling, custom tile, exterior, deck and interior work from Natural State Interior-Exterior Solutions around the Hot Springs area.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Project Gallery | Natural State Interior-Exterior Solutions" },
};

const photos = [
  ["1597.jpg", "Exterior remodeling"],
  ["1599.jpg", "Entry and exterior finish work"],
  ["1595.jpg", "Exterior timber details"],
  ["1596.jpg", "Garage and exterior finish work"],
  ["1598.jpg", "Kitchen and interior finish work"],
  ["recent-work/interior-remodel-flooring-lighting.webp", "Interior renovation, flooring and lighting"],
  ["recent-work/kitchen-cabinets-countertops.webp", "Kitchen cabinet and countertop work"],
  ["recent-work/interior-flooring-closet-finish.webp", "Interior flooring and finish work"],
  ["1616.jpg", "Custom tile shower"],
  ["1615.jpg", "Walk-in shower tile"],
  ["1621.jpg", "Shower tile and fixtures"],
  ["1622.jpg", "Tile shower bench and stone accents"],
  ["recent-work/bathroom-tub-shower-install.webp", "Tub and shower installation in progress"],
  ["1618.jpg", "Vanity and built-in work"],
  ["1617.jpg", "Bathroom finish work"],
  ["1614.jpg", "Interior renovation"],
  ["1613.jpg", "Interior flooring and paint"],
  ["1620.jpg", "Interior room update"],
  ["recent-work/fireplace-interior-remodel.webp", "Fireplace and interior remodeling work"],
  ["recent-work/finished-wood-stairs.webp", "Finished wood stair treads"],
  ["recent-work/stair-tread-installation.webp", "Stair tread installation"],
  ["1600.jpg", "Deck and ramp construction"],
  ["1601.jpg", "Exterior ramp construction"],
  ["1604.jpg", "Deck carpentry"],
  ["1607.jpg", "Wood walkway and railing"],
  ["1608.jpg", "Outdoor walkway construction"],
  ["1610.jpg", "Ramp and railing construction"],
  ["1611.jpg", "Outdoor access construction"],
  ["recent-work/porch-surface-finish.webp", "Porch surface and finish work"],
  ["recent-work/replacement-windows-exterior.webp", "Replacement windows and exterior work"],
  ["recent-work/exterior-addition-siding.webp", "Exterior addition and siding work"],
  ["recent-work/exterior-addition-finished-siding.webp", "Finished siding on an exterior addition"],
  ["recent-work/timber-entry-detail.webp", "Timber entry detail"],
  ["recent-work/exterior-timber-trim.webp", "Exterior timber and trim work"],
  ["recent-work/interior-framing-layout.webp", "Interior framing and layout changes"],
  ["recent-work/floor-framing-rebuild.webp", "Floor framing rebuild"],
  ["recent-work/floor-joist-repair.webp", "Floor joist repair and structural work"],
  ["1594.jpg", "Masonry repair"],
] as const;

export default function GalleryPage() {
  return (
    <main>
      <section className="galleryIntro shell">
        <span className="eyebrow">Our work</span>
        <h1>See what we&apos;ve been working on.</h1>
        <p>Finished details and in-progress work from interior remodels, bathrooms, tile, exterior improvements, decks and other projects around the area.</p>
      </section>

      <section className="shell galleryMasonry">
        {photos.map(([src, label], i) => (
          <figure className={`galleryItem g${(i % 5) + 1}`} key={src}>
            <div className="galleryImage"><Image src={`/images/${src}`} alt={label} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="galleryCta">
        <div className="shell">
          <div><span className="eyebrow light">Have a project of your own?</span><h2>Tell us what you need done.</h2></div>
          <Link className="solidButton lightButton" href="/contact#quote">Request an estimate</Link>
        </div>
      </section>
    </main>
  );
}
