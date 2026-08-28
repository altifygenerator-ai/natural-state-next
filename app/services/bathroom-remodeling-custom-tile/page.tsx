import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bathroom Remodeling & Custom Tile in Hot Springs, AR",
  description: "Bathroom remodeling, walk-in showers, ceramic tile and custom tile work around Hot Springs, Arkansas.",
  alternates: { canonical: "/services/bathroom-remodeling-custom-tile" },
  openGraph: { url: "/services/bathroom-remodeling-custom-tile", title: "Bathroom Remodeling & Custom Tile in Hot Springs, AR" },
};

export default function Page() {
  return <ServicePage eyebrow="Bathrooms & custom tile" title="Tile work that earns a closer look." intro="Bathroom renovations, walk-in showers and custom tile work built around the room and the way you need to use it." hero="/images/1616.jpg" points={["Bathroom remodeling", "Walk-in showers", "Ceramic tile", "Custom tile layouts", "Shower benches", "Bathroom flooring", "Grab bars & accessibility-minded features"]} gallery={["/images/1615.jpg", "/images/1621.jpg", "/images/1622.jpg"]} detailTitle="The details matter in a bathroom." detailCopy="Tile lines, transitions, corners and finish work stay in view every day. We take the time to make the room look finished and work the way it should." />;
}
