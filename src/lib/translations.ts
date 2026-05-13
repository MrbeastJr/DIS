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
  };
  globalReach: {
    title: string;
    subtitle: string;
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
}

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      industries: "Industries",
      about: "About",
      contact: "Contact",
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
          a: "Absolutely. DIGITAL INTEGRATED SERVICES RDC operates in direct alignment with our registered Nigerian trading headquarter (Subsidiary of COFRAN... (NIG) Ltd RC:1492798), guaranteeing institutional transparency.",
        },
      ],
    },
    globalReach: {
      title: "Global Reach",
      subtitle:
        "Strategic presence across key markets in Africa, the Middle East, and Asia.",
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
    loader: {
      subtitle: "Building Global Operational Excellence",
    },
    footer: {
      tagline: "Precision. Integrity. Global Perspective.",
      copyright: `© ${new Date().getFullYear()} DIS Group. All rights reserved.`,
    },
    pieChart: {
      sectionLabel: "Revenue Distribution",
      sectionTitle: "Business Segments",
      scrollProgress: "Scroll Progress",
      segments: [
        { label: "Logistics" },
        { label: "Consulting" },
        { label: "Procurement" },
        { label: "Trading" },
      ],
    },
    tradingStore: {
      badge: "DIS Beauty & Cosmetics",
      heroTitle: "Premium Beauty\nCollection",
      heroSub: "Curated skincare, body care, and fragrance imports. Direct from trusted global suppliers to your doorstep.",
      productsCount: "Products",
      freeDelivery: "Free Local Delivery",
      searchPlaceholder: "Search products...",
      showing: "Showing",
      products: "products",
      noResults: "No products found",
      noResultsSub: "Try adjusting your search or filter",
      categories: ["All", "Skincare", "Body Care", "Hair Care", "Fragrance"],
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
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      industries: "Industries",
      about: "À Propos",
      contact: "Contact",
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
          q: "Vos entités régionales sont-elles entièrement vérifiées ?",
          a: "Absolument. DIGITAL INTEGRATED SERVICES RDC opère en alignement direct avec notre siège commercial nigérian enregistré (Filiale de COFRAN... (NIG) Ltd RC:1492798), garantissant la transparence institutionnelle.",
        },
      ],
    },
    globalReach: {
      title: "Portée Mondiale",
      subtitle:
        "Présence stratégique sur les marchés clés en Afrique, au Moyen-Orient et en Asie.",
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
    loader: {
      subtitle: "Construire l'Excellence Opérationnelle Mondiale",
    },
    footer: {
      tagline: "Précision. Intégrité. Perspective Mondiale.",
      copyright: `© ${new Date().getFullYear()} DIS Group. Tous droits réservés.`,
    },
    pieChart: {
      sectionLabel: "Répartition des Revenus",
      sectionTitle: "Segments d'Activité",
      scrollProgress: "Progression du Défilement",
      segments: [
        { label: "Logistique" },
        { label: "Conseil" },
        { label: "Approvisionnement" },
        { label: "Commerce" },
      ],
    },
    tradingStore: {
      badge: "DIS Beauté & Cosmétiques",
      heroTitle: "Collection Beauté\nPremium",
      heroSub: "Importations sélectionnées de soins de la peau, soins corporels et parfums. Directement de fournisseurs mondiaux de confiance.",
      productsCount: "Produits",
      freeDelivery: "Livraison Locale Gratuite",
      searchPlaceholder: "Rechercher des produits...",
      showing: "Affichage de",
      products: "produits",
      noResults: "Aucun produit trouvé",
      noResultsSub: "Essayez d'ajuster votre recherche ou filtre",
      categories: ["Tous", "Soins Peau", "Soins Corps", "Soins Cheveux", "Parfum"],
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
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      industries: "Industrias",
      about: "Acerca de",
      contact: "Contacto",
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
        title: "Comercio de Belleza, Cosméticos y Materias Primas",
        subtitle: "Importaciones premium de cosméticos y estilo de vida gestionadas con ejecución retail global.",
        description: "DIGITAL INTEGRATED SERVICES RDC mantiene un próspero mercado comercial especializado en bienestar cutáneo altamente curado, formulaciones de brillo y productos de cuidado personal distribuidos directamente a través de nuestros hubs locales.",
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
          q: "¿Sus entidades regionales están completamente verificadas?",
          a: "Absolutamente. DIGITAL INTEGRATED SERVICES RDC opera en alineación directa con nuestra sede comercial nigeriana registrada (Subsidiaria de COFRAN... (NIG) Ltd RC:1492798), garantizando transparencia institucional.",
        },
      ],
    },
    globalReach: {
      title: "Alcance Global",
      subtitle:
        "Presencia estratégica en mercados clave de África, Medio Oriente y Asia.",
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
    loader: {
      subtitle: "Construyendo Excelencia Operacional Global",
    },
    footer: {
      tagline: "Precisión. Integridad. Perspectiva Global.",
      copyright: `© ${new Date().getFullYear()} DIS Group. Todos los derechos reservados.`,
    },
    pieChart: {
      sectionLabel: "Distribución de Ingresos",
      sectionTitle: "Segmentos de Negocio",
      scrollProgress: "Progreso de Desplazamiento",
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
      categories: ["Todos", "Cuidado Piel", "Cuidado Corporal", "Cuidado Capilar", "Fragancia"],
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
        "Manteca corporal 100% pura importada formulada para acondicionamiento profundo y protección de la piel.",
        "Aceite capilar reparador intensivo que combina coco y argán para restaurar el brillo y reducir la rotura.",
        "Bruma facial refrescante infusionada con rosa para un impulso instantáneo de hidratación. Perfecta para revitalización en movimiento.",
        "Aceite perfumado de inspiración árabe de larga duración con oud rico, vainilla cálida y notas sutiles de almizcle.",
        "Crema corporal enriquecida con Vitamina C para iluminar, unificar el tono de piel y brindar protección antioxidante todo el día.",
      ],
    },
  },
};

export default translations;
