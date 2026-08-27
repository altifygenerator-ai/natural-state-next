import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = { title: "Remodeling & Construction in Lake Hamilton, AR", description: "Interior and exterior remodeling, custom tile and outdoor construction serving the Lake Hamilton area." };

export default function Page() {
  return <LocationPage city="Lake Hamilton" intro="Interior remodels, bathroom and tile work, exterior improvements, decks and other residential construction for homeowners around Lake Hamilton." note="From interior updates and custom showers to siding, decks and better outdoor access, we serve the Lake Hamilton area from Hot Springs and can talk through the scope before the job starts." />;
}
