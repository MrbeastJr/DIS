"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import {
  LinkedinLogo, FacebookLogo,
  EnvelopeSimple, MapPin, WhatsappLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  const { t } = useLanguage();

  const about = t?.nav?.about || "About";
  const services = t?.nav?.services || "Services";
  const industries = t?.nav?.industries || "Industries";
  const copyright = t?.footer?.copyright || `© ${new Date().getFullYear()} DIGITAL INTEGRATED SERVICES RDC. All rights reserved.`;

  return (
    <footer
      className="relative border-t border-white/10 w-full max-w-full overflow-hidden text-white bg-espresso"
      style={{ backgroundColor: "#1A1210" }}
    >
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/assets/dis-logo.png"
                alt="DIGITAL INTEGRATED SERVICES RDC"
                width={150}
                height={45}
                className="h-10 w-auto mb-4 object-contain"
              />
              <p className="text-body-sm text-white leading-relaxed mb-1 font-bold tracking-wide">
                Okey Francis CHIBUEZE
              </p>
              <p className="text-xs text-crimson/90 uppercase tracking-widest font-bold mb-3">
                CEO &middot; Founder
              </p>
              <p className="text-xs text-white/80 leading-relaxed mb-4 font-medium">
                DIGITAL INTEGRATED SERVICES RDC<br />
                <span className="text-[10px] text-white/50 block mt-0.5">Subsidiary of COFRAN... (NIG) Ltd (RC:1492798)</span>
              </p>
              <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                Beauty, cosmetic & personal care &middot; Trading, Logistics and Consulting Services.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/okey-francis-chibueze-3b803063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/90 hover:text-crimson hover:bg-white/20 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </a>
                <a
                  href="https://www.facebook.com/DigitalRationalServicesLtd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/90 hover:text-crimson hover:bg-white/20 transition-all duration-300"
                  aria-label="Facebook Page"
                >
                  <FacebookLogo size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-crimson/90 mb-6 font-bold">Company</h4>
              <ul className="space-y-3">
                {[about, services, industries, "Careers"].map((label, i) => (
                  <li key={i}>
                    <a href="#" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-crimson/90 mb-6 font-bold">Services</h4>
              <ul className="space-y-3">
                {["Logistics", "Consulting", "Procurement", "Trading", "Beauty & Cosmetics"].map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-crimson/90 mb-6 font-bold">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body-sm text-white/90 font-medium">
                  <MapPin size={18} className="text-crimson mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">32, Av. Sendwe / Des Usines, Lubumbashi, Haut-Katanga, DR Congo</span>
                </li>
                <li className="flex items-start gap-3 text-body-sm text-white/90 font-medium">
                  <MapPin size={18} className="text-crimson mt-0.5 flex-shrink-0" />
                  <span>Nigeria Hub: 2, Olugbenga St, Lagos</span>
                </li>
                <li className="flex items-start gap-3 text-body-sm text-white/90 font-medium">
                  <EnvelopeSimple size={18} className="text-crimson mt-0.5 flex-shrink-0" />
                  <a href="mailto:okeycongo@gmail.com" className="text-white/90 hover:underline">okeycongo@gmail.com</a>
                </li>
                <li className="flex items-start gap-3 text-body-sm text-white/90 font-medium">
                  <WhatsappLogo size={18} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  <a href="https://wa.me/243990301518" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:underline">
                    +243 990 301 518
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/70 font-medium">{copyright}</p>
            <div className="flex gap-6">
              <span className="text-xs text-white/50">RC: 1492798</span>
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors font-medium">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
