import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Remodeling & Construction in Hot Springs Village, AR",
  description: "Licensed, bonded and insured interior and exterior remodeling, bathrooms, tile, siding and deck work serving Hot Springs Village, Arkansas.",
  alternates: { canonical: "/areas/hot-springs-village" },
  openGraph: { url: "/areas/hot-springs-village", title: "Remodeling & Construction in Hot Springs Village, AR" },
};

export default function Page() {
  return <LocationPage city="Hot Springs Village" hero="/images/1625.png" intro="Interior and exterior remodeling for homeowners in Hot Springs Village, including bathrooms, custom tile, flooring, siding, decks and other home improvements." note="Homes in the Village need everything from room updates and bathroom work to exterior repairs and better outdoor access. Tell us what you're looking at and we'll talk through the project with you." />;
}
