import { site } from "@/lib/site";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    telephone: "+1-501-625-3925",
    address: {
      "@type": "PostalAddress",
      streetAddress: "145 Nimbus St",
      addressLocality: "Hot Springs",
      addressRegion: "AR",
      postalCode: "71913",
      addressCountry: "US",
    },
    areaServed: ["Hot Springs, AR", "Lake Hamilton, AR", "Malvern, AR"],
    sameAs: [site.facebook, site.google],
    ...(siteUrl ? { url: siteUrl } : {}),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
