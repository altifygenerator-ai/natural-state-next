import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Decks, Ramps & Outdoor Construction in Hot Springs, AR",
  description: "Deck, ramp, porch, walkway and outdoor carpentry work from Natural State around Hot Springs, Arkansas.",
  alternates: { canonical: "/services/decks-outdoor-construction" },
  openGraph: { url: "/services/decks-outdoor-construction", title: "Decks, Ramps & Outdoor Construction in Hot Springs, AR" },
};

export default function Page() {
  return <ServicePage eyebrow="Decks & outdoor construction" title="Useful outdoor space, built for the way you use it." intro="Decks, ramps, porches, walkways and exterior carpentry for homes that need better access, better outdoor space or both." hero="/images/1600.jpg" points={["Deck construction", "Ramps", "Wood walkways", "Porches", "Railings", "Exterior carpentry", "Outdoor repairs & rebuilds"]} gallery={["/images/1604.jpg", "/images/1607.jpg", "/images/1610.jpg"]} detailTitle="Built around the house and the way you use it." detailCopy="A deck, ramp or walkway has to fit the grade, the house and the way people move through the property. We build around those real-world details so the finished space feels like it belongs there." />;
}
