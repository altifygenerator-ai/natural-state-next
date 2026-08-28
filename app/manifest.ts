import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: "Interior and exterior remodeling, custom tile, siding, decks and home improvements around Hot Springs, Arkansas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111820",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
