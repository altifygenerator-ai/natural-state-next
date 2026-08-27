import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Remodeling, custom tile, exterior and deck work from Natural State Interior-Exterior Solutions around Hot Springs, Arkansas.",
};

const photos = [
  ["1597.jpg", "Exterior construction"], ["1599.jpg", "Exterior entry details"], ["1616.jpg", "Custom tile shower"],
  ["1615.jpg", "Walk-in shower tile"], ["1598.jpg", "Kitchen finish work"], ["1625.png", "Siding work"],
  ["1600.jpg", "Deck and ramp construction"], ["1604.jpg", "Deck carpentry"], ["1609.jpg", "Outdoor walkway"],
  ["1614.jpg", "Interior renovation"], ["1618.jpg", "Built-in and vanity work"], ["1594.jpg", "Masonry repair"],
] as const;

export default function GalleryPage() {
  return (
    <main>
      <section className="galleryIntro shell">
        <span className="eyebrow">Our work</span>
        <h1>See what we&apos;ve been working on.</h1>
        <p>A mix of finished work and in-progress photos from remodeling, tile, exterior and outdoor projects around the area.</p>
      </section>
      <section className="shell galleryMasonry">
        {photos.map(([src, label], i) => <figure className={`galleryItem g${(i % 5) + 1}`} key={src}><div className="galleryImage"><Image src={`/images/${src}`} alt={label} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><figcaption>{label}</figcaption></figure>)}
      </section>
      <section className="galleryCta"><div className="shell"><div><span className="eyebrow light">Have a project of your own?</span><h2>Tell us what you need done.</h2></div><Link className="solidButton lightButton" href="/contact#quote">Request an estimate</Link></div></section>
    </main>
  );
}
