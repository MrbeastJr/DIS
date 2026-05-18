"use client";

import { motion } from "framer-motion";
import { Package, Lightbulb, ShoppingCart, TrendUp, ArrowUpRight } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const serviceIcons = [Package, Lightbulb, ShoppingCart, TrendUp];

const cardColors = [
  { bg: "#F5F4F0", border: "rgba(139,32,32,0.08)" },   // cream
  { bg: "#EDEBE7", border: "rgba(42,31,20,0.08)" },     // pearl
  { bg: "#F5F4F0", border: "rgba(139,32,32,0.06)" },    // cream
  { bg: "#EDEBE7", border: "rgba(42,31,20,0.06)" },     // pearl
];

const serviceRoutes = [
  "/services/logistics",
  "/services/consulting",
  "/services/procurement",
  "/services/trading",
];

export default function StackingServiceCards() {
  const { t } = useLanguage();

  const serviceTitle = t?.services?.title || "What We Do";
  const serviceSubtitle = t?.services?.subtitle || "Core capabilities that drive global operations";

  const serviceKeys = ["logistics", "consulting", "procurement", "trading"] as const;
  const services = serviceKeys.map((key, i) => ({
    title: t?.services?.[key]?.title || key,
    description: t?.services?.[key]?.description || "",
    icon: serviceIcons[i],
    color: cardColors[i],
    href: serviceRoutes[i],
  }));

  // Translate "Learn more" based on locale
  const learnMore = t?.serviceDetail?.serviceArea ? (
    t === (undefined as any) ? "Learn more" : 
    t?.nav?.home === "Accueil" ? "En savoir plus" :
    t?.nav?.home === "Inicio" ? "Saber más" : "Learn more"
  ) : "Learn more";


  return (
    <section id="services" className="relative bg-white" style={{ padding: "7rem 0" }}>
      <div className="max-w-7xl mx-auto px-4" style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 mb-5 block font-medium">
              {serviceTitle}
            </span>
            <h2 className="text-display-lg font-bold text-espresso" style={{ marginBottom: 0 }}>
              {serviceSubtitle}
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Vertical Stacking Track */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col relative pb-32">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full mb-8"
            >
              <Link
                href={service.href}
                className="block rounded-3xl overflow-hidden border hover:border-crimson/30 transition-all duration-700 group cursor-pointer relative"
                style={{
                  backgroundColor: service.color.bg,
                  borderColor: service.color.border,
                  textDecoration: "none",
                  boxShadow: "0 -10px 40px rgba(26,18,16,0.03), 0 2px 10px rgba(26,18,16,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  minHeight: "340px"
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                <div style={{ padding: "2rem 2rem 2.5rem" }} className="flex flex-col flex-1">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div className="w-14 h-14 rounded-2xl bg-espresso/[0.05] border border-espresso/[0.06] flex items-center justify-center group-hover:bg-crimson/[0.06] group-hover:border-crimson/15 transition-all duration-500">
                      <Icon size={26} weight="light" className="text-walnut/60 group-hover:text-crimson transition-colors duration-500" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/30 font-bold">0{i + 1}</span>
                  </div>

                  <h3 className="text-display-sm font-bold text-espresso mb-4 group-hover:text-crimson transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-body-lg text-walnut/70 leading-[1.8] flex-1" style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {service.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-espresso/[0.06] flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-walnut/40 group-hover:text-crimson transition-colors font-bold">{learnMore}</span>
                    <ArrowUpRight size={14} className="text-walnut/30 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
