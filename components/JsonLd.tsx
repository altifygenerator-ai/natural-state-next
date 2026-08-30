import { services, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: "Licensed, bonded and insured general contractor with over 30 years of construction and home improvement experience serving Hot Springs and nearby communities.",
    url: site.url,
    logo: `${site.url}/brand/natural-state-logo.png`,
    image: `${site.url}/images/1597.jpg`,
    telephone: ["+1-501-625-3925", "+1-501-318-4082"],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "office", telephone: "+1-501-625-3925" },
      { "@type": "ContactPoint", contactType: "mobile", telephone: "+1-501-318-4082" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "145 Nimbus St",
      addressLocality: "Hot Springs",
      addressRegion: "AR",
      postalCode: "71913",
      addressCountry: "US",
    },
    areaServed: [
      "Hot Springs, AR",
      "Lake Hamilton, AR",
      "Malvern, AR",
      "Hot Springs Village, AR",
      "Benton, AR",
    ],
    sameAs: [site.facebook, site.google],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remodeling and construction services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${site.url}${service.href}`,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
