"use client";

import { motion } from "framer-motion";
import { ArrowRight, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCTASection() {
  const { t } = useLanguage();

  const headline = t?.cta?.headline || "Built for businesses\nthat move globally.";
  const buttonText = t?.cta?.button || "Start a Conversation";

  return (
    <section
      id="contact"
      className="relative w-full max-w-full overflow-hidden bg-espresso text-white"
      style={{ backgroundColor: "#1A1210" }}
    >
      <div className="relative py-24 md:py-40 px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Subtle glow — restricted to avoid overflow scrolling */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] rounded-full bg-crimson/[0.04] blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-display-xl font-bold text-white mb-8 whitespace-pre-line leading-[1.08]">
              {headline}
            </h2>

            <p className="text-body-lg md:text-body-xl text-white/80 mb-12 max-w-xl mx-auto leading-relaxed font-light px-4">
              Partner with Okey Francis CHIBUEZE and a specialized team that understands the strategic framework of African logistics, beauty & cosmetic trade, and global procurement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full max-w-md mx-auto sm:max-w-none">
              <a
                href="https://wa.me/243990301518"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-espresso font-bold text-body-sm rounded-full hover:bg-cream transition-all duration-300 group text-decoration-none shadow-lg"
              >
                <WhatsappLogo size={22} weight="fill" className="mr-2 text-[#25D366] flex-shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </a>
              <a
                href="mailto:okeycongo@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold text-body-sm rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 text-decoration-none"
              >
                <EnvelopeSimple size={20} className="mr-2 flex-shrink-0 text-crimson-light" />
                <span>okeycongo@gmail.com</span>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-2">
                {["Beauty & Cosmetics", "Strategic Advisory", "Global Logistics", "RC: 1492798"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-white/60 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
