"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Package, Lightbulb, ShoppingCart, TrendUp } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const segments = [
  { pct: 25, color: "#8B2020", icon: Package },
  { pct: 25, color: "#2A1F14", icon: Lightbulb },
  { pct: 25, color: "#A33030", icon: ShoppingCart },
  { pct: 25, color: "#5C4A38", icon: TrendUp },
];

export default function InteractivePieChart() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animate to 100% when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Smooth count-up animation
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(eased);
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const size = 300;
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="industries" ref={sectionRef} className="relative section-padding-lg bg-cream/40">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-caption uppercase tracking-[0.2em] text-crimson/50 mb-4 block">{t.pieChart.sectionLabel}</span>
          <h2 className="text-display-lg font-bold text-espresso mb-4">{t.pieChart.sectionTitle}</h2>
          <p className="text-body-md text-walnut/50 max-w-xl mb-16">{t.pieChart.sectionSub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 1 }} className="flex justify-center relative">

            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
              <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(42,31,20,0.04)" strokeWidth={strokeWidth} />
              {(() => {
                let offset = 0;
                return segments.map((seg, i) => {
                  const segLen = (seg.pct / 100) * circumference;
                  let beforeMe = 0;
                  for (let j = 0; j < i; j++) beforeMe += segments[j].pct;
                  const myProgress = Math.min(1, Math.max(0, (progress * 100 - beforeMe) / seg.pct));
                  const visibleLen = segLen * myProgress;
                  const currentOffset = offset;
                  offset += segLen;
                  if (visibleLen <= 0) return null;
                  return (
                    <circle key={i} cx={size / 2} cy={size / 2} r={radius}
                      fill="none" stroke={seg.color} strokeWidth={strokeWidth - 2}
                      strokeDasharray={`${visibleLen} ${circumference - visibleLen}`}
                      strokeDashoffset={-currentOffset} strokeLinecap="butt"
                      className="transition-all duration-200" style={{ opacity: 0.7 + myProgress * 0.3 }} />
                  );
                });
              })()}
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[42px] font-bold text-espresso tracking-tight leading-none">
                {Math.round(progress * 100)}<span className="text-[22px] text-crimson/50">%</span>
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              let beforeMe = 0;
              for (let j = 0; j < i; j++) beforeMe += segments[j].pct;
              const myProgress = Math.min(1, Math.max(0, (progress * 100 - beforeMe) / seg.pct));
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                  className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-700 ${
                    myProgress > 0 ? "border-crimson/10 bg-crimson/[0.02]" : "border-espresso/[0.05] bg-white"
                  }`}>
                  <div className="w-11 h-11 rounded-xl bg-espresso/[0.04] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} weight="light" className="text-walnut/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-body-md font-semibold text-espresso">{t.pieChart.segments[i]?.label || ""}</h4>
                    <div className="w-full h-1 bg-espresso/[0.04] rounded-full mt-2 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${myProgress * 100}%`, backgroundColor: seg.color }} />
                    </div>
                  </div>
                  <span className={`text-display-sm font-bold tracking-tight transition-colors duration-500 ${
                    myProgress > 0 ? "text-espresso" : "text-walnut/15"
                  }`}>{Math.round(myProgress * 100)}%</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
