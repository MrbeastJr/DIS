"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();
  const items = t.trustStrip.items;
  const doubled = [...items, ...items];

  return (
    <section className="relative py-10 overflow-hidden border-y border-espresso/[0.05] bg-cream/50">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8 whitespace-nowrap">
            <span className="text-[clamp(0.9rem,1.8vw,1.15rem)] font-semibold text-espresso/80 tracking-wide uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-crimson/15 flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
