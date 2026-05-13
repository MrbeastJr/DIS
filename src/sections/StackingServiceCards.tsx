"use client";

import { useEffect, useRef } from "react";
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
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

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

  useEffect(() => {
    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card, i) => {
        if (i === 0 || !card) return;
        gsap.fromTo(card,
          { y: 100, scale: 0.93, opacity: 0.3 },
          { y: 0, scale: 1, opacity: 1,
            scrollTrigger: { trigger: card, start: "top 85%", end: "top 25%", scrub: 0.8 }
          }
        );
      });
    };
    init();
  }, []);

  return (
    <section id="services" className="relative section-padding-lg bg-white">
      <div className="max-w-7xl mx-auto mb-24 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 mb-5 block font-medium">
            {serviceTitle}
          </span>
          <h2 className="text-display-lg font-bold text-espresso mb-12">
            {serviceSubtitle}
          </h2>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6 px-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Link
              key={i}
              href={service.href}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="sticky block rounded-3xl overflow-hidden border hover:border-crimson/30 transition-all duration-700 group cursor-pointer"
              style={{
                top: `${130 + i * 24}px`,
                zIndex: i + 1,
                backgroundColor: service.color.bg,
                borderColor: service.color.border,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(26,18,16,0.06), 0 1px 4px rgba(26,18,16,0.03)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-start gap-8 md:gap-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-espresso/[0.05] border border-espresso/[0.06] flex items-center justify-center group-hover:bg-crimson/[0.06] group-hover:border-crimson/15 transition-all duration-500">
                    <Icon size={26} weight="light" className="text-walnut/60 group-hover:text-crimson transition-colors duration-500" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/30 font-bold">0{i + 1}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-display-sm font-bold text-espresso mb-4 group-hover:text-crimson transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-body-lg text-walnut/70 leading-[1.8] max-w-2xl">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-espresso/[0.06] flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-walnut/40 group-hover:text-crimson transition-colors font-bold">{learnMore}</span>
                    <ArrowUpRight size={14} className="text-walnut/30 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
