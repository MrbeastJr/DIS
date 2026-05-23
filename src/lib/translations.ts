// i18n translations architecture
export type Locale = "en" | "fr" | "es";

export interface ServiceDetailTranslation {
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    industries: string;
    about: string;
    contact: string;
    trading?: string;
    logistics?: string;
    achievements?: string;
  };
  hero: {
    headline: string;
    subtext: string;
    cta1: string;
    cta2: string;
  };
  trustStrip: {
    items: string[];
  };
  services: {
    title: string;
    subtitle: string;
    logistics: { title: string; description: string };
    consulting: { title: string; description: string };
    procurement: { title: string; description: string };
    trading: { title: string; description: string };
  };
  serviceDetail: {
    backToHome: string;
    serviceArea: string;
    storefront: string;
    overview: string;
    keyCapabilities: string;
    readyCta: string;
    readyCtaSub: string;
    chatWhatsApp: string;
    orderVia: string;
    verifiedCatalog: string;
    featuredProducts: string;
    featuredProductsSub: string;
    faqTitle: string;
    faqSub: string;
    logistics: ServiceDetailTranslation;
    consulting: ServiceDetailTranslation;
    procurement: ServiceDetailTranslation;
    trading: ServiceDetailTranslation;
    faqs: { q: string; a: string }[];
    logisticsFaqs: { q: string; a: string; whatsappMsg: string }[];
    consultingFaqs: { q: string; a: string; whatsappMsg: string }[];
    procurementFaqs: { q: string; a: string; whatsappMsg: string }[];
    makeEnquiry: string;
  };
  globalReach: {
    title: string;
    subtitle: string;
  };
  industries: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSub: string;
    items: { name: string; desc: string }[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    title: string;
  };
  cta: {
    headline: string;
    button: string;
  };
  floatingOrder: string;
  loader: {
    subtitle: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  pieChart: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSub: string;
    scrollProgress: string;
    segments: { label: string }[];
  };
  tradingStore: {
    badge: string;
    heroTitle: string;
    heroSub: string;
    productsCount: string;
    freeDelivery: string;
    searchPlaceholder: string;
    showing: string;
    products: string;
    noResults: string;
    noResultsSub: string;
    categories: string[];
    trustBadges: { title: string; sub: string }[];
    bulkTitle: string;
    bulkSub: string;
    bulkCta: string;
    orderVia: string;
    reviews: string;
    deliveryBadge: string;
    authenticBadge: string;
    packagingBadge: string;
    productNames: string[];
    productDescs: string[];
  };
  aboutPage: {
    backToHome: string;
    badge: string;
    heroTitle: string;
    heroSub: string;
    statFounded: string;
    statCountries: string;
    statServices: string;
    statRC: string;
    storyLabel: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    servicesLabel: string;
    servicesTitle: string;
    svcLogistics: string; svcLogisticsDesc: string;
    svcConsulting: string; svcConsultingDesc: string;
    svcProcurement: string; svcProcurementDesc: string;
    svcTrading: string; svcTradingDesc: string;
    ceoLabel: string;
    ceoTitle: string;
    ceoP1: string;
    ceoP2: string;
    ceoP3: string;
    hqLabel: string;
    valuesLabel: string;
    valuesTitle: string;
    val1Title: string; val1Desc: string;
    val2Title: string; val2Desc: string;
    val3Title: string; val3Desc: string;
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
  };
  achievementsPage: {
    heroTitle: string;
    heroSub: string;
    researchTitle: string;
    researchDesc: string;
    insights: { title: string; content: string; fullText: string }[];
    milestonesTitle: string;
    milestones: { year: string; role: string; details: string }[];
    readPaper: string;
    closePaper: string;
  };
}

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      industries: "Industries",
      about: "About",
      contact: "Contact",
      trading: "Trading",
      logistics: "Logistics",
      achievements: "Achievements",
    },
    hero: {
      headline: "Modern Logistics &\nStrategic Consulting for\nAfrican Commerce",
      subtext:
        "We bridge markets, streamline supply chains, and unlock growth across Africa and beyond — with precision, integrity, and global perspective.",
      cta1: "Talk to Us",
      cta2: "Explore Services",
    },
    trustStrip: {
      items: [
        "Logistics",
        "Procurement",
        "Consulting",
        "Trading",
        "Cross-border Operations",
        "Supply Chain Management",
        "Strategic Advisory",
        "Market Entry",
      ],
    },
    services: {
      title: "What We Do",
      subtitle: "Core capabilities that drive global operations",
      logistics: {
        title: "Logistics",
        description:
          "End-to-end freight management, warehousing, and distribution networks spanning Africa, the Middle East, and Asia.",
      },
      consulting: {
        title: "Strategic Consulting",
        description:
          "Market entry strategies, operational audits, and enterprise transformation for companies entering or expanding across African markets.",
      },
      procurement: {
        title: "Procurement",
        description:
          "Global sourcing, vendor management, and procurement optimization — ensuring quality, cost efficiency, and compliance at scale.",
      },
      trading: {
        title: "Trading",
        description:
          "Cross-border commodity trading and commercial partnerships that connect African producers to international markets.",
      },
    },
    serviceDetail: {
      backToHome: "Back to Home",
      serviceArea: "Corporate Service Area",
      storefront: "Mini E-Commerce Storefront",
      overview: "Overview",
      keyCapabilities: "Key Capabilities",
      readyCta: "Ready to accelerate your operations?",
      readyCtaSub: "Engage directly with CEO Okey Francis CHIBUEZE on WhatsApp for swift intermediary matching, fast cargo routes, or ordering curated cosmetics.",
      chatWhatsApp: "Chat on WhatsApp",
      orderVia: "Order via WhatsApp",
      verifiedCatalog: "Verified Catalog",
      featuredProducts: "Featured Premium Cosmetics",
      featuredProductsSub: "Explore our fast-moving skin glow and personal care imports. Click any item to directly initiate a wholesale or retail fulfillment order via WhatsApp.",
      faqTitle: "Common Inquiries",
      faqSub: "Clear answers regarding intermediary representation, operational structuring, and integrated software portals.",
      logistics: {
        title: "Global Logistics & Express Cargo",
        subtitle: "End-to-end supply chain orchestration across DR Congo, Nigeria, and global trade corridors.",
        description: "We develop, maintain distribution networks, transport facilities, express cargo routes, and wholesale fulfillment logistics. Led by CEO Okey Francis CHIBUEZE, our registered framework bridges regional requirements with global efficiency.",
        capabilities: [
          "Cross-Border Customs Clearance & Compliance Pipelines",
          "Express Cargo & Multimodal Transportation Networks",
          "Secure Warehousing across Lubumbashi & Lagos Hubs",
          "Direct Shipping & Freight Intermediary Representation",
        ],
      },
      consulting: {
        title: "Strategic Consulting Services",
        subtitle: "Actionable advisory for emerging market entry, procurement optimization, and corporate structuring.",
        description: "Navigate the commercial and regulatory landscapes of Sub-Saharan Africa with verified local boots-on-the-ground intelligence. Our consulting suite delivers tailored market access strategy, intermediary introductions, and structured compliance roadmaps.",
        capabilities: [
          "Market Feasibility Audits & Expansion Playbooks",
          "Intermediary Alignment for Global Buyers & Sellers",
          "Licensing, Incorporation Support & RC Entity Alignment",
          "Scalable Enterprise Platform & Digital Infrastructure",
        ],
      },
      procurement: {
        title: "Procurement & Strategic Sourcing",
        subtitle: "High-integrity sourcing solutions connecting international demand with trusted supply chains.",
        description: "Acting as secure intermediaries, we introduce verified buyers and sellers while managing quality assurance, escrow guidelines, and pricing parity. From commercial assets to high-end lifestyle items, we guarantee institutional precision.",
        capabilities: [
          "Structured Vendor Audits & Global Pricing Parity",
          "Direct Intermediary Introduction Protocols",
          "Wholesale Commodity & Finished Product Sourcing",
          "Quality Assurance & Multi-Point Supply Verification",
        ],
      },
      trading: {
        title: "Beauty, Cosmetic & Commodity Trading",
        subtitle: "Premium cosmetic and lifestyle imports managed with global retail execution.",
        description: "DIGITAL INTEGRATED SERVICES RDC maintains a thriving commercial marketplace specializing in highly curated skin wellness, glow formulations, and personal care products distributed directly across our local hubs.",
        capabilities: [
          "Wholesale & Retail Network Optimization",
          "Premium Skin Glow & Exfoliating Lotions Distribution",
          "Direct Consumer Fulfillment via WhatsApp Channels",
          "Secure Direct Payment Channels & Local Shipping",
        ],
      },
      faqs: [
        {
          q: "How do we initiate a consulting or trade partnership?",
          a: "Reach out directly via WhatsApp (+243 990 301 518). CEO Okey Francis CHIBUEZE and our senior associates outline clear operational requirements, intermediary validation, and transactional pathways instantly.",
        },
        {
          q: "What digital and backend infrastructure do you support?",
          a: "We deploy enterprise architectures optimized for scaling businesses, incorporating high-performance backend environments for custom client management, ledgers, and seamless messaging integrations.",
        },
        {
          q: "Are your regional entities fully verified and licensed?",
          a: "Absolutely. DIGITAL INTEGRATED SERVICES RDC operates in direct alignment with our registered Nigerian trading headquarter (Subsidiary of COFRANCE INTEGRATED CONCEPT LTD RC:1492798), guaranteeing institutional transparency.",
        },
      ],
      makeEnquiry: "Make more enquiry",
      consultingFaqs: [
        {
          q: "How do we initiate a consulting engagement with DIS?",
          a: "Simply reach out via WhatsApp to CEO Okey Francis CHIBUEZE (+243 990 301 518). We start with a free discovery call to understand your business goals, market of interest, and timeline before presenting a tailored advisory roadmap.",
          whatsappMsg: "Hello CEO, I am interested in initiating a consulting engagement with DIS. Could we schedule a discovery call?",
        },
        {
          q: "What African markets do you have on-the-ground expertise in?",
          a: "We have direct operational presence and verified networks across DR Congo, Nigeria, Ghana, Kenya, and South Africa. We also facilitate entry into UAE, China, Turkey, India, and Saudi Arabia through our global partner network.",
          whatsappMsg: "Hello CEO, I would like to know more about your on-the-ground expertise in specific African markets.",
        },
        {
          q: "Can you help us set up a registered business entity in Africa?",
          a: "Yes. We provide full corporate structuring support including entity formation, RC registration, licensing, and regulatory compliance alignment in both DR Congo and Nigeria.",
          whatsappMsg: "Hello CEO, I need assistance with setting up a registered business entity in Africa.",
        },
        {
          q: "Do you offer ongoing advisory or just one-time project consulting?",
          a: "Both. We provide one-time market entry feasibility studies as well as long-term retained advisory for companies with ongoing African operations. Our 100% client retention rate reflects the depth of our engagement.",
          whatsappMsg: "Hello CEO, I'd like to discuss ongoing advisory and retained consulting services.",
        },
        {
          q: "How do you vet and introduce intermediary partners?",
          a: "Every intermediary, supplier, or buyer in our network undergoes a multi-point verification process including legal entity checks, trade references, and on-site due diligence before any introduction is made.",
          whatsappMsg: "Hello CEO, I have questions about your intermediary vetting and partner introduction process.",
        },
        {
          q: "What industries have you delivered consulting projects for?",
          a: "We've served 12+ industries including mining, oil & gas, agriculture, FMCG, construction, pharmaceuticals, telecommunications, and real estate. Each project is led by sector specialists with deep regional knowledge.",
          whatsappMsg: "Hello CEO, I'd like to learn about your consulting experience in my specific industry.",
        },
      ],
      logisticsFaqs: [
        {
          q: "Do you handle intercontinental shipping as well as local state-level deliveries?",
          a: "Yes, we manage both. We handle massive intercontinental ocean/air freight (e.g., Asia to Africa), cross-border transport between African nations, and localized state-to-state or city-to-city deliveries within DR Congo and Nigeria.",
          whatsappMsg: "Hello CEO, I have an inquiry regarding your intercontinental and local state-level shipping logistics.",
        },
        {
          q: "How long does shipping typically take?",
          a: "Intercontinental ocean freight takes 3-5 weeks. Air freight arrives within 3-7 days. For local state-level or intra-country logistics, deliveries typically take 24-72 hours depending on the route.",
          whatsappMsg: "Hello CEO, I would like to make an inquiry about your shipping timelines and express delivery options.",
        },
        {
          q: "Do you handle customs clearance for imported goods?",
          a: "Yes, we provide end-to-end customs clearance. Our deep understanding of local regulations ensures your cargo passes through border control seamlessly without unexpected delays or fines.",
          whatsappMsg: "Hello CEO, I need assistance or an inquiry regarding customs clearance for imported goods.",
        },
        {
          q: "Is my cargo insured during transit?",
          a: "Absolutely. All cargo managed by DIS is fully insured against loss or damage during transit, giving you complete peace of mind from departure to final delivery.",
          whatsappMsg: "Hello CEO, I have an inquiry regarding your cargo insurance policies.",
        },
        {
          q: "Can you consolidate shipments from multiple international suppliers?",
          a: "Yes, our hub facilities in major trade cities allow us to consolidate goods from various suppliers into a single container, significantly reducing your overall shipping costs.",
          whatsappMsg: "Hello CEO, I'm interested in consolidating shipments from multiple suppliers and would like to know more.",
        },
        {
          q: "What types of goods are restricted or require special handling?",
          a: "While we transport a wide range of commercial goods, hazardous materials, cold-chain pharmaceuticals, and specific chemicals require special documentation. Contact us directly to verify your specific cargo.",
          whatsappMsg: "Hello CEO, I want to make an inquiry about shipping restricted or specialized goods.",
        },
      ],
      procurementFaqs: [
        {
          q: "How do you ensure the quality of sourced goods?",
          a: "We conduct rigorous multi-point supplier auditing, on-site inspections, and quality assurance checks before any shipment is dispatched, ensuring all commodities and finished goods meet international standards.",
          whatsappMsg: "Hello CEO, I have an inquiry about your quality assurance process for sourced goods.",
        },
        {
          q: "Can you source specialized or niche products?",
          a: "Yes. Our global network spans 5 continents, allowing us to source a wide variety of products ranging from heavy machinery and raw materials to premium lifestyle goods and custom components.",
          whatsappMsg: "Hello CEO, I would like to know if you can source a specific specialized product for my business.",
        },
        {
          q: "What is your typical turnaround time for procurement?",
          a: "For standard commodities and verified suppliers, we guarantee a 48-hour turnaround from order placement to dispatch. Custom or highly specialized sourcing may take longer depending on the specifications.",
          whatsappMsg: "Hello CEO, I want to inquire about the estimated turnaround time for a procurement order.",
        },
        {
          q: "How do you manage price fluctuations and negotiate costs?",
          a: "Our data-driven procurement strategies and direct relationships with manufacturers allow us to bypass middlemen, delivering an average of 30% cost savings while maintaining competitive global pricing parity.",
          whatsappMsg: "Hello CEO, I am interested in how DIS can help optimize our procurement costs.",
        },
        {
          q: "Do you handle the payment and escrow process?",
          a: "Absolutely. We provide secure transaction facilitation with structured payment guidelines and escrow oversight, protecting both buyers and sellers throughout the procurement lifecycle.",
          whatsappMsg: "Hello CEO, I have questions regarding your escrow management and secure payment processes.",
        },
        {
          q: "Can you integrate procurement with logistics?",
          a: "Yes. Procurement and logistics are seamlessly integrated at DIS. Once goods are sourced and verified, our multimodal transport networks handle the entire journey to your final destination.",
          whatsappMsg: "Hello CEO, I would like to discuss an integrated procurement and logistics solution.",
        },
      ],
    },
    globalReach: {
      title: "Global Reach",
      subtitle:
        "Strategic presence across key markets in Africa, the Middle East, and Asia.",
    },
    industries: {
      sectionLabel: "Industries We Serve",
      sectionTitle: "Powering Sectors That Move Africa",
      sectionSub: "From natural resources to consumer goods, we deliver logistics, procurement, and consulting solutions across Africa's most critical industries.",
      items: [
        { name: "Mining & Minerals", desc: "Equipment supply, camp logistics, and mineral export facilitation" },
        { name: "Oil & Gas", desc: "Upstream supply chain, refinery logistics, and energy procurement" },
        { name: "FMCG & Retail", desc: "Fast-moving consumer goods distribution and retail supply chains" },
        { name: "Agriculture", desc: "Farm-to-market logistics, agro-processing support, and export" },
        { name: "Construction", desc: "Building materials sourcing, heavy equipment, and site logistics" },
        { name: "Pharmaceuticals", desc: "Cold-chain logistics, medical supply procurement, and compliance" },
        { name: "Energy & Power", desc: "Power infrastructure supply, solar equipment, and grid logistics" },
        { name: "Transport & Freight", desc: "Cross-border trucking, freight forwarding, and fleet management" },
        { name: "Real Estate", desc: "Development consulting, material procurement, and facility management" },
        { name: "Manufacturing", desc: "Raw material sourcing, factory setup consulting, and export logistics" },
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        {
          title: "Consultation",
          description:
            "Deep-dive into your operational landscape, market challenges, and growth objectives.",
        },
        {
          title: "Strategy",
          description:
            "Bespoke strategies built on data, local intelligence, and global best practices.",
        },
        {
          title: "Execution",
          description:
            "Precision deployment with dedicated teams, real-time tracking, and quality assurance.",
        },
        {
          title: "Delivery",
          description:
            "Measurable outcomes, transparent reporting, and continuous optimization.",
        },
      ],
    },
    testimonials: {
      title: "What Our Partners Say",
    },
    cta: {
      headline: "Built for businesses\nthat move globally.",
      button: "Start a Conversation",
    },
    floatingOrder: "Order Now",
    loader: {
      subtitle: "Building Global Operational Excellence",
    },
    footer: {
      tagline: "Precision. Integrity. Global Perspective.",
      copyright: `© ${new Date().getFullYear()} DIS Group. All rights reserved.`,
    },
    pieChart: {
      sectionLabel: "Our Business DNA",
      sectionTitle: "Where We Focus",
      sectionSub: "How we allocate our operational focus and resources across our four core service pillars.",
      scrollProgress: "",
      segments: [
        { label: "Logistics" },
        { label: "Consulting" },
        { label: "Procurement" },
        { label: "Trading" },
      ],
    },
    tradingStore: {
      badge: "DIS Beauty, Cosmetics & Accessories",
      heroTitle: "Premium Beauty\n& Mobile Collection",
      heroSub: "Curated skincare, body care, fragrance, and mobile accessory imports. Direct from trusted global suppliers to your doorstep.",
      productsCount: "Products",
      freeDelivery: "Free Local Delivery",
      searchPlaceholder: "Search products...",
      showing: "Showing",
      products: "products",
      noResults: "No products found",
      noResultsSub: "Try adjusting your search or filter",
      categories: ["All", "Cosmetics", "Electronics", "Appliances", "Fashion", "Vehicles", "Industrial", "Agriculture", "Construction", "General"],
      trustBadges: [
        { title: "Free Local Delivery", sub: "Lubumbashi & Lagos" },
        { title: "Authentic Products", sub: "100% genuine imports" },
        { title: "WhatsApp Ordering", sub: "Chat to buy instantly" },
        { title: "Secure Packaging", sub: "Safe & discreet delivery" },
      ],
      bulkTitle: "Want to order in bulk?",
      bulkSub: "Wholesale pricing available for retailers, salons, and distributors. Contact CEO Okey Francis CHIBUEZE directly.",
      bulkCta: "Chat for Wholesale Pricing",
      orderVia: "Order via WhatsApp",
      reviews: "reviews",
      deliveryBadge: "Free delivery in Lubumbashi & Lagos",
      authenticBadge: "Authentic product guarantee",
      packagingBadge: "Secure packaging & handling",
      productNames: [
        "Exfoliating Radiance Body Scrub",
        "Premium Glow Serum & Essence",
        "Pure Herbal Beauty X7 Lotion",
        "Natural Organic Shea Butter Blend",
        "Coconut & Argan Hair Treatment Oil",
        "Rose Petal Hydrating Face Mist",
        "Luxury Oud & Vanilla Perfume Oil",
        "Brightening Vitamin C Body Cream",
      ],
      productDescs: [
        "Deep skin renewal scrub targeting dead cells and restoring smooth natural brilliance. Enriched with natural exfoliants.",
        "Highly concentrated daily glow serum enriched with advanced botanical extracts for radiant luminous skin.",
        "Rich nourishing body lotion for full-day moisture locking and even toning. Lightweight, non-greasy formula.",
        "100% pure imported body butter formulated for flawless deep layer skin conditioning and protection.",
        "Intensive hair repair oil combining coconut and argan to restore shine, reduce breakage, and deeply nourish.",
        "Refreshing rose-infused facial mist for instant hydration boost. Perfect for on-the-go skin revival.",
        "Long-lasting Arabian-inspired perfume oil with rich oud, warm vanilla, and subtle musk notes.",
        "Vitamin C enriched body cream for brightening, evening skin tone, and providing all-day antioxidant protection.",
      ],
    },
    aboutPage: {
      backToHome: "Back to Home",
      badge: "About DIS Group",
      heroTitle: "Bridging Markets. Building Futures",
      heroSub: "Digital Integrated Services RDC is a subsidiary of COFRANCE INTEGRATED CONCEPT LTD — a verified, multi-sector enterprise connecting African markets to global supply chains through premium logistics, consulting, procurement, and trading services.",
      statFounded: "Founded",
      statCountries: "Countries Served",
      statServices: "Core Services",
      statRC: "Registered Entity",
      storyLabel: "Our Story",
      storyTitle: "From Vision to Impact",
      storyP1: "Founded by Okey Francis CHIBUEZE, Digital Integrated Services RDC was born from a deep understanding of the logistical challenges facing businesses across Central and West Africa. With operational hubs in Lubumbashi (DR Congo) and Lagos (Nigeria), DIS bridges the gap between African enterprises and global markets.",
      storyP2: "As a subsidiary of COFRANCE INTEGRATED CONCEPT LTD (RC: 1492798), we operate with full regulatory compliance and a commitment to transparency. Our services span logistics, strategic consulting, procurement, and a curated beauty, cosmetics & mobile accessories trading platform.",
      servicesLabel: "What We Do",
      servicesTitle: "Four Pillars of Excellence",
      svcLogistics: "Logistics & Supply Chain",
      svcLogisticsDesc: "Multimodal cargo transport, warehousing, customs clearance, and last-mile delivery across 15+ trade corridors spanning Africa, the Middle East, and Asia.",
      svcConsulting: "Strategic Consulting",
      svcConsultingDesc: "Market entry strategies, intermediary alignment, corporate structuring, and operational audits for businesses expanding into African markets.",
      svcProcurement: "Global Procurement",
      svcProcurementDesc: "Verified supplier networks across 5 continents, competitive pricing parity, vendor auditing, and escrow-managed transactions with 48h turnaround.",
      svcTrading: "Beauty & Cosmetics Trading",
      svcTradingDesc: "Curated premium skincare, body care, hair care, and fragrance products imported and distributed across the DRC and West Africa.",
      ceoLabel: "Leadership",
      ceoTitle: "Meet Our CEO",
      ceoP1: "Okey Francis CHIBUEZE is the visionary behind Digital Integrated Services RDC and COFRANCE INTEGRATED CONCEPT LTD. With extensive experience in cross-border commerce, supply chain management, and strategic business consulting, he has built a multi-sector enterprise that connects African businesses to global opportunities.",
      ceoP2: "Under his leadership, DIS has expanded operations across DR Congo, Nigeria, Ghana, UAE, China, South Africa, Kenya, Turkey, India, and Saudi Arabia — establishing a trusted network of partners, suppliers, and clients spanning five continents.",
      ceoP3: "His hands-on approach and direct accessibility via WhatsApp reflect a commitment to personal service that sets DIS apart from conventional corporate intermediaries.",
      hqLabel: "Headquarters",
      valuesLabel: "Our Values",
      valuesTitle: "What Drives Us",
      val1Title: "Integrity & Compliance",
      val1Desc: "Fully registered, RC-verified operations with transparent processes and documented compliance at every step.",
      val2Title: "Partnership First",
      val2Desc: "We don't just serve clients — we build lasting partnerships through direct CEO access, trust, and mutual growth.",
      val3Title: "Global Vision, Local Expertise",
      val3Desc: "Deep knowledge of African markets combined with international supply chain reach across five continents.",
      ctaTitle: "Ready to Work With Us?",
      ctaSub: "Connect directly with CEO Okey Francis CHIBUEZE to discuss your business needs.",
      ctaButton: "Chat on WhatsApp",
    },
    achievementsPage: {
      heroTitle: "African Logistics Insights & Milestones",
      heroSub: "Exploring strategic frameworks and structural solutions for cross-border supply chain optimization in Sub-Saharan Africa.",
      researchTitle: "Applied Research & Strategic Insights",
      researchDesc: "Practical frameworks developed by CEO Okey Francis CHIBUEZE to address systemic inefficiencies in regional trade.",
      insights: [
        { title: "Cross-Border Customs Harmonization", content: "Proposed comprehensive digital clearance protocols to reduce transit delays across the DRC-Zambia border, improving cargo velocity by an estimated 24%.", fullText: "This comprehensive research paper outlines a structural framework for digitizing cross-border customs protocols between the Democratic Republic of Congo (DRC) and Zambia, a critical node in the Southern African Development Community (SADC) logistics corridor.\n\nHistorically, reliance on fragmented, manual ledger systems has led to severe bottlenecking, resulting in average border wait times exceeding 48 hours for heavy freight. This paper proposes a unified, API-driven manifest sharing architecture that integrates disparate national customs databases into a centralized digital clearinghouse.\n\nThe study demonstrates that by preemptively submitting electronic manifests and utilizing automated risk-assessment algorithms, processing friction can be drastically minimized. Empirical modeling suggests that full implementation of this digital framework would reduce average border wait times to under 12 hours. Furthermore, the paper details the necessary hardware infrastructure required at key border posts, the crucial process of stakeholder alignment among customs officials and logistics providers, and projects a 24% improvement in cargo velocity, translating to a substantial economic boost for regional trade volumes." },
        { title: "Multimodal Transport Integration", content: "Researched the efficacy of combining rail and road freight networks to lower procurement logistics costs for industrial sectors in Haut-Katanga.", fullText: "This white paper provides an in-depth analysis of the cost-benefit ratio associated with adopting multimodal transport networks within the Haut-Katanga province—a primary hub for mineral extraction and heavy industrial procurement.\n\nTraditionally, industrial sectors in this region have relied almost exclusively on road transport, exposing supply chains to volatility from deteriorating road infrastructure, seasonal weather disruptions, and fluctuating fuel costs. This research advocates for a strategic shift towards a hybrid rail-road model. By migrating 40% of heavy industrial procurement to upgraded rail corridors—while maintaining road transport for last-mile delivery—enterprises can achieve significant cost optimization.\n\nThe paper presents a comprehensive analysis of current rail capacities, identifies critical bottlenecks, and outlines the required capital investments in regional transfer nodes. Through detailed economic modeling, the research concludes that this multimodal integration yields a 15% reduction in overall landed costs while simultaneously building a robust risk mitigation strategy against regional infrastructure deficits." },
        { title: "Supply Chain Resilience in Emerging Markets", content: "Developed adaptive procurement models that mitigate disruptions caused by currency volatility and geopolitical shifts in West Africa.", fullText: "This detailed academic analysis explores the construction of resilient supply chains in highly volatile emerging markets, with a specific focus on West Africa.\n\nOperating in these environments presents unique challenges, including acute currency volatility, sudden geopolitical shifts, and infrastructural unpredictability. The paper introduces an adaptive procurement model designed specifically to insulate logistics networks from these macroeconomic shocks. Central to this model is the strategic implementation of decentralized warehousing, which prevents localized disruptions from causing total systemic failure.\n\nFurthermore, the research details multi-currency hedging strategies tailored for import-export operators, and advocates for dynamic supplier diversification to mitigate single-point-of-failure risks. Drawing on extensive case studies from recent market fluctuations in Nigeria and neighboring regions, the analysis proves that organizations employing this adaptive model consistently maintain margin stability and prevent catastrophic stockouts during periods of severe economic stress." }
      ],
      milestonesTitle: "Professional Milestones",
      milestones: [
        { year: "2024", role: "Founder & CEO, DIS Group", details: "Established a comprehensive logistics and trading network bridging Dubai, Lagos, and Lubumbashi." },
        { year: "2022", role: "Lead Consultant, Cross-Border Trade", details: "Advised multinational mining corporations on localized procurement compliance and secure freight corridors." },
        { year: "2019", role: "Senior Logistics Director", details: "Spearheaded a regional supply chain overhaul for a major FMCG distributor, increasing regional distribution efficiency." },
        { year: "2013", role: "Founder, COFRANCE INTEGRATED CONCEPT LTD", details: "Founded the parent company (RC: 1492798) that serves as the foundation for multi-sector enterprise connecting African markets to global supply chains." }
      ],
      readPaper: "Read Research Paper",
      closePaper: "Close Paper"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      industries: "Industries",
      about: "À Propos",
      contact: "Contact",
      trading: "Négoce",
      logistics: "Logistique",
      achievements: "Réalisations",
    },
    hero: {
      headline: "Logistique Moderne &\nConseil Stratégique pour\nle Commerce Africain",
      subtext:
        "Nous connectons les marchés, optimisons les chaînes d'approvisionnement et stimulons la croissance à travers l'Afrique et au-delà.",
      cta1: "Contactez-nous",
      cta2: "Explorer les Services",
    },
    trustStrip: {
      items: [
        "Logistique",
        "Approvisionnement",
        "Conseil",
        "Commerce",
        "Opérations Transfrontalières",
        "Gestion de la Chaîne",
        "Conseil Stratégique",
        "Entrée sur le Marché",
      ],
    },
    services: {
      title: "Ce Que Nous Faisons",
      subtitle: "Capacités fondamentales qui pilotent les opérations mondiales",
      logistics: {
        title: "Logistique",
        description:
          "Gestion du fret de bout en bout, entreposage et réseaux de distribution couvrant l'Afrique, le Moyen-Orient et l'Asie.",
      },
      consulting: {
        title: "Conseil Stratégique",
        description:
          "Stratégies d'entrée sur le marché, audits opérationnels et transformation d'entreprise.",
      },
      procurement: {
        title: "Approvisionnement",
        description:
          "Sourcing mondial, gestion des fournisseurs et optimisation des achats — qualité, efficacité et conformité à grande échelle.",
      },
      trading: {
        title: "Commerce",
        description:
          "Commerce transfrontalier de matières premières et partenariats commerciaux connectant les producteurs africains aux marchés internationaux.",
      },
    },
    serviceDetail: {
      backToHome: "Retour à l'Accueil",
      serviceArea: "Domaine de Service",
      storefront: "Mini Boutique en Ligne",
      overview: "Aperçu",
      keyCapabilities: "Capacités Clés",
      readyCta: "Prêt à accélérer vos opérations ?",
      readyCtaSub: "Contactez directement le PDG Okey Francis CHIBUEZE sur WhatsApp pour une mise en relation rapide, des itinéraires de fret ou commander des cosmétiques.",
      chatWhatsApp: "Discuter sur WhatsApp",
      orderVia: "Commander via WhatsApp",
      verifiedCatalog: "Catalogue Vérifié",
      featuredProducts: "Cosmétiques Premium en Vedette",
      featuredProductsSub: "Explorez nos importations de soins de la peau et de beauté. Cliquez sur un article pour initier une commande en gros ou au détail via WhatsApp.",
      faqTitle: "Questions Fréquentes",
      faqSub: "Réponses claires concernant la représentation intermédiaire, la structuration opérationnelle et les portails logiciels intégrés.",
      logistics: {
        title: "Logistique Mondiale & Cargo Express",
        subtitle: "Orchestration de bout en bout de la chaîne d'approvisionnement à travers la RD Congo, le Nigeria et les corridors commerciaux mondiaux.",
        description: "Nous développons et maintenons des réseaux de distribution, des installations de transport, des itinéraires de cargo express et une logistique de fulfillment en gros. Dirigé par le PDG Okey Francis CHIBUEZE, notre cadre certifié relie les besoins régionaux à l'efficacité mondiale.",
        capabilities: [
          "Dédouanement Transfrontalier & Pipelines de Conformité",
          "Cargo Express & Réseaux de Transport Multimodal",
          "Entreposage Sécurisé à Lubumbashi & Lagos",
          "Expédition Directe & Représentation d'Intermédiaire de Fret",
        ],
      },
      consulting: {
        title: "Services de Conseil Stratégique",
        subtitle: "Conseil actionnable pour l'entrée sur les marchés émergents, l'optimisation des achats et la structuration d'entreprise.",
        description: "Naviguez dans les paysages commerciaux et réglementaires de l'Afrique subsaharienne avec une intelligence locale vérifiée sur le terrain. Notre suite de conseil offre des stratégies d'accès au marché sur mesure et des feuilles de route de conformité structurées.",
        capabilities: [
          "Audits de Faisabilité de Marché & Plans d'Expansion",
          "Alignement d'Intermédiaires pour Acheteurs & Vendeurs Mondiaux",
          "Support de Licence, Incorporation & Alignement d'Entité RC",
          "Plateforme Entreprise Évolutive & Infrastructure Numérique",
        ],
      },
      procurement: {
        title: "Approvisionnement & Sourcing Stratégique",
        subtitle: "Solutions de sourcing à haute intégrité connectant la demande internationale aux chaînes d'approvisionnement de confiance.",
        description: "En tant qu'intermédiaires sécurisés, nous introduisons des acheteurs et vendeurs vérifiés tout en gérant l'assurance qualité, les directives d'escrow et la parité des prix. Des actifs commerciaux aux articles de style de vie haut de gamme.",
        capabilities: [
          "Audits Structurés de Fournisseurs & Parité des Prix Mondiaux",
          "Protocoles d'Introduction d'Intermédiaires Directs",
          "Sourcing de Commodités en Gros & Produits Finis",
          "Assurance Qualité & Vérification Multi-Points",
        ],
      },
      trading: {
        title: "Commerce de Beauté, Cosmétiques & Matières Premières",
        subtitle: "Importations premium de cosmétiques et de style de vie gérées avec une exécution retail mondiale.",
        description: "DIGITAL INTEGRATED SERVICES RDC maintient un marché commercial florissant spécialisé dans le bien-être cutané hautement sélectionné, les formulations éclat et les produits de soins personnels distribués directement via nos hubs locaux.",
        capabilities: [
          "Optimisation des Réseaux de Gros & Détail",
          "Distribution de Lotions Premium Éclat & Exfoliantes",
          "Fulfillment Direct Consommateur via Canaux WhatsApp",
          "Canaux de Paiement Direct Sécurisés & Expédition Locale",
        ],
      },
      faqs: [
        {
          q: "Comment initier un partenariat de conseil ou de commerce ?",
          a: "Contactez-nous directement via WhatsApp (+243 990 301 518). Le PDG Okey Francis CHIBUEZE et nos associés seniors définissent les exigences opérationnelles et les voies transactionnelles instantanément.",
        },
        {
          q: "Quelle infrastructure numérique et backend supportez-vous ?",
          a: "Nous déployons des architectures d'entreprise optimisées pour la mise à l'échelle, intégrant des environnements backend haute performance pour la gestion des clients et les intégrations de messagerie.",
        },
        {
          q: "Vos entités régionales sont-elles entièrement vérifiées et agréées ?",
          a: "Absolument. DIGITAL INTEGRATED SERVICES RDC opère en alignement direct avec notre siège commercial nigérian enregistré (Filiale de COFRANCE INTEGRATED CONCEPT LTD RC:1492798), garantissant la transparence institutionnelle.",
        },
      ],
      makeEnquiry: "Faire plus de demandes",
      consultingFaqs: [
        {
          q: "Comment initier un engagement de conseil avec DIS ?",
          a: "Contactez simplement le PDG Okey Francis CHIBUEZE via WhatsApp (+243 990 301 518). Nous commençons par un appel découverte gratuit pour comprendre vos objectifs, le marché ciblé et le calendrier avant de présenter une feuille de route sur mesure.",
          whatsappMsg: "Bonjour PDG, je suis intéressé par un engagement de conseil avec DIS. Pourrions-nous planifier un appel découverte ?",
        },
        {
          q: "Dans quels marchés africains avez-vous une expertise sur le terrain ?",
          a: "Nous avons une présence opérationnelle directe en RDC, au Nigeria, au Ghana, au Kenya et en Afrique du Sud. Nous facilitons également l'entrée aux EAU, en Chine, en Turquie, en Inde et en Arabie Saoudite via notre réseau mondial.",
          whatsappMsg: "Bonjour PDG, je voudrais en savoir plus sur votre expertise terrain dans des marchés africains spécifiques.",
        },
        {
          q: "Pouvez-vous nous aider à créer une entité commerciale enregistrée en Afrique ?",
          a: "Oui. Nous offrons un soutien complet en structuration d'entreprise incluant la formation d'entité, l'enregistrement RC, les licences et la conformité réglementaire en RDC et au Nigeria.",
          whatsappMsg: "Bonjour PDG, j'ai besoin d'aide pour créer une entité commerciale enregistrée en Afrique.",
        },
        {
          q: "Proposez-vous un conseil continu ou uniquement des projets ponctuels ?",
          a: "Les deux. Nous fournissons des études de faisabilité ponctuelles ainsi qu'un conseil retenu à long terme pour les entreprises ayant des opérations africaines en cours. Notre taux de fidélisation de 100% témoigne de la profondeur de nos engagements.",
          whatsappMsg: "Bonjour PDG, je souhaite discuter de vos services de conseil continu et de consultation retenue.",
        },
        {
          q: "Comment vérifiez-vous et présentez-vous les partenaires intermédiaires ?",
          a: "Chaque intermédiaire, fournisseur ou acheteur de notre réseau fait l'objet d'un processus de vérification multi-points incluant des contrôles juridiques, des références commerciales et une diligence raisonnable sur site.",
          whatsappMsg: "Bonjour PDG, j'ai des questions sur votre processus de vérification et d'introduction de partenaires.",
        },
        {
          q: "Dans quelles industries avez-vous réalisé des projets de conseil ?",
          a: "Nous avons servi plus de 12 industries dont les mines, le pétrole et gaz, l'agriculture, les FMCG, la construction, la pharmacie, les télécommunications et l'immobilier. Chaque projet est dirigé par des spécialistes sectoriels.",
          whatsappMsg: "Bonjour PDG, je voudrais connaître votre expérience de conseil dans mon industrie spécifique.",
        },
      ],
      logisticsFaqs: [
        {
          q: "Gérez-vous l'expédition intercontinentale ainsi que les livraisons locales/provinciales ?",
          a: "Oui, nous gérons les deux. Nous nous occupons du fret intercontinental (par ex. de l'Asie vers l'Afrique), du transport transfrontalier entre nations africaines, ainsi que des livraisons locales de province à province ou de ville à ville en RDC et au Nigeria.",
          whatsappMsg: "Bonjour PDG, j'ai une demande concernant vos services logistiques intercontinentaux et locaux.",
        },
        {
          q: "Combien de temps prend généralement l'expédition ?",
          a: "Le fret maritime intercontinental prend de 3 à 5 semaines. Le fret aérien arrive en 3 à 7 jours. Pour la logistique locale ou intra-pays, les livraisons prennent généralement de 24 à 72 heures.",
          whatsappMsg: "Bonjour PDG, je voudrais me renseigner sur vos délais d'expédition et options de livraison express.",
        },
        {
          q: "Gérez-vous le dédouanement pour les marchandises importées ?",
          a: "Oui, nous fournissons un dédouanement de bout en bout. Notre compréhension approfondie des réglementations locales garantit que votre cargaison passe les contrôles frontaliers sans retards.",
          whatsappMsg: "Bonjour PDG, j'ai besoin d'assistance ou d'informations concernant le dédouanement des marchandises importées.",
        },
        {
          q: "Ma cargaison est-elle assurée pendant le transit ?",
          a: "Absolument. Toute cargaison gérée par DIS est entièrement assurée contre la perte ou les dommages pendant le transit, vous offrant une totale tranquillité d'esprit.",
          whatsappMsg: "Bonjour PDG, j'ai une question concernant vos polices d'assurance fret.",
        },
        {
          q: "Pouvez-vous consolider les envois de plusieurs fournisseurs internationaux ?",
          a: "Oui, nos installations dans les grandes villes commerciales nous permettent de consolider les marchandises de divers fournisseurs dans un seul conteneur, réduisant considérablement vos coûts.",
          whatsappMsg: "Bonjour PDG, je suis intéressé par la consolidation d'envois de plusieurs fournisseurs et souhaiterais en savoir plus.",
        },
        {
          q: "Quels types de marchandises nécessitent une manutention spéciale ?",
          a: "Bien que nous transportions une large gamme de biens commerciaux, les matières dangereuses et les produits chimiques spécifiques nécessitent une documentation spéciale.",
          whatsappMsg: "Bonjour PDG, je souhaite me renseigner sur l'expédition de marchandises restreintes ou spécialisées.",
        },
      ],
      procurementFaqs: [
        {
          q: "Comment garantissez-vous la qualité des biens approvisionnés ?",
          a: "Nous effectuons des audits rigoureux de fournisseurs à multiples points, des inspections sur site et des contrôles d'assurance qualité avant toute expédition, garantissant que tous les produits répondent aux normes internationales.",
          whatsappMsg: "Bonjour PDG, j'ai une question sur votre processus d'assurance qualité pour les biens approvisionnés.",
        },
        {
          q: "Pouvez-vous sourcer des produits spécialisés ou de niche ?",
          a: "Oui. Notre réseau mondial s'étend sur 5 continents, nous permettant de sourcer une grande variété de produits allant de la machinerie lourde et des matières premières aux biens de style de vie haut de gamme.",
          whatsappMsg: "Bonjour PDG, je voudrais savoir si vous pouvez sourcer un produit spécialisé spécifique pour mon entreprise.",
        },
        {
          q: "Quel est votre délai d'exécution typique pour l'approvisionnement ?",
          a: "Pour les produits standard et les fournisseurs vérifiés, nous garantissons un délai de 48 heures entre la commande et l'expédition. Les approvisionnements sur mesure peuvent prendre plus de temps selon les spécifications.",
          whatsappMsg: "Bonjour PDG, je souhaite me renseigner sur le délai estimé pour une commande d'approvisionnement.",
        },
        {
          q: "Comment gérez-vous les fluctuations de prix et les négociations ?",
          a: "Nos stratégies d'approvisionnement basées sur les données et nos relations directes avec les fabricants nous permettent de contourner les intermédiaires, offrant en moyenne 30% d'économies tout en maintenant une tarification compétitive.",
          whatsappMsg: "Bonjour PDG, je suis intéressé par la façon dont DIS peut aider à optimiser nos coûts d'approvisionnement.",
        },
        {
          q: "Gérez-vous le processus de paiement et d'escrow ?",
          a: "Absolument. Nous facilitons les transactions sécurisées avec des directives de paiement structurées et une supervision escrow, protégeant à la fois les acheteurs et les vendeurs.",
          whatsappMsg: "Bonjour PDG, j'ai des questions concernant votre gestion de l'escrow et vos processus de paiement sécurisé.",
        },
        {
          q: "Pouvez-vous intégrer l'approvisionnement avec la logistique ?",
          a: "Oui. L'approvisionnement et la logistique sont parfaitement intégrés chez DIS. Une fois les biens sourcés et vérifiés, nos réseaux de transport multimodal gèrent l'ensemble du voyage jusqu'à votre destination finale.",
          whatsappMsg: "Bonjour PDG, je voudrais discuter d'une solution intégrée d'approvisionnement et de logistique.",
        },
      ],
    },
    globalReach: {
      title: "Portée Mondiale",
      subtitle:
        "Présence stratégique sur les marchés clés en Afrique, au Moyen-Orient et en Asie.",
    },
    industries: {
      sectionLabel: "Industries Que Nous Servons",
      sectionTitle: "Alimenter les Secteurs Qui Font Avancer l'Afrique",
      sectionSub: "Des ressources naturelles aux biens de consommation, nous offrons des solutions de logistique, d'approvisionnement et de conseil dans les industries les plus critiques d'Afrique.",
      items: [
        { name: "Mines & Minéraux", desc: "Fourniture d'équipements, logistique de camp et facilitation d'exportation minière" },
        { name: "Pétrole & Gaz", desc: "Chaîne d'approvisionnement amont, logistique de raffinage et approvisionnement énergétique" },
        { name: "FMCG & Détail", desc: "Distribution de biens de consommation rapide et chaînes d'approvisionnement de détail" },
        { name: "Agriculture", desc: "Logistique ferme-marché, soutien agro-industriel et exportation" },
        { name: "Construction", desc: "Approvisionnement en matériaux, équipements lourds et logistique de chantier" },
        { name: "Pharmaceutique", desc: "Logistique de chaîne du froid, approvisionnement médical et conformité" },
        { name: "Énergie & Électricité", desc: "Fourniture d'infrastructure électrique, équipements solaires et logistique de réseau" },
        { name: "Transport & Fret", desc: "Camionnage transfrontalier, expédition de fret et gestion de flotte" },
        { name: "Immobilier", desc: "Conseil en développement, approvisionnement en matériaux et gestion d'établissements" },
        { name: "Fabrication", desc: "Approvisionnement en matières premières, conseil en mise en place d'usine et logistique d'exportation" },
      ],
    },
    process: {
      title: "Notre Processus",
      steps: [
        {
          title: "Consultation",
          description:
            "Analyse approfondie de votre paysage opérationnel et de vos objectifs de croissance.",
        },
        {
          title: "Stratégie",
          description:
            "Stratégies sur mesure basées sur les données et les meilleures pratiques mondiales.",
        },
        {
          title: "Exécution",
          description:
            "Déploiement de précision avec des équipes dédiées et un suivi en temps réel.",
        },
        {
          title: "Livraison",
          description:
            "Résultats mesurables, rapports transparents et optimisation continue.",
        },
      ],
    },
    testimonials: {
      title: "Ce Que Disent Nos Partenaires",
    },
    cta: {
      headline: "Conçu pour les entreprises\nqui opèrent mondialement.",
      button: "Démarrer une Conversation",
    },
    floatingOrder: "Commander",
    loader: {
      subtitle: "Construire l'Excellence Opérationnelle Mondiale",
    },
    footer: {
      tagline: "Précision. Intégrité. Perspective Mondiale.",
      copyright: `© ${new Date().getFullYear()} DIS Group. Tous droits réservés.`,
    },
    pieChart: {
      sectionLabel: "Notre ADN Commercial",
      sectionTitle: "Où Nous Concentrons Nos Efforts",
      sectionSub: "Comment nous répartissons notre attention opérationnelle et nos ressources entre nos quatre piliers de services.",
      scrollProgress: "",
      segments: [
        { label: "Logistique" },
        { label: "Conseil" },
        { label: "Approvisionnement" },
        { label: "Commerce" },
      ],
    },
    tradingStore: {
      badge: "DIS Beauté, Cosmétiques & Accessoires",
      heroTitle: "Collection Beauté\n& Mobile Premium",
      heroSub: "Importations sélectionnées de soins de la peau, soins corporels, parfums et accessoires mobiles. Directement de fournisseurs mondiaux de confiance.",
      productsCount: "Produits",
      freeDelivery: "Livraison Locale Gratuite",
      searchPlaceholder: "Rechercher des produits...",
      showing: "Affichage de",
      products: "produits",
      noResults: "Aucun produit trouvé",
      noResultsSub: "Essayez d'ajuster votre recherche ou filtre",
      categories: ["Tous", "Cosmétiques", "Électronique", "Électroménager", "Mode", "Véhicules", "Industriel", "Agriculture", "Construction", "Général"],
      trustBadges: [
        { title: "Livraison Locale Gratuite", sub: "Lubumbashi & Lagos" },
        { title: "Produits Authentiques", sub: "100% importations authentiques" },
        { title: "Commande WhatsApp", sub: "Discutez pour acheter" },
        { title: "Emballage Sécurisé", sub: "Livraison sûre & discrète" },
      ],
      bulkTitle: "Vous souhaitez commander en gros ?",
      bulkSub: "Prix de gros disponibles pour les détaillants, salons et distributeurs. Contactez directement le PDG Okey Francis CHIBUEZE.",
      bulkCta: "Discuter pour les Prix de Gros",
      orderVia: "Commander via WhatsApp",
      reviews: "avis",
      deliveryBadge: "Livraison gratuite à Lubumbashi & Lagos",
      authenticBadge: "Garantie de produit authentique",
      packagingBadge: "Emballage sécurisé & soigné",
      productNames: [
        "Gommage Corporel Éclat Exfoliant",
        "Sérum & Essence Éclat Premium",
        "Lotion Beauté Herbale Pure X7",
        "Mélange Beurre de Karité Bio Naturel",
        "Huile Capillaire Coco & Argan",
        "Brume Hydratante aux Pétales de Rose",
        "Huile Parfumée Luxe Oud & Vanille",
        "Crème Corporelle Éclaircissante Vitamine C",
      ],
      productDescs: [
        "Gommage de renouvellement cutané ciblant les cellules mortes et restaurant un éclat naturel lisse. Enrichi en exfoliants naturels.",
        "Sérum éclat quotidien hautement concentré enrichi en extraits botaniques avancés pour une peau radieuse et lumineuse.",
        "Lotion corporelle riche et nourrissante pour une hydratation longue durée et un teint uniforme. Formule légère et non grasse.",
        "Beurre corporel 100% pur importé formulé pour un conditionnement et une protection en profondeur de la peau.",
        "Huile capillaire réparatrice intensive combinant noix de coco et argan pour restaurer la brillance et réduire la casse.",
        "Brume faciale rafraîchissante infusée à la rose pour un boost d'hydratation instantané. Parfaite pour la revitalisation en déplacement.",
        "Huile parfumée d'inspiration arabe longue durée avec oud riche, vanille chaude et notes de musc subtiles.",
        "Crème corporelle enrichie en Vitamine C pour éclaircir, unifier le teint et offrir une protection antioxydante toute la journée.",
      ],
    },
    aboutPage: {
      backToHome: "Retour à l'Accueil",
      badge: "À Propos du Groupe DIS",
      heroTitle: "Relier les Marchés. Construire l'Avenir",
      heroSub: "Digital Integrated Services RDC est une filiale de COFRANCE INTEGRATED CONCEPT LTD — une entreprise multi-sectorielle vérifiée connectant les marchés africains aux chaînes d'approvisionnement mondiales.",
      statFounded: "Fondée",
      statCountries: "Pays Desservis",
      statServices: "Services Principaux",
      statRC: "Entité Enregistrée",
      storyLabel: "Notre Histoire",
      storyTitle: "De la Vision à l'Impact",
      storyP1: "Fondée par Okey Francis CHIBUEZE, Digital Integrated Services RDC est née d'une compréhension profonde des défis logistiques auxquels font face les entreprises d'Afrique centrale et occidentale. Avec des centres opérationnels à Lubumbashi (RDC) et Lagos (Nigeria), DIS comble le fossé entre les entreprises africaines et les marchés mondiaux.",
      storyP2: "En tant que filiale de COFRANCE INTEGRATED CONCEPT LTD (RC: 1492798), nous opérons en pleine conformité réglementaire avec un engagement envers la transparence. Nos services couvrent la logistique, le conseil stratégique, l'approvisionnement et une plateforme de commerce de beauté, cosmétiques et accessoires mobiles.",
      servicesLabel: "Ce Que Nous Faisons",
      servicesTitle: "Quatre Piliers d'Excellence",
      svcLogistics: "Logistique & Chaîne d'Approvisionnement",
      svcLogisticsDesc: "Transport cargo multimodal, entreposage, dédouanement et livraison dernière mile à travers 15+ corridors commerciaux en Afrique, au Moyen-Orient et en Asie.",
      svcConsulting: "Conseil Stratégique",
      svcConsultingDesc: "Stratégies d'entrée sur le marché, alignement d'intermédiaires, structuration d'entreprise et audits opérationnels pour les entreprises s'étendant en Afrique.",
      svcProcurement: "Approvisionnement Mondial",
      svcProcurementDesc: "Réseaux de fournisseurs vérifiés sur 5 continents, parité de prix compétitive, audit de fournisseurs et transactions gérées en séquestre avec délai de 48h.",
      svcTrading: "Commerce Beauté & Cosmétiques",
      svcTradingDesc: "Produits premium de soins de la peau, du corps, des cheveux et parfums importés et distribués en RDC et Afrique de l'Ouest.",
      ceoLabel: "Direction",
      ceoTitle: "Rencontrez Notre PDG",
      ceoP1: "Okey Francis CHIBUEZE est le visionnaire derrière Digital Integrated Services RDC et COFRANCE INTEGRATED CONCEPT LTD. Fort d'une vaste expérience en commerce transfrontalier, gestion de chaîne d'approvisionnement et conseil stratégique, il a bâti une entreprise multi-sectorielle connectant les entreprises africaines aux opportunités mondiales.",
      ceoP2: "Sous sa direction, DIS a étendu ses opérations en RDC, Nigeria, Ghana, EAU, Chine, Afrique du Sud, Kenya, Turquie, Inde et Arabie Saoudite — établissant un réseau de confiance de partenaires, fournisseurs et clients sur cinq continents.",
      ceoP3: "Son approche pratique et son accessibilité directe via WhatsApp reflètent un engagement envers le service personnel qui distingue DIS des intermédiaires corporatifs conventionnels.",
      hqLabel: "Siège Social",
      valuesLabel: "Nos Valeurs",
      valuesTitle: "Ce Qui Nous Anime",
      val1Title: "Intégrité & Conformité",
      val1Desc: "Opérations entièrement enregistrées et vérifiées RC avec des processus transparents et une conformité documentée à chaque étape.",
      val2Title: "Le Partenariat d'Abord",
      val2Desc: "Nous ne servons pas simplement des clients — nous construisons des partenariats durables grâce à un accès direct au PDG, la confiance et la croissance mutuelle.",
      val3Title: "Vision Mondiale, Expertise Locale",
      val3Desc: "Connaissance approfondie des marchés africains combinée à une portée internationale de chaîne d'approvisionnement sur cinq continents.",
      ctaTitle: "Prêt à Travailler Avec Nous ?",
      ctaSub: "Connectez-vous directement avec le PDG Okey Francis CHIBUEZE pour discuter de vos besoins.",
      ctaButton: "Discuter sur WhatsApp",
    },
    achievementsPage: {
      heroTitle: "Perspectives et Jalons de la Logistique Africaine",
      heroSub: "Exploration de cadres stratégiques et de solutions structurelles pour l'optimisation de la chaîne d'approvisionnement transfrontalière en Afrique subsaharienne.",
      researchTitle: "Recherche Appliquée et Perspectives Stratégiques",
      researchDesc: "Cadres pratiques développés par le PDG Okey Francis CHIBUEZE pour résoudre les inefficacités systémiques du commerce régional.",
      insights: [
        { title: "Harmonisation Douanière Transfrontalière", content: "Proposition de protocoles de dédouanement numérique pour réduire les délais de transit, améliorant la vélocité du fret.", fullText: "Ce document de recherche complet décrit un cadre structurel pour la numérisation des protocoles douaniers transfrontaliers entre la République démocratique du Congo (RDC) et la Zambie, un nœud critique dans le corridor logistique de la Communauté de développement de l'Afrique australe (SADC).\n\nHistoriquement, le recours à des systèmes manuels et fragmentés a conduit à de graves goulots d'étranglement, entraînant des temps d'attente moyens aux frontières dépassant 48 heures pour le fret lourd. Ce document propose une architecture unifiée de partage de manifestes pilotée par API qui intègre les bases de données douanières nationales disparates dans un centre de compensation numérique centralisé.\n\nL'étude démontre qu'en soumettant de manière préventive les manifestes électroniques et en utilisant des algorithmes d'évaluation des risques automatisés, les frictions de traitement peuvent être considérablement minimisées. La modélisation empirique suggère que la mise en œuvre complète de ce cadre numérique réduirait les temps d'attente moyens aux frontières à moins de 12 heures. De plus, le document détaille l'infrastructure matérielle nécessaire aux postes frontières clés, le processus crucial d'alignement des parties prenantes, et projette une amélioration de 24 % de la vélocité du fret, se traduisant par un coup de pouce économique substantiel pour les volumes de commerce régional." },
        { title: "Intégration du Transport Multimodal", content: "Recherche sur l'efficacité de la combinaison des réseaux de fret ferroviaire et routier pour réduire les coûts logistiques.", fullText: "Ce livre blanc fournit une analyse approfondie du rapport coût-bénéfice associé à l'adoption de réseaux de transport multimodal dans la province du Haut-Katanga, un pôle principal pour l'extraction minérale et les achats industriels lourds.\n\nTraditionnellement, les secteurs industriels de cette région se sont appuyés presque exclusivement sur le transport routier, exposant les chaînes d'approvisionnement à la volatilité due à la détérioration des infrastructures routières, aux perturbations météorologiques saisonnières et à la fluctuation des coûts des carburants. Cette recherche préconise un virage stratégique vers un modèle hybride rail-route. En migrant 40 % des achats industriels lourds vers des corridors ferroviaires améliorés - tout en maintenant le transport routier pour la livraison sur le dernier kilomètre - les entreprises peuvent réaliser une optimisation significative des coûts.\n\nLe document présente une analyse complète des capacités ferroviaires actuelles, identifie les goulots d'étranglement critiques et décrit les investissements en capital requis dans les nœuds de transfert régionaux. Grâce à une modélisation économique détaillée, la recherche conclut que cette intégration multimodale permet une réduction de 15 % des coûts de débarquement globaux tout en construisant une solide stratégie d'atténuation des risques contre les déficits d'infrastructure régionaux." },
        { title: "Résilience de la Chaîne d'Approvisionnement", content: "Développement de modèles d'approvisionnement adaptatifs atténuant les perturbations causées par la volatilité des devises.", fullText: "Cette analyse académique détaillée explore la construction de chaînes d'approvisionnement résilientes dans des marchés émergents très volatils, avec un accent particulier sur l'Afrique de l'Ouest.\n\nOpérer dans ces environnements présente des défis uniques, notamment une forte volatilité des devises, des changements géopolitiques soudains et une imprévisibilité des infrastructures. Le document introduit un modèle d'approvisionnement adaptatif conçu spécifiquement pour isoler les réseaux logistiques de ces chocs macroéconomiques. Au centre de ce modèle se trouve la mise en œuvre stratégique de l'entreposage décentralisé, qui empêche les perturbations localisées de provoquer une défaillance systémique totale.\n\nDe plus, la recherche détaille des stratégies de couverture multi-devises adaptées aux opérateurs d'import-export, et préconise une diversification dynamique des fournisseurs pour atténuer les risques de point de défaillance unique. S'appuyant sur des études de cas approfondies de récentes fluctuations du marché au Nigeria et dans les régions voisines, l'analyse prouve que les organisations utilisant ce modèle adaptatif maintiennent systématiquement la stabilité de leurs marges et évitent les ruptures de stock catastrophiques pendant les périodes de grave stress économique." }
      ],
      milestonesTitle: "Jalons Professionnels",
      milestones: [
        { year: "2024", role: "Fondateur & PDG, DIS Group", details: "Établissement d'un réseau logistique et commercial complet reliant Dubaï, Lagos et Lubumbashi." },
        { year: "2022", role: "Consultant Principal, Commerce Transfrontalier", details: "Conseil aux multinationales minières sur la conformité des achats localisés." },
        { year: "2019", role: "Directeur Logistique Principal", details: "Direction d'une refonte de la chaîne d'approvisionnement régionale pour un distributeur majeur." },
        { year: "2013", role: "Fondateur, COFRANCE INTEGRATED CONCEPT LTD", details: "A fondé la société mère (RC : 1492798) qui sert de base à une entreprise multisectorielle reliant les marchés africains aux chaînes d'approvisionnement mondiales." }
      ],
      readPaper: "Lire le document de recherche",
      closePaper: "Fermer le document"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      industries: "Industrias",
      about: "Nosotros",
      contact: "Contacto",
      trading: "Comercio",
      logistics: "Logística",
      achievements: "Logros",
    },
    hero: {
      headline: "Logística Moderna y\nConsultoría Estratégica para\nel Comercio Africano",
      subtext:
        "Conectamos mercados, optimizamos cadenas de suministro e impulsamos el crecimiento en África y más allá.",
      cta1: "Contáctenos",
      cta2: "Explorar Servicios",
    },
    trustStrip: {
      items: [
        "Logística",
        "Adquisiciones",
        "Consultoría",
        "Comercio",
        "Operaciones Transfronterizas",
        "Gestión de Cadena",
        "Asesoría Estratégica",
        "Entrada al Mercado",
      ],
    },
    services: {
      title: "Lo Que Hacemos",
      subtitle: "Capacidades fundamentales que impulsan operaciones globales",
      logistics: {
        title: "Logística",
        description:
          "Gestión integral de carga, almacenamiento y redes de distribución en África, Medio Oriente y Asia.",
      },
      consulting: {
        title: "Consultoría Estratégica",
        description:
          "Estrategias de entrada al mercado, auditorías operativas y transformación empresarial.",
      },
      procurement: {
        title: "Adquisiciones",
        description:
          "Abastecimiento global, gestión de proveedores y optimización de compras — calidad, eficiencia y cumplimiento a escala.",
      },
      trading: {
        title: "Comercio",
        description:
          "Comercio transfronterizo de materias primas y alianzas comerciales que conectan productores africanos con mercados internacionales.",
      },
    },
    serviceDetail: {
      backToHome: "Volver al Inicio",
      serviceArea: "Área de Servicio Corporativo",
      storefront: "Mini Tienda en Línea",
      overview: "Descripción General",
      keyCapabilities: "Capacidades Clave",
      readyCta: "¿Listo para acelerar sus operaciones?",
      readyCtaSub: "Contacte directamente al CEO Okey Francis CHIBUEZE en WhatsApp para conexiones rápidas de intermediarios, rutas de carga o pedidos de cosméticos.",
      chatWhatsApp: "Chatear en WhatsApp",
      orderVia: "Pedir por WhatsApp",
      verifiedCatalog: "Catálogo Verificado",
      featuredProducts: "Cosméticos Premium Destacados",
      featuredProductsSub: "Explore nuestras importaciones de cuidado de piel y belleza. Haga clic en cualquier artículo para iniciar un pedido mayorista o minorista a través de WhatsApp.",
      faqTitle: "Consultas Frecuentes",
      faqSub: "Respuestas claras sobre representación intermediaria, estructuración operativa y portales de software integrados.",
      logistics: {
        title: "Logística Global y Carga Express",
        subtitle: "Orquestación integral de la cadena de suministro en RD Congo, Nigeria y corredores comerciales globales.",
        description: "Desarrollamos y mantenemos redes de distribución, instalaciones de transporte, rutas de carga express y logística de fulfillment mayorista. Dirigido por el CEO Okey Francis CHIBUEZE, nuestro marco registrado conecta requisitos regionales con eficiencia global.",
        capabilities: [
          "Despacho Aduanero Transfronterizo y Cadenas de Cumplimiento",
          "Carga Express y Redes de Transporte Multimodal",
          "Almacenamiento Seguro en Hubs de Lubumbashi y Lagos",
          "Envío Directo y Representación de Intermediario de Carga",
        ],
      },
      consulting: {
        title: "Servicios de Consultoría Estratégica",
        subtitle: "Asesoría accionable para entrada a mercados emergentes, optimización de adquisiciones y estructuración corporativa.",
        description: "Navegue por los paisajes comerciales y regulatorios del África Subsahariana con inteligencia local verificada sobre el terreno. Nuestra suite de consultoría ofrece estrategias de acceso al mercado personalizadas y hojas de ruta de cumplimiento estructuradas.",
        capabilities: [
          "Auditorías de Factibilidad de Mercado y Planes de Expansión",
          "Alineación de Intermediarios para Compradores y Vendedores Globales",
          "Soporte de Licencias, Incorporación y Alineación de Entidad RC",
          "Plataforma Empresarial Escalable & Infraestructura Digital",
        ],
      },
      procurement: {
        title: "Adquisiciones y Sourcing Estratégico",
        subtitle: "Soluciones de abastecimiento de alta integridad conectando demanda internacional con cadenas de suministro confiables.",
        description: "Como intermediarios seguros, presentamos compradores y vendedores verificados mientras gestionamos aseguramiento de calidad, directrices de escrow y paridad de precios. Desde activos comerciales hasta artículos de estilo de vida premium.",
        capabilities: [
          "Auditorías Estructuradas de Proveedores y Paridad de Precios Globales",
          "Protocolos de Introducción de Intermediarios Directos",
          "Sourcing de Commodities Mayoristas y Productos Terminados",
          "Aseguramiento de Calidad y Verificación Multi-Punto",
        ],
      },
      trading: {
        title: "Comercio de Belleza, Cosméticos, Accesorios Móviles y Materias Primas",
        subtitle: "Importaciones premium de cosméticos, accesorios móviles y estilo de vida gestionadas con ejecución retail global.",
        description: "DIGITAL INTEGRATED SERVICES RDC maintains a thriving commercial marketplace specializing in highly curated skin wellness, glow formulations, and personal care products distributed directly across our local hubs.",
        capabilities: [
          "Optimización de Redes Mayoristas y Minoristas",
          "Distribución de Lociones Premium de Brillo y Exfoliación",
          "Fulfillment Directo al Consumidor vía Canales WhatsApp",
          "Canales de Pago Directo Seguros y Envío Local",
        ],
      },
      faqs: [
        {
          q: "¿Cómo iniciar una asociación de consultoría o comercio?",
          a: "Contáctenos directamente vía WhatsApp (+243 990 301 518). El CEO Okey Francis CHIBUEZE y nuestros asociados senior definen los requisitos operativos y vías transaccionales al instante.",
        },
        {
          q: "¿Qué infraestructura digital y backend soportan?",
          a: "Desplegamos arquitecturas empresariales optimizadas para escalabilidad, incorporando entornos backend de alto rendimiento para gestión de clientes e integraciones de mensajería.",
        },
        {
          q: "¿Están sus entidades regionales completamente verificadas y licenciadas?",
          a: "Absolutamente. DIGITAL INTEGRATED SERVICES RDC opera en alineación directa con nuestra sede comercial nigeriana registrada (Subsidiaria de COFRANCE INTEGRATED CONCEPT LTD RC:1492798), garantizando transparencia institucional.",
        },
      ],
      makeEnquiry: "Hacer más consultas",
      consultingFaqs: [
        {
          q: "¿Cómo iniciar un compromiso de consultoría con DIS?",
          a: "Simplemente contáctese vía WhatsApp con el CEO Okey Francis CHIBUEZE (+243 990 301 518). Comenzamos con una llamada de descubrimiento gratuita para entender sus objetivos, mercado de interés y cronograma antes de presentar una hoja de ruta personalizada.",
          whatsappMsg: "Hola CEO, estoy interesado en iniciar un compromiso de consultoría con DIS. ¿Podríamos programar una llamada de descubrimiento?",
        },
        {
          q: "¿En qué mercados africanos tienen experiencia directa?",
          a: "Tenemos presencia operativa directa en RDC, Nigeria, Ghana, Kenia y Sudáfrica. También facilitamos la entrada a EAU, China, Turquía, India y Arabia Saudita a través de nuestra red global de socios.",
          whatsappMsg: "Hola CEO, me gustaría saber más sobre su experiencia directa en mercados africanos específicos.",
        },
        {
          q: "¿Pueden ayudarnos a establecer una entidad comercial registrada en África?",
          a: "Sí. Proporcionamos soporte completo de estructuración corporativa incluyendo formación de entidad, registro RC, licencias y cumplimiento regulatorio en la RDC y Nigeria.",
          whatsappMsg: "Hola CEO, necesito asistencia para establecer una entidad comercial registrada en África.",
        },
        {
          q: "¿Ofrecen asesoría continua o solo consultoría de proyectos puntuales?",
          a: "Ambos. Proporcionamos estudios de viabilidad puntuales así como asesoría retenida a largo plazo para empresas con operaciones africanas en curso. Nuestra tasa de retención del 100% refleja la profundidad de nuestros compromisos.",
          whatsappMsg: "Hola CEO, me gustaría discutir servicios de asesoría continua y consultoría retenida.",
        },
        {
          q: "¿Cómo verifican y presentan a los socios intermediarios?",
          a: "Cada intermediario, proveedor o comprador en nuestra red pasa por un proceso de verificación multi-punto incluyendo verificaciones legales, referencias comerciales y diligencia debida in situ.",
          whatsappMsg: "Hola CEO, tengo preguntas sobre su proceso de verificación e introducción de socios.",
        },
        {
          q: "¿En qué industrias han realizado proyectos de consultoría?",
          a: "Hemos servido más de 12 industrias incluyendo minería, petróleo y gas, agricultura, FMCG, construcción, farmacéutica, telecomunicaciones e inmobiliaria. Cada proyecto es liderado por especialistas sectoriales.",
          whatsappMsg: "Hola CEO, me gustaría conocer su experiencia de consultoría en mi industria específica.",
        },
      ],
      logisticsFaqs: [
        {
          q: "¿Manejan envíos intercontinentales así como entregas locales a nivel estatal/provincial?",
          a: "Sí, manejamos ambos. Operamos grandes fletes marítimos/aéreos intercontinentales, transporte transfronterizo entre naciones africanas y entregas localizadas de estado a estado o de ciudad a ciudad en la RDC y Nigeria.",
          whatsappMsg: "Hola CEO, tengo una consulta sobre su logística de envío intercontinental y local a nivel estatal.",
        },
        {
          q: "¿Cuánto tiempo toma típicamente el envío?",
          a: "El flete marítimo intercontinental toma de 3 a 5 semanas. El flete aéreo llega entre 3 y 7 días. Para la logística local o dentro del país, las entregas suelen tardar de 24 a 72 horas.",
          whatsappMsg: "Hola CEO, me gustaría hacer una consulta sobre los plazos de envío y las opciones de entrega exprés.",
        },
        {
          q: "¿Manejan el despacho de aduanas para mercancías importadas?",
          a: "Sí, proporcionamos despacho de aduanas de extremo a extremo. Nuestro profundo conocimiento de las regulaciones locales asegura que su carga pase el control fronterizo sin demoras.",
          whatsappMsg: "Hola CEO, necesito asistencia o tengo una consulta relacionada con el despacho de aduanas para bienes importados.",
        },
        {
          q: "¿Está asegurada mi carga durante el tránsito?",
          a: "Absolutamente. Toda la carga gestionada por DIS está completamente asegurada contra pérdida o daño durante el tránsito, brindándole total tranquilidad desde la salida hasta la entrega final.",
          whatsappMsg: "Hola CEO, tengo una consulta sobre sus pólizas de seguro de carga.",
        },
        {
          q: "¿Pueden consolidar envíos de múltiples proveedores internacionales?",
          a: "Sí, nuestras instalaciones en importantes ciudades comerciales nos permiten consolidar mercancías de varios proveedores en un solo contenedor, reduciendo significativamente los costos.",
          whatsappMsg: "Hola CEO, me interesa la consolidación de envíos de múltiples proveedores y quisiera saber más.",
        },
        {
          q: "¿Qué tipos de mercancías requieren manejo especial?",
          a: "Aunque transportamos una amplia gama de bienes comerciales, materiales peligrosos y productos químicos específicos requieren documentación especial.",
          whatsappMsg: "Hola CEO, quiero realizar una consulta sobre el envío de mercancías restringidas o especializadas.",
        },
      ],
      procurementFaqs: [
        {
          q: "¿Cómo garantizan la calidad de los bienes adquiridos?",
          a: "Realizamos rigurosas auditorías de proveedores de múltiples puntos, inspecciones in situ y controles de garantía de calidad antes del envío, asegurando que todos los productos cumplen con estándares internacionales.",
          whatsappMsg: "Hola CEO, tengo una consulta sobre su proceso de garantía de calidad para bienes adquiridos.",
        },
        {
          q: "¿Pueden abastecer productos especializados o de nicho?",
          a: "Sí. Nuestra red global abarca 5 continentes, permitiéndonos adquirir una gran variedad de productos, desde maquinaria pesada y materias primas hasta bienes de estilo de vida premium.",
          whatsappMsg: "Hola CEO, me gustaría saber si pueden abastecer un producto especializado específico para mi negocio.",
        },
        {
          q: "¿Cuál es su tiempo de respuesta típico para adquisiciones?",
          a: "Para productos estándar y proveedores verificados, garantizamos un plazo de 48 horas desde el pedido hasta el despacho. Las adquisiciones personalizadas pueden demorar más según las especificaciones.",
          whatsappMsg: "Hola CEO, quiero consultar el tiempo de respuesta estimado para un pedido de adquisición.",
        },
        {
          q: "¿Cómo gestionan las fluctuaciones de precios y negocian costos?",
          a: "Nuestras estrategias de adquisición basadas en datos y relaciones directas con fabricantes nos permiten evitar intermediarios, brindando un ahorro de costos del 30% en promedio.",
          whatsappMsg: "Hola CEO, estoy interesado en cómo DIS puede ayudar a optimizar nuestros costos de adquisición.",
        },
        {
          q: "¿Manejan el proceso de pago y depósito (escrow)?",
          a: "Absolutamente. Facilitamos transacciones seguras con directrices de pago estructuradas y supervisión de depósito, protegiendo tanto a compradores como a vendedores durante todo el ciclo de adquisición.",
          whatsappMsg: "Hola CEO, tengo preguntas con respecto a su gestión de depósito y procesos de pago seguro.",
        },
        {
          q: "¿Pueden integrar las adquisiciones con la logística?",
          a: "Sí. Las adquisiciones y la logística están perfectamente integradas en DIS. Una vez que se adquieren y verifican los bienes, nuestras redes de transporte multimodal manejan el viaje completo.",
          whatsappMsg: "Hola CEO, me gustaría discutir una solución integrada de adquisición y logística.",
        },
      ],
    },
    globalReach: {
      title: "Alcance Global",
      subtitle:
        "Presencia estratégica en mercados clave de África, Medio Oriente y Asia.",
    },
    industries: {
      sectionLabel: "Industrias Que Servimos",
      sectionTitle: "Impulsando los Sectores Que Mueven África",
      sectionSub: "Desde recursos naturales hasta bienes de consumo, ofrecemos soluciones de logística, adquisiciones y consultoría en las industrias más críticas de África.",
      items: [
        { name: "Minería y Minerales", desc: "Suministro de equipos, logística de campamentos y facilitación de exportación minera" },
        { name: "Petróleo y Gas", desc: "Cadena de suministro upstream, logística de refinería y adquisición energética" },
        { name: "FMCG y Retail", desc: "Distribución de bienes de consumo rápido y cadenas de suministro minoristas" },
        { name: "Agricultura", desc: "Logística del campo al mercado, apoyo agroindustrial y exportación" },
        { name: "Construcción", desc: "Abastecimiento de materiales, equipos pesados y logística de obra" },
        { name: "Farmacéutica", desc: "Logística de cadena de frío, adquisición de suministros médicos y cumplimiento" },
        { name: "Energía y Electricidad", desc: "Suministro de infraestructura eléctrica, equipos solares y logística de red" },
        { name: "Transporte y Carga", desc: "Camiones transfronterizos, envío de carga y gestión de flotas" },
        { name: "Bienes Raíces", desc: "Consultoría de desarrollo, adquisición de materiales y gestión de instalaciones" },
        { name: "Manufactura", desc: "Abastecimiento de materias primas, consultoría de planta y logística de exportación" },
      ],
    },
    process: {
      title: "Nuestro Proceso",
      steps: [
        {
          title: "Consulta",
          description:
            "Análisis profundo de su panorama operativo y objetivos de crecimiento.",
        },
        {
          title: "Estrategia",
          description:
            "Estrategias a medida basadas en datos y mejores prácticas globales.",
        },
        {
          title: "Ejecución",
          description:
            "Despliegue preciso con equipos dedicados y seguimiento en tiempo real.",
        },
        {
          title: "Entrega",
          description:
            "Resultados medibles, informes transparentes y optimización continua.",
        },
      ],
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Socios",
    },
    cta: {
      headline: "Diseñado para empresas\nque operan globalmente.",
      button: "Iniciar una Conversación",
    },
    floatingOrder: "Comprar Ahora",
    loader: {
      subtitle: "Construyendo Excelencia Operacional Global",
    },
    footer: {
      tagline: "Precisión. Integridad. Perspectiva Global.",
      copyright: `© ${new Date().getFullYear()} DIS Group. Todos los derechos reservados.`,
    },
    pieChart: {
      sectionLabel: "Nuestro ADN Empresarial",
      sectionTitle: "Donde Enfocamos Nuestros Esfuerzos",
      sectionSub: "Cómo distribuimos nuestro enfoque operativo y recursos entre nuestros cuatro pilares de servicios.",
      scrollProgress: "",
      segments: [
        { label: "Logística" },
        { label: "Consultoría" },
        { label: "Adquisiciones" },
        { label: "Comercio" },
      ],
    },
    tradingStore: {
      badge: "DIS Belleza & Cosméticos",
      heroTitle: "Colección Belleza\nPremium",
      heroSub: "Importaciones seleccionadas de cuidado de piel, cuidado corporal y fragancias. Directo de proveedores globales de confianza.",
      productsCount: "Productos",
      freeDelivery: "Entrega Local Gratuita",
      searchPlaceholder: "Buscar productos...",
      showing: "Mostrando",
      products: "productos",
      noResults: "No se encontraron productos",
      noResultsSub: "Intente ajustar su búsqueda o filtro",
      categories: ["Todos", "Cosméticos", "Electrónica", "Electrodomésticos", "Moda", "Vehículos", "Industrial", "Agricultura", "Construcción", "General"],
      trustBadges: [
        { title: "Entrega Local Gratuita", sub: "Lubumbashi & Lagos" },
        { title: "Productos Auténticos", sub: "100% importaciones genuinas" },
        { title: "Pedido por WhatsApp", sub: "Chatee para comprar" },
        { title: "Empaque Seguro", sub: "Entrega segura & discreta" },
      ],
      bulkTitle: "¿Quiere pedir al por mayor?",
      bulkSub: "Precios mayoristas disponibles para minoristas, salones y distribuidores. Contacte directamente al CEO Okey Francis CHIBUEZE.",
      bulkCta: "Chatear por Precios Mayoristas",
      orderVia: "Pedir por WhatsApp",
      reviews: "reseñas",
      deliveryBadge: "Entrega gratuita en Lubumbashi & Lagos",
      authenticBadge: "Garantía de producto auténtico",
      packagingBadge: "Empaque seguro & cuidadoso",
      productNames: [
        "Exfoliante Corporal de Brillo Radiante",
        "Sérum & Esencia de Brillo Premium",
        "Loción de Belleza Herbal Pura X7",
        "Mezcla de Manteca de Karité Orgánica Natural",
        "Aceite Capilar de Coco & Argán",
        "Bruma Hidratante de Pétalos de Rosa",
        "Aceite Perfumado de Lujo Oud & Vainilla",
        "Crema Corporal Iluminadora de Vitamina C",
      ],
      productDescs: [
        "Exfoliante de renovación cutánea que elimina células muertas y restaura un brillo natural suave. Enriquecido con exfoliantes naturales.",
        "Sérum de brillo diario altamente concentrado enriquecido con extractos botánicos avanzados para una piel radiante y luminosa.",
        "Loción corporal rica y nutritiva para hidratación duradera y tonificación uniforme. Fórmula ligera y no grasa.",
        "Manteca corporal 100% puras importada formulada para acondicionamiento profundo y protección de la piel.",
        "Aceite capilar reparador intensivo que combina coco y argán para restaurar el brillo y reducir la rotura.",
        "Bruma facial refrescante infusionada con rosa para un impulso instantáneo de hidratación. Perfecta para revitalización en movimiento.",
        "Aceite perfumado de inspiración árabe de larga duración con oud rico, vainilla cálida y notas sutiles de almizcle.",
        "Crema corporal enriquecida con Vitamina C para iluminar, unificar el tono de piel y brindar protección antioxidante todo el día.",
      ],
    },
    aboutPage: {
      backToHome: "Volver al Inicio",
      badge: "Sobre el Grupo DIS",
      heroTitle: "Conectando Mercados. Construyendo Futuros",
      heroSub: "Digital Integrated Services RDC es una subsidiaria de COFRANCE INTEGRATED CONCEPT LTD — una empresa multi-sectorial verificada que conecta los mercados africanos con las cadenas de suministro globales.",
      statFounded: "Fundada",
      statCountries: "Países Atendidos",
      statServices: "Servicios Principales",
      statRC: "Entidad Registrada",
      storyLabel: "Nuestra Historia",
      storyTitle: "De la Visión al Impacto",
      storyP1: "Fundada por Okey Francis CHIBUEZE, Digital Integrated Services RDC nació de una profunda comprensión de los desafíos logísticos que enfrentan las empresas de África Central y Occidental. Con centros operativos en Lubumbashi (RDC) y Lagos (Nigeria), DIS cierra la brecha entre las empresas africanas y los mercados globales.",
      storyP2: "Como subsidiaria de COFRANCE INTEGRATED CONCEPT LTD (RC: 1492798), operamos con plena conformidad regulatoria y un compromiso con la transparencia. Nuestros servicios abarcan logística, consultoría estratégica, adquisiciones y una plataforma de comercio de belleza, cosmética y accesorios móviles.",
      servicesLabel: "Lo Que Hacemos",
      servicesTitle: "Cuatro Pilares de Excelencia",
      svcLogistics: "Logística y Cadena de Suministro",
      svcLogisticsDesc: "Transporte de carga multimodal, almacenamiento, despacho aduanero y entrega de última milla en más de 15 corredores comerciales en África, Medio Oriente y Asia.",
      svcConsulting: "Consultoría Estratégica",
      svcConsultingDesc: "Estrategias de entrada al mercado, alineación de intermediarios, estructuración corporativa y auditorías operativas para empresas que se expanden a África.",
      svcProcurement: "Adquisiciones Globales",
      svcProcurementDesc: "Redes de proveedores verificados en 5 continentes, paridad de precios competitiva, auditoría de proveedores y transacciones con custodia en 48h.",
      svcTrading: "Comercio de Belleza y Cosmética",
      svcTradingDesc: "Productos premium de cuidado de la piel, cuerpo, cabello y fragancias importados y distribuidos en la RDC y África Occidental.",
      ceoLabel: "Liderazgo",
      ceoTitle: "Conozca a Nuestro CEO",
      ceoP1: "Okey Francis CHIBUEZE es el visionario detrás de Digital Integrated Services RDC y COFRANCE INTEGRATED CONCEPT LTD. Con amplia experiencia en comercio transfronterizo, gestión de cadena de suministro y consultoría estratégica, ha construido una empresa multi-sectorial que conecta negocios africanos con oportunidades globales.",
      ceoP2: "Bajo su liderazgo, DIS ha expandido operaciones en RDC, Nigeria, Ghana, EAU, China, Sudáfrica, Kenia, Turquía, India y Arabia Saudita — estableciendo una red confiable de socios, proveedores y clientes en cinco continentes.",
      ceoP3: "Su enfoque práctico y accesibilidad directa vía WhatsApp reflejan un compromiso con el servicio personal que distingue a DIS de los intermediarios corporativos convencionales.",
      hqLabel: "Sede Central",
      valuesLabel: "Nuestros Valores",
      valuesTitle: "Lo Que Nos Impulsa",
      val1Title: "Integridad y Cumplimiento",
      val1Desc: "Operaciones completamente registradas y verificadas con procesos transparentes y cumplimiento documentado en cada paso.",
      val2Title: "Asociación Primero",
      val2Desc: "No solo servimos clientes — construimos asociaciones duraderas a través del acceso directo al CEO, confianza y crecimiento mutuo.",
      val3Title: "Visión Global, Expertise Local",
      val3Desc: "Conocimiento profundo de los mercados africanos combinado con alcance internacional de cadena de suministro en cinco continentes.",
      ctaTitle: "¿Listo para Trabajar con Nosotros?",
      ctaSub: "Conéctese directamente con el CEO Okey Francis CHIBUEZE para discutir sus necesidades.",
      ctaButton: "Chatear en WhatsApp",
    },
    achievementsPage: {
      heroTitle: "Perspectivas e Hitos de la Logística Africana",
      heroSub: "Explorando marcos estratégicos y soluciones estructurales para la optimización de la cadena de suministro transfronteriza en África Subsahariana.",
      researchTitle: "Investigación Aplicada y Perspectivas Estratégicas",
      researchDesc: "Marcos prácticos desarrollados por el CEO Okey Francis CHIBUEZE para abordar las ineficiencias sistémicas en el comercio regional.",
      insights: [
        { title: "Armonización Aduanera Transfronteriza", content: "Propuesta de protocolos de despacho digital para reducir los retrasos en tránsito, mejorando la velocidad de la carga.", fullText: "Este completo trabajo de investigación describe un marco estructural para la digitalización de los protocolos aduaneros transfronterizos entre la República Democrática del Congo (RDC) y Zambia, un nodo crítico en el corredor logístico de la Comunidad de Desarrollo de África Meridional (SADC).\n\nHistóricamente, la dependencia de sistemas de contabilidad manuales y fragmentados ha provocado graves cuellos de botella, lo que ha dado lugar a tiempos de espera medios en las fronteras superiores a 48 horas para el transporte pesado. Este documento propone una arquitectura unificada de intercambio de manifiestos impulsada por API que integra bases de datos aduaneras nacionales dispares en una cámara de compensación digital centralizada.\n\nEl estudio demuestra que al presentar de manera preventiva los manifiestos electrónicos y utilizar algoritmos automatizados de evaluación de riesgos, la fricción del procesamiento se puede minimizar drásticamente. El modelado empírico sugiere que la implementación completa de este marco digital reduciría los tiempos de espera promedio en la frontera a menos de 12 horas. Además, el documento detalla la infraestructura de hardware necesaria requerida en los puestos fronterizos clave, el proceso crucial de alineación de las partes interesadas, y proyecta una mejora del 24% en la velocidad de la carga, lo que se traduce en un impulso económico sustancial para los volúmenes de comercio regional." },
        { title: "Integración de Transporte Multimodal", content: "Investigación sobre la eficacia de combinar redes de carga ferroviaria y por carretera para reducir costos logísticos.", fullText: "Este libro blanco proporciona un análisis en profundidad de la relación costo-beneficio asociada con la adopción de redes de transporte multimodal dentro de la provincia de Haut-Katanga, un centro principal para la extracción de minerales y adquisiciones industriales pesadas.\n\nTradicionalmente, los sectores industriales de esta región han dependido casi exclusivamente del transporte por carretera, lo que expone a las cadenas de suministro a la volatilidad derivada del deterioro de la infraestructura vial, las interrupciones climáticas estacionales y la fluctuación de los costos de combustible. Esta investigación aboga por un cambio estratégico hacia un modelo híbrido ferrocarril-carretera. Al migrar el 40% de las adquisiciones industriales pesadas a corredores ferroviarios mejorados, al tiempo que se mantiene el transporte por carretera para la entrega de última milla, las empresas pueden lograr una optimización significativa de los costos.\n\nEl documento presenta un análisis exhaustivo de las capacidades ferroviarias actuales, identifica los cuellos de botella críticos y describe las inversiones de capital requeridas en los nodos de transferencia regionales. A través de un modelado económico detallado, la investigación concluye que esta integración multimodal produce una reducción del 15% en los costos totales de aterrizaje y, al mismo tiempo, construye una sólida estrategia de mitigación de riesgos contra los déficits de infraestructura regional." },
        { title: "Resiliencia de la Cadena de Suministro", content: "Desarrollo de modelos de adquisición adaptativos que mitigan las interrupciones causadas por la volatilidad cambiaria.", fullText: "Este detallado análisis académico explora la construcción de cadenas de suministro resilientes en mercados emergentes altamente volátiles, con un enfoque específico en África Occidental.\n\nOperar en estos entornos presenta desafíos únicos, incluida una aguda volatilidad cambiaria, cambios geopolíticos repentinos e imprevisibilidad de la infraestructura. El documento presenta un modelo de adquisición adaptativo diseñado específicamente para aislar las redes logísticas de estos impactos macroeconómicos. Un elemento central de este modelo es la implementación estratégica del almacenamiento descentralizado, que evita que las interrupciones localizadas causen fallas sistémicas totales.\n\nAdemás, la investigación detalla estrategias de cobertura de múltiples divisas adaptadas a los operadores de importación y exportación, y aboga por una diversificación dinámica de proveedores para mitigar los riesgos de un solo punto de falla. A partir de extensos estudios de casos de fluctuaciones recientes del mercado en Nigeria y regiones vecinas, el análisis demuestra que las organizaciones que emplean este modelo adaptativo mantienen constantemente la estabilidad de los márgenes y evitan desabastecimientos catastróficos durante períodos de grave estrés económico." }
      ],
      milestonesTitle: "Hitos Profesionales",
      milestones: [
        { year: "2024", role: "Fundador y CEO, DIS Group", details: "Establecimiento de una red integral de logística y comercio que une Dubái, Lagos y Lubumbashi." },
        { year: "2022", role: "Consultor Principal, Comercio Transfronterizo", details: "Asesoramiento a corporaciones mineras multinacionales sobre cumplimiento de adquisiciones localizadas." },
        { year: "2019", role: "Director de Logística", details: "Lideró una revisión de la cadena de suministro regional para un importante distribuidor." },
        { year: "2013", role: "Fundador, COFRANCE INTEGRATED CONCEPT LTD", details: "Fundó la empresa matriz (RC: 1492798) que sirve como base para una empresa multisectorial que conecta los mercados africanos con las cadenas de suministro globales." }
      ],
      readPaper: "Leer documento de investigación",
      closePaper: "Cerrar documento"
    }
  }
};

export default translations;
