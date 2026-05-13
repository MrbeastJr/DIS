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
          "Django-Ready Enterprise Infrastructure Scoping",
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
          a: "We deploy enterprise architectures optimized for scaling businesses, incorporating high-performance Django-ready backend environments for custom client management, ledgers, and seamless messaging integrations.",
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
          "Cadrage d'Infrastructure Django Prête pour l'Entreprise",
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
          a: "Nous déployons des architectures d'entreprise optimisées pour la mise à l'échelle, intégrant des environnements backend Django haute performance pour la gestion des clients et les intégrations de messagerie.",
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
          "Alcance de Infraestructura Django Lista para Empresas",
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
          a: "Desplegamos arquitecturas empresariales optimizadas para escalabilidad, incorporando entornos backend Django de alto rendimiento para gestión de clientes e integraciones de mensajería.",
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
  },
};

export default translations;
