import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "General Contractor & Remodeling in Malvern, AR",
  description: "Licensed, bonded and insured general contractor serving Malvern with remodeling, custom tile, siding, decks, painting, drywall and construction services.",
  alternates: { canonical: "/areas/malvern" },
  openGraph: { url: "/areas/malvern", title: "General Contractor & Remodeling in Malvern, AR" },
};

export default function Page() {
  return <LocationPage city="Malvern" hero="/images/1600.jpg" intro="General contracting and remodeling for Malvern homeowners, from interior updates and bathrooms to siding, decks, exterior work and larger construction projects." note="We serve Malvern and the surrounding area for interior and exterior remodeling, bathrooms, decks and other residential construction. If you're not sure whether your project fits, give us a call." />;
}
