"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Trophy, CheckCircle, ArrowRight, CaretRight, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function AchievementsPage() {
  const { t } = useLanguage();
  const ts = t.achievementsPage;
  const [selectedPaper, setSelectedPaper] = useState<any>(null);

  return (
    <main className="bg-white min-h-screen text-espresso w-full overflow-hidden">
      <Navbar />

      {/* ── Hero Section ── */}
      <section
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 overflow-hidden"
        style={{ backgroundColor: "#1A1210" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-transparent" />
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson/10 border border-crimson/20 mb-8 backdrop-blur-sm">
              <Trophy size={16} weight="fill" className="text-crimson" />
              <span className="text-crimson text-sm font-bold tracking-widest uppercase">CEO Milestones</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-cream leading-tight mb-6 tracking-tight max-w-4xl mx-auto">
              {ts.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto font-medium leading-relaxed">
              {ts.heroSub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Research & Insights Section ── */}
      <section className="py-24 px-4 bg-cream/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-espresso mb-4 tracking-tight">
              {ts.researchTitle}
            </h2>
            <p className="text-walnut/70 max-w-2xl mx-auto text-lg">
              {ts.researchDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ts.insights.map((insight: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => insight.fullText && setSelectedPaper(insight)}
                className={`bg-white p-8 rounded-3xl border border-espresso/5 shadow-sm transition-all duration-300 group ${insight.fullText ? 'cursor-pointer hover:shadow-lg hover:border-crimson/20' : ''}`}
              >
                <div className="w-12 h-12 bg-crimson/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb size={24} className="text-crimson" weight="fill" />
                </div>
                <h3 className="text-xl font-bold text-espresso mb-4 leading-snug">
                  {insight.title}
                </h3>
                <p className="text-walnut/80 leading-relaxed mb-6">
                  {insight.content}
                </p>
                {insight.fullText && (
                  <button className="text-crimson font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    {ts.readPaper || "Read Paper"} <ArrowRight weight="bold" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career Milestones Timeline ── */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-espresso mb-4 tracking-tight">
              {ts.milestonesTitle}
            </h2>
            <div className="w-16 h-1 bg-crimson mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {ts.milestones.map((milestone: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 group"
              >
                {/* Year Marker */}
                <div className="md:w-32 flex-shrink-0 flex items-start md:justify-end">
                  <span className="text-4xl md:text-5xl font-black text-crimson/20 group-hover:text-crimson/40 transition-colors">
                    {milestone.year}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 relative pb-12 md:border-l-2 border-espresso/10 md:pl-12">
                  <div className="hidden md:block absolute w-4 h-4 rounded-full bg-crimson top-3 -left-[9px] shadow-[0_0_0_4px_white]" />
                  
                  <h3 className="text-2xl font-bold text-espresso mb-3">
                    {milestone.role}
                  </h3>
                  <p className="text-walnut/70 text-lg leading-relaxed">
                    {milestone.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-20 px-4 bg-espresso text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-cream mb-6">
            Ready to Accelerate Your Operations?
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto">
            Connect directly with CEO Okey Francis CHIBUEZE to discuss your supply chain and trade requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-full font-bold hover:bg-[#a61c1c] transition-all hover:scale-105 shadow-lg shadow-crimson/20"
          >
            {t.ctaButton} <ArrowRight weight="bold" />
          </Link>
        </div>
      </section>

      <Footer />

      {/* ── Research Paper Modal ── */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-sm"
            onClick={() => setSelectedPaper(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPaper(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-cream rounded-full flex items-center justify-center text-espresso hover:bg-crimson hover:text-white transition-colors"
              >
                <X size={20} weight="bold" />
              </button>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/10 mb-6">
                <Lightbulb size={14} weight="fill" className="text-crimson" />
                <span className="text-crimson text-xs font-bold tracking-widest uppercase">Research Paper</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-espresso mb-6 leading-tight">
                {selectedPaper.title}
              </h2>

              <div className="prose prose-lg prose-p:text-walnut/80 prose-p:leading-relaxed max-w-none">
                <p className="text-xl font-medium text-espresso mb-8 pb-8 border-b border-espresso/10">
                  {selectedPaper.content}
                </p>
                <p>
                  {selectedPaper.fullText}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-espresso/10 flex justify-end">
                <button 
                  onClick={() => setSelectedPaper(null)}
                  className="px-6 py-3 bg-espresso text-white rounded-xl font-bold hover:bg-crimson transition-colors"
                >
                  {ts.closePaper || "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
