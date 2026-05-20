"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Play } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP scroll-driven parallax
  useEffect(() => {
    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !contentRef.current) return;

      gsap.to(contentRef.current, {
        scale: 0.98,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    };
    init();
  }, []);

  const rawHeadline = t?.hero?.headline || "Engineering the Future\nof African Commerce.";
  const headlineLines = useMemo(() => rawHeadline.split("\n"), [rawHeadline]);
  const subtext = t?.hero?.subtext || "Premium logistics, procurement, and enterprise consulting bridging localized expertise with global capabilities.";
  const cta1 = t?.hero?.cta1 || "Initiate Project";
  const cta2 = t?.hero?.cta2 || "Explore Services";

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-espresso/70" />
        {/* Bottom gradient blend into white */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ── Content ── */}
      <div ref={contentRef} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="min-h-screen flex flex-col justify-center py-36 md:py-40">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-liquid-dark text-[11px] uppercase tracking-[0.2em] text-white/90 font-medium shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse-slow" />
              Nigeria &middot; Congo &middot; UAE &middot; Global
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-8 max-w-3xl">
            {headlineLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-display-xl font-bold text-white leading-[1.06] drop-shadow-sm">
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-xl text-white/80 max-w-xl leading-[1.7] font-light mb-10 drop-shadow-sm"
          >
            {subtext}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#contact" className="btn-crimson group shadow-lg">
              {cta1}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-white/15 text-white font-semibold text-body-sm rounded-full border border-white/25 hover:bg-white/25 transition-all duration-300 group shadow-md text-decoration-none">
              {cta2}
              <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="flex gap-10 pt-8 border-t border-white/10"
          >
            {[
              { value: "15+", label: "Countries" },
              { value: "200+", label: "Projects" },
              { value: "$50M+", label: "Trade Value" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-display-sm font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 mt-1.5 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>



    </section>
  );
}
