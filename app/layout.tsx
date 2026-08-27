import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Natural State Interior-Exterior Solutions | Hot Springs, AR",
    template: "%s | Natural State Interior-Exterior Solutions",
  },
  description: "Interior and exterior remodeling, custom tile, siding, decks and home improvement work in Hot Springs, Lake Hamilton, Malvern and nearby Arkansas communities.",
  openGraph: {
    title: site.name,
    description: "Licensed, bonded and insured remodeling and construction services around Hot Springs, Arkansas.",
    type: "website",
    images: [{ url: "/images/1597.jpg", width: 1536, height: 1152 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
