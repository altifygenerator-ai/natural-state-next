import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Decks, Ramps & Outdoor Construction | Hot Springs", description: "Deck, ramp, porch and outdoor carpentry work around Hot Springs, Arkansas." };

export default function Page() {
  return <ServicePage eyebrow="Decks & outdoor construction" title="Useful outdoor space, built for the way you use it." intro="Decks, ramps, porches, walkways and exterior carpentry for homes that need better access, better outdoor space or both." hero="/images/1600.jpg" points={["Deck construction", "Ramps", "Wood walkways", "Porches", "Railings", "Exterior carpentry", "Outdoor repairs & rebuilds"]} gallery={["/images/1604.jpg", "/images/1607.jpg", "/images/1610.jpg"]} detailTitle="Built around the house and the way you use it." detailCopy="A deck, ramp or walkway has to fit the grade, the house and the way people move through the property. We build around those real-world details so the finished space feels like it belongs there." />;
}
