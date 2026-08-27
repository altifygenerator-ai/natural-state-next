import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!base) return [];

  const routes = [
    "",
    "/gallery",
    "/services/interior-remodeling",
    "/services/bathroom-remodeling-custom-tile",
    "/services/exterior-remodeling-siding",
    "/services/decks-outdoor-construction",
    "/areas/lake-hamilton",
    "/areas/malvern",
    "/contact",
  ];

  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
