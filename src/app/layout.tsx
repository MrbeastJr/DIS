import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIS Group — Modern Logistics & Strategic Consulting for African Commerce",
  description:
    "DIS Group bridges markets, streamlines supply chains, and unlocks growth across Africa and beyond. Premium logistics, consulting, procurement, and trading services.",
  keywords: [
    "African logistics",
    "supply chain management",
    "strategic consulting",
    "procurement Africa",
    "cross-border trading",
    "DIS Group",
  ],
  openGraph: {
    title: "DIS Group — Modern Logistics & Strategic Consulting",
    description:
      "Premium logistics, consulting, procurement, and trading services across Africa, the Middle East, and Asia.",
    type: "website",
    locale: "en_US",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

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
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-satoshi: 'Satoshi', system-ui, sans-serif;
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
