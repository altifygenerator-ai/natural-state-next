import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Home Remodeling & General Contractor in Hot Springs, AR",
  description:
    "Licensed, bonded and insured Hot Springs general contractor for interior remodeling, bathrooms, drywall, painting, flooring, siding, exterior work, decks and larger construction projects.",
  alternates: { canonical: "/areas/hot-springs" },
  openGraph: {
    url: "/areas/hot-springs",
    title: "Home Remodeling & General Contractor in Hot Springs, AR",
    description:
      "Interior and exterior remodeling, bathrooms, drywall, painting, flooring, siding, decks and construction services in Hot Springs, Arkansas.",
  },
};

const projectImages = [
  {
    src: "/images/recent-work/interior-remodel-flooring-lighting.webp",
    alt: "Interior remodeling work with new flooring and recessed lighting",
    label: "Interior renovation",
  },
  {
    src: "/images/recent-work/kitchen-cabinets-countertops.webp",
    alt: "Kitchen remodeling with new cabinets and countertops",
    label: "Kitchen work",
  },
  {
    src: "/images/recent-work/exterior-addition-finished-siding.webp",
    alt: "Exterior addition with new siding and windows",
    label: "Exterior improvements",
  },
  {
    src: "/images/recent-work/finished-wood-stairs.webp",
    alt: "Finished wood stair treads with white risers",
    label: "Interior finish carpentry",
  },
];

export default function Page() {
  return (
    <LocationPage
      city="Hot Springs"
      hero="/images/recent-work/interior-remodel-flooring-lighting.webp"
      intro="From smaller repairs and room updates to full interior and exterior remodels, Natural State handles the work Hot Springs homeowners need with one experienced general contractor to keep the project moving."
      note="We are based in Hot Springs and handle a wide range of residential projects across the area. You can look through real project photos, check our reputation and talk directly with us about the work before making a decision."
      projectImages={projectImages}
    />
  );
}
