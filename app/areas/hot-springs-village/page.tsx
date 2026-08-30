import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "General Contractor & Remodeling in Hot Springs Village, AR",
  description: "Licensed, bonded and insured general contractor serving Hot Springs Village with remodeling, bathrooms, tile, siding, decks, painting and construction services.",
  alternates: { canonical: "/areas/hot-springs-village" },
  openGraph: { url: "/areas/hot-springs-village", title: "General Contractor & Remodeling in Hot Springs Village, AR" },
};

export default function Page() {
  return <LocationPage city="Hot Springs Village" hero="/images/1625.png" intro="General contracting and interior and exterior remodeling for homeowners in Hot Springs Village, including bathrooms, custom tile, flooring, siding, decks and other home improvements." note="Homes in the Village need everything from room updates and bathroom work to exterior repairs and better outdoor access. Tell us what you're looking at and we'll talk through the project with you." />;
}
