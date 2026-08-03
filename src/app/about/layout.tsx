import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DIS Gateway & CEO Okey Francis CHIBUEZE | DIS Group",
  description:
    "Learn about DIS Gateway (DIS Group) and our founder & CEO Okey Francis CHIBUEZE. Connecting African businesses with global markets across 15+ trade corridors through logistics, consulting, and trading.",
  keywords: [
    "Okey Francis CHIBUEZE",
    "CEO of DIS Group",
    "CEO of DIS Gateway",
    "Okey Chibueze",
    "Francis Chibueze",
    "DIS Gateway founder",
    "DIS Group leadership",
    "Digital Integrated Services RDC",
    "COFRAN NIG Ltd",
    "African logistics leader",
    "DRC logistics company",
  ],
  openGraph: {
    title: "About DIS Gateway & CEO Okey Francis CHIBUEZE | DIS Group",
    description:
      "Meet CEO Okey Francis CHIBUEZE and learn how DIS Gateway bridges African commerce with global industrial suppliers across DRC, Nigeria, and 5 continents.",
    url: "https://www.disgateway.com/about",
    images: [
      {
        url: "/assets/ceo-image.png",
        width: 800,
        height: 800,
        alt: "Okey Francis CHIBUEZE — CEO & Founder of DIS Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DIS Gateway & CEO Okey Francis CHIBUEZE",
    description:
      "Meet CEO Okey Francis CHIBUEZE and learn how DIS Gateway bridges African commerce with global industrial suppliers.",
    images: ["/assets/ceo-image.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.disgateway.com/about#page",
      "url": "https://www.disgateway.com/about",
      "name": "About DIS Gateway & CEO Okey Francis CHIBUEZE",
      "description":
        "Detailed background of DIS Gateway (DIS Group), our African logistics operations across 15+ trade corridors, and leadership profile of CEO Okey Francis CHIBUEZE.",
      "mainEntity": {
        "@id": "https://www.disgateway.com/#ceo"
      }
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
        "@type": "Organization",
        "name": "DIS Group - Digital Integrated Services",
        "url": "https://www.disgateway.com"
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
    }
  ]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}
