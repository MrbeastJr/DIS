"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "@phosphor-icons/react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("dis-cookies-accepted");
    if (!accepted) {
      // Small delay so it doesn't pop immediately on load
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("dis-cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-[80] md:max-w-sm"
        >
          <div
            className="rounded-2xl p-5 shadow-2xl border border-white/80"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-crimson/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie size={18} className="text-crimson" weight="fill" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-body-sm font-bold text-espresso mb-1">We use cookies</h4>
                <p className="text-[11px] text-walnut/50 leading-relaxed mb-3">
                  This site uses cookies to enhance your browsing experience and provide personalized content.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={accept}
                    className="px-5 py-2 bg-espresso text-white text-[12px] font-bold rounded-full hover:bg-cocoa transition-colors cursor-pointer"
                  >
                    Accept
                  </button>
                  <button
                    onClick={accept}
                    className="px-4 py-2 text-[12px] font-medium text-walnut/50 hover:text-espresso transition-colors cursor-pointer rounded-full hover:bg-espresso/[0.04]"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
              <button onClick={accept} className="w-7 h-7 rounded-full flex items-center justify-center text-walnut/30 hover:text-espresso transition-colors cursor-pointer flex-shrink-0">
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
