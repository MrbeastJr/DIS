"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle, Package, Lightbulb, ShoppingCart,
  Question, ArrowUpRight, Globe, ShieldCheck, Handshake,
  ChartLineUp, Truck, Buildings, UsersThree, Lightning,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, any> = {
  logistics: Package,
  consulting: Lightbulb,
  procurement: ShoppingCart,
};

/* ── Per-service hero images ── */
const heroImages: Record<string, string> = {
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=600&fit=crop",
  consulting: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop",
  procurement: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop",
};

/* ── Per-service secondary images ── */
const sideImages: Record<string, string> = {
  logistics: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
  consulting: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  procurement: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
};

/* ── Per-service stats ── */
const serviceStats: Record<string, { value: string; label: string }[]> = {
  logistics: [
    { value: "15+", label: "Trade Corridors" },
    { value: "3", label: "Hub Cities" },
    { value: "99.2%", label: "On-Time Rate" },
    { value: "24/7", label: "Operations" },
  ],
  consulting: [
    { value: "50+", label: "Projects Delivered" },
    { value: "12", label: "Industries Served" },
    { value: "8", label: "African Markets" },
    { value: "100%", label: "Client Retention" },
  ],
  procurement: [
    { value: "200+", label: "Verified Suppliers" },
    { value: "30%", label: "Cost Savings Avg" },
    { value: "5", label: "Continents Covered" },
    { value: "48h", label: "Turnaround Time" },
  ],
};

/* ── Per-service feature highlights ── */
const serviceHighlights: Record<string, { icon: any; title: string; desc: string }[]> = {
  logistics: [
    { icon: Truck, title: "Express Cargo Routes", desc: "Multimodal transport across DR Congo, Nigeria, and global corridors with real-time tracking." },
    { icon: Globe, title: "Cross-Border Clearance", desc: "End-to-end customs compliance and documentation for seamless border crossings." },
    { icon: Buildings, title: "Warehouse Network", desc: "Secure warehousing facilities across Lubumbashi and Lagos with inventory management." },
    { icon: ShieldCheck, title: "Insured Shipments", desc: "Full cargo insurance coverage with dedicated claims support and risk mitigation." },
    { icon: ChartLineUp, title: "Supply Chain Analytics", desc: "Data-driven insights to optimize routes, reduce costs, and improve delivery performance." },
    { icon: Lightning, title: "Same-Day Processing", desc: "Expedited handling for urgent shipments with priority lane access at all hubs." },
  ],
  consulting: [
    { icon: Globe, title: "Market Entry Strategy", desc: "Comprehensive feasibility studies and go-to-market playbooks for African expansion." },
    { icon: Handshake, title: "Intermediary Alignment", desc: "Verified introductions between global buyers and local sellers with due diligence." },
    { icon: Buildings, title: "Corporate Structuring", desc: "Entity formation, licensing support, and RC alignment for regulatory compliance." },
    { icon: ChartLineUp, title: "Operational Audits", desc: "Deep-dive diagnostics to identify inefficiencies and optimize business processes." },
    { icon: UsersThree, title: "Stakeholder Management", desc: "Local intelligence and relationship management with government and industry bodies." },
    { icon: Lightning, title: "Digital Infrastructure", desc: "Scalable enterprise platform architecture scoping for high-performance backend systems." },
  ],
  procurement: [
    { icon: ShieldCheck, title: "Vendor Verification", desc: "Rigorous multi-point supplier auditing ensuring quality, reliability, and compliance." },
    { icon: Globe, title: "Global Sourcing", desc: "Access to verified suppliers across 5 continents with competitive pricing parity." },
    { icon: Handshake, title: "Buyer-Seller Matching", desc: "Direct intermediary introduction protocols connecting demand with trusted supply." },
    { icon: ChartLineUp, title: "Price Optimization", desc: "Data-driven procurement strategies delivering average 30% cost reduction." },
    { icon: Buildings, title: "Escrow Management", desc: "Secure transaction facilitation with structured payment guidelines and oversight." },
    { icon: Lightning, title: "Rapid Fulfillment", desc: "48-hour turnaround from order to dispatch across commodity and finished goods." },
  ],
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
  const stats = serviceStats[safeKey] || [];
  const highlights = serviceHighlights[safeKey] || [];

  const isConsulting = safeKey === "consulting";

  return (
    <main className="bg-white min-h-screen text-espresso selection:bg-crimson/10 w-full max-w-full overflow-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO SECTION — Full-width cinematic hero
          ═══════════════════════════════════════ */}
      <section
        className="relative pt-28 md:pt-36 pb-20 md:pb-28 px-4 overflow-hidden"
        style={{ backgroundColor: "#1A1210" }}
      >
        <div className="absolute inset-0 opacity-25">
          <Image
            src={heroImages[safeKey]}
            alt={details.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1210] via-[#1A1210]/80 to-[#1A1210]/50" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-white/50 hover:text-white transition-colors mb-10 group"
            style={{ textDecoration: "none" }}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{sd?.backToHome || "Back to Home"}</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/20 text-crimson-light text-[10px] font-bold uppercase tracking-wider mb-5">
                <Icon size={12} weight="fill" />
                {sd?.serviceArea || "Corporate Service Area"}
              </div>
              <h1 className="text-display-lg md:text-display-xl font-bold text-white mb-4 leading-[1.06]">
                {details.title}<span className="text-crimson">.</span>
              </h1>
              <p className="text-body-lg text-white/60 max-w-xl leading-relaxed">
                {details.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
            >
              <Icon size={44} weight="light" className="text-crimson" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP
          ═══════════════════════════════════════ */}
      <section className="bg-cream/40 border-b border-espresso/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center py-8 md:py-10 px-4 border-r border-espresso/[0.06] last:border-r-0"
            >
              <span className="text-display-md md:text-display-lg font-bold text-espresso block">{stat.value}</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-walnut/40 font-bold mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OVERVIEW — Split layout with image
          ═══════════════════════════════════════ */}
      <section className="section-padding max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 font-medium">
              {sd?.overview || "Overview"}
            </span>
            <h2 className="text-display-md font-bold text-espresso leading-tight">
              {details.title}
            </h2>
            <p className="text-body-lg text-walnut/70 leading-[1.85]">
              {details.description}
            </p>

            <a
              href="https://wa.me/243990301518"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-espresso text-white font-semibold text-body-sm rounded-full hover:bg-cocoa transition-all duration-300 shadow-md mt-4"
              style={{ textDecoration: "none" }}
            >
              <WhatsappLogo size={18} weight="fill" />
              {sd?.chatWhatsApp || "Chat on WhatsApp"}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={sideImages[safeKey]}
              alt={details.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          KEY CAPABILITIES — Card grid
          ═══════════════════════════════════════ */}
      <section className="section-padding-lg bg-cream/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 font-medium mb-4 block">
              {sd?.keyCapabilities || "Key Capabilities"}
            </span>
            <h2 className="text-display-md font-bold text-espresso">
              {details.title}
            </h2>
          </motion.div>

          {/* Capability checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-3xl mx-auto">
            {details.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-espresso/[0.05] shadow-sm"
              >
                <CheckCircle size={20} weight="fill" className="text-crimson mt-0.5 flex-shrink-0" />
                <span className="text-body-sm text-walnut/80 font-medium leading-relaxed">{cap}</span>
              </motion.div>
            ))}
          </div>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => {
              const HIcon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group p-7 bg-white rounded-3xl border border-espresso/[0.05] hover:border-crimson/20 hover:shadow-xl hover:shadow-espresso/[0.04] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-espresso/[0.04] border border-espresso/[0.06] flex items-center justify-center mb-5 group-hover:bg-crimson/[0.06] group-hover:border-crimson/15 transition-all duration-500">
                    <HIcon size={22} weight="light" className="text-walnut/50 group-hover:text-crimson transition-colors duration-500" />
                  </div>
                  <h3 className="text-body-md font-bold text-espresso mb-2 group-hover:text-crimson transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-walnut/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONSULTING FAQ (only on consulting page)
          ═══════════════════════════════════════ */}
      {isConsulting && (
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/[0.06] text-espresso text-[10px] font-bold uppercase tracking-wider mb-3">
                <Question size={12} weight="bold" /> FAQ
              </span>
              <h3 className="text-display-sm font-bold text-espresso mb-3">
                {sd?.faqTitle || "Common Inquiries"}
              </h3>
              <p className="text-body-sm text-walnut/60 max-w-xl mx-auto">
                {sd?.faqSub || "Clear answers regarding intermediary representation and operational structuring."}
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 md:p-8 rounded-2xl bg-cream/30 border border-espresso/[0.05] hover:border-crimson/10 transition-colors duration-300"
                >
                  <h4 className="text-body-md font-bold text-espresso mb-3 flex items-start gap-2">
                    <span className="text-crimson shrink-0 mt-0.5">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-body-sm text-walnut/70 leading-relaxed pl-6 font-light">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          TRUST STRIP
          ═══════════════════════════════════════ */}
      <section className="bg-cream/40 border-t border-b border-espresso/5 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "Verified Entity", sub: "RC: 1492798" },
            { icon: Globe, title: "Multi-Market", sub: "Africa, Middle East, Asia" },
            { icon: Handshake, title: "CEO Direct Access", sub: "WhatsApp Connected" },
            { icon: Buildings, title: "Registered HQ", sub: "Lubumbashi & Lagos" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-espresso/5 flex items-center justify-center shadow-sm">
                <item.icon size={22} className="text-crimson" weight="light" />
              </div>
              <h4 className="text-body-sm font-bold text-espresso">{item.title}</h4>
              <p className="text-[10px] text-walnut/40 font-medium uppercase tracking-wider">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER — Premium dark
          ═══════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1A1210" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-display-md md:text-display-lg font-bold text-white mb-4">
              {sd?.readyCta || "Ready to accelerate your operations?"}
            </h2>
            <p className="text-body-md text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
              {sd?.readyCtaSub || "Engage directly with CEO Okey Francis CHIBUEZE on WhatsApp."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/243990301518"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-espresso font-bold text-body-sm rounded-full hover:bg-cream transition-all duration-300 shadow-lg"
                style={{ textDecoration: "none" }}
              >
                <WhatsappLogo size={22} weight="fill" className="text-[#25D366]" />
                <span>{sd?.chatWhatsApp || "Chat on WhatsApp"}</span>
              </a>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-4 text-white/60 font-medium text-body-sm rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                style={{ textDecoration: "none" }}
              >
                <span>{sd?.backToHome || "Back to Home"}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
