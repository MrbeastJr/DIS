"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"enter" | "loading" | "exit">("enter");

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase("loading"), 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setPhase("exit"), 400);
          return 100;
        }
        const inc = prev < 20 ? 5 : prev < 50 ? 3 : prev < 80 ? 2 : prev < 95 ? 1 : 4;
        return Math.min(prev + inc, 100);
      });
    }, 45);

    return () => {
      clearTimeout(enterTimer);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (phase === "exit") {
      const exitTimer = setTimeout(onComplete, 900);
      return () => clearTimeout(exitTimer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="loader-container"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-12"
          >
            {/* Logo with shimmer overlay */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/assets/dis-logo.png"
                  alt="DIS - Digital Integrated Services"
                  width={200}
                  height={60}
                  className="h-14 w-auto relative z-10"
                  priority
                />
              </motion.div>

            </div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "loading" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.3em] text-walnut/40 font-medium"
              >
                {t.loader.subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
