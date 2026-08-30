import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Interior Remodeling in Hot Springs, AR",
  description: "Interior remodeling, flooring, drywall repairs and finishing, spray texture, painting and finish work from Natural State around Hot Springs, Arkansas.",
  alternates: { canonical: "/services/interior-remodeling" },
  openGraph: { url: "/services/interior-remodeling", title: "Interior Remodeling in Hot Springs, AR" },
};

export default function Page() {
  return <ServicePage eyebrow="Interior remodeling" title="Make the inside work better." intro="Room updates, flooring, drywall repairs and finishing, spray texture, painting and finish work for homeowners who want the space to look better and work better." hero="/images/1598.jpg" points={["Flooring", "Drywall repairs & patches", "Drywall finishing", "Spray texture", "Painting", "Trim & finish work", "Interior insulation", "Room renovations", "Doors & built-ins"]} gallery={["/images/1614.jpg", "/images/1618.jpg", "/images/1620.jpg"]} detailTitle="A remodel comes together in the details." detailCopy="Interior projects often cross several trades. Drywall, texture, flooring, paint, trim and finish work all have to meet cleanly. With decades of experience starting in drywall and finishing, we can take care of those connected parts and keep the job moving." />;
}
