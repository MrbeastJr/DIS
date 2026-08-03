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
    company?: string;
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
  spamWarning: string;
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

  dermaScan: {
    title: string;
    poweredBy: string;
    discover: string;
    discoverSub: string;
    analyzeSkin: string;
    analyzeSub: string;
    takePhoto: string;
    uploadImage: string;
    describeSkin: string;
    cancel: string;
    capturePhoto: string;
    describeLabelText: string;
    describeLabelImg: string;
    placeholder: string;
    back: string;
    analyzeBtn: string;
    analyzing: string;
    analyzingSub: string;
    analysisFailed: string;
    tryAgain: string;
    identifiedType: string;
    perfectMatches: string;
    productsFound: string;
    noProducts: string;
    startNew: string;
  };
  trackOrder: {
    tag: string;
    title: string;
    subtitle: string;
    orderNumPlaceholder: string;
    emailPlaceholder: string;
    trackBtn: string;
    detailsLabel: string;
    totalLabel: string;
    paid: string;
    unpaid: string;
    cancelledTitle: string;
    cancelledSub: string;
    itemsLabel: string;
    qtyLabel: string;
    stages: Record<string, { label: string; desc: string }>;
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
      company: "Company",
    },
    hero: {
      headline: "Fast Shipping &\nBusiness Advice for\nAfrica",
      subtext:
        "We help you move goods safely, find trusted partners, and grow your business easily across Africa and beyond.",
      cta1: "Talk to Us",
      cta2: "Explore Services",
    },
    trustStrip: {
      items: [
        "Fast Shipping",
        "Buying Products",
        "Business Advice",
        "Import & Export",
        "Safe Delivery",
        "Trusted Network",
        "Growth Support",
        "New Markets",
      ],
    },
    services: {
      title: "What We Do",
      subtitle: "Simple solutions to help your business grow",
      logistics: {
        title: "Shipping & Delivery",
        description:
          "We move your goods safely and quickly across Africa, the Middle East, and Asia.",
      },
      consulting: {
        title: "Business Advice",
        description:
          "We help you set up your business, find the right partners, and succeed in new markets.",
      },
      procurement: {
        title: "Buying & Sourcing",
        description:
          "We find the best products at the best prices for you, from anywhere in the world.",
      },
      trading: {
        title: "Trade & Sales",
        description:
          "We connect buyers and sellers to make cross-border trading easy and profitable.",
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
        title: "Fast Shipping & Delivery",
        subtitle: "We move your goods safely across Africa and the world.",
        description: "We handle everything from packing to delivery. Whether you need to ship a small package or a large container, we make sure it arrives on time and in perfect condition.",
        capabilities: [
          "Easy Customs Clearance",
          "Fast Air and Sea Shipping",
          "Safe Warehousing",
          "Direct Door-to-Door Delivery",
        ],
      },
      consulting: {
        title: "Business Advice & Support",
        subtitle: "We help you set up and grow your business in Africa.",
        description: "Starting a business in a new country can be hard. We make it easy. From registering your company to finding the right partners, we guide you every step of the way.",
        capabilities: [
          "Step-by-Step Business Setup",
          "Finding Trusted Local Partners",
          "Help with Licenses and Papers",
          "Easy Digital Tools for Growth",
        ],
      },
      procurement: {
        title: "Buying & Sourcing Goods",
        subtitle: "We find the best products at the best prices for you.",
        description: "Need to buy equipment, materials, or products from overseas? We handle the search, check the quality, and make sure you get exactly what you paid for.",
        capabilities: [
          "Finding the Best Prices Worldwide",
          "Connecting You with Real Sellers",
          "Buying Goods in Bulk",
          "Strict Quality Checking Before Shipping",
        ],
      },
      trading: {
        title: "Beauty & Cosmetic Sales",
        subtitle: "Premium skin and body care products delivered to you.",
        description: "We import and sell high-quality beauty products, cosmetics, and skin care items. You can buy directly from us at wholesale or retail prices.",
        capabilities: [
          "Special Wholesale Prices for Shops",
          "Top Quality Skin & Body Lotions",
          "Order Easily on WhatsApp",
          "Safe Payments & Fast Local Delivery",
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
      sectionLabel: "Who We Help",
      sectionTitle: "Businesses We Work With",
      sectionSub: "From farms to shops, we provide simple shipping, buying, and advice services for all types of businesses.",
      items: [
        { name: "Farms & Agriculture", desc: "Moving crops, buying farming tools, and exporting goods" },
        { name: "Shops & Supermarkets", desc: "Bringing daily products directly to your store shelves" },
        { name: "Builders & Construction", desc: "Finding and shipping building materials and heavy machines" },
        { name: "Hospitals & Pharmacies", desc: "Safe and fast delivery of medicines and medical supplies" },
        { name: "Factories & Makers", desc: "Sourcing raw materials and shipping finished products" },
        { name: "Car Dealers & Transport", desc: "Importing vehicles, trucks, and spare parts easily" },
        { name: "Tech & Electronics", desc: "Shipping computers, phones, and solar equipment" },
        { name: "Mining & Energy", desc: "Supplying mining camps and moving heavy equipment" },
      ],
    },
    process: {
      title: "How It Works",
      steps: [
        {
          title: "1. Let's Talk",
          description:
            "Tell us what your business needs and what problems you are facing.",
        },
        {
          title: "2. We Make a Plan",
          description:
            "We create a simple, clear plan to help you reach your goals.",
        },
        {
          title: "3. We Get to Work",
          description:
            "Our team takes action, keeping you updated every step of the way.",
        },
        {
          title: "4. You See Results",
          description:
            "Your goods arrive, your business grows, and you save money.",
        },
      ],
    },
    testimonials: {
      title: "What Our Partners Say",
    },
    cta: {
      headline: "Ready to grow your\nbusiness with us?",
      button: "Send us a Message",
    },
    floatingOrder: "Order Now",
    spamWarning: "Order placed successfully! Please check your spam/junk folder for your confirmation email.",
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
      badge: "DIS Beauty & Skincare",
      heroTitle: "Beauty, Skincare\n& Fragrances.",
      heroSub: "Quality skincare, body care, and fragrances imported directly for you. Free local delivery in Lubumbashi and Lagos.",
      productsCount: "Products",
      freeDelivery: "Free Local Delivery",
      searchPlaceholder: "Search products...",
      showing: "Showing",
      products: "products",
      noResults: "No products found",
      noResultsSub: "Try adjusting your search or filter",
      categories: ["All", "Skincare", "Body Care", "Hair Care", "Fragrance", "Accessories"],
      trustBadges: [
        { title: "Free Local Delivery", sub: "Lubumbashi & Lagos" },
        { title: "100% Original Products", sub: "Directly imported & verified" },
        { title: "Order on WhatsApp", sub: "Chat with us to buy instantly" },
        { title: "Safe & Sealed Packaging", sub: "Protected & discreet delivery" },
      ],
      bulkTitle: "Buy in Bulk & Save",
      bulkSub: "Special discounted prices for shops, salons, and resellers across Africa. Chat with us directly on WhatsApp to get wholesale rates.",
      bulkCta: "Chat for Wholesale Prices",
      orderVia: "Order via WhatsApp",
      reviews: "reviews",
      deliveryBadge: "Free local delivery in Lubumbashi & Lagos",
      authenticBadge: "100% original product guarantee",
      packagingBadge: "Safe, sealed & discreet packaging",
      productNames: [
        "Exfoliating Body Scrub",
        "Brightening Glow Serum",
        "Herbal Hydrating Body Lotion",
        "Pure African Shea Butter",
        "Coconut & Argan Hair Oil",
        "Rose Hydrating Facial Mist",
        "Oud & Vanilla Perfume Oil",
        "Vitamin C Body Cream",
      ],
      productDescs: [
        "A gentle scrub made with natural ingredients to remove dead skin and leave your skin smooth and glowing.",
        "A daily face serum with vitamins and plant extracts that brightens your skin and evens out your complexion.",
        "A rich, non-greasy lotion that moisturizes your skin all day and keeps it soft.",
        "100% pure shea butter to deeply moisturize, soften, and protect dry skin.",
        "A nourishing hair oil that repairs damaged hair, adds shine, and prevents breakage.",
        "A refreshing rose water spray that hydrates and calms your face instantly anytime.",
        "A long-lasting fragrance oil with rich Arabian oud, warm vanilla, and subtle musk.",
        "A moisturizing body cream with Vitamin C that brightens and protects your skin every day.",
      ],
    },
    aboutPage: {
      backToHome: "Back to Home",
      badge: "About DIS Group",
      heroTitle: "Connecting Africa to the World",
      heroSub: "Digital Integrated Services RDC is a trusted company that helps you ship goods, buy products, and grow your business across Africa and beyond.",
      statFounded: "Founded",
      statCountries: "Countries Served",
      statServices: "Main Services",
      statRC: "Registered Company",
      storyLabel: "Our Story",
      storyTitle: "From Vision to Real Results",
      storyP1: "Founded by Okey Francis CHIBUEZE, DIS Group was created to solve the real shipping and buying problems that businesses face in Central and West Africa. With main offices in DR Congo and Nigeria, we make international trade easy for everyone.",
      storyP2: "As a fully registered and trusted company (COFRANCE INTEGRATED CONCEPT LTD), we do things the right way. We offer fast shipping, business advice, product sourcing, and our own store for high-quality beauty products.",
      servicesLabel: "What We Do",
      servicesTitle: "Four Ways We Help You",
      svcLogistics: "Shipping & Delivery",
      svcLogisticsDesc: "We safely move your goods by air, sea, or road across Africa, the Middle East, and Asia. We handle all the paperwork for you.",
      svcConsulting: "Business Advice",
      svcConsultingDesc: "We help you set up your company, find good partners, and succeed in new countries without the stress.",
      svcProcurement: "Buying Goods",
      svcProcurementDesc: "We find the best products at the best prices for you, from anywhere in the world. We check the quality before shipping.",
      svcTrading: "Beauty & Cosmetic Sales",
      svcTradingDesc: "We import and sell top-quality skin and body care products. You can buy directly from us at great prices.",
      ceoLabel: "Leadership",
      ceoTitle: "Meet Our CEO",
      ceoP1: "Okey Francis CHIBUEZE is the founder of DIS Group. With years of experience in shipping, buying, and business advice, he built this company to help African businesses connect with the rest of the world easily.",
      ceoP2: "Under his leadership, DIS has grown to work in DR Congo, Nigeria, Ghana, UAE, China, South Africa, and many other countries. He has built a strong network of trusted partners everywhere.",
      ceoP3: "What makes him different? He is always easy to reach. You can chat with him directly on WhatsApp to get things done fast.",
      hqLabel: "Headquarters",
      valuesLabel: "Our Values",
      valuesTitle: "What Is Important to Us",
      val1Title: "Honesty & Trust",
      val1Desc: "We are a fully registered company. We do things the right way and always keep our promises.",
      val2Title: "We Are Your Partners",
      val2Desc: "We don't just treat you like a customer. We work with you to help your business grow over time.",
      val3Title: "Local & Global Experts",
      val3Desc: "We know how things work in Africa, and we also know how to get things done across the rest of the world.",
      ctaTitle: "Ready to Work With Us?",
      ctaSub: "Send a message directly to CEO Okey Francis CHIBUEZE to talk about what you need.",
      ctaButton: "Chat on WhatsApp",
    },
    achievementsPage: {
      heroTitle: "Our Success Stories",
      heroSub: "See how we make shipping faster, save money for our clients, and solve real business problems in Africa.",
      researchTitle: "Real Problems, Real Solutions",
      researchDesc: "How CEO Okey Francis CHIBUEZE and our team help businesses overcome daily challenges.",
      insights: [
        { title: "Making Border Crossing Faster", content: "We helped reduce the time trucks spend waiting at the DRC-Zambia border from 48 hours to just 12 hours.", fullText: `**The Problem**
Trucks carrying important goods were stuck at the border between DR Congo and Zambia for days. This caused huge delays, ruined products, and cost businesses a lot of money.

**Our Solution**
Instead of using slow paper documents, we introduced a faster digital system. By sending all the paperwork electronically before the truck even arrives, customs officers can process the goods immediately.

**The Result**
The waiting time dropped from over 2 days to less than 12 hours. This means businesses get their goods faster and save a lot of money on transport costs. It is a huge win for everyone involved.` },
        { title: "Mixing Road and Train Transport", content: "We found that combining train and road shipping helps companies in Haut-Katanga save 15% on their total costs.", fullText: `**The Problem**
Most businesses in Haut-Katanga (DR Congo) rely only on trucks to move heavy goods. When roads get bad during the rainy season, everything stops, and prices go up.

**Our Solution**
We advised our clients to start using trains for the longest part of the journey and only use trucks for the final delivery to their door. We helped them find the best train routes and transfer points.

**The Result**
By using both trains and trucks, our clients saved 15% on their shipping costs. Plus, their deliveries were much more reliable, even during bad weather.` },
        { title: "Keeping Businesses Running", content: "We created simple plans to help businesses survive when money loses value or emergencies happen in West Africa.", fullText: `**The Problem**
Doing business in West Africa can be hard when the value of money changes quickly or when there are sudden strikes or emergencies at the ports.

**Our Solution**
We taught our clients how to store their goods in different safe places instead of just one. We also helped them find different suppliers so they never run out of products.

**The Result**
Even when other businesses had to stop working because of emergencies, our clients kept selling. They never ran out of stock, and their businesses stayed strong.` }
      ],
      milestonesTitle: "Our History",
      milestones: [
        { year: "2024 - 2026", role: "Growing Across Borders", details: "Built a strong network for shipping and selling goods between Dubai, Lagos, and Lubumbashi." },
        { year: "2022", role: "Helping Big Companies", details: "Advised large mining companies on how to buy local goods safely and move them easily." },
        { year: "2019", role: "Fixing Supply Chains", details: "Helped a major supermarket chain deliver their products faster and cheaper." },
        { year: "2013", role: "The Beginning", details: "Founded COFRANCE INTEGRATED CONCEPT LTD, the parent company that started it all." }
      ],
      readPaper: "Read Research Paper",
      closePaper: "Close Paper"
    },
    dermaScan: {
      title: "AI Derma-Scan",
      poweredBy: "Powered by Gemini",
      discover: "Discover Your Perfect Match!",
      discoverSub: "Scan your skin type to get cosmetics that perfectly fit you.",
      analyzeSkin: "Analyze Your Skin",
      analyzeSub: "Choose how you'd like our AI to analyze your skin to find the perfect cosmetic products for you.",
      takePhoto: "Take a Photo",
      uploadImage: "Upload Image",
      describeSkin: "Describe Skin",
      cancel: "Cancel",
      capturePhoto: "Capture Photo",
      describeLabelText: "Describe your skin concerns",
      describeLabelImg: "Add extra details (Optional)",
      placeholder: "e.g. My T-zone is oily but my cheeks feel dry and flaky after washing...",
      back: "Back",
      analyzeBtn: "Analyze Skin",
      analyzing: "Analyzing Skin Profile",
      analyzingSub: "Our AI is processing your inputs...",
      analysisFailed: "Analysis Failed",
      tryAgain: "Try Again",
      identifiedType: "Identified Type",
      perfectMatches: "Your Perfect Matches",
      productsFound: "Products Found",
      noProducts: "No specialized products found for this skin type currently in stock.",
      startNew: "Start New Scan"
    },
    trackOrder: {
      tag: "Logistics & Fulfillment",
      title: "Track Your Order",
      subtitle: "Enter your tracking number and email address to get real-time updates on your shipment status.",
      orderNumPlaceholder: "Order Number (e.g. ORD-...)",
      emailPlaceholder: "Billing Email Address",
      trackBtn: "Track",
      detailsLabel: "Order Details",
      totalLabel: "Total Amount",
      paid: "Paid",
      unpaid: "Unpaid",
      cancelledTitle: "Order Cancelled",
      cancelledSub: "This order has been cancelled. Please contact support for assistance.",
      itemsLabel: "Order Items",
      qtyLabel: "Qty",
      stages: {
        PENDING: { label: "Pending", desc: "Waiting for payment confirmation." },
        PAYMENT_REVIEW: { label: "Payment Review", desc: "Reviewing your payment proof." },
        PROCESSING: { label: "Processing", desc: "Packing your items carefully." },
        SHIPPED: { label: "Shipped", desc: "Handed over to logistics partner." },
        DELIVERED: { label: "Delivered", desc: "Enjoy your items!" }
      }
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
      company: "Groupe",
    },
    hero: {
      headline: "Expédition Rapide &\nConseils pour\nl'Afrique",
      subtext:
        "Nous vous aidons à expédier vos marchandises, à trouver des partenaires de confiance et à développer votre activité facilement à travers l'Afrique et au-delà.",
      cta1: "Parlons-en",
      cta2: "Nos Services",
    },
    trustStrip: {
      items: [
        "Expédition Rapide",
        "Achat de Produits",
        "Conseil en Affaires",
        "Import & Export",
        "Livraison Sécurisée",
        "Réseau de Confiance",
        "Soutien à la Croissance",
        "Nouveaux Marchés",
      ],
    },
    services: {
      title: "Ce Que Nous Faisons",
      subtitle: "Des solutions simples pour vous aider à grandir",
      logistics: {
        title: "Expédition & Livraison",
        description:
          "Nous transportons vos marchandises en toute sécurité à travers l'Afrique, le Moyen-Orient et l'Asie.",
      },
      consulting: {
        title: "Conseils en Affaires",
        description:
          "Nous vous aidons à créer votre entreprise et à réussir dans de nouveaux pays sans stress.",
      },
      procurement: {
        title: "Achat de Marchandises",
        description:
          "Nous trouvons les meilleurs produits aux meilleurs prix pour vous, partout dans le monde.",
      },
      trading: {
        title: "Commerce & Vente",
        description:
          "Nous mettons en relation acheteurs et vendeurs pour faciliter les échanges commerciaux.",
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
        title: "Expédition Rapide & Livraison",
        subtitle: "Nous transportons vos marchandises en toute sécurité en Afrique et dans le monde.",
        description: "Nous nous occupons de tout, de l'emballage à la livraison. Que ce soit un petit colis ou un grand conteneur, nous veillons à ce qu'il arrive à temps et en parfait état.",
        capabilities: [
          "Dédouanement Facile",
          "Expédition Rapide par Air et Mer",
          "Entreposage Sécurisé",
          "Livraison Directe Porte-à-Porte",
        ],
      },
      consulting: {
        title: "Conseil & Soutien aux Entreprises",
        subtitle: "Nous vous aidons à créer et développer votre entreprise en Afrique.",
        description: "Démarrer une entreprise dans un nouveau pays peut être difficile. Nous facilitons les choses. De l'enregistrement de votre société à la recherche des bons partenaires, nous vous guidons à chaque étape.",
        capabilities: [
          "Création d'Entreprise Étape par Étape",
          "Recherche de Partenaires Locaux de Confiance",
          "Aide pour les Licences et Papiers",
          "Outils Simples pour la Croissance",
        ],
      },
      procurement: {
        title: "Achat & Sourcing de Marchandises",
        subtitle: "Nous trouvons les meilleurs produits aux meilleurs prix pour vous.",
        description: "Besoin d'acheter des équipements, des matériaux ou des produits à l'étranger ? Nous faisons la recherche, vérifions la qualité et nous assurons que vous obtenez exactement ce que vous avez payé.",
        capabilities: [
          "Trouver les Meilleurs Prix dans le Monde",
          "Vous Connecter avec de Vrais Vendeurs",
          "Achat de Marchandises en Gros",
          "Contrôle de Qualité Stricte Avant Expédition",
        ],
      },
      trading: {
        title: "Vente de Beauté & Cosmétiques",
        subtitle: "Des produits de soin de la peau et du corps de qualité livrés chez vous.",
        description: "Nous importons et vendons des produits de beauté et de soins de haute qualité. Vous pouvez acheter directement chez nous à des prix de gros ou de détail.",
        capabilities: [
          "Prix de Gros Spéciaux pour les Boutiques",
          "Lotions de Qualité Supérieure",
          "Commandez Facilement sur WhatsApp",
          "Paiements Sécurisés & Livraison Locale Rapide",
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
      sectionLabel: "Qui Nous Aidons",
      sectionTitle: "Les Entreprises Avec Lesquelles Nous Travaillons",
      sectionSub: "Des fermes aux magasins, nous offrons des services simples d'expédition, d'achat et de conseil pour tous types d'entreprises.",
      items: [
        { name: "Fermes & Agriculture", desc: "Déplacer les récoltes, acheter des outils agricoles et exporter" },
        { name: "Boutiques & Supermarchés", desc: "Apporter des produits quotidiens directement dans vos rayons" },
        { name: "Constructeurs", desc: "Trouver et expédier des matériaux de construction et machines" },
        { name: "Hôpitaux & Pharmacies", desc: "Livraison sûre et rapide de médicaments et fournitures" },
        { name: "Usines & Fabricants", desc: "Achat de matières premières et expédition de produits finis" },
        { name: "Concessionnaires Auto", desc: "Importer facilement des véhicules, camions et pièces de rechange" },
        { name: "Tech & Électronique", desc: "Expédier des ordinateurs, téléphones et équipements solaires" },
        { name: "Mines & Énergie", desc: "Approvisionner les camps miniers et déplacer des équipements lourds" },
      ],
    },
    process: {
      title: "Comment Ça Marche",
      steps: [
        {
          title: "1. Parlons-en",
          description:
            "Dites-nous ce dont votre entreprise a besoin et quels problèmes vous rencontrez.",
        },
        {
          title: "2. Nous Faisons un Plan",
          description:
            "Nous créons un plan simple et clair pour vous aider à atteindre vos objectifs.",
        },
        {
          title: "3. Nous Nous Mettons au Travail",
          description:
            "Notre équipe agit, en vous tenant informé à chaque étape du processus.",
        },
        {
          title: "4. Vous Voyez les Résultats",
          description:
            "Vos marchandises arrivent, votre entreprise grandit et vous économisez de l'argent.",
        },
      ],
    },
    testimonials: {
      title: "Ce Que Disent Nos Partenaires",
    },
    cta: {
      headline: "Prêt à faire grandir\nvotre entreprise avec nous ?",
      button: "Envoyez-nous un Message",
    },
    floatingOrder: "Commander",
    spamWarning: "Commande passée avec succès ! Veuillez vérifier votre dossier spam/courrier indésirable pour votre e-mail de confirmation.",
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
      badge: "DIS Beauté & Soins",
      heroTitle: "Beauté, Soins\n& Parfums.",
      heroSub: "Des soins de la peau, soins du corps et parfums de qualité importés directement pour vous. Livraison locale gratuite à Lubumbashi et Lagos.",
      productsCount: "Produits",
      freeDelivery: "Livraison Locale Gratuite",
      searchPlaceholder: "Rechercher des produits...",
      showing: "Affichage de",
      products: "produits",
      noResults: "Aucun produit trouvé",
      noResultsSub: "Essayez d'ajuster votre recherche ou filtre",
      categories: ["Tous", "Soins de la Peau", "Soins du Corps", "Soins Capillaires", "Parfums", "Accessoires"],
      trustBadges: [
        { title: "Livraison Locale Gratuite", sub: "Lubumbashi & Lagos" },
        { title: "Produits 100% Originaux", sub: "Importés & vérifiés directement" },
        { title: "Commande sur WhatsApp", sub: "Discutez pour acheter en direct" },
        { title: "Emballage Sûr & Scellé", sub: "Livraison protégée & discrète" },
      ],
      bulkTitle: "Achetez en Gros & Économisez",
      bulkSub: "Des prix réduits pour les boutiques, salons et revendeurs en Afrique. Contactez-nous directement sur WhatsApp pour en profiter.",
      bulkCta: "Demander les Prix de Gros",
      orderVia: "Commander via WhatsApp",
      reviews: "avis",
      deliveryBadge: "Livraison locale gratuite à Lubumbashi & Lagos",
      authenticBadge: "Garantie de produit 100% original",
      packagingBadge: "Emballage sûr, scellé & discret",
      productNames: [
        "Gommage Corporel Exfoliant",
        "Sérum Éclaircissant Éclat",
        "Lait Corporel Hydratant aux Plantes",
        "Beurre de Karité Africain 100% Pur",
        "Huile Capillaire Coco & Argan",
        "Brume Faciale Hydratante à la Rose",
        "Huile de Parfum Oud & Vanille",
        "Crème Corporelle Éclaircissante Vitamine C",
      ],
      productDescs: [
        "Un gommage doux aux ingrédients naturels pour éliminer les peaux mortes et rendre la peau lisse et lumineuse.",
        "Un sérum quotidien pour le visage aux vitamines qui illumine le teint et apporte un éclat naturel.",
        "Un lait riche et non gras qui hydrate votre peau toute la journée et la garde toute douce.",
        "Du beurre de karité 100% pur pour nourrir en profondeur, adoucir et protéger la peau sèche.",
        "Une huile nourrissante pour réparer les cheveux abîmés, apporter de la brillance et éviter la casse.",
        "Un spray rafraîchissant à la rose qui hydrate et apaise le visage instantanément.",
        "Une huile parfumée longue durée aux notes chaudes d'oud oriental et de vanille.",
        "Une crème hydratante pour le corps à la Vitamine C qui illumine et protège la peau au quotidien.",
      ],
    },
    aboutPage: {
      backToHome: "Retour à l'Accueil",
      badge: "À Propos du Groupe DIS",
      heroTitle: "Connecter l'Afrique au Monde",
      heroSub: "Digital Integrated Services RDC est une entreprise de confiance qui vous aide à expédier des marchandises, acheter des produits et développer votre entreprise en Afrique et au-delà.",
      statFounded: "Fondée",
      statCountries: "Pays Desservis",
      statServices: "Services Principaux",
      statRC: "Entreprise Enregistrée",
      storyLabel: "Notre Histoire",
      storyTitle: "De la Vision aux Résultats Réels",
      storyP1: "Fondée par Okey Francis CHIBUEZE, DIS Group a été créée pour résoudre les vrais problèmes d'expédition et d'achat rencontrés par les entreprises en Afrique centrale et de l'Ouest. Avec des bureaux principaux en RD Congo et au Nigeria, nous facilitons le commerce international pour tous.",
      storyP2: "En tant qu'entreprise enregistrée et de confiance (COFRANCE INTEGRATED CONCEPT LTD), nous faisons les choses correctement. Nous proposons une expédition rapide, des conseils commerciaux, l'achat de produits et notre propre boutique de produits de beauté de haute qualité.",
      servicesLabel: "Ce Que Nous Faisons",
      servicesTitle: "Quatre Façons de Vous Aider",
      svcLogistics: "Expédition & Livraison",
      svcLogisticsDesc: "Nous transportons vos marchandises en toute sécurité par air, mer ou route à travers l'Afrique, le Moyen-Orient et l'Asie. Nous gérons toute la paperasse pour vous.",
      svcConsulting: "Conseils en Affaires",
      svcConsultingDesc: "Nous vous aidons à créer votre entreprise, à trouver de bons partenaires et à réussir dans de nouveaux pays sans stress.",
      svcProcurement: "Achat de Marchandises",
      svcProcurementDesc: "Nous trouvons les meilleurs produits aux meilleurs prix pour vous, partout dans le monde. Nous vérifions la qualité avant l'expédition.",
      svcTrading: "Vente de Beauté & Cosmétiques",
      svcTradingDesc: "Nous importons et vendons des produits de soins de la peau et du corps de qualité supérieure. Vous pouvez acheter directement chez nous à des prix avantageux.",
      ceoLabel: "Direction",
      ceoTitle: "Rencontrez Notre PDG",
      ceoP1: "Okey Francis CHIBUEZE est le fondateur de DIS Group. Fort d'années d'expérience dans l'expédition, l'achat et le conseil aux entreprises, il a créé cette société pour aider les entreprises africaines à se connecter facilement au reste du monde.",
      ceoP2: "Sous sa direction, DIS s'est développée pour travailler en RD Congo, au Nigeria, au Ghana, aux EAU, en Chine, en Afrique du Sud et dans de nombreux autres pays. Il a bâti un solide réseau de partenaires de confiance partout.",
      ceoP3: "Ce qui le différencie ? Il est toujours facile à joindre. Vous pouvez discuter avec lui directement sur WhatsApp pour faire avancer les choses rapidement.",
      hqLabel: "Siège Social",
      valuesLabel: "Nos Valeurs",
      valuesTitle: "Ce Qui Est Important Pour Nous",
      val1Title: "Honnêteté & Confiance",
      val1Desc: "Nous sommes une entreprise enregistrée. Nous faisons les choses correctement et tenons toujours nos promesses.",
      val2Title: "Nous Sommes Vos Partenaires",
      val2Desc: "Nous ne vous traitons pas simplement comme un client. Nous travaillons avec vous pour aider votre entreprise à grandir avec le temps.",
      val3Title: "Experts Locaux & Mondiaux",
      val3Desc: "Nous savons comment les choses fonctionnent en Afrique, et nous savons aussi comment faire avancer les choses dans le reste du monde.",
      ctaTitle: "Prêt à Travailler Avec Nous ?",
      ctaSub: "Envoyez un message direct au PDG Okey Francis CHIBUEZE pour parler de ce dont vous avez besoin.",
      ctaButton: "Discuter sur WhatsApp",
    },
    achievementsPage: {
      heroTitle: "Nos Histoires de Succès",
      heroSub: "Découvrez comment nous rendons l'expédition plus rapide, faisons économiser de l'argent à nos clients et résolvons de vrais problèmes commerciaux en Afrique.",
      researchTitle: "Vrais Problèmes, Vraies Solutions",
      researchDesc: "Comment le PDG Okey Francis CHIBUEZE et notre équipe aident les entreprises à surmonter les défis quotidiens.",
      insights: [
        { title: "Accélérer le Passage aux Frontières", content: "Nous avons aidé à réduire le temps d'attente des camions à la frontière RDC-Zambie de 48 heures à seulement 12 heures.", fullText: `**Le Problème**
Les camions transportant des marchandises importantes étaient bloqués à la frontière entre la RD Congo et la Zambie pendant des jours. Cela causait d'énormes retards et coûtait beaucoup d'argent aux entreprises.

**Notre Solution**
Au lieu d'utiliser des documents papier lents, nous avons introduit un système numérique plus rapide. En envoyant tous les documents électroniquement avant même l'arrivée du camion, les douaniers peuvent traiter les marchandises immédiatement.

**Le Résultat**
Le temps d'attente est passé de plus de 2 jours à moins de 12 heures. Cela signifie que les entreprises reçoivent leurs marchandises plus rapidement et économisent beaucoup d'argent sur les coûts de transport.` },
        { title: "Mélanger Transport Routier et Ferroviaire", content: "Nous avons découvert que combiner l'expédition par train et par route aide les entreprises du Haut-Katanga à économiser 15% sur leurs coûts totaux.", fullText: `**Le Problème**
La plupart des entreprises du Haut-Katanga (RD Congo) ne comptent que sur les camions pour déplacer des marchandises lourdes. Quand les routes se dégradent pendant la saison des pluies, tout s'arrête et les prix augmentent.

**Notre Solution**
Nous avons conseillé à nos clients de commencer à utiliser les trains pour la plus longue partie du trajet et d'utiliser uniquement des camions pour la livraison finale. Nous les avons aidés à trouver les meilleurs itinéraires de train.

**Le Résultat**
En utilisant à la fois les trains et les camions, nos clients ont économisé 15% sur leurs coûts d'expédition. De plus, leurs livraisons étaient beaucoup plus fiables, même par mauvais temps.` },
        { title: "Garder les Entreprises Ouvertes", content: "Nous avons créé des plans simples pour aider les entreprises à survivre lorsque l'argent perd de sa valeur ou lors de situations d'urgence en Afrique de l'Ouest.", fullText: `**Le Problème**
Faire des affaires en Afrique de l'Ouest peut être difficile lorsque la valeur de la monnaie change rapidement ou lors de grèves soudaines dans les ports.

**Notre Solution**
Nous avons appris à nos clients comment stocker leurs marchandises dans différents endroits sûrs au lieu d'un seul. Nous les avons également aidés à trouver différents fournisseurs pour ne jamais manquer de produits.

**Le Résultat**
Même lorsque d'autres entreprises ont dû s'arrêter en raison d'urgences, nos clients ont continué à vendre. Ils n'ont jamais manqué de stock et leurs entreprises sont restées solides.` }
      ],
      milestonesTitle: "Notre Histoire",
      milestones: [
        { year: "2024 - 2026", role: "Croissance Transfrontalière", details: "Construction d'un réseau solide pour l'expédition et la vente de marchandises entre Dubaï, Lagos et Lubumbashi." },
        { year: "2022", role: "Aider de Grandes Entreprises", details: "Conseil aux grandes entreprises minières sur la façon d'acheter des produits locaux en toute sécurité et de les déplacer facilement." },
        { year: "2019", role: "Réparer les Chaînes d'Approvisionnement", details: "A aidé une grande chaîne de supermarchés à livrer ses produits plus rapidement et à moindre coût." },
        { year: "2013", role: "Le Début", details: "Fondation de COFRANCE INTEGRATED CONCEPT LTD, la société mère qui a tout déclenché." }
      ],
      readPaper: "Lire le Document de Recherche",
      closePaper: "Fermer le Document"
    },

    dermaScan: {
      title: "Derma-Scan IA",
      poweredBy: "Propulsé par Gemini",
      discover: "Découvrez Votre Produit Idéal !",
      discoverSub: "Scannez votre type de peau pour obtenir des cosmétiques qui vous conviennent parfaitement.",
      analyzeSkin: "Analysez Votre Peau",
      analyzeSub: "Choisissez comment vous souhaitez que notre IA analyse votre peau pour trouver les produits parfaits.",
      takePhoto: "Prendre une Photo",
      uploadImage: "Télécharger une Image",
      describeSkin: "Décrire la Peau",
      cancel: "Annuler",
      capturePhoto: "Capturer la Photo",
      describeLabelText: "Décrivez vos problèmes de peau",
      describeLabelImg: "Ajouter des détails (Optionnel)",
      placeholder: "ex: Ma zone T est grasse mais mes joues sont sèches après le lavage...",
      back: "Retour",
      analyzeBtn: "Analyser la Peau",
      analyzing: "Analyse du Profil Cutané",
      analyzingSub: "Notre IA traite vos informations...",
      analysisFailed: "L'analyse a échoué",
      tryAgain: "Réessayer",
      identifiedType: "Type Identifié",
      perfectMatches: "Vos Correspondances Parfaites",
      productsFound: "Produits Trouvés",
      noProducts: "Aucun produit spécialisé trouvé pour ce type de peau actuellement en stock.",
      startNew: "Commencer un Nouveau Scan"
    },
    trackOrder: {
      tag: "Logistique & Distribution",
      title: "Suivre Votre Commande",
      subtitle: "Entrez votre numéro de commande et votre adresse e-mail pour obtenir des mises à jour en temps réel.",
      orderNumPlaceholder: "Numéro de Commande (ex: ORD-...)",
      emailPlaceholder: "Adresse E-mail de Facturation",
      trackBtn: "Suivre",
      detailsLabel: "Détails de la Commande",
      totalLabel: "Montant Total",
      paid: "Payé",
      unpaid: "Non Payé",
      cancelledTitle: "Commande Annulée",
      cancelledSub: "Cette commande a été annulée. Veuillez contacter le support pour obtenir de l'aide.",
      itemsLabel: "Articles de la Commande",
      qtyLabel: "Qté",
      stages: {
        PENDING: { label: "En attente", desc: "En attente de confirmation de paiement." },
        PAYMENT_REVIEW: { label: "Vérification du paiement", desc: "Vérification de votre preuve de paiement." },
        PROCESSING: { label: "En cours", desc: "Emballage soigné de vos articles." },
        SHIPPED: { label: "Expédié", desc: "Remis au partenaire logistique." },
        DELIVERED: { label: "Livré", desc: "Profitez de vos articles !" }
      }
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
      company: "Empresa",
    },
    hero: {
      headline: "Envíos Rápidos y\nAsesoría para\nÁfrica",
      subtext:
        "Le ayudamos a mover sus mercancías de manera segura, encontrar socios de confianza y hacer crecer su negocio fácilmente en África y más allá.",
      cta1: "Hablemos",
      cta2: "Nuestros Servicios",
    },
    trustStrip: {
      items: [
        "Envíos Rápidos",
        "Compra de Productos",
        "Asesoría de Negocios",
        "Importación y Exportación",
        "Entrega Segura",
        "Red de Confianza",
        "Apoyo al Crecimiento",
        "Nuevos Mercados",
      ],
    },
    services: {
      title: "Lo Que Hacemos",
      subtitle: "Soluciones simples para ayudar a su negocio a crecer",
      logistics: {
        title: "Envíos y Entregas",
        description:
          "Movemos sus mercancías de forma segura y rápida por África, Medio Oriente y Asia.",
      },
      consulting: {
        title: "Asesoría de Negocios",
        description:
          "Le ayudamos a establecer su negocio, encontrar los socios adecuados y tener éxito en nuevos mercados.",
      },
      procurement: {
        title: "Compra de Productos",
        description:
          "Encontramos los mejores productos a los mejores precios para usted, en cualquier parte del mundo.",
      },
      trading: {
        title: "Comercio y Ventas",
        description:
          "Conectamos a compradores y vendedores para que el comercio internacional sea fácil y rentable.",
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
        title: "Envíos Rápidos y Entregas",
        subtitle: "Movemos sus mercancías de manera segura por África y el mundo.",
        description: "Nos encargamos de todo, desde el empaque hasta la entrega. Ya sea que necesite enviar un paquete pequeño o un contenedor grande, nos aseguramos de que llegue a tiempo y en perfectas condiciones.",
        capabilities: [
          "Trámites de Aduana Fáciles",
          "Envíos Rápidos por Aire y Mar",
          "Almacenamiento Seguro",
          "Entrega Directa Puerta a Puerta",
        ],
      },
      consulting: {
        title: "Asesoría y Apoyo para Negocios",
        subtitle: "Le ayudamos a crear y hacer crecer su negocio en África.",
        description: "Comenzar un negocio en un país nuevo puede ser difícil. Nosotros lo hacemos fácil. Desde registrar su empresa hasta encontrar a los socios adecuados, lo guiamos en cada paso.",
        capabilities: [
          "Creación de Empresas Paso a Paso",
          "Búsqueda de Socios Locales de Confianza",
          "Ayuda con Licencias y Permisos",
          "Herramientas Digitales para Crecer",
        ],
      },
      procurement: {
        title: "Compra de Productos y Materiales",
        subtitle: "Encontramos los mejores productos a los mejores precios para usted.",
        description: "¿Necesita comprar equipos, materiales o productos en el extranjero? Nosotros hacemos la búsqueda, revisamos la calidad y nos aseguramos de que reciba exactamente lo que pagó.",
        capabilities: [
          "Búsqueda de los Mejores Precios a Nivel Mundial",
          "Conexión con Vendedores Reales",
          "Compra de Productos al por Mayor",
          "Revisión Estricta de Calidad antes del Envío",
        ],
      },
      trading: {
        title: "Venta de Belleza y Cosméticos",
        subtitle: "Productos de calidad para la piel y el cuerpo entregados en su puerta.",
        description: "Importamos y vendemos productos de belleza y cuidado personal de alta calidad. Puede comprar directamente con nosotros a precios de mayorista o minorista.",
        capabilities: [
          "Precios Especiales al por Mayor para Tiendas",
          "Lociones de la Mejor Calidad",
          "Haga sus Pedidos Fácilmente por WhatsApp",
          "Pagos Seguros y Entrega Local Rápida",
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
      sectionLabel: "A Quiénes Ayudamos",
      sectionTitle: "Negocios con los que Trabajamos",
      sectionSub: "Desde granjas hasta tiendas, ofrecemos servicios sencillos de envío, compras y asesoría para todo tipo de negocios.",
      items: [
        { name: "Granjas y Agricultura", desc: "Mover cosechas, comprar herramientas y exportar productos" },
        { name: "Tiendas y Supermercados", desc: "Llevar productos diarios directamente a sus estantes" },
        { name: "Constructores", desc: "Encontrar y enviar materiales de construcción y maquinaria" },
        { name: "Hospitales y Farmacias", desc: "Entrega segura y rápida de medicinas y suministros" },
        { name: "Fábricas y Talleres", desc: "Compra de materias primas y envío de productos terminados" },
        { name: "Vendedores de Autos", desc: "Importar vehículos, camiones y repuestos fácilmente" },
        { name: "Tecnología y Electrónica", desc: "Envío de computadoras, teléfonos y equipos solares" },
        { name: "Minería y Energía", desc: "Abastecer campamentos mineros y mover equipos pesados" },
      ],
    },
    process: {
      title: "Cómo Funciona",
      steps: [
        {
          title: "1. Hablemos",
          description:
            "Díganos qué necesita su negocio y qué problemas enfrenta.",
        },
        {
          title: "2. Hacemos un Plan",
          description:
            "Creamos un plan simple y claro para ayudarle a alcanzar sus metas.",
        },
        {
          title: "3. Nos Ponemos a Trabajar",
          description:
            "Nuestro equipo entra en acción, manteniéndolo informado en cada paso.",
        },
        {
          title: "4. Usted Ve Resultados",
          description:
            "Sus productos llegan, su negocio crece y usted ahorra dinero.",
        },
      ],
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Socios",
    },
    cta: {
      headline: "¿Listo para hacer crecer\nsu negocio con nosotros?",
      button: "Envíenos un Mensaje",
    },
    floatingOrder: "Comprar Ahora",
    spamWarning: "¡Pedido realizado con éxito! Por favor, revise su carpeta de spam/correo no deseado para encontrar su correo de confirmación.",
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
      badge: "DIS Belleza & Cuidado",
      heroTitle: "Belleza, Cuidado\n& Fragancias.",
      heroSub: "Productos de calidad para la piel, el cuerpo y fragancias importados directamente para usted. Entrega local gratuita en Lubumbashi y Lagos.",
      productsCount: "Productos",
      freeDelivery: "Entrega Local Gratuita",
      searchPlaceholder: "Buscar productos...",
      showing: "Mostrando",
      products: "productos",
      noResults: "No se encontraron productos",
      noResultsSub: "Intente ajustar su búsqueda o filtro",
      categories: ["Todos", "Cuidado Facial", "Cuidado Corporal", "Cuidado Capilar", "Fragancias", "Accesorios"],
      trustBadges: [
        { title: "Entrega Local Gratuita", sub: "Lubumbashi & Lagos" },
        { title: "Productos 100% Originales", sub: "Importados & verificados directamente" },
        { title: "Pedido por WhatsApp", sub: "Chatee para comprar instantáneamente" },
        { title: "Empaque Seguro & Sellado", sub: "Entrega protegida & discreta" },
      ],
      bulkTitle: "Compre al por Mayor & Ahorre",
      bulkSub: "Precios con descuento para tiendas, salones y revendedores en África. Contáctenos directamente por WhatsApp para conocer los precios mayoristas.",
      bulkCta: "Solicitar Precios Mayoristas",
      orderVia: "Pedir por WhatsApp",
      reviews: "reseñas",
      deliveryBadge: "Entrega local gratuita en Lubumbashi & Lagos",
      authenticBadge: "Garantía de producto 100% original",
      packagingBadge: "Empaque seguro, sellado & discreto",
      productNames: [
        "Exfoliante Corporal Suave",
        "Sérum Iluminador Facial",
        "Loción Corporal Hidratante",
        "Manteca de Karité Africana 100% Pura",
        "Aceite Capilar de Coco & Argán",
        "Bruma Facial Hidratante de Rosa",
        "Aceite de Perfume Oud & Vainilla",
        "Crema Corporal Iluminadora Vitamina C",
      ],
      productDescs: [
        "Un exfoliante suave con ingredientes naturales para eliminar células muertas y dejar la piel suave y luminosa.",
        "Un sérum facial diario con vitaminas que ilumina la piel y unifica el tono de forma natural.",
        "Una loción rica y no grasa que hidrata la piel todo el día y la mantiene suave.",
        "Manteca de karité 100% pura para hidratar en profundidad, suavizar y proteger la piel seca.",
        "Un aceite nutritivo para reparar el cabello dañado, aportar brillo y evitar la rotura.",
        "Un spray refrescante de agua de rosas que hidrata y calma el rostro al instante.",
        "Un aceite perfumado de larga duración con notas cálidas de oud árabe y vainilla.",
        "Una crema corporal con Vitamina C que hidrata, ilumina y protege la piel a diario.",
      ],
    },
    aboutPage: {
      backToHome: "Volver al Inicio",
      badge: "Sobre el Grupo DIS",
      heroTitle: "Conectando a África con el Mundo",
      heroSub: "Digital Integrated Services RDC es una empresa de confianza que le ayuda a enviar mercancías, comprar productos y hacer crecer su negocio en África y más allá.",
      statFounded: "Fundada",
      statCountries: "Países Atendidos",
      statServices: "Servicios Principales",
      statRC: "Empresa Registrada",
      storyLabel: "Nuestra Historia",
      storyTitle: "De una Idea a Resultados Reales",
      storyP1: "Fundada por Okey Francis CHIBUEZE, DIS Group se creó para resolver los verdaderos problemas de envío y compras que enfrentan las empresas en África Central y Occidental. Con oficinas principales en RD Congo y Nigeria, hacemos que el comercio internacional sea fácil para todos.",
      storyP2: "Como empresa registrada y de confianza (COFRANCE INTEGRATED CONCEPT LTD), hacemos las cosas bien. Ofrecemos envíos rápidos, asesoría para negocios, compra de productos y nuestra propia tienda de belleza de alta calidad.",
      servicesLabel: "Lo Que Hacemos",
      servicesTitle: "Cuatro Formas en las que Ayudamos",
      svcLogistics: "Envíos y Entregas",
      svcLogisticsDesc: "Movemos sus mercancías de manera segura por aire, mar o tierra a través de África, Medio Oriente y Asia. Nosotros nos encargamos de todo el papeleo.",
      svcConsulting: "Asesoría para Negocios",
      svcConsultingDesc: "Le ayudamos a iniciar su negocio, encontrar buenos socios y tener éxito en nuevos países sin estrés.",
      svcProcurement: "Compra de Productos",
      svcProcurementDesc: "Encontramos los mejores productos a los mejores precios para usted, en cualquier parte del mundo. Revisamos la calidad antes de enviar.",
      svcTrading: "Venta de Belleza y Cosméticos",
      svcTradingDesc: "Importamos y vendemos productos de alta calidad para la piel y el cuerpo. Puede comprar directamente con nosotros a excelentes precios.",
      ceoLabel: "Liderazgo",
      ceoTitle: "Conozca a Nuestro CEO",
      ceoP1: "Okey Francis CHIBUEZE es el fundador de DIS Group. Con años de experiencia en envíos, compras y asesoría de negocios, creó esta empresa para ayudar a las empresas africanas a conectarse fácilmente con el resto del mundo.",
      ceoP2: "Bajo su liderazgo, DIS ha crecido para trabajar en RD Congo, Nigeria, Ghana, Emiratos Árabes, China, Sudáfrica y muchos otros países. Ha construido una sólida red de socios de confianza en todas partes.",
      ceoP3: "¿Qué lo hace diferente? Siempre es fácil de contactar. Puede enviarle un mensaje directamente por WhatsApp para hacer las cosas rápido.",
      hqLabel: "Sede Central",
      valuesLabel: "Nuestros Valores",
      valuesTitle: "Lo Que Nos Importa",
      val1Title: "Honestidad y Confianza",
      val1Desc: "Somos una empresa registrada. Hacemos las cosas bien y siempre cumplimos nuestras promesas.",
      val2Title: "Somos Sus Socios",
      val2Desc: "No lo tratamos solo como un cliente. Trabajamos con usted para ayudar a que su negocio crezca con el tiempo.",
      val3Title: "Expertos Locales y Globales",
      val3Desc: "Sabemos cómo funcionan las cosas en África, y también sabemos cómo hacer negocios con el resto del mundo.",
      ctaTitle: "¿Listo para Trabajar con Nosotros?",
      ctaSub: "Envíe un mensaje directo al CEO Okey Francis CHIBUEZE para hablar sobre lo que necesita.",
      ctaButton: "Chatear en WhatsApp",
    },
    achievementsPage: {
      heroTitle: "Nuestras Historias de Éxito",
      heroSub: "Vea cómo hacemos que los envíos sean más rápidos, ahorramos dinero a nuestros clientes y resolvemos problemas reales de negocios en África.",
      researchTitle: "Problemas Reales, Soluciones Reales",
      researchDesc: "Cómo el CEO Okey Francis CHIBUEZE y nuestro equipo ayudan a las empresas a superar los retos diarios.",
      insights: [
        { title: "Cruce de Fronteras Más Rápido", content: "Ayudamos a reducir el tiempo de espera de los camiones en la frontera entre RD Congo y Zambia de 48 horas a solo 12 horas.", fullText: `**El Problema**
Los camiones que transportaban mercancías importantes se quedaban atascados en la frontera entre RD Congo y Zambia durante días. Esto causaba grandes retrasos y costaba mucho dinero a las empresas.

**Nuestra Solución**
En lugar de usar documentos de papel lentos, introdujimos un sistema digital más rápido. Al enviar todos los documentos por internet antes de que llegue el camión, los agentes de aduanas pueden procesar las mercancías de inmediato.

**El Resultado**
El tiempo de espera bajó de más de 2 días a menos de 12 horas. Esto significa que las empresas reciben sus mercancías más rápido y ahorran mucho dinero en costos de transporte.` },
        { title: "Mezclando Trenes y Camiones", content: "Descubrimos que usar trenes y camiones juntos ayuda a las empresas en Haut-Katanga a ahorrar un 15% en sus costos.", fullText: `**El Problema**
La mayoría de las empresas en Haut-Katanga (RD Congo) solo usan camiones para mover mercancías pesadas. Cuando los caminos se dañan por la lluvia, todo se detiene y los precios suben.

**Nuestra Solución**
Aconsejamos a nuestros clientes empezar a usar trenes para la mayor parte del viaje, y usar camiones solo para la entrega final. Los ayudamos a encontrar las mejores rutas de tren.

**El Resultado**
Al usar tanto trenes como camiones, nuestros clientes ahorraron un 15% en sus costos de envío. Además, sus entregas fueron mucho más seguras, incluso con mal clima.` },
        { title: "Manteniendo los Negocios Abiertos", content: "Creamos planes sencillos para ayudar a las empresas a sobrevivir cuando el dinero pierde valor o hay emergencias en África Occidental.", fullText: `**El Problema**
Hacer negocios en África Occidental puede ser difícil cuando el valor del dinero cambia rápido o cuando hay huelgas de repente en los puertos.

**Nuestra Solución**
Enseñamos a nuestros clientes cómo guardar sus mercancías en diferentes lugares seguros en vez de uno solo. También los ayudamos a encontrar distintos proveedores para que nunca se queden sin productos.

**El Resultado**
Incluso cuando otros negocios tuvieron que cerrar por emergencias, nuestros clientes siguieron vendiendo. Nunca se quedaron sin mercancía y sus negocios se mantuvieron fuertes.` }
      ],
      milestonesTitle: "Nuestra Historia",
      milestones: [
        { year: "2024 - 2026", role: "Crecimiento Internacional", details: "Construimos una fuerte red para enviar y vender mercancías entre Dubái, Lagos y Lubumbashi." },
        { year: "2022", role: "Ayudando a Grandes Empresas", details: "Asesoramos a grandes compañías mineras sobre cómo comprar productos locales de forma segura y moverlos fácilmente." },
        { year: "2019", role: "Mejorando Envíos", details: "Ayudamos a una gran cadena de supermercados a recibir sus productos más rápido y más barato." },
        { year: "2013", role: "El Comienzo", details: "Fundamos COFRANCE INTEGRATED CONCEPT LTD, la empresa principal que inició todo." }
      ],
      readPaper: "Leer Documento de Investigación",
      closePaper: "Cerrar Documento"
    },

    dermaScan: {
      title: "Derma-Scan con IA",
      poweredBy: "Desarrollado por Gemini",
      discover: "¡Descubre tu producto ideal!",
      discoverSub: "Escanea tu tipo de piel para obtener cosméticos que se adapten perfectamente a ti.",
      analyzeSkin: "Analiza tu Piel",
      analyzeSub: "Elige cómo te gustaría que nuestra IA analice tu piel para encontrar los productos perfectos.",
      takePhoto: "Tomar una Foto",
      uploadImage: "Subir Imagen",
      describeSkin: "Describir la Piel",
      cancel: "Cancelar",
      capturePhoto: "Capturar Foto",
      describeLabelText: "Describe tus problemas de piel",
      describeLabelImg: "Añadir detalles adicionales (Opcional)",
      placeholder: "ej: Mi zona T es grasa pero mis mejillas se sienten secas...",
      back: "Volver",
      analyzeBtn: "Analizar la Piel",
      analyzing: "Analizando el Perfil de la Piel",
      analyzingSub: "Nuestra IA está procesando tu información...",
      analysisFailed: "El análisis ha fallado",
      tryAgain: "Intentar de Nuevo",
      identifiedType: "Tipo Identificado",
      perfectMatches: "Tus Coincidencias Perfectas",
      productsFound: "Productos Encontrados",
      noProducts: "No se encontraron productos especializados para este tipo de piel en stock.",
      startNew: "Comenzar un Nuevo Escaneo"
    },
    trackOrder: {
      tag: "Logística y Distribución",
      title: "Rastrear tu Pedido",
      subtitle: "Introduce tu número de pedido y correo electrónico para obtener actualizaciones en tiempo real.",
      orderNumPlaceholder: "Número de Pedido (ej: ORD-...)",
      emailPlaceholder: "Correo Electrónico de Facturación",
      trackBtn: "Rastrear",
      detailsLabel: "Detalles del Pedido",
      totalLabel: "Cantidad Total",
      paid: "Pagado",
      unpaid: "No Pagado",
      cancelledTitle: "Pedido Cancelado",
      cancelledSub: "Este pedido ha sido cancelado. Por favor, contacta con soporte.",
      itemsLabel: "Artículos del Pedido",
      qtyLabel: "Cant.",
      stages: {
        PENDING: { label: "Pendiente", desc: "Esperando confirmación de pago." },
        PAYMENT_REVIEW: { label: "Revisión de Pago", desc: "Revisando tu comprobante de pago." },
        PROCESSING: { label: "Procesando", desc: "Empaquetando tus artículos cuidadosamente." },
        SHIPPED: { label: "Enviado", desc: "Entregado al socio logístico." },
        DELIVERED: { label: "Entregado", desc: "¡Disfruta de tus artículos!" }
      }
    }
  }
};

export default translations;
