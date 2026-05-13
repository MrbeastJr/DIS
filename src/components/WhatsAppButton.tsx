"use client";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/243990301518"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/15 hover:shadow-xl hover:shadow-[#25D366]/25 transition-shadow duration-500 group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" className="text-white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping" />
      <span className="absolute right-full mr-3 px-3 py-1.5 glass-liquid text-espresso text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-medium shadow-sm">
        Chat with us
      </span>
    </motion.a>
  );
}
