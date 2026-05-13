"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

interface Region {
  name: string;
  x: number;
  y: number;
  description: string;
  flag: string;
}

const regions: Region[] = [
  { name: "Nigeria", x: 49, y: 57, description: "Nigeria HQ — Lagos & Abuja operations hub", flag: "🇳🇬" },
  { name: "Ghana", x: 46, y: 56, description: "Accra — West Africa procurement center", flag: "🇬🇭" },
  { name: "DR Congo", x: 52, y: 63, description: "Lubumbashi — Central Africa logistics network", flag: "🇨🇩" },
  { name: "UAE", x: 63, y: 46, description: "Dubai — Middle East trade operations", flag: "🇦🇪" },
  { name: "China", x: 79, y: 41, description: "Shenzhen — Asia sourcing & manufacturing", flag: "🇨🇳" },
  { name: "South Africa", x: 53, y: 76, description: "Johannesburg — Southern Africa distribution hub", flag: "🇿🇦" },
  { name: "Kenya", x: 57, y: 60, description: "Nairobi — East Africa trade corridor", flag: "🇰🇪" },
  { name: "Turkey", x: 58, y: 39, description: "Istanbul — Europe-Asia bridge operations", flag: "🇹🇷" },
  { name: "India", x: 71, y: 48, description: "Mumbai — South Asia sourcing & logistics", flag: "🇮🇳" },
  { name: "Saudi Arabia", x: 60, y: 48, description: "Riyadh — Gulf region trade partnerships", flag: "🇸🇦" },
];

const connections: [number, number][] = [
  [0, 3], [0, 4], [1, 3], [2, 3], [3, 4], [0, 1], [0, 2],
  [0, 5], [2, 5], [2, 6], [0, 6], [3, 7], [7, 4], [3, 8],
  [8, 4], [3, 9], [9, 8], [5, 6], [7, 9],
];

export default function GlobalReachSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let w = 0, h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Dot-matrix world approximation
    const dots: { x: number; y: number }[] = [];
    const boxes = [
      { x1: 44, y1: 40, x2: 57, y2: 72 }, // Africa
      { x1: 44, y1: 28, x2: 58, y2: 42 }, // Europe
      { x1: 55, y1: 25, x2: 85, y2: 55 }, // Asia
      { x1: 22, y1: 52, x2: 38, y2: 80 }, // S. America
      { x1: 10, y1: 22, x2: 40, y2: 50 }, // N. America
      { x1: 75, y1: 62, x2: 88, y2: 76 }, // Australia
    ];
    for (let px = 5; px < 95; px += 2.5) {
      for (let py = 15; py < 85; py += 2.5) {
        if (boxes.some(b => px >= b.x1 && px <= b.x2 && py >= b.y1 && py <= b.y2) && Math.random() > 0.35) {
          dots.push({ x: px, y: py });
        }
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      // World dots
      dots.forEach(d => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(42,31,20,0.06)";
        ctx.arc((d.x / 100) * w, (d.y / 100) * h, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      const pts = regions.map(r => ({ x: (r.x / 100) * w, y: (r.y / 100) * h }));

      // Connections
      connections.forEach(([a, b]) => {
        const p1 = pts[a], p2 = pts[b];
        const isActive = activeRegion === a || activeRegion === b;
        ctx.beginPath();
        ctx.strokeStyle = isActive ? "rgba(139,32,32,0.25)" : "rgba(42,31,20,0.08)";
        ctx.lineWidth = isActive ? 1.5 : 0.8;
        ctx.setLineDash([5, 10]);
        ctx.lineDashOffset = -time * 60;
        const mx = (p1.x + p2.x) / 2;
        const dist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
        const my = (p1.y + p2.y) / 2 - dist * 0.18;
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(mx, my, p2.x, p2.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Traveling dot
        const t2 = ((time * 0.4 + a * 0.3) % 1);
        const tt = 1 - t2;
        const dx = tt * tt * p1.x + 2 * tt * t2 * mx + t2 * t2 * p2.x;
        const dy = tt * tt * p1.y + 2 * tt * t2 * my + t2 * t2 * p2.y;
        ctx.beginPath();
        ctx.fillStyle = `rgba(139,32,32,${0.4 * Math.sin(t2 * Math.PI)})`;
        ctx.arc(dx, dy, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Region points
      pts.forEach((p, i) => {
        const isActive = activeRegion === i;
        const pulseR = 15 + Math.sin(time * 2.5 + i) * 5;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139,32,32,${(isActive ? 0.3 : 0.08) + Math.sin(time * 2 + i) * 0.03})`;
        ctx.lineWidth = isActive ? 1.5 : 0.8;
        ctx.arc(p.x, p.y, pulseR, 0, Math.PI * 2);
        ctx.stroke();

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, isActive ? 35 : 20);
        g.addColorStop(0, `rgba(139,32,32,${isActive ? 0.15 : 0.06})`);
        g.addColorStop(1, "rgba(139,32,32,0)");
        ctx.beginPath(); ctx.fillStyle = g;
        ctx.arc(p.x, p.y, isActive ? 35 : 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = isActive ? "#8B2020" : "#2A1F14";
        ctx.arc(p.x, p.y, isActive ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = `${isActive ? "600 11px" : "500 9px"} system-ui, sans-serif`;
        ctx.fillStyle = isActive ? "rgba(139,32,32,0.8)" : "rgba(42,31,20,0.3)";
        ctx.textAlign = "center";
        ctx.fillText(regions[i].name.toUpperCase(), p.x, p.y - 20);
      });

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, [activeRegion]);

  return (
    <section id="about" className="relative section-padding-lg bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Globe size={18} className="text-crimson/50" />
            <span className="text-caption uppercase tracking-[0.2em] text-crimson/50">{t.globalReach.title}</span>
          </div>
          <h2 className="text-display-lg font-bold text-espresso mb-8">{t.globalReach.subtitle}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="relative w-full aspect-[2.2/1] max-h-[520px] rounded-3xl overflow-hidden border border-espresso/[0.05] bg-cream/30">
          <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
          {regions.map((r, i) => (
            <button key={i} onMouseEnter={() => setActiveRegion(i)} onMouseLeave={() => setActiveRegion(null)}
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer z-10"
              style={{ left: `${r.x}%`, top: `${r.y}%` }} aria-label={r.name} />
          ))}
          <AnimatePresence>
            {activeRegion !== null && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                className="absolute z-20 glass-liquid rounded-xl p-4 max-w-[220px] shadow-lg shadow-black/5"
                style={{ left: `${Math.min(75, regions[activeRegion].x + 3)}%`, top: `${regions[activeRegion].y - 5}%` }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{regions[activeRegion].flag}</span>
                  <span className="text-body-sm font-semibold text-espresso">{regions[activeRegion].name}</span>
                </div>
                <p className="text-[11px] text-walnut/50 leading-relaxed">{regions[activeRegion].description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-10">
          {regions.map((r, i) => {
            const regionLabel = i < 3 ? "Africa" : i === 5 ? "Africa" : i === 6 ? "Africa" : i === 3 || i === 9 ? "Middle East" : i === 7 ? "Europe" : "Asia";
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                onMouseEnter={() => setActiveRegion(i)} onMouseLeave={() => setActiveRegion(null)}
                className={`text-center p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeRegion === i ? "border-crimson/15 bg-crimson/[0.02]" : "border-espresso/[0.04] bg-cream/30 hover:border-espresso/[0.08]"
                }`}>
                <span className="text-xl mb-2 block">{r.flag}</span>
                <span className="text-body-sm font-medium text-espresso block">{r.name}</span>
                <span className="text-[10px] text-walnut/30 uppercase tracking-wider mt-1 block">
                  {regionLabel}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
