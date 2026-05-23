import re

with open('src/lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the 2013 Milestone in all languages
content = content.replace(
    'Founder, Logistics Conference", details: "Established a premier regional conference to discuss structural solutions for emerging market supply chains."',
    'Founder, COFRANCE INTEGRATED CONCEPT LTD", details: "Founded the parent company (RC: 1492798) that serves as the foundation for multi-sector enterprise connecting African markets to global supply chains."'
)

content = content.replace(
    'Fondateur, Conférence sur la Logistique", details: "Création d\\'une conférence régionale de premier plan pour discuter des solutions structurelles pour les chaînes d\\'approvisionnement des marchés émergents."',
    'Fondateur, COFRANCE INTEGRATED CONCEPT LTD", details: "A fondé la société mère (RC : 1492798) qui sert de base à une entreprise multisectorielle reliant les marchés africains aux chaînes d\\'approvisionnement mondiales."'
)

content = content.replace(
    'Fundador, Conferencia de Logística", details: "Establecimiento de una conferencia regional de primer nivel para discutir soluciones estructurales para las cadenas de suministro de los mercados emergentes."',
    'Fundador, COFRANCE INTEGRATED CONCEPT LTD", details: "Fundó la empresa matriz (RC: 1492798) que sirve como base para una empresa multisectorial que conecta los mercados africanos con las cadenas de suministro globales."'
)


# EN Papers
paper1_en = r'''This comprehensive research paper outlines a structural framework for digitizing cross-border customs protocols between the Democratic Republic of Congo (DRC) and Zambia, a critical node in the Southern African Development Community (SADC) logistics corridor. 

Historically, reliance on fragmented, manual ledger systems has led to severe bottlenecking, resulting in average border wait times exceeding 48 hours for heavy freight. This paper proposes a unified, API-driven manifest sharing architecture that integrates disparate national customs databases into a centralized digital clearinghouse. 

The study demonstrates that by preemptively submitting electronic manifests and utilizing automated risk-assessment algorithms, processing friction can be drastically minimized. Empirical modeling suggests that full implementation of this digital framework would reduce average border wait times to under 12 hours. Furthermore, the paper details the necessary hardware infrastructure required at key border posts, the crucial process of stakeholder alignment among customs officials and logistics providers, and projects a 24% improvement in cargo velocity, translating to a substantial economic boost for regional trade volumes.'''

paper2_en = r'''This white paper provides an in-depth analysis of the cost-benefit ratio associated with adopting multimodal transport networks within the Haut-Katanga province—a primary hub for mineral extraction and heavy industrial procurement. 

Traditionally, industrial sectors in this region have relied almost exclusively on road transport, exposing supply chains to volatility from deteriorating road infrastructure, seasonal weather disruptions, and fluctuating fuel costs. This research advocates for a strategic shift towards a hybrid rail-road model. By migrating 40% of heavy industrial procurement to upgraded rail corridors—while maintaining road transport for last-mile delivery—enterprises can achieve significant cost optimization. 

The paper presents a comprehensive analysis of current rail capacities, identifies critical bottlenecks, and outlines the required capital investments in regional transfer nodes. Through detailed economic modeling, the research concludes that this multimodal integration yields a 15% reduction in overall landed costs while simultaneously building a robust risk mitigation strategy against regional infrastructure deficits.'''

paper3_en = r'''This detailed academic analysis explores the construction of resilient supply chains in highly volatile emerging markets, with a specific focus on West Africa. 

Operating in these environments presents unique challenges, including acute currency volatility, sudden geopolitical shifts, and infrastructural unpredictability. The paper introduces an adaptive procurement model designed specifically to insulate logistics networks from these macroeconomic shocks. Central to this model is the strategic implementation of decentralized warehousing, which prevents localized disruptions from causing total systemic failure. 

Furthermore, the research details multi-currency hedging strategies tailored for import-export operators, and advocates for dynamic supplier diversification to mitigate single-point-of-failure risks. Drawing on extensive case studies from recent market fluctuations in Nigeria and neighboring regions, the analysis proves that organizations employing this adaptive model consistently maintain margin stability and prevent catastrophic stockouts during periods of severe economic stress.'''

content = re.sub(
    r'fullText: "This research paper outlines a 5-step framework[^"]+"',
    f'fullText: "{paper1_en}"',
    content
)

content = re.sub(
    r'fullText: "This white paper analyzes the cost-benefit ratio[^"]+"',
    f'fullText: "{paper2_en}"',
    content
)

content = re.sub(
    r'fullText: "A detailed academic analysis on building resilient supply chains[^"]+"',
    f'fullText: "{paper3_en}"',
    content
)


# FR Papers
paper1_fr = r'''Ce document de recherche complet décrit un cadre structurel pour la numérisation des protocoles douaniers transfrontaliers entre la République démocratique du Congo (RDC) et la Zambie, un nœud critique dans le corridor logistique de la Communauté de développement de l'Afrique australe (SADC). 

Historiquement, le recours à des systèmes manuels et fragmentés a conduit à de graves goulots d'étranglement, entraînant des temps d'attente moyens aux frontières dépassant 48 heures pour le fret lourd. Ce document propose une architecture unifiée de partage de manifestes pilotée par API qui intègre les bases de données douanières nationales disparates dans un centre de compensation numérique centralisé. 

L'étude démontre qu'en soumettant de manière préventive les manifestes électroniques et en utilisant des algorithmes d'évaluation des risques automatisés, les frictions de traitement peuvent être considérablement minimisées. La modélisation empirique suggère que la mise en œuvre complète de ce cadre numérique réduirait les temps d'attente moyens aux frontières à moins de 12 heures. De plus, le document détaille l'infrastructure matérielle nécessaire aux postes frontières clés, le processus crucial d'alignement des parties prenantes, et projette une amélioration de 24 % de la vélocité du fret, se traduisant par un coup de pouce économique substantiel pour les volumes de commerce régional.'''

paper2_fr = r'''Ce livre blanc fournit une analyse approfondie du rapport coût-bénéfice associé à l'adoption de réseaux de transport multimodal dans la province du Haut-Katanga, un pôle principal pour l'extraction minérale et les achats industriels lourds. 

Traditionnellement, les secteurs industriels de cette région se sont appuyés presque exclusivement sur le transport routier, exposant les chaînes d'approvisionnement à la volatilité due à la détérioration des infrastructures routières, aux perturbations météorologiques saisonnières et à la fluctuation des coûts des carburants. Cette recherche préconise un virage stratégique vers un modèle hybride rail-route. En migrant 40 % des achats industriels lourds vers des corridors ferroviaires améliorés - tout en maintenant le transport routier pour la livraison sur le dernier kilomètre - les entreprises peuvent réaliser une optimisation significative des coûts. 

Le document présente une analyse complète des capacités ferroviaires actuelles, identifie les goulots d'étranglement critiques et décrit les investissements en capital requis dans les nœuds de transfert régionaux. Grâce à une modélisation économique détaillée, la recherche conclut que cette intégration multimodale permet une réduction de 15 % des coûts de débarquement globaux tout en construisant une solide stratégie d'atténuation des risques contre les déficits d'infrastructure régionaux.'''

paper3_fr = r'''Cette analyse académique détaillée explore la construction de chaînes d'approvisionnement résilientes dans des marchés émergents très volatils, avec un accent particulier sur l'Afrique de l'Ouest. 

Opérer dans ces environnements présente des défis uniques, notamment une forte volatilité des devises, des changements géopolitiques soudains et une imprévisibilité des infrastructures. Le document introduit un modèle d'approvisionnement adaptatif conçu spécifiquement pour isoler les réseaux logistiques de ces chocs macroéconomiques. Au centre de ce modèle se trouve la mise en œuvre stratégique de l'entreposage décentralisé, qui empêche les perturbations localisées de provoquer une défaillance systémique totale. 

De plus, la recherche détaille des stratégies de couverture multi-devises adaptées aux opérateurs d'import-export, et préconise une diversification dynamique des fournisseurs pour atténuer les risques de point de défaillance unique. S'appuyant sur des études de cas approfondies de récentes fluctuations du marché au Nigeria et dans les régions voisines, l'analyse prouve que les organisations utilisant ce modèle adaptatif maintiennent systématiquement la stabilité de leurs marges et évitent les ruptures de stock catastrophiques pendant les périodes de grave stress économique.'''

content = re.sub(
    r'fullText: "Ce document de recherche décrit un cadre en 5 étapes[^"]+"',
    f'fullText: "{paper1_fr}"',
    content
)

content = re.sub(
    r'fullText: "Ce livre blanc analyse le ratio coût-bénéfice[^"]+"',
    f'fullText: "{paper2_fr}"',
    content
)

content = re.sub(
    r'fullText: "Une analyse académique détaillée[^"]+"',
    f'fullText: "{paper3_fr}"',
    content
)


# ES Papers
paper1_es = r'''Este completo trabajo de investigación describe un marco estructural para la digitalización de los protocolos aduaneros transfronterizos entre la República Democrática del Congo (RDC) y Zambia, un nodo crítico en el corredor logístico de la Comunidad de Desarrollo de África Meridional (SADC). 

Históricamente, la dependencia de sistemas de contabilidad manuales y fragmentados ha provocado graves cuellos de botella, lo que ha dado lugar a tiempos de espera medios en las fronteras superiores a 48 horas para el transporte pesado. Este documento propone una arquitectura unificada de intercambio de manifiestos impulsada por API que integra bases de datos aduaneras nacionales dispares en una cámara de compensación digital centralizada. 

El estudio demuestra que al presentar de manera preventiva los manifiestos electrónicos y utilizar algoritmos automatizados de evaluación de riesgos, la fricción del procesamiento se puede minimizar drásticamente. El modelado empírico sugiere que la implementación completa de este marco digital reduciría los tiempos de espera promedio en la frontera a menos de 12 horas. Además, el documento detalla la infraestructura de hardware necesaria requerida en los puestos fronterizos clave, el proceso crucial de alineación de las partes interesadas, y proyecta una mejora del 24% en la velocidad de la carga, lo que se traduce en un impulso económico sustancial para los volúmenes de comercio regional.'''

paper2_es = r'''Este libro blanco proporciona un análisis en profundidad de la relación costo-beneficio asociada con la adopción de redes de transporte multimodal dentro de la provincia de Haut-Katanga, un centro principal para la extracción de minerales y adquisiciones industriales pesadas. 

Tradicionalmente, los sectores industriales de esta región han dependido casi exclusivamente del transporte por carretera, lo que expone a las cadenas de suministro a la volatilidad derivada del deterioro de la infraestructura vial, las interrupciones climáticas estacionales y la fluctuación de los costos de combustible. Esta investigación aboga por un cambio estratégico hacia un modelo híbrido ferrocarril-carretera. Al migrar el 40% de las adquisiciones industriales pesadas a corredores ferroviarios mejorados, al tiempo que se mantiene el transporte por carretera para la entrega de última milla, las empresas pueden lograr una optimización significativa de los costos. 

El documento presenta un análisis exhaustivo de las capacidades ferroviarias actuales, identifica los cuellos de botella críticos y describe las inversiones de capital requeridas en los nodos de transferencia regionales. A través de un modelado económico detallado, la investigación concluye que esta integración multimodal produce una reducción del 15% en los costos totales de aterrizaje y, al mismo tiempo, construye una sólida estrategia de mitigación de riesgos contra los déficits de infraestructura regional.'''

paper3_es = r'''Este detallado análisis académico explora la construcción de cadenas de suministro resilientes en mercados emergentes altamente volátiles, con un enfoque específico en África Occidental. 

Operar en estos entornos presenta desafíos únicos, incluida una aguda volatilidad cambiaria, cambios geopolíticos repentinos e imprevisibilidad de la infraestructura. El documento presenta un modelo de adquisición adaptativo diseñado específicamente para aislar las redes logísticas de estos impactos macroeconómicos. Un elemento central de este modelo es la implementación estratégica del almacenamiento descentralizado, que evita que las interrupciones localizadas causen fallas sistémicas totales. 

Además, la investigación detalla estrategias de cobertura de múltiples divisas adaptadas a los operadores de importación y exportación, y aboga por una diversificación dinámica de proveedores para mitigar los riesgos de un solo punto de falla. A partir de extensos estudios de casos de fluctuaciones recientes del mercado en Nigeria y regiones vecinas, el análisis demuestra que las organizaciones que emplean este modelo adaptativo mantienen constantemente la estabilidad de los márgenes y evitan desabastecimientos catastróficos durante períodos de grave estrés económico.'''


content = re.sub(
    r'fullText: "Este trabajo de investigación describe un marco de 5 pasos[^"]+"',
    f'fullText: "{paper1_es}"',
    content
)

content = re.sub(
    r'fullText: "Este libro blanco analiza la relación costo-beneficio[^"]+"',
    f'fullText: "{paper2_es}"',
    content
)

content = re.sub(
    r'fullText: "Un análisis académico detallado sobre la construcción[^"]+"',
    f'fullText: "{paper3_es}"',
    content
)


# Also ensure that inside `src/app/achievements/page.tsx` we can render the newlines (\n) gracefully. Wait, React ignores newlines inside a string unless it's in a <pre> or CSS `whitespace-pre-line` is used.
# Let's fix that too.

with open('src/lib/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('Translations updated')
