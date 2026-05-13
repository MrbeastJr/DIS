"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { House, ArrowLeft, WhatsappLogo } from "@phosphor-icons/react";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: "#1A1210" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-crimson/[0.06] blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* 404 Number */}
        <h1
          className="text-[140px] md:text-[200px] font-black leading-none tracking-tight select-none mb-2"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          <span className="text-crimson">4</span>
          <span className="text-white/10">0</span>
          <span className="text-crimson">4</span>
        </h1>

        <h2 className="text-display-sm md:text-display-md font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-body-md text-white/40 mb-10 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-espresso font-bold text-body-sm rounded-full hover:bg-cream transition-all duration-300 shadow-lg"
            style={{ textDecoration: "none" }}
          >
            <House size={20} weight="fill" />
            <span>Back to Home</span>
          </Link>

          <a
            href="https://wa.me/243990301518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-white/60 font-medium text-body-sm rounded-full border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300"
            style={{ textDecoration: "none" }}
          >
            <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
            <span>Contact Support</span>
          </a>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-14 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent"
        />

        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
          Digital Integrated Services RDC
        </p>
      </motion.div>
    </main>
  );
}
