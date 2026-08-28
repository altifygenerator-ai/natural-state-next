import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Remodeling & Construction in Benton, AR",
  description: "Licensed, bonded and insured remodeling, custom tile, siding, decks and home improvement work serving Benton, Arkansas.",
  alternates: { canonical: "/areas/benton" },
  openGraph: { url: "/areas/benton", title: "Remodeling & Construction in Benton, AR" },
};

export default function Page() {
  return <LocationPage city="Benton" hero="/images/1597.jpg" intro="Residential remodeling and construction services for Benton homeowners, from bathrooms and interior updates to siding, decks and exterior improvements." note="If you have a project in Benton, send us a few details or give us a call. We'll go over what you need, where the job is and whether we're a good fit for the work." />;
}
