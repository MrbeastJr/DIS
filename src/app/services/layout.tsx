import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services: Logistics, Consulting, Procurement & Trading | DIS Gateway",
  description:
    "Explore DIS Gateway (DIS Group) core African and global services: multimodal logistics & supply chain, strategic business consulting, global procurement with 48h SLA, and beauty & cosmetics trading.",
  keywords: [
    "DIS Gateway services",
    "African logistics services",
    "DRC freight forwarding",
    "African business consulting",
    "global procurement Africa",
    "beauty cosmetics import Congo",
    "Lubumbashi warehousing",
  ],
  openGraph: {
    title: "Our Services | DIS Gateway — DIS Group",
    description:
      "Multimodal logistics, strategic consulting, global procurement, and beauty & cosmetics trading across 15+ African and global trade corridors.",
    url: "https://www.disgateway.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
