"use client";

import { motion } from "framer-motion";
import { ChatCircle, Compass, Gear, CheckCircle } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [ChatCircle, Compass, Gear, CheckCircle];

export default function ProcessFlowSection() {
  const { t } = useLanguage();

  const title = t?.process?.title || "Our Process";
  const steps = t?.process?.steps || [
    {
      title: "Consultation",
      description: "Deep-dive into your operational landscape, market challenges, and growth objectives.",
    },
    {
      title: "Strategy",
      description: "Bespoke strategies built on data, local intelligence, and global best practices.",
    },
    {
      title: "Execution",
      description: "Precision deployment with dedicated teams, real-time tracking, and quality assurance.",
    },
    {
      title: "Delivery",
      description: "Measurable outcomes, transparent reporting, and continuous optimization.",
    },
  ];

  return (
    <section id="process" className="relative section-padding-lg bg-white overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/60 mb-4 block font-medium">
              {title}
            </span>
            <h2 className="text-display-lg font-bold text-espresso mb-6 tracking-tight">
              From strategy to execution<span className="text-crimson">.</span>
            </h2>
            <p className="text-body-lg text-walnut/60 leading-relaxed max-w-2xl mx-auto px-2">
              A deliberate, structured approach to delivering operational excellence across every engagement.
            </p>
          </motion.div>
        </div>

        {/* Vertical Flow Grid — Immune to scroll spacer gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => {
            const Icon = icons[i] || ChatCircle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative rounded-3xl border border-espresso/[0.06] bg-cream/30 p-8 flex flex-col justify-between hover:border-crimson/20 hover:bg-cream/50 transition-all duration-500 group"
              >
                {/* Number indicator */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-espresso/[0.04] border border-espresso/[0.05] flex items-center justify-center group-hover:bg-crimson/[0.08] group-hover:border-crimson/15 transition-all duration-300">
                      <Icon size={22} weight="light" className="text-walnut/70 group-hover:text-crimson transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/30 font-bold group-hover:text-crimson/60 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-body-xl font-bold text-espresso mb-3 group-hover:text-crimson transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-walnut/60 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-4 border-t border-espresso/[0.04] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-walnut/30 font-medium">Phase</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-espresso/15 group-hover:bg-crimson transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
