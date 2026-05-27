"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeSimple, House, ShoppingCart, Package, User, ChatCircle, Trophy } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";
import Image from "next/image";

const localeLabels: Record<Locale, string> = { en: "EN", fr: "FR", es: "ES" };

const mobileNavItems = [
  { icon: ShoppingCart, href: "/", key: "trading", isPage: true },
  { icon: Package, href: "/services/logistics", key: "logistics", isPage: true },
  { icon: ChatCircle, href: "/services/consulting", key: "consulting", isPage: true },
  { icon: User, href: "/about", key: "about", isPage: true },
  { icon: Trophy, href: "/achievements", key: "achievements", isPage: true },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langOpen, setLangOpen] = useState(false);

  const isCompanyPage = pathname === "/company";
  const isHomePage = pathname === "/";

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 60);
    if (y > lastScrollY && y > 300) setHidden(true);
    else setHidden(false);
    setLastScrollY(y);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const desktopNavItems = [
    { label: "Company", href: "/company", isPage: true },
    { label: t.nav.services, href: "/company#services", isPage: false },
    { label: t.nav.industries, href: "/company#industries", isPage: false },
    { label: t.nav.about, href: "/about", isPage: true },
    { label: t.nav.achievements || "Achievements", href: "/achievements", isPage: true },
    { label: t.nav.contact, href: "/company#contact", isPage: false },
  ];

  const navigate = (href: string, isPage: boolean) => {
    if (isPage) {
      router.push(href);
      return;
    }
    // Hash-based section link
    const hash = href.replace("/company", "");
    if (isCompanyPage) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to company page with hash — browser will scroll to section
      window.location.href = href;
    }
  };

  const goHome = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  // Instant continuous cycle function for mobile screens
  const cycleLanguage = () => {
    const order: Locale[] = ["en", "fr", "es"];
    const nextIndex = (order.indexOf(locale) + 1) % order.length;
    setLocale(order[nextIndex]);
  };

  return (
    <>
      {/* ═══════════════════════════════════════
          DESKTOP NAVBAR — True Floating Island Top Bar
          ═══════════════════════════════════════ */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none hidden md:flex">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: hidden ? -100 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-[calc(100%-3rem)] max-w-5xl pointer-events-auto"
        >
          <div
            className="rounded-full px-6 py-3.5 transition-all duration-500"
            style={{
              background: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(28px) saturate(200%)",
              WebkitBackdropFilter: "blur(28px) saturate(200%)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 10px 40px rgba(26, 18, 16, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
            }}
          >
            <div className="flex items-center justify-between">
              {/* Logo + DIS Wordmark — left aligned */}
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); goHome(); }}
                className="flex items-center gap-2.5 group text-decoration-none flex-shrink-0"
              >
                <Image
                  src="/assets/dis-logo.png"
                  alt="DIS - Digital Integrated Services"
                  width={140}
                  height={40}
                  className="h-8 w-auto relative z-10"
                  priority
                />
                <span
                  className="text-[22px] font-black tracking-[0.06em] select-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  <span className="text-crimson">DIS</span><span className="text-espresso">.</span>
                </span>
              </a>

              {/* Nav links */}
              <div className="flex items-center gap-1">
                {desktopNavItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href, item.isPage)}
                    className={`px-4 py-2 text-[13px] font-medium transition-colors duration-300 rounded-full hover:bg-espresso/[0.04] cursor-pointer ${
                      item.isPage && pathname === item.href
                        ? "text-crimson"
                        : "text-walnut/70 hover:text-espresso"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Right: Lang + CTA */}
              <div className="flex items-center gap-2">
                {/* Language */}
                <div className="relative">
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-1.5 px-3 py-2 text-[13px] text-walnut/60 hover:text-espresso transition-colors rounded-full hover:bg-espresso/[0.04] cursor-pointer"
                  >
                    <GlobeSimple size={15} weight="regular" />
                    <span className="font-medium">{localeLabels[locale]}</span>
                  </button>

                  <AnimatePresence>
                    {langOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 rounded-2xl overflow-hidden min-w-[120px] shadow-xl"
                        style={{
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {(Object.keys(localeLabels) as Locale[]).map((l) => (
                          <button
                            key={l}
                            onClick={() => { setLocale(l); setLangOpen(false); }}
                            className={`w-full px-4 py-2.5 text-[13px] text-left transition-colors cursor-pointer ${
                              locale === l
                                ? "text-crimson bg-crimson/[0.04] font-medium"
                                : "text-walnut/60 hover:text-espresso hover:bg-espresso/[0.03]"
                            }`}
                          >
                            {l === "en" ? "English" : l === "fr" ? "Français" : "Español"}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate("/#contact", false)}
                  className="px-6 py-2.5 text-[13px] font-semibold bg-espresso text-white rounded-full hover:bg-cocoa transition-all duration-300 cursor-pointer shadow-sm"
                >
                  {t.hero.cta1}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* ═══════════════════════════════════════
          MOBILE TOP HEADER — Floating Island Pill
          ═══════════════════════════════════════ */}
      <div className="fixed top-4 left-0 right-0 z-40 flex justify-center pointer-events-none md:hidden">
        <div className="w-[calc(100%-2rem)] max-w-md pointer-events-auto">
          <div
            className="flex items-center justify-between px-4 py-2.5 rounded-full"
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 8px 32px rgba(26, 18, 16, 0.08)",
            }}
          >
            {/* Logo + DIS — left aligned */}
            <a href="/" onClick={(e) => { e.preventDefault(); goHome(); }} className="flex items-center gap-1.5 text-decoration-none">
              <Image src="/assets/dis-logo.png" alt="DIS" width={100} height={30} className="h-5 w-auto" priority />
              <span
                className="text-[15px] font-black tracking-[0.06em] select-none"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                <span className="text-crimson">DIS</span><span className="text-espresso">.</span>
              </span>
            </a>

            {/* Language toggle — right */}
            <button
              onClick={cycleLanguage}
              className="flex items-center gap-1 text-[11px] text-walnut/60 font-medium cursor-pointer px-2.5 py-1.5 rounded-full hover:bg-espresso/[0.05] active:scale-95 transition-all bg-espresso/[0.03]"
            >
              <GlobeSimple size={13} className="text-crimson/80" />
              <span className="font-bold text-espresso">{localeLabels[locale]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MOBILE BOTTOM NAVBAR — True Floating Liquid Glass Capsule
          ═══════════════════════════════════════ */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none md:hidden">
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-[calc(100%-2rem)] max-w-md pointer-events-auto"
        >
          <div
            className="rounded-full px-3 py-2.5 shadow-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(30px) saturate(220%)",
              WebkitBackdropFilter: "blur(30px) saturate(220%)",
              border: "1px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 12px 40px rgba(26, 18, 16, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1)",
            }}
          >
            <div className="flex items-center justify-around">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                const label = t.nav[item.key as keyof typeof t.nav];
                const isActive = item.isPage && pathname === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href, item.isPage)}
                    className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full transition-all duration-300 active:scale-95 group cursor-pointer"
                  >
                    <Icon
                      size={22}
                      weight={isActive ? "fill" : "regular"}
                      className={`transition-colors ${isActive ? "text-crimson" : "text-walnut/50 group-active:text-crimson"}`}
                    />
                    <span className={`text-[9px] font-medium uppercase tracking-wider ${isActive ? "text-crimson" : "text-walnut/40 group-active:text-crimson"}`}>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
