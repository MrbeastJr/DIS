"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  CheckCircle,
  WarningCircle,
  CircleNotch,
  ArrowRight,
  Globe,
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";
import { useConfig } from "@/context/ConfigContext";
import { API_BASE_URL } from "@/lib/api";

export default function ContactPage() {
  const { t } = useLanguage();
  const { config } = useConfig();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-caption uppercase tracking-[0.2em] text-crimson font-bold block mb-3">
            Contact & Support
          </span>
          <h1 className="text-display-md font-bold text-espresso mb-6">
            Get in Touch with DIS Gateway
          </h1>
          <p className="text-body-md text-walnut/70 leading-relaxed">
            We operate across 10+ countries and 15+ trade corridors. Reach out
            directly via WhatsApp for instant executive support or submit an
            inquiry for logistics, procurement, and consulting quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="https://wa.me/243990301518"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-espresso/10 hover:border-[#25D366]/40 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <WhatsappLogo
                  size={30}
                  weight="fill"
                  className="text-[#25D366]"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-walnut/60 font-bold block mb-1">
                  Direct WhatsApp (24/7)
                </span>
                <span className="text-body-md font-bold text-espresso block">
                  +243 990 301 518
                </span>
                <span className="text-xs text-[#25D366] font-medium">
                  Click to chat with executive team
                </span>
              </div>
            </a>

            <a
              href="mailto:okeycongo@gmail.com"
              className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-espresso/10 hover:border-crimson/40 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-crimson/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <EnvelopeSimple
                  size={30}
                  weight="light"
                  className="text-crimson"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-walnut/60 font-bold block mb-1">
                  Official Email
                </span>
                <span className="text-body-md font-bold text-espresso block">
                  okeycongo@gmail.com
                </span>
                <span className="text-xs text-crimson font-medium">
                  Quotes & Corporate Tenders
                </span>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-white border border-espresso/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-espresso/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} weight="light" className="text-crimson" />
                </div>
                <div>
                  <h3 className="text-body-sm font-bold text-espresso mb-1">
                    Lubumbashi Headquarters
                  </h3>
                  <p className="text-xs text-walnut/60 leading-relaxed">
                    Haut-Katanga Province, Democratic Republic of the Congo (DRC)
                  </p>
                </div>
              </div>

              <div className="border-t border-espresso/5 pt-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-espresso/5 flex items-center justify-center flex-shrink-0">
                  <Globe size={24} weight="light" className="text-crimson" />
                </div>
                <div>
                  <h3 className="text-body-sm font-bold text-espresso mb-1">
                    Lagos Operations
                  </h3>
                  <p className="text-xs text-walnut/60 leading-relaxed">
                    Lagos, Nigeria &middot; Global Trade Hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-espresso/10 shadow-xl">
            <h2 className="text-display-sm font-bold text-espresso mb-2">
              Send an Inquiry
            </h2>
            <p className="text-body-sm text-walnut/60 mb-8">
              Fill out the form below and our logistics & consulting specialists
              will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-espresso mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Okey Chibueze"
                  className="w-full px-5 py-4 rounded-2xl bg-cream border border-espresso/10 focus:border-crimson focus:outline-none text-espresso placeholder:text-walnut/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-espresso mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-2xl bg-cream border border-espresso/10 focus:border-crimson focus:outline-none text-espresso placeholder:text-walnut/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-espresso mb-2">
                  Inquiry Details / Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your logistics, procurement, or consulting requirements..."
                  className="w-full px-5 py-4 rounded-2xl bg-cream border border-espresso/10 focus:border-crimson focus:outline-none text-espresso placeholder:text-walnut/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-5 bg-espresso text-white rounded-2xl font-bold text-sm hover:bg-crimson transition-colors flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <CircleNotch size={20} className="animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight size={18} weight="bold" />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-sm flex items-center gap-3 font-medium"
                >
                  <CheckCircle size={20} weight="fill" />
                  <span>
                    Inquiry submitted successfully. We will get back to you
                    soon.
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-crimson/10 border border-crimson/30 text-crimson text-sm flex items-center gap-3 font-medium"
                >
                  <WarningCircle size={20} weight="fill" />
                  <span>
                    Failed to send inquiry. Please contact us via WhatsApp
                    directly.
                  </span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
