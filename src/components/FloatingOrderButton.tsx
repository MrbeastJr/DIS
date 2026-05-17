"use client";

import Link from "next/link";
import { ShoppingBag } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingOrderButton() {
  const pathname = usePathname();
  const { t } = useLanguage();

  // Hide the floating button on the trading store page since it already has a cart
  if (pathname === "/services/trading") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
      >
        <Link
          href="/services/trading"
          className="group flex flex-col items-center justify-center gap-2 px-2 py-4 bg-espresso text-white rounded-l-2xl hover:bg-crimson transition-all duration-300 shadow-xl border border-r-0 border-white/10 overflow-hidden"
          style={{ textDecoration: "none" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -10 }}
            className="flex flex-col items-center gap-3"
          >
            <ShoppingBag size={22} weight="fill" className="text-white drop-shadow-md" />
            <span
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {t.floatingOrder || "Order Now"}
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
