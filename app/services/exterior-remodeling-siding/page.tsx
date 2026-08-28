import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Exterior Remodeling & Siding in Hot Springs, AR",
  description: "Siding, windows, roofing, gutters and exterior remodeling from Natural State around Hot Springs, Arkansas.",
  alternates: { canonical: "/services/exterior-remodeling-siding" },
  openGraph: { url: "/services/exterior-remodeling-siding", title: "Exterior Remodeling & Siding in Hot Springs, AR" },
};

export default function Page() {
  return <ServicePage eyebrow="Exterior remodeling" title="Exterior work that changes the whole house." intro="Siding, windows, exterior finish work, roofing and gutters with attention to both the finished look and the practical details underneath it." hero="/images/1597.jpg" points={["Siding", "Windows", "Exterior finish work", "Roofing", "Gutters", "Soffit & trim work", "Exterior repairs & upgrades"]} gallery={["/images/1625.png", "/images/1599.jpg", "/images/1595.jpg"]} detailTitle="The exterior has to work as a whole." detailCopy="Siding, trim, windows, roofing lines and entry details all meet in the same view. We look at the full picture so the finished work feels clean and tied together." />;
}
