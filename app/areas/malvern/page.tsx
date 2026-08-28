import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Remodeling & Construction in Malvern, AR",
  description: "Interior and exterior remodeling, custom tile, siding, decks and home improvement work serving Malvern, Arkansas.",
  alternates: { canonical: "/areas/malvern" },
  openGraph: { url: "/areas/malvern", title: "Remodeling & Construction in Malvern, AR" },
};

export default function Page() {
  return <LocationPage city="Malvern" hero="/images/1600.jpg" intro="Residential remodeling and construction services for Malvern homeowners, from interior updates and bathrooms to siding, decks and exterior work." note="We serve Malvern and the surrounding area for interior and exterior remodeling, bathrooms, decks and other residential construction. If you're not sure whether your project fits, give us a call." />;
}
