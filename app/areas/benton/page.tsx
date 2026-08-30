import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "General Contractor & Remodeling in Benton, AR",
  description: "Licensed, bonded and insured general contractor serving Benton with remodeling, custom tile, siding, decks, painting, drywall and construction services.",
  alternates: { canonical: "/areas/benton" },
  openGraph: { url: "/areas/benton", title: "General Contractor & Remodeling in Benton, AR" },
};

export default function Page() {
  return <LocationPage city="Benton" hero="/images/1597.jpg" intro="General contracting and remodeling for Benton homeowners, from bathrooms and interior updates to siding, decks, exterior improvements and larger construction projects." note="If you have a project in Benton, send us a few details or give us a call. We'll go over what you need, where the job is and whether we're a good fit for the work." />;
}
