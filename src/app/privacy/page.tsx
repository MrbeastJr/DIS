"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "@phosphor-icons/react";

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="bg-white min-h-screen text-espresso w-full max-w-full overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-pearl/30 border-b border-espresso/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-crimson/10 mb-6"
          >
            <ShieldCheck size={32} className="text-crimson" weight="fill" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-espresso mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-walnut/70 max-w-2xl mx-auto"
          >
            At DIGITAL INTEGRATED SERVICES RDC, we are committed to protecting your privacy and ensuring your personal information is handled securely.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-walnut/50 mt-8 font-medium"
          >
            Last Updated: {currentDate}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-headings:text-espresso prose-headings:font-bold prose-p:text-walnut/80 prose-a:text-crimson prose-li:text-walnut/80">
          
          <h2>1. Introduction</h2>
          <p>
            DIGITAL INTEGRATED SERVICES RDC (referred to as &quot;DIS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a subsidiary of COFRANCE INTEGRATED CONCEPTS (NIG) Ltd (RC:1492798), operates the DIS website and associated services. This Privacy Policy outlines how we collect, use, and protect your personal information when you engage with our Trading, Logistics, Consulting, and Procurement services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information when you interact with our services:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and physical address.</li>
            <li><strong>Business Information:</strong> Company name, registration details, and professional contact information.</li>
            <li><strong>Transaction Data:</strong> Details of orders, logistics tracking, and service engagements.</li>
            <li><strong>Communication Data:</strong> Messages sent via WhatsApp, email, or our contact forms.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Your information is used for the following purposes:</p>
          <ul>
            <li>To provide and manage our services across DR Congo, Nigeria, and global hubs.</li>
            <li>To process transactions, generate invoices, and fulfill logistics or trading orders.</li>
            <li>To communicate important updates, service changes, and marketing promotions (where permitted).</li>
            <li>To comply with legal obligations, including customs clearance and corporate compliance.</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal data to third parties. We may share your data with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted third-party vendors (such as shipping carriers and payment processors) necessary to fulfill our services.</li>
            <li><strong>Legal Authorities:</strong> When required by law, regulation, or legal process to protect the rights, property, or safety of DIS, our clients, or others.</li>
            <li><strong>Affiliates:</strong> Between DIGITAL INTEGRATED SERVICES RDC and our parent company in Nigeria for operational coherence.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to safeguard your personal data against unauthorized access, loss, or alteration. While we strive to protect your data, no transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites or services (e.g., WhatsApp, LinkedIn, Facebook). We are not responsible for the privacy practices of these external platforms.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:
          </p>
          <div className="bg-pearl/50 p-6 rounded-2xl border border-espresso/5 mt-6">
            <p className="m-0"><strong>DIGITAL INTEGRATED SERVICES RDC</strong></p>
            <p className="m-0 mt-2">
              <strong>DR Congo:</strong> <a href="https://www.google.com/maps/search/?api=1&query=32+Av.+jason+sendwe%2Fdes+Usines%2C+Lubumbashi%2C+Haut-Katanga%2C+Democratic+Republic+of+the+Congo." target="_blank" rel="noopener noreferrer" className="hover:underline text-crimson">32 Av. jason sendwe/des Usines, Lubumbashi, Haut-Katanga, Democratic Republic of the Congo.</a>
            </p>
            <p className="m-0">
              <strong>Nigeria:</strong> <a href="https://www.google.com/maps/search/?api=1&query=Kano+plaza+B07%2C+Trade+Fair%2C+Lagos+Nigeria" target="_blank" rel="noopener noreferrer" className="hover:underline text-crimson">Kano plaza B07, Trade Fair, Lagos Nigeria</a>
            </p>
            <p className="m-0 mt-2"><strong>Email:</strong> okeycongo@gmail.com</p>
            <p className="m-0"><strong>WhatsApp:</strong> +243 990 301 518</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
