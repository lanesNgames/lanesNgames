import type { Metadata } from "next";
import "./globals.css";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.business.name} — ${siteConfig.business.tagline}`,
    template: `%s | ${siteConfig.business.name}`
  },
  description: siteConfig.business.tagline,
  openGraph: {
    type: "website",
    title: `${siteConfig.business.name} — ${siteConfig.business.tagline}`,
    description: siteConfig.business.tagline
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body>
        <div className="min-h-dvh">
          <StickyHeader />
          <main id="main" className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

