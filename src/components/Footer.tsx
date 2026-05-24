"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useConfig } from "@/context/ConfigContext";
import Image from "next/image";
import Link from "next/link";
import {
  LinkedinLogo, FacebookLogo,
  EnvelopeSimple, MapPin, WhatsappLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  const { t } = useLanguage();
  const { config } = useConfig();

  const about = t?.nav?.about || "About";
  const services = t?.nav?.services || "Services";
  const industries = t?.nav?.industries || "Industries";
  const copyright = t?.footer?.copyright || `© ${new Date().getFullYear()} DIGITAL INTEGRATED SERVICES RDC. All rights reserved.`;

  return (
    <footer
      className="relative border-t border-white/10 w-full max-w-full overflow-hidden text-white bg-espresso"
      style={{ backgroundColor: "#1A1210" }}
    >
      <div className="section-padding pt-16 pb-28 md:pt-20 md:pb-24 lg:pb-20">
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
              <p className="text-white/70 text-body-sm max-w-sm mt-6">
                {config?.companyName || "DIGITAL INTEGRATED SERVICES RDC"}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <a href={config?.linkedinUrl || "#"} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-crimson transition-all" aria-label="LinkedIn">
                  <LinkedinLogo size={20} weight="fill" />
                </a>
                <a href={config?.facebookUrl || "#"} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-crimson transition-all" aria-label="Facebook">
                  <FacebookLogo size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-crimson/90 mb-6 font-bold">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">{about}</Link></li>
                <li><Link href="/achievements" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">{t.nav.achievements || "Achievements"}</Link></li>
                <li><Link href="/#services" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">{services}</Link></li>
                <li><Link href="/#industries" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">{industries}</Link></li>
                <li><Link href="/careers" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-crimson/90 mb-6 font-bold">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/logistics" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">Logistics</Link></li>
                <li><Link href="/services/consulting" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">Consulting</Link></li>
                <li><Link href="/services/procurement" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">Procurement</Link></li>
                <li><Link href="/services/trading" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">Trading</Link></li>
                <li><Link href="/services/trading" className="text-body-sm text-white/90 hover:text-white font-medium transition-colors duration-300">Beauty & Cosmetics</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-crimson/90 mb-6 font-bold">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body-sm text-white/70">
                  <MapPin size={18} className="text-crimson mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>DR Congo:</strong><br/>
                    {config?.officeDrCongo || "32, Av. Sendwe / Des Usines, C/Lubumbashi, Haut-Katanga"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-sm text-white/70">
                  <MapPin size={18} className="text-crimson mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Nigeria:</strong><br/>
                    {config?.officeNigeria || "Kano plaza B07, Trade Fair, Lagos Nigeria"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-sm text-white/70">
                  <EnvelopeSimple size={18} className="text-crimson mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${config?.emailAddress || "okeycongo@gmail.com"}`} className="hover:text-white transition-colors">
                    {config?.emailAddress || "okeycongo@gmail.com"}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-body-sm text-white/90 font-medium">
                  <WhatsappLogo size={18} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  <a href={`https://wa.me/${(config?.whatsappNumber || "243990301518").replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:underline">
                    {config?.whatsappNumber || "+243 990 301 518"}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 pb-12 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-xs text-white/70 font-medium">{copyright}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center">
              <span className="text-xs text-white/50">{config?.rcNumber || "RC: 1492798 | ID.NAT.14-A-180"}</span>
              <Link href="/privacy" className="text-xs text-white/70 hover:text-white transition-colors font-medium">Privacy Policy</Link>
              <Link href="/admin" className="text-xs text-white/70 hover:text-crimson transition-colors font-bold">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
