"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

    const handleMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const animate = () => {
      currentX += (mouseX - currentX) * 0.07;
      currentY += (mouseY - currentY) * 0.07;
      glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[9998] hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(139,32,32,0.025) 0%, rgba(42,31,20,0.01) 40%, transparent 70%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
    />
  );
}
