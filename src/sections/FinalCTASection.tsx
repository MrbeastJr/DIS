"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, WhatsappLogo, EnvelopeSimple, CheckCircle, WarningCircle, CircleNotch } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import { useConfig } from "@/context/ConfigContext";
import { API_BASE_URL } from "@/lib/api";

export default function FinalCTASection() {
  const { t } = useLanguage();
  const { config } = useConfig();
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const headline = t?.cta?.headline || "Built for businesses\nthat move globally.";
  const buttonText = t?.cta?.button || "Start a Conversation";

  const waNumber = (config?.whatsappNumber || "243990301518").replace(/[^0-9]/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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

            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-10 text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2 block ml-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-crimson transition-colors"
                    placeholder="John Doe"
                    disabled={status === "loading"}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2 block ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-crimson transition-colors"
                    placeholder="john@example.com"
                    disabled={status === "loading"}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2 block ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-crimson transition-colors resize-none"
                  placeholder="How can we help your business grow?"
                  disabled={status === "loading"}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-crimson text-white font-bold text-body-sm rounded-xl hover:bg-crimson-light transition-all duration-300 disabled:opacity-70 group"
                >
                  {status === "loading" ? (
                    <CircleNotch size={20} className="animate-spin text-white" />
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={20} weight="fill" className="mr-2 text-white" />
                      <span>Sent Successfully</span>
                    </>
                  ) : status === "error" ? (
                    <>
                      <WarningCircle size={20} weight="fill" className="mr-2 text-white" />
                      <span>Failed to send</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
                
                <span className="text-white/40 text-sm hidden sm:block">or</span>

                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-white/5 text-white font-medium text-body-sm rounded-xl hover:bg-white/10 transition-all duration-300 text-decoration-none border border-white/10"
                >
                  <WhatsappLogo size={20} weight="fill" className="mr-2 text-[#25D366] flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>

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
