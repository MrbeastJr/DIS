"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeSimple } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";

const languages: { code: Locale; label: string; native: string; flag: string }[] = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "fr", label: "French", native: "Français", flag: "🇫🇷" },
  { code: "es", label: "Spanish", native: "Español", flag: "🇪🇸" },
];

export default function LanguagePopup() {
  const { setLocale } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const chosen = localStorage.getItem("dis-language-chosen");
    if (!chosen) {
      // Show after a brief delay
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (code: Locale) => {
    setLocale(code);
    localStorage.setItem("dis-language-chosen", code);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" onClick={() => choose("en")} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl z-10 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-crimson/[0.08] flex items-center justify-center mx-auto mb-5">
              <GlobeSimple size={28} className="text-crimson" weight="light" />
            </div>

            <h2 className="text-display-sm font-bold text-espresso mb-2">Choose Your Language</h2>
            <p className="text-body-sm text-walnut/50 mb-8">Select your preferred language for the best experience.</p>

            <div className="space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => choose(lang.code)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl border border-espresso/[0.06] hover:border-crimson/20 hover:bg-crimson/[0.02] transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left flex-1">
                    <span className="text-body-sm font-bold text-espresso group-hover:text-crimson transition-colors block">{lang.native}</span>
                    <span className="text-[11px] text-walnut/40">{lang.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
