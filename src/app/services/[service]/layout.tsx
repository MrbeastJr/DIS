import type { Metadata } from "next";

const serviceMeta: Record<
  string,
  { title: string; description: string; keywords: string[]; name: string }
> = {
  logistics: {
    title: "Logistics & Supply Chain Management | DIS Gateway",
    description:
      "End-to-end cargo logistics, multimodal transport (air, sea, land), customs clearance, and warehousing across 15+ trade corridors in Africa, Middle East, and Asia.",
    keywords: [
      "African logistics",
      "DRC freight forwarding",
      "Lubumbashi warehousing",
      "customs clearance Congo",
      "multimodal cargo Africa",
      "DIS Gateway logistics",
    ],
    name: "Logistics & Supply Chain Management",
  },
  consulting: {
    title: "Strategic Business Consulting for Africa | DIS Gateway",
    description:
      "Expert advisory on African market entry, regulatory compliance, corporate governance, intermediary alignment, and operational audits in DR Congo and West Africa.",
    keywords: [
      "African business consulting",
      "DRC market entry",
      "corporate structuring Africa",
      "regulatory compliance Congo",
      "DIS Gateway consulting",
    ],
    name: "Strategic Business Consulting",
  },
  procurement: {
    title: "Global Procurement & Sourcing (48h SLA) | DIS Gateway",
    description:
      "Verified supplier networks across 5 continents, price parity analysis, vendor auditing, and escrow-managed sourcing with guaranteed 48-hour quote turnaround.",
    keywords: [
      "global procurement Africa",
      "supplier verification China Dubai",
      "escrow sourcing Africa",
      "vendor auditing DRC",
      "DIS Gateway procurement",
    ],
    name: "Global Procurement & Sourcing",
  },
  trading: {
    title: "Beauty & Cosmetics Cross-Border Trading | DIS Gateway",
    description:
      "Importation, wholesale distribution, and retail of curated premium skincare, body care, hair care, and fragrance brands across the DRC and West Africa.",
    keywords: [
      "beauty cosmetics DRC",
      "skincare imports Africa",
      "Luminous Glow Serum Congo",
      "cosmetics wholesale Lubumbashi",
      "DIS Gateway trading",
    ],
    name: "Beauty & Cosmetics Cross-Border Trading",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }> | { service: string };
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const service = resolved.service?.toLowerCase() || "logistics";
  const meta = serviceMeta[service] || serviceMeta.logistics;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.disgateway.com/services/${service}`,
    },
    alternates: {
      canonical: `/services/${service}`,
    },
  };
}

export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ service: string }> | { service: string };
}) {
  const resolved = await Promise.resolve(params);
  const service = resolved.service?.toLowerCase() || "logistics";
  const meta = serviceMeta[service] || serviceMeta.logistics;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": meta.name,
    "serviceType": meta.name,
    "provider": {
      "@id": "https://www.disgateway.com/#organization",
    },
    "url": `https://www.disgateway.com/services/${service}`,
    "description": meta.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
