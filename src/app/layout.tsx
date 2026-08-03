import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIS Gateway | DIS Group — Digital Integrated Services (DRC & African Logistics, Consulting, Trading)",
  description:
    "Official DIS Gateway (DIS Group) web app. Premium African logistics, supply chain management, strategic business consulting, global procurement, and beauty/cosmetics trading by CEO Okey Francis CHIBUEZE across DRC, Nigeria, Lubumbashi, and globally.",
  keywords: [
    "dis",
    "disgate",
    "disgateway",
    "DIS Gateway",
    "www.disgateway.com",
    "DIS Group",
    "Digital Integrated Services",
    "Digital Integrated Services RDC",
    "Okey Francis CHIBUEZE",
    "Okey Chibueze",
    "CEO DIS Group",
    "CEO DIS Gateway",
    "COFRAN NIG Ltd",
    "COFRANCE INTEGRATED CONCEPT LTD",
    "African logistics",
    "DRC logistics",
    "supply chain management Africa",
    "strategic consulting Africa",
    "procurement Africa",
    "cross-border trading",
    "beauty cosmetics DRC",
    "Congo logistics",
    "Nigeria trading company",
    "Lubumbashi logistics",
    "Lagos procurement",
    "global sourcing Africa",
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
  verification: {
    google: "googleba436bce86e8e08e",
  },
  openGraph: {
    title: "DIS Gateway | DIS Group — Digital Integrated Services",
    description:
      "Official DIS Gateway (DIS Group) web app. Premium logistics, consulting, procurement, and trading services across Africa, the Middle East, and Asia. Led by CEO Okey Francis CHIBUEZE.",
    type: "website",
    locale: "en_US",
    siteName: "DIS Gateway — Digital Integrated Services",
    images: [
      {
        url: "/assets/dis-icon.png",
        width: 800,
        height: 800,
        alt: "DIS Gateway — Digital Integrated Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIS Gateway | DIS Group — Digital Integrated Services",
    description:
      "Bridging markets, streamlining supply chains, and unlocking growth across Africa and beyond. Led by CEO Okey Francis CHIBUEZE.",
    images: ["/assets/dis-icon.png"],
  },
  icons: {
    icon: "/assets/dis-icon.png",
    shortcut: "/assets/dis-icon.png",
    apple: "/assets/dis-icon.png",
  },
  metadataBase: new URL("https://www.disgateway.com"),
  alternates: {
    canonical: "/",
  },
  category: "Business",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.disgateway.com/#website",
      "url": "https://www.disgateway.com",
      "name": "DIS Gateway - DIS Group (Digital Integrated Services)",
      "alternateName": [
        "DIS",
        "DIS Gate",
        "DIS Gateway",
        "DIS Group",
        "Digital Integrated Services RDC"
      ],
      "description":
        "Official DIS Gateway (DIS Group) web app for African logistics, supply chain management, strategic consulting, global procurement, and beauty/cosmetics trading.",
      "publisher": {
        "@id": "https://www.disgateway.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.disgateway.com/#organization",
      "name": "DIS Group - Digital Integrated Services",
      "alternateName": [
        "DIS",
        "DIS Gateway",
        "DIS Gate",
        "Digital Integrated Services RDC",
        "COFRANCE INTEGRATED CONCEPT LTD"
      ],
      "url": "https://www.disgateway.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.disgateway.com/assets/dis-logo.png",
        "width": 800,
        "height": 800
      },
      "image": "https://www.disgateway.com/assets/ceo-image.png",
      "founder": {
        "@id": "https://www.disgateway.com/#ceo"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+243990301518",
          "contactType": "customer service",
          "availableLanguage": ["English", "French"]
        }
      ],
      "sameAs": [
        "https://wa.me/243990301518",
        "https://www.disgateway.com/about"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.disgateway.com/#ceo",
      "name": "Okey Francis CHIBUEZE",
      "alternateName": [
        "Okey Chibueze",
        "Francis Chibueze",
        "CEO of DIS Gateway",
        "CEO of DIS Group"
      ],
      "jobTitle": "Chief Executive Officer (CEO) & Founder",
      "worksFor": {
        "@id": "https://www.disgateway.com/#organization"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.disgateway.com/assets/ceo-image.png",
        "width": 800,
        "height": 800,
        "caption": "Okey Francis CHIBUEZE — CEO of DIS Group"
      },
      "description":
        "Chief Executive Officer (CEO) and Founder of DIS Group (Digital Integrated Services RDC) and COFRANCE INTEGRATED CONCEPT LTD, leading African logistics, strategic consulting, cross-border trading, and global procurement across 5 continents.",
      "sameAs": [
        "https://wa.me/243990301518",
        "https://www.disgateway.com/about"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.disgateway.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is DIS Gateway (DIS Group)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "DIS Gateway (www.disgateway.com) is the official online platform of DIS Group (Digital Integrated Services RDC), a multi-sector African enterprise specializing in logistics, supply chain management, strategic business consulting, global procurement, and beauty/cosmetics trading."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the CEO of DIS Group (DIS Gateway)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The CEO and Founder of DIS Group is Okey Francis CHIBUEZE, an experienced African entrepreneur and supply chain specialist connecting African businesses with global industrial suppliers across DR Congo, Nigeria, Lubumbashi, and 15+ trade corridors."
          }
        },
        {
          "@type": "Question",
          "name": "What services does DIS Gateway offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "DIS Gateway offers four core services: 1) Logistics & Supply Chain Management, 2) Strategic Business Consulting, 3) Global Procurement & Sourcing with 48-hour SLA, and 4) Beauty & Cosmetics Cross-Border Trading."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact DIS Gateway or CEO Okey Francis CHIBUEZE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You can contact DIS Gateway directly via WhatsApp at +243 990 301 518, by email at okeycongo@gmail.com, or through the official Contact page at https://www.disgateway.com/contact."
          }
        }
      ]
    }
  ]
};

import { LanguageProvider } from "@/context/LanguageContext";
import { ConfigProvider } from "@/context/ConfigContext";
import CookieConsent from "@/components/CookieConsent";
import LanguagePopup from "@/components/LanguagePopup";
import FloatingOrderButton from "@/components/FloatingOrderButton";

import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="font-sans">
        <ConfigProvider>
          <LanguageProvider>
            {children}
            <CookieConsent />
            <LanguagePopup />
            <FloatingOrderButton />
            <Toaster position="bottom-right" />
            <Analytics />
          </LanguageProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
