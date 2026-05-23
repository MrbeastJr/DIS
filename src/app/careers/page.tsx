"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowRight, MapPin, Clock, PaperPlaneRight, ShareNetwork } from "@phosphor-icons/react";
import { useConfig } from "@/context/ConfigContext";
import toast from "react-hot-toast";

export default function CareersPage() {
  const { config } = useConfig();
  
  const handleShare = async (jobTitle: string) => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `DIS Group Careers: ${jobTitle}`,
          text: `Check out this open position at DIS Group: ${jobTitle}`,
          url: url,
        });
      } catch (err) {
        console.log("Share canceled or failed", err);
      }
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-snow text-espresso selection:bg-crimson selection:text-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-espresso/[0.03] rounded-full flex items-center justify-center mx-auto mb-8 border border-espresso/[0.05]">
            <Briefcase size={32} className="text-crimson/80" />
          </div>
          
          <h1 className="text-display-md md:text-display-lg font-bold mb-6 text-espresso tracking-tight">
            Join the Future of African Logistics & Trade
          </h1>
          
          <p className="text-body-lg text-walnut/70 max-w-2xl mx-auto leading-relaxed">
            We are always on the lookout for exceptional talent to help us bridge markets across Africa and the globe. See our open roles below.
          </p>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pb-32">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Open Positions (1)
        </h2>

        {/* Job Card: Social Media Manager */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-espresso mb-3">Social Media & Community Manager</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-walnut/60">
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md">
                  <MapPin size={16} /> Remote / Hybrid (Lagos)
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md">
                  <Clock size={16} /> Full-Time
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => handleShare("Social Media & Community Manager")}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-100 text-espresso font-bold text-sm rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                <span>Share</span>
                <ShareNetwork size={18} weight="bold" className="ml-2" />
              </button>
              <a
                href={`mailto:${config?.emailAddress || "okeycongo@gmail.com"}?subject=Application:%20Social%20Media%20Manager&body=Hello%20DIS%20Team,%0A%0AI%20am%20writing%20to%20apply%20for%20the%20Social%20Media%20Manager%20position.%20Please%20find%20my%20portfolio%20and%20CV%20attached.%0A%0A[Attach%20CV%20Here]`}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-crimson text-white font-bold text-sm rounded-full hover:bg-crimson-dark transition-all duration-300 shadow-md shadow-crimson/20"
                style={{ textDecoration: "none" }}
              >
                <span>Apply via Email</span>
                <PaperPlaneRight size={18} weight="fill" className="ml-2" />
              </a>
            </div>
          </div>

          <div className="space-y-6 text-walnut/80 text-sm leading-relaxed">
            <div>
              <h4 className="font-bold text-espresso mb-2">About the Role</h4>
              <p>
                We are looking for a creative, highly motivated Social Media Manager to take ownership of DIS&apos;s online presence. You will be responsible for building our corporate brand, engaging with our B2B community across major platforms (LinkedIn, Facebook, Instagram), and communicating our expertise in global procurement, logistics, and trading.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-espresso mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside space-y-1.5 ml-1">
                <li>Develop and execute a comprehensive social media strategy tailored for a B2B audience.</li>
                <li>Create high-quality, professional visual and written content (graphics, short-form video, copy).</li>
                <li>Manage and grow the official DIS LinkedIn, Facebook, and Instagram profiles.</li>
                <li>Monitor industry trends in African supply chains and global trade to keep our content relevant.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-espresso mb-2">Requirements</h4>
              <ul className="list-disc list-inside space-y-1.5 ml-1">
                <li>Proven experience managing corporate social media accounts (preferably in B2B, logistics, or corporate services).</li>
                <li>Exceptional copywriting skills with an eye for modern digital aesthetics.</li>
                <li>Proficiency in design tools (e.g., Canva, Figma, Adobe Creative Suite).</li>
                <li>Self-starter with the ability to work independently in a remote/hybrid environment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
