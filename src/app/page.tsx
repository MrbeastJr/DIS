"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import TrustStrip from "@/sections/TrustStrip";
import StackingServiceCards from "@/sections/StackingServiceCards";
import InteractivePieChart from "@/sections/InteractivePieChart";
import IndustriesSection from "@/sections/IndustriesSection";
import GlobalReachSection from "@/sections/GlobalReachSection";
import ProcessFlowSection from "@/sections/ProcessFlowSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FinalCTASection from "@/sections/FinalCTASection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("dis_loader_complete");
      if (hasLoaded === "true") {
        setLoading(false);
      }
    }
  }, []);

  const handleLoaderDone = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dis_loader_complete", "true");
    }
    setLoading(false);
  };

  useLenis();

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderDone} />}
      </AnimatePresence>

      {/* Main Site */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <CursorGlow />
            <Navbar />
            <main>
              <HeroSection />
              <TrustStrip />
              <StackingServiceCards />
              <InteractivePieChart />
              <IndustriesSection />
              <GlobalReachSection />
              <ProcessFlowSection />
              <TestimonialsSection />
              <FinalCTASection />
            </main>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
