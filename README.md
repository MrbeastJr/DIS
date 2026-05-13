# DIS — Digital Integrated Services

> **Corporate website for DIGITAL INTEGRATED SERVICES RDC** — a modern African logistics, consulting, procurement, beauty/cosmetic trading, and global commerce enterprise.

**CEO:** Okey Francis CHIBUEZE  
**Subsidiary:** COFRAN... (NIG) Ltd — RC: 1492798  
**Hubs:** Lubumbashi (DR Congo) · Lagos (Nigeria)  
**WhatsApp Business:** +243 990 301 518

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 14** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Animation | **Framer Motion** + **GSAP ScrollTrigger** |
| Smooth Scroll | **Lenis** |
| Icons | **Phosphor Icons** |
| i18n | Custom React Context (`EN` · `FR` · `ES`) |

---

## 📂 Project Structure

```
DIS (gig)/
├── public/
│   └── assets/
│       ├── dis-logo.png          # Main company logo (transparent PNG)
│       ├── hero-video.mp4        # Cinematic hero background loop
│       └── hero-poster.jpg       # Static fallback for hero section
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with LanguageProvider
│   │   ├── page.tsx              # Homepage (preloader + all sections)
│   │   ├── globals.css           # Design system + utilities
│   │   └── services/
│   │       └── [service]/
│   │           └── page.tsx      # Dynamic service detail pages
│   ├── components/
│   │   ├── Navbar.tsx            # Desktop floating pill + mobile bottom dock
│   │   ├── Footer.tsx            # Full corporate footer
│   │   ├── Loader.tsx            # Preloader with logo shimmer
│   │   ├── WhatsAppButton.tsx    # Floating WhatsApp CTA
│   │   └── CursorGlow.tsx        # Desktop cursor radial glow
│   ├── sections/
│   │   ├── HeroSection.tsx       # Video hero with parallax
│   │   ├── TrustStrip.tsx        # Dual-row scrolling marquee
│   │   ├── StackingServiceCards.tsx  # GSAP sticky stacking cards
│   │   ├── InteractivePieChart.tsx   # Service breakdown chart
│   │   ├── GlobalReachSection.tsx    # Canvas world map
│   │   ├── ProcessFlowSection.tsx    # 4-step vertical grid
│   │   ├── TestimonialsSection.tsx   # Partner testimonial carousel
│   │   └── FinalCTASection.tsx       # Contact CTA section
│   ├── context/
│   │   └── LanguageContext.tsx    # i18n provider (EN/FR/ES)
│   ├── lib/
│   │   └── translations.ts       # Full translation dictionary
│   └── hooks/
│       └── useLenis.ts           # Smooth scroll hook
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--white` | `#FFFFFF` | Primary background |
| `--snow` | `#FAFAFA` | Subtle section variant |
| `--cream` | `#F5F4F0` | Card backgrounds |
| `--pearl` | `#EDEBE7` | Alternate card bg |
| `--espresso` | `#1A1210` | Primary text + dark sections |
| `--cocoa` | `#2A1F14` | Dark accents |
| `--walnut` | `#3D2E1F` | Secondary text |
| `--crimson` | `#8B2020` | Brand accent (institutional red) |
| `--crimson-light` | `#A33030` | Hover states |

---

## 🌐 Internationalization (i18n)

The site supports **English**, **French**, and **Spanish** through a React Context provider wrapping the entire app tree.

- **Desktop:** Language dropdown in the top navbar
- **Mobile:** Language cycle button in bottom navigation dock (EN → FR → ES)
- **Coverage:** All sections including service detail pages, FAQs, and UI labels

---

## 📱 Navigation Architecture

- **Desktop:** Fixed floating "island" top pill with glassmorphic backdrop
- **Mobile:** Bottom navigation dock with 5 tabs + language cycle button
- **Service pages:** Simplified layout without full footer (own CTA banner)

---

## 🛒 Trading / E-Commerce

The `/services/trading` page includes a **mini storefront** with hardcoded cosmetic products. Each product card has a direct **"Order via WhatsApp"** button with pre-filled messages.

> **Future:** Products will be managed via Django REST API (see `BACKEND_API_SPEC.md`)

---

## 🔧 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🚢 Deployment

Optimized for **Vercel** deployment:

1. Push to GitHub
2. Connect repo to Vercel
3. Set framework preset to **Next.js**
4. Deploy

### Required Assets

Place these files in `public/assets/` before deployment:

| File | Purpose |
|------|---------|
| `dis-logo.png` | Company logo (transparent, high-res) |
| `hero-video.mp4` | Cinematic hero background loop |
| `hero-poster.jpg` | Static fallback image for hero |

---

## 📋 Backend Integration

See **`BACKEND_API_SPEC.md`** for the complete Django REST API contract including:
- Product catalog endpoints
- Contact/inquiry submissions
- Testimonial management
- Analytics tracking

---

## 📄 License

Private — © 2026 DIGITAL INTEGRATED SERVICES RDC. All rights reserved.
"# DIS" 
