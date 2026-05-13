"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Package, Lightbulb, ShoppingCart, Question } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, any> = {
  logistics: Package,
  consulting: Lightbulb,
  procurement: ShoppingCart,
};

export default function ServicePage() {
  const params = useParams();
  const { t } = useLanguage();
  const key = (params?.service as string) || "logistics";

  const validKeys = ["logistics", "consulting", "procurement"] as const;
  const safeKey = validKeys.includes(key as any) ? (key as typeof validKeys[number]) : "logistics";

  const sd = t?.serviceDetail;
  const details = sd?.[safeKey] || {
    title: "Service",
    subtitle: "",
    description: "",
    capabilities: [],
  };
  const faqs = sd?.faqs || [];
  const Icon = iconMap[safeKey] || Package;

  const isConsulting = safeKey === "consulting";

  return (
    <main className="bg-white min-h-screen text-espresso selection:bg-crimson/10 w-full max-w-full overflow-hidden">
      <Navbar />

      <div className="section-padding pt-32 md:pt-44 max-w-5xl mx-auto px-4">
        {/* Back navigation */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-body-sm font-medium text-walnut/60 hover:text-crimson transition-colors mb-12 group"
          style={{ textDecoration: "none" }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>{sd?.backToHome || "Back to Home"}</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-espresso/[0.06]">
          <div className="max-w-2xl">
            <span className="text-caption uppercase tracking-[0.2em] text-crimson mb-3 block font-bold">
              {sd?.serviceArea || "Corporate Service Area"}
            </span>
            <h1 className="text-display-md font-bold text-espresso mb-4 leading-tight">
              {details.title}
            </h1>
            <p className="text-body-lg text-walnut/70 leading-relaxed">
              {details.subtitle}
            </p>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-espresso/[0.04] border border-espresso/[0.06] flex items-center justify-center flex-shrink-0">
            <Icon size={36} weight="light" className="text-crimson" />
          </div>
        </div>

        {/* ── OVERVIEW & CAPABILITIES ── */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-body-xl font-bold text-espresso">{sd?.overview || "Overview"}</h2>
            <p className="text-body-lg text-walnut/80 leading-relaxed">
              {details.description}
            </p>
          </div>

          <div className="space-y-6 bg-cream/40 p-8 rounded-3xl border border-espresso/[0.05]">
            <h3 className="text-body-md font-bold text-espresso">{sd?.keyCapabilities || "Key Capabilities"}</h3>
            <ul className="space-y-4">
              {details.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} weight="fill" className="text-crimson mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-walnut/80 font-medium leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CONSULTING FAQ ── */}
        {isConsulting && (
          <div className="mt-6 mb-16 pt-12 border-t border-espresso/10">
            <div className="mb-10 text-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/[0.06] text-espresso text-[10px] font-bold uppercase tracking-wider mb-3">
                <Question size={12} weight="bold" /> FAQ
              </span>
              <h3 className="text-display-sm font-bold text-espresso mb-3">
                {sd?.faqTitle || "Common Inquiries"}
              </h3>
              <p className="text-body-sm text-walnut/60">
                {sd?.faqSub || "Clear answers regarding intermediary representation and operational structuring."}
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-cream/30 border border-espresso/[0.05]">
                  <h4 className="text-body-sm font-bold text-espresso mb-2 flex items-start gap-2">
                    <span className="text-crimson shrink-0">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-body-sm text-walnut/70 leading-relaxed pl-5 font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA Banner ── */}
        <div
          className="mt-12 mb-24 p-10 md:p-14 rounded-3xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#1A1210" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl relative z-10">
            <h3 className="text-display-sm font-bold text-white mb-3">{sd?.readyCta || "Ready to accelerate your operations?"}</h3>
            <p className="text-body-sm text-white/70 leading-relaxed">
              {sd?.readyCtaSub || "Engage directly with CEO Okey Francis CHIBUEZE on WhatsApp."}
            </p>
          </div>
          <a
            href="https://wa.me/243990301518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-espresso font-bold text-body-sm rounded-full hover:bg-cream transition-all duration-300 whitespace-nowrap z-10 shadow-md"
            style={{ textDecoration: "none" }}
          >
            {sd?.chatWhatsApp || "Chat on WhatsApp"}
          </a>
        </div>
      </div>

      <WhatsAppButton />
    </main>
  );
}
