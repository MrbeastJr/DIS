"use client";

import { motion } from "framer-motion";
import {
  Diamond, Drop, ShoppingBag, Plant, HardHat, Pill,
  Lightning, Truck, Buildings, Factory,
} from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const industries = [
  { icon: Diamond, color: "#8B6914" },
  { icon: Drop, color: "#2D5F8A" },
  { icon: ShoppingBag, color: "#A33030" },
  { icon: Plant, color: "#2D7A3A" },
  { icon: HardHat, color: "#8B5E3C" },
  { icon: Pill, color: "#6A3D8A" },
  { icon: Lightning, color: "#B8860B" },
  { icon: Truck, color: "#2A1F14" },
  { icon: Buildings, color: "#5C4A38" },
  { icon: Factory, color: "#4A6B5A" },
];

export default function IndustriesSection() {
  const { t } = useLanguage();
  const ind = t.industries;

  return (
    <section className="relative section-padding-lg bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-caption uppercase tracking-[0.2em] text-crimson/50 mb-4 block">
            {ind.sectionLabel}
          </span>
          <h2 className="text-display-lg font-bold text-espresso mb-4">
            {ind.sectionTitle}
          </h2>
          <p className="text-body-md text-walnut/50 max-w-2xl mx-auto">
            {ind.sectionSub}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {industries.map((item, i) => {
            const Icon = item.icon;
            const name = ind.items?.[i]?.name || "";
            const desc = ind.items?.[i]?.desc || "";
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group text-center p-5 md:p-6 rounded-2xl border border-espresso/[0.05] bg-cream/20 hover:bg-white hover:border-crimson/15 hover:shadow-xl hover:shadow-espresso/[0.03] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}12` }}
                >
                  <Icon
                    size={22}
                    weight="light"
                    className="transition-colors duration-500"
                    style={{ color: `${item.color}90` }}
                  />
                </div>
                <h3 className="text-body-sm font-bold text-espresso mb-1.5 group-hover:text-crimson transition-colors duration-500">
                  {name}
                </h3>
                <p className="text-[11px] text-walnut/40 leading-relaxed hidden md:block">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
