import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements, Global Scale & Milestones | DIS Gateway",
  description:
    "Explore DIS Gateway (DIS Group) achievements, operating across 10+ countries and 15+ trade corridors with 99.4% on-time delivery and 48-hour procurement SLAs.",
  keywords: [
    "DIS Gateway achievements",
    "DIS Group scale",
    "African logistics milestones",
    "DRC freight forwarding metrics",
    "Lubumbashi logistics center",
    "cross-border trade statistics",
  ],
  openGraph: {
    title: "Achievements & Global Scale | DIS Gateway",
    description:
      "Operating across 10+ countries and 15+ trade corridors with 99.4% on-time delivery and 48-hour procurement SLAs.",
    url: "https://www.disgateway.com/achievements",
  },
  alternates: {
    canonical: "/achievements",
  },
};

const achievementsJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "DIS Gateway Achievements & Milestones",
  "url": "https://www.disgateway.com/achievements",
  "description":
    "Company performance metrics, international expansion across 10+ countries, and supply chain milestones achieved by DIS Group.",
  "publisher": {
    "@id": "https://www.disgateway.com/#organization"
  }
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(achievementsJsonLd) }}
      />
      {children}
    </>
  );
}
