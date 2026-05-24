"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft, Globe, ShieldCheck, Handshake, Buildings,
  ChartLineUp, Package, Lightbulb, ShoppingCart, TrendUp,
  WhatsappLogo, LinkedinLogo, EnvelopeSimple, MapPin, Star,
  FacebookLogo, InstagramLogo, XLogo, TiktokLogo
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useConfig } from "@/context/ConfigContext";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage || {} as any;
  const { config } = useConfig();

  return (
    <main className="bg-white min-h-screen text-espresso w-full max-w-full overflow-hidden">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-40 pb-20 md:pb-32 px-4 overflow-hidden" style={{ backgroundColor: "#1A1210" }}>
        <div className="absolute inset-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop" alt="DIS Group" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1210] via-[#1A1210]/85 to-[#1A1210]/50" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-body-sm font-medium text-white/50 hover:text-white transition-colors mb-10 group" style={{ textDecoration: "none" }}>
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{a.backToHome || "Back to Home"}</span>
          </Link>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/20 text-crimson-light text-[10px] font-bold uppercase tracking-wider mb-5">
              <Buildings size={12} weight="fill" />
              {a.badge || "About DIS Group"}
            </div>
            <h1 className="text-display-lg md:text-display-xl font-bold text-white mb-5 leading-[1.06] max-w-3xl">
              {a.heroTitle || "Bridging Markets. Building Futures."}<span className="text-crimson">.</span>
            </h1>
            <p className="text-body-lg text-white/55 max-w-2xl leading-relaxed">
              {a.heroSub || "Digital Integrated Services RDC is a subsidiary of COFRANCE INTEGRATED CONCEPT LTD — a verified, multi-sector enterprise connecting African markets to global supply chains through premium logistics, consulting, procurement, and trading services."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ COMPANY STATS ═══ */}
      <section className="bg-cream/40 border-b border-espresso/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "2013", label: a.statFounded || "Founded" },
              { value: "10+", label: a.statCountries || "Countries Served" },
            { value: "4", label: a.statServices || "Core Services" },
            { value: "RC: 1492798", label: a.statRC || "Registered Entity" },
          ].map((stat, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center py-8 md:py-10 px-4 border-r border-espresso/[0.06] last:border-r-0">
              <span className="text-display-sm md:text-display-md font-bold text-espresso block">{stat.value}</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-walnut/40 font-bold mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="section-padding max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="space-y-6">
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 font-medium">{a.storyLabel || "Our Story"}</span>
            <h2 className="text-display-md font-bold text-espresso leading-tight">{a.storyTitle || "From Vision to Impact"}</h2>
            <p className="text-body-md text-walnut/70 leading-[1.85]">
              {a.storyP1 || "Founded by Okey Francis CHIBUEZE, Digital Integrated Services RDC was born from a deep understanding of the logistical challenges facing businesses across Central and West Africa. With operational hubs in Lubumbashi (DR Congo) and Lagos (Nigeria), DIS bridges the gap between African enterprises and global markets."}
            </p>
            <p className="text-body-md text-walnut/70 leading-[1.85]">
              {a.storyP2 || "As a subsidiary of COFRANCE INTEGRATED CONCEPT LTD (RC: 1492798), we operate with full regulatory compliance and a commitment to transparency. Our services span logistics, strategic consulting, procurement, and a curated beauty & cosmetics trading platform."}
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop" alt="DIS Team" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="section-padding-lg bg-cream/30">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-14">
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 font-medium mb-4 block">{a.servicesLabel || "What We Do"}</span>
            <h2 className="text-display-md font-bold text-espresso">{a.servicesTitle || "Four Pillars of Excellence"}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Package, title: a.svcLogistics || "Logistics & Supply Chain", desc: a.svcLogisticsDesc || "Multimodal cargo transport, warehousing, customs clearance, and last-mile delivery across 15+ trade corridors spanning Africa, the Middle East, and Asia.", color: "#8B2020" },
              { icon: Lightbulb, title: a.svcConsulting || "Strategic Consulting", desc: a.svcConsultingDesc || "Market entry strategies, intermediary alignment, corporate structuring, and operational audits for businesses expanding into African markets.", color: "#2A1F14" },
              { icon: ShoppingCart, title: a.svcProcurement || "Global Procurement", desc: a.svcProcurementDesc || "Verified supplier networks across 5 continents, competitive pricing parity, vendor auditing, and escrow-managed transactions with 48h turnaround.", color: "#A33030" },
              { icon: TrendUp, title: a.svcTrading || "Beauty & Cosmetics Trading", desc: a.svcTradingDesc || "Curated premium skincare, body care, hair care, and fragrance products imported and distributed across the DRC and West Africa.", color: "#5C4A38" },
            ].map((svc, i) => {
              const SIcon = svc.icon;
              return (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.6 }} className="p-8 bg-white rounded-3xl border border-espresso/[0.05] hover:border-crimson/15 hover:shadow-xl transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-500" style={{ backgroundColor: `${svc.color}10`, border: `1px solid ${svc.color}15` }}>
                    <SIcon size={22} weight="light" className="text-walnut/50 group-hover:text-crimson transition-colors duration-500" />
                  </div>
                  <h3 className="text-body-lg font-bold text-espresso mb-3 group-hover:text-crimson transition-colors duration-500">{svc.title}</h3>
                  <p className="text-body-sm text-walnut/60 leading-relaxed">{svc.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CEO SECTION ═══ */}
      <section className="section-padding max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0">
              <Image src="/assets/ceo-image.png" alt="Okey Francis CHIBUEZE — CEO" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-body-lg font-bold text-white">Okey Francis CHIBUEZE</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-crimson-light font-bold">CEO · Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-3 space-y-6">
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 font-medium">{a.ceoLabel || "Leadership"}</span>
            <h2 className="text-display-md font-bold text-espresso leading-tight">{a.ceoTitle || "Meet Our CEO"}</h2>
            <p className="text-body-md text-walnut/70 leading-[1.85]">
              {a.ceoP1 || "Okey Francis CHIBUEZE is the visionary behind Digital Integrated Services RDC and COFRANCE INTEGRATED CONCEPT LTD. With extensive experience in cross-border commerce, supply chain management, and strategic business consulting, he has built a multi-sector enterprise that connects African businesses to global opportunities."}
            </p>
            <p className="text-body-md text-walnut/70 leading-[1.85]">
              {a.ceoP2 || "Under his leadership, DIS has expanded operations across DR Congo, Nigeria, Ghana, UAE, China, South Africa, Kenya, Turkey, India, and Saudi Arabia — establishing a trusted network of partners, suppliers, and clients spanning five continents."}
            </p>
            <p className="text-body-md text-walnut/70 leading-[1.85]">
              {a.ceoP3 || "His hands-on approach and direct accessibility via WhatsApp reflect a commitment to personal service that sets DIS apart from conventional corporate intermediaries."}
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <a href="https://wa.me/243990301518" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/15 hover:border-[#25D366]/30 transition-all" style={{ textDecoration: "none" }}>
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <WhatsappLogo size={24} weight="fill" className="text-[#25D366]" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-body-sm font-bold text-espresso block truncate">WhatsApp</span>
                  <span className="text-xs text-walnut/60 block truncate">+243 990 301 518</span>
                </div>
              </a>
              
              <a href="mailto:okeycongo@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-crimson/[0.03] border border-crimson/10 hover:border-crimson/20 transition-all" style={{ textDecoration: "none" }}>
                <div className="w-12 h-12 rounded-full bg-crimson/5 flex items-center justify-center flex-shrink-0">
                  <EnvelopeSimple size={24} weight="light" className="text-crimson" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-body-sm font-bold text-espresso block truncate">Email</span>
                  <span className="text-xs text-walnut/60 block truncate">okeycongo@gmail.com</span>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-espresso/[0.02] border border-espresso/[0.06]">
                <div className="w-12 h-12 rounded-full bg-espresso/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} weight="light" className="text-crimson" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-body-sm font-bold text-espresso block truncate">{a.hqLabel || "Headquarters"}</span>
                  <span className="text-xs text-walnut/60 block truncate">Lubumbashi &middot; Lagos</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-espresso/[0.02] border border-espresso/[0.06]">
                <div className="w-12 h-12 rounded-full bg-espresso/5 flex items-center justify-center flex-shrink-0">
                  <Globe size={24} weight="light" className="text-crimson" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <span className="text-body-sm font-bold text-espresso block mb-1.5 truncate">{(a as any).socialLabel || "Connect With Us"}</span>
                  <div className="flex items-center gap-2">
                    <a href={config?.facebookUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-espresso/50 hover:text-crimson transition-colors">
                      <FacebookLogo size={20} weight="fill" />
                    </a>
                    <a href={config?.instagramUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-espresso/50 hover:text-crimson transition-colors">
                      <InstagramLogo size={20} weight="bold" />
                    </a>
                    <a href={config?.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-espresso/50 hover:text-crimson transition-colors">
                      <LinkedinLogo size={20} weight="fill" />
                    </a>
                    <a href={config?.twitterUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-espresso/50 hover:text-crimson transition-colors">
                      <XLogo size={20} weight="bold" />
                    </a>
                    <a href={config?.tiktokUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-espresso/50 hover:text-crimson transition-colors">
                      <TiktokLogo size={20} weight="fill" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section-padding-lg bg-cream/30">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-14">
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 font-medium mb-4 block">{a.valuesLabel || "Our Values"}</span>
            <h2 className="text-display-md font-bold text-espresso">{a.valuesTitle || "What Drives Us"}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: a.val1Title || "Integrity & Compliance", desc: a.val1Desc || "Fully registered, RC-verified operations with transparent processes and documented compliance at every step." },
              { icon: Handshake, title: a.val2Title || "Partnership First", desc: a.val2Desc || "We don't just serve clients — we build lasting partnerships through direct CEO access, trust, and mutual growth." },
              { icon: Globe, title: a.val3Title || "Global Vision, Local Expertise", desc: a.val3Desc || "Deep knowledge of African markets combined with international supply chain reach across five continents." },
            ].map((val, i) => {
              const VIcon = val.icon;
              return (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center p-8 bg-white rounded-3xl border border-espresso/[0.05]">
                  <div className="w-14 h-14 rounded-2xl bg-espresso/[0.04] border border-espresso/[0.06] flex items-center justify-center mx-auto mb-5">
                    <VIcon size={24} weight="light" className="text-crimson" />
                  </div>
                  <h3 className="text-body-md font-bold text-espresso mb-3">{val.title}</h3>
                  <p className="text-body-sm text-walnut/60 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1A1210" }}>
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-md font-bold text-white mb-4">{a.ctaTitle || "Ready to Work With Us?"}</h2>
          <p className="text-body-md text-white/50 mb-10 max-w-xl mx-auto">{a.ctaSub || "Connect directly with CEO Okey Francis CHIBUEZE to discuss your business needs."}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/243990301518" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-espresso font-bold text-body-sm rounded-full hover:bg-cream transition-all shadow-lg" style={{ textDecoration: "none" }}>
              <WhatsappLogo size={22} weight="fill" className="text-[#25D366]" />
              <span>{a.ctaButton || "Chat on WhatsApp"}</span>
            </a>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 text-white/60 font-medium text-body-sm rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all" style={{ textDecoration: "none" }}>
              <span>{a.backToHome || "Back to Home"}</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
