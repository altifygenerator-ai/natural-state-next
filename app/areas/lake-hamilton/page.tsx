import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Remodeling & Construction in Lake Hamilton, AR",
  description: "Interior and exterior remodeling, custom tile, siding, decks and home improvement work serving Lake Hamilton, Arkansas.",
  alternates: { canonical: "/areas/lake-hamilton" },
  openGraph: { url: "/areas/lake-hamilton", title: "Remodeling & Construction in Lake Hamilton, AR" },
};

export default function Page() {
  return <LocationPage city="Lake Hamilton" hero="/images/1599.jpg" intro="Interior remodels, bathroom and tile work, exterior improvements, decks and other residential construction for homeowners around Lake Hamilton." note="From interior updates and custom showers to siding, decks and better outdoor access, we serve the Lake Hamilton area from Hot Springs and can talk through the scope before the job starts." />;
}
