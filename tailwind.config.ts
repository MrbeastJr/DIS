import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── PRIMARY: White spectrum ── */
        white: "#FFFFFF",
        snow: "#FAFAFA",
        cream: "#F5F4F0",
        pearl: "#EDEBE7",
        silk: "#E2E0DC",

        /* ── SECONDARY: Brownish-black spectrum ── */
        espresso: "#1A1210",
        cocoa: "#2A1F14",
        walnut: "#3D2E1F",
        umber: "#5C4A38",
        clay: "#7A6B5D",
        sand: "#A89B8C",

        /* ── ACCENT: Rich red ── */
        crimson: {
          DEFAULT: "#8B2020",
          light: "#A33030",
          dark: "#6B1818",
          muted: "rgba(139, 32, 32, 0.1)",
        },

        /* ── Neutrals ── */
        slate: "#48453F",
        mist: "#B5AFA6",
        fog: "#D5D0CA",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        display: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.8rem, 5.5vw, 5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.2rem, 4.5vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.8rem, 3.5vw, 3rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
        "display-sm": [
          "clamp(1.4rem, 2.5vw, 2.2rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em" },
        ],
        "body-xl": ["1.375rem", { lineHeight: "1.65" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.08em" },
        ],
      },
      spacing: {
        section: "clamp(5rem, 12vh, 10rem)",
        "section-lg": "clamp(7rem, 16vh, 14rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        marquee: "marquee 12s linear infinite",
        "marquee-reverse": "marquee-reverse 12s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "shimmer-slow": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
