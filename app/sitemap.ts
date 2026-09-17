import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/gallery", priority: 0.9 },
    { path: "/services/interior-remodeling", priority: 0.9 },
    { path: "/services/bathroom-remodeling-custom-tile", priority: 0.9 },
    { path: "/services/exterior-remodeling-siding", priority: 0.9 },
    { path: "/services/decks-outdoor-construction", priority: 0.9 },
    { path: "/areas/hot-springs", priority: 0.9 },
    { path: "/areas/lake-hamilton", priority: 0.8 },
    { path: "/areas/malvern", priority: 0.8 },
    { path: "/areas/hot-springs-village", priority: 0.8 },
    { path: "/areas/benton", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
