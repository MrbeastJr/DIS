import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DIS Gateway & CEO Okey Francis CHIBUEZE | DIS Group",
  description:
    "Get in touch with DIS Gateway (DIS Group). Direct WhatsApp access to CEO Okey Francis CHIBUEZE (+243 990 301 518), corporate inquiries, logistics quotes, and consulting consultations.",
  keywords: [
    "contact DIS Gateway",
    "DIS Group WhatsApp",
    "Okey Francis CHIBUEZE contact",
    "DIS Gateway phone number",
    "African logistics quote",
    "Lubumbashi office contact",
    "Lagos procurement contact",
  ],
  openGraph: {
    title: "Contact DIS Gateway & CEO Okey Francis CHIBUEZE",
    description:
      "Direct WhatsApp access (+243 990 301 518), inquiry form, and headquarters locations in DRC & Nigeria.",
    url: "https://www.disgateway.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact DIS Gateway & CEO Okey Francis CHIBUEZE",
  "url": "https://www.disgateway.com/contact",
  "description":
    "Official contact methods, headquarters address, and direct WhatsApp contact for DIS Group.",
  "mainEntity": {
    "@id": "https://www.disgateway.com/#organization"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
