"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface ConfigData {
  companyName?: string;
  whatsappNumber?: string;
  emailAddress?: string;
  rcNumber?: string;
  officeDrCongo?: string;
  officeNigeria?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

interface ConfigContextProps {
  config: ConfigData | null;
  isLoading: boolean;
}

const ConfigContext = createContext<ConfigContextProps>({ config: null, isLoading: true });

const DEFAULT_CONFIG: ConfigData = {
  companyName: "DIGITAL INTEGRATED SERVICES RDC",
  whatsappNumber: "+243 990 301 518",
  emailAddress: "okeycongo@gmail.com",
  rcNumber: "RC: 1492798 | ID.NAT.14-A-180",
  officeDrCongo: "32, Av. Sendwe / Des Usines, C/Lubumbashi, Haut-Katanga",
  officeNigeria: "2 Olugbenga St, Amuwo Odofin, Lagos",
  facebookUrl: "https://www.facebook.com/DigitalRationalServicesLtd/",
  linkedinUrl: "https://www.linkedin.com/in/okey-francis-chibueze-3b803063",
  instagramUrl: "#"
};

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<ConfigData>(DEFAULT_CONFIG);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/config/`);
        if (res.ok) {
          const data = await res.json();
          // Merge API data over the defaults, ignoring null/empty fields
          const mergedConfig = { ...DEFAULT_CONFIG };
          for (const key in data) {
            if (data[key]) {
              (mergedConfig as any)[key] = data[key];
            }
          }
          setConfig(mergedConfig);
        }
      } catch (error) {
        console.error("Failed to fetch global config:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ config, isLoading }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
