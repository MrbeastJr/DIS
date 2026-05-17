import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIS Group — Modern Logistics & Strategic Consulting for African Commerce",
  description:
    "DIS Group bridges markets, streamlines supply chains, and unlocks growth across Africa and beyond. Premium logistics, consulting, procurement, trading, and beauty & cosmetics services by CEO Okey Francis CHIBUEZE.",
  keywords: [
    "African logistics",
    "supply chain management",
    "strategic consulting",
    "procurement Africa",
    "cross-border trading",
    "DIS Group",
    "Digital Integrated Services",
    "beauty cosmetics DRC",
    "Congo logistics",
    "Nigeria trading company",
    "Lubumbashi logistics",
    "Lagos procurement",
    "global sourcing Africa",
    "Okey Francis CHIBUEZE",
    "COFRAN NIG Ltd",
    "skincare imports Africa",
    "freight management Africa",
    "warehouse Lubumbashi",
    "Dubai trade operations",
  ],
  authors: [{ name: "Okey Francis CHIBUEZE", url: "https://wa.me/243990301518" }],
  creator: "Digital Integrated Services RDC",
  publisher: "DIS Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DIS Group — Modern Logistics & Strategic Consulting for African Commerce",
    description:
      "Premium logistics, consulting, procurement, and trading services across Africa, the Middle East, and Asia. Beauty & cosmetics imports. Led by CEO Okey Francis CHIBUEZE.",
    type: "website",
    locale: "en_US",
    siteName: "DIS Group — Digital Integrated Services",
    images: [
      {
        url: "/assets/dis-icon.png",
        width: 800,
        height: 800,
        alt: "DIS Group — Digital Integrated Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIS Group — Modern Logistics & Strategic Consulting",
    description:
      "Bridging markets, streamlining supply chains, and unlocking growth across Africa and beyond.",
    images: ["/assets/dis-icon.png"],
  },
  icons: {
    icon: "/assets/dis-icon.png",
    shortcut: "/assets/dis-icon.png",
    apple: "/assets/dis-icon.png",
  },
  metadataBase: new URL("https://dis-omega.vercel.app"),
  alternates: {
    canonical: "/",
  },
  category: "Business",
};

import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import LanguagePopup from "@/components/LanguagePopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Satoshi Font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        {/* Playfair Display — Premium DIS Wordmark */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-satoshi: 'Satoshi', system-ui, sans-serif;
                --font-display: 'Playfair Display', 'Georgia', serif;
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          {children}
          <CookieConsent />
          <LanguagePopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
