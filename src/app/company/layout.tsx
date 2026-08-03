import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Overview & Corporate Headquarters | DIS Gateway",
  description:
    "Explore DIS Gateway (DIS Group — Digital Integrated Services RDC). African logistics, strategic consulting, global procurement, and trading enterprise with headquarters in Lubumbashi and Lagos.",
  keywords: [
    "DIS Gateway company",
    "DIS Group overview",
    "Digital Integrated Services headquarters",
    "Lubumbashi logistics HQ",
    "Lagos procurement office",
    "COFRAN NIG Ltd",
    "African trade enterprise",
  ],
  openGraph: {
    title: "Company Overview & Headquarters | DIS Gateway",
    description:
      "DIS Group — African logistics, strategic consulting, global procurement, and trading enterprise with headquarters in Lubumbashi and Lagos.",
    url: "https://www.disgateway.com/company",
  },
  alternates: {
    canonical: "/company",
  },
};

const companyJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DIS Group - Digital Integrated Services RDC",
  "alternateName": ["DIS Gateway", "DIS Group", "DIS Gate", "COFRANCE INTEGRATED CONCEPT LTD"],
  "url": "https://www.disgateway.com/company",
  "logo": "https://www.disgateway.com/assets/dis-logo.png",
  "image": "https://www.disgateway.com/assets/ceo-image.png",
  "telephone": "+243990301518",
  "email": "okeycongo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lubumbashi",
    "addressCountry": "CD"
  },
  "founder": {
    "@id": "https://www.disgateway.com/#ceo"
  },
  "sameAs": [
    "https://wa.me/243990301518",
    "https://www.disgateway.com"
  ]
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd) }}
      />
      {children}
    </>
  );
}
