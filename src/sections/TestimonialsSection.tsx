"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quotes, Star, CircleNotch } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import { API_BASE_URL } from "@/lib/api";

const DEFAULT_TESTIMONIALS = [
  {
    quote: "DIS transformed our cross-border supply chain. Their understanding of African markets is unmatched — they delivered what global firms couldn't.",
    author: "Amara Okafor",
    role: "CEO, West Africa Trade Corp",
    region: "Lagos, Nigeria",
  },
  {
    quote: "Working with DIS felt like having a strategic partner, not a vendor. Their procurement expertise saved us 30% on sourcing costs across three countries.",
    author: "Hassan Al-Rashid",
    role: "COO, Gulf Ventures International",
    region: "Dubai, UAE",
  },
  {
    quote: "From Lagos to Dubai, DIS handles complexity with elegance. Their logistics network is genuinely world-class.",
    author: "Chen Wei",
    role: "Director, Shenzhen Global Trading",
    region: "Shenzhen, China",
  },
];

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  region: string;
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/testimonials/`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setTestimonials(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      }
    };
    fetchTestimonials();
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [testimonials.length]);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next, testimonials.length]);

  const title = t?.testimonials?.title || "What Our Partners Say";

  return (
    <section className="relative section-padding-lg bg-cream/40 overflow-hidden w-full max-w-full">
      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-caption uppercase tracking-[0.25em] text-crimson/50 mb-12 block font-medium">
            {title}
          </span>
          <Quotes size={36} weight="fill" className="text-espresso/[0.08] mx-auto mb-8" />

          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-3xl mx-auto"
              >
                <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-light text-espresso/90 leading-[1.65] mb-8 italic px-2">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} weight="fill" className="text-crimson/60" />
                    ))}
                  </div>
                  <p className="text-body-md font-semibold text-espresso">{testimonials[current].author}</p>
                  <p className="text-body-sm text-walnut/50">{testimonials[current].role}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-walnut/30 mt-0.5 font-medium">{testimonials[current].region}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[4px] rounded-full transition-all duration-500 cursor-pointer ${
                  i === current ? "bg-crimson w-8" : "bg-espresso/[0.08] w-4 hover:bg-espresso/[0.15]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
