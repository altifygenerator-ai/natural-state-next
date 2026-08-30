import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "General Contractor & Remodeling in Hot Springs, AR | Natural State",
    template: "%s | Natural State Interior-Exterior Solutions",
  },
  description:
    "Licensed, bonded and insured general contractor in Hot Springs, Arkansas with over 30 years of experience in remodeling, roofing, siding, bathrooms, custom tile, decks, drywall, painting and construction.",
  applicationName: site.name,
  creator: site.name,
  publisher: site.name,
  category: "Home Improvement",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.name,
    description: "Licensed, bonded and insured general contractor with over 30 years of experience serving Hot Springs and nearby Arkansas communities.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [{ url: "/images/1597.jpg", width: 1536, height: 1152, alt: "Natural State exterior remodeling project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "General contracting, interior and exterior remodeling, custom tile, siding, decks, drywall, painting and construction around Hot Springs, Arkansas.",
    images: ["/images/1597.jpg"],
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
