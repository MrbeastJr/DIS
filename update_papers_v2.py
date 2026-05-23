# coding=utf-8
import re

with open('src/lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# ==============================================================================
# ENGLISH PAPERS
# ==============================================================================

paper1_en = r"""**Abstract**
This comprehensive research paper outlines a structural framework for digitizing cross-border customs protocols between the Democratic Republic of Congo (DRC) and Zambia, a critical node in the Southern African Development Community (SADC) logistics corridor. The study demonstrates that replacing manual ledger systems with API-driven manifest sharing can reduce average border wait times from 48 hours to under 12 hours.

**1. Introduction**
Historically, reliance on fragmented, manual ledger systems has led to severe bottlenecking across Central and Southern Africa. For heavy freight moving between the DRC and Zambia, border wait times frequently exceed 48 hours. These delays compound landed costs, increase demurrage charges, and reduce the overall competitiveness of regional exports. As trade volumes scale, the existing physical infrastructure at border posts cannot accommodate the throughput without a fundamental digital transformation.

**2. The API-Driven Clearinghouse Framework**
This paper proposes a unified, API-driven manifest sharing architecture that integrates disparate national customs databases into a centralized digital clearinghouse. By preemptively submitting electronic manifests before freight arrival and utilizing automated risk-assessment algorithms, physical inspections can be targeted rather than universal. This drastically minimizes processing friction.

**3. Real-Life Example: The Gatuna/Katuna Success**
A highly successful precedent for this framework is the Gatuna/Katuna border between Rwanda and Uganda. Following the implementation of a One-Stop Border Post (OSBP) integrated with Electronic Cargo Tracking Systems (ECTS), transit times were slashed by over 60%. Trucks that previously waited days were cleared in hours, leading to a massive surge in bilateral trade volume and a sharp decrease in smuggling.

**4. Benefiting Countries: DRC & Zambia**
Applying this model to the DRC-Zambia border (particularly Kasumbalesa) offers transformative benefits. The paper details the necessary hardware infrastructure required, the crucial process of stakeholder alignment, and projects a 24% improvement in cargo velocity. For the DRC, this means faster import of essential industrial equipment; for Zambia, it accelerates transit toll revenues and reduces border congestion."""

paper2_en = r"""**Abstract**
This research provides an in-depth analysis of the cost-benefit ratio associated with adopting multimodal transport networks within the Haut-Katanga province—a primary hub for mineral extraction and heavy industrial procurement. It advocates for a strategic shift towards a hybrid rail-road model to achieve a 15% reduction in landed costs.

**1. Introduction**
Traditionally, industrial sectors in the Haut-Katanga region have relied almost exclusively on road transport. This singular dependency exposes supply chains to extreme volatility stemming from deteriorating road infrastructure, seasonal weather disruptions (heavy rainy seasons), and fluctuating fuel costs. A resilient supply chain requires diversification of transit modalities to buffer against these localized shocks.

**2. The Hybrid Rail-Road Optimization Model**
This research advocates for migrating 40% of heavy industrial procurement to upgraded rail corridors, while maintaining road transport exclusively for agile, last-mile delivery. The paper presents a comprehensive analysis of current rail capacities (such as the SNCC network), identifies critical bottlenecks, and outlines the required capital investments in regional transfer nodes (dry ports). 

**3. Real-Life Example: The Maputo Development Corridor**
A prime example of multimodal success is the Maputo Development Corridor linking South Africa’s industrial heartland to the Port of Maputo in Mozambique. By heavily investing in cross-border rail links to complement the N4 toll road, logistics operators achieved a massive reduction in freight costs per ton. Rail absorbed the heavy bulk (minerals, agricultural goods), freeing the road network for time-sensitive logistics, drastically reducing road maintenance costs for both nations.

**4. Benefiting Countries: DRC & Angola**
Haut-Katanga (DRC) stands to benefit immensely from this model, particularly through integration with the Lobito Corridor connecting to Angola. Through detailed economic modeling, the research concludes that multimodal integration yields a 15% reduction in overall landed costs while building a robust risk mitigation strategy against regional infrastructure deficits."""

paper3_en = r"""**Abstract**
This academic analysis explores the construction of resilient supply chains in highly volatile emerging markets, with a specific focus on West Africa. The paper introduces an adaptive procurement model designed specifically to insulate logistics networks from macroeconomic shocks, currency devaluation, and infrastructural unpredictability.

**1. Introduction**
Operating in West African emerging markets presents unique systemic challenges. Acute currency volatility, sudden geopolitical shifts, and unpredictable trade policies require supply chains to be highly elastic. Traditional lean inventory models (Just-In-Time) frequently collapse in these environments, leading to catastrophic stockouts and lost market share. 

**2. Adaptive Procurement & Strategic Hedging**
Central to the proposed model is the strategic implementation of decentralized warehousing, preventing localized disruptions (e.g., port strikes or regional unrest) from causing total systemic failure. Furthermore, the research details multi-currency hedging strategies tailored for import-export operators, and advocates for dynamic supplier diversification to mitigate single-point-of-failure risks.

**3. Real-Life Example: Surviving the Nigerian Naira Crisis**
During the 2023 Nigerian Naira redesign and subsequent currency float, traditional centralized importers faced massive losses due to sudden FX scarcity and clearing delays at the Apapa port. However, FMCG companies that had preemptively adopted an adaptive model—utilizing decentralized regional hubs in Kano and Port Harcourt, and hedging procurement through forward contracts—successfully maintained product availability. While competitors faced stockouts, these adaptive organizations captured unprecedented market share.

**4. Benefiting Countries: Nigeria, Ghana, Ivory Coast**
This research serves as a blueprint for operations in Nigeria, Ghana, and Ivory Coast. Drawing on extensive empirical data, the analysis proves that organizations employing decentralized hubs and multi-currency procurement consistently maintain margin stability during periods of severe economic stress."""


# We will use regex to find the `fullText: "..."` and replace the content.
# Since the previous fullText strings might have varying content, we will target them by the `title` preceding them.

def replace_paper(content, title, new_text):
    # Find the object starting with title and replace its fullText
    pattern = r'(title:\s*"' + re.escape(title) + r'",\s*content:\s*"[^"]+",\s*fullText:\s*")[^"]+(")'
    # We replace the matched string with the new_text, properly escaped for a single line string
    # Actually, using a template literal `...` is better for multi-line in TS, but the file uses double quotes.
    # We will use `\n` literal strings.
    formatted_text = new_text.replace('\n', '\\n').replace('"', '\\"')
    return re.sub(pattern, r'\g<1>' + formatted_text + r'\g<2>', content)

content = replace_paper(content, "Cross-Border Customs Harmonization", paper1_en)
content = replace_paper(content, "Multimodal Transport Integration", paper2_en)
content = replace_paper(content, "Supply Chain Resilience in Emerging Markets", paper3_en)


# ==============================================================================
# FRENCH PAPERS
# ==============================================================================

paper1_fr = r"""**Résumé**
Ce document de recherche complet décrit un cadre structurel pour la numérisation des protocoles douaniers transfrontaliers entre la République démocratique du Congo (RDC) et la Zambie, un nœud critique dans le corridor logistique de la Communauté de développement de l'Afrique australe (SADC). L'étude démontre que le remplacement des systèmes manuels par le partage de manifestes piloté par API peut réduire les temps d'attente moyens aux frontières de 48 heures à moins de 12 heures.

**1. Introduction**
Historiquement, le recours à des systèmes manuels et fragmentés a conduit à de graves goulots d'étranglement en Afrique centrale et australe. Pour le fret lourd circulant entre la RDC et la Zambie, les temps d'attente aux frontières dépassent fréquemment 48 heures. Ces retards augmentent les coûts de débarquement, accroissent les frais de surestarie et réduisent la compétitivité globale des exportations régionales.

**2. L'Architecture de Compensation pilotée par API**
Ce document propose une architecture unifiée de partage de manifestes pilotée par API qui intègre les bases de données douanières nationales disparates dans un centre de compensation numérique centralisé. En soumettant de manière préventive les manifestes électroniques avant l'arrivée du fret et en utilisant des algorithmes d'évaluation des risques automatisés, les inspections physiques peuvent être ciblées.

**3. Exemple Concret : Le Succès de Gatuna/Katuna**
Un précédent très réussi pour ce cadre est la frontière de Gatuna/Katuna entre le Rwanda et l'Ouganda. Suite à la mise en œuvre d'un poste frontière à guichet unique (OSBP) intégré à des systèmes de suivi électronique des marchandises (ECTS), les temps de transit ont été réduits de plus de 60 %. Les camions qui attendaient auparavant des jours ont été dédouanés en quelques heures.

**4. Pays Bénéficiaires : RDC et Zambie**
L'application de ce modèle à la frontière RDC-Zambie (en particulier Kasumbalesa) offre des avantages transformateurs. Le document détaille l'infrastructure matérielle requise, le processus d'alignement des parties prenantes, et projette une amélioration de 24 % de la vélocité du fret."""

paper2_fr = r"""**Résumé**
Cette recherche fournit une analyse approfondie du rapport coût-bénéfice associé à l'adoption de réseaux de transport multimodal dans la province du Haut-Katanga, un pôle principal pour l'extraction minérale et les achats industriels lourds. Elle préconise un virage stratégique vers un modèle hybride rail-route pour obtenir une réduction de 15 % des coûts de débarquement.

**1. Introduction**
Traditionnellement, les secteurs industriels de la région du Haut-Katanga se sont appuyés presque exclusivement sur le transport routier. Cette dépendance singulière expose les chaînes d'approvisionnement à une extrême volatilité découlant de la détérioration des infrastructures routières, des perturbations météorologiques (fortes saisons des pluies) et de la fluctuation des coûts des carburants.

**2. Le Modèle d'Optimisation Hybride Rail-Route**
Cette recherche préconise la migration de 40 % des achats industriels lourds vers des corridors ferroviaires améliorés, tout en maintenant le transport routier exclusivement pour une livraison agile sur le dernier kilomètre. Le document présente une analyse complète des capacités ferroviaires actuelles (comme le réseau SNCC) et décrit les investissements en capital requis dans les nœuds de transfert régionaux.

**3. Exemple Concret : Le Corridor de Développement de Maputo**
Un excellent exemple de succès multimodal est le corridor de développement de Maputo reliant le cœur industriel de l'Afrique du Sud au port de Maputo au Mozambique. En investissant massivement dans des liaisons ferroviaires transfrontalières pour compléter l'autoroute à péage N4, les opérateurs logistiques ont obtenu une réduction massive des coûts de fret par tonne.

**4. Pays Bénéficiaires : RDC et Angola**
Le Haut-Katanga (RDC) a tout à gagner de ce modèle, en particulier grâce à l'intégration avec le corridor de Lobito reliant l'Angola. Grâce à une modélisation économique détaillée, la recherche conclut que l'intégration multimodale permet une réduction de 15 % des coûts de débarquement globaux tout en construisant une solide stratégie d'atténuation des risques."""

paper3_fr = r"""**Résumé**
Cette analyse académique explore la construction de chaînes d'approvisionnement résilientes dans des marchés émergents très volatils, avec un accent particulier sur l'Afrique de l'Ouest. Le document introduit un modèle d'approvisionnement adaptatif conçu spécifiquement pour isoler les réseaux logistiques des chocs macroéconomiques et de l'imprévisibilité des infrastructures.

**1. Introduction**
Opérer dans les marchés émergents ouest-africains présente des défis systémiques uniques. La forte volatilité des devises, les changements géopolitiques soudains et les politiques commerciales imprévisibles exigent que les chaînes d'approvisionnement soient hautement élastiques. Les modèles d'inventaire allégés (Just-In-Time) s'effondrent fréquemment dans ces environnements, entraînant des ruptures de stock catastrophiques.

**2. Approvisionnement Adaptatif et Couverture Stratégique**
Au centre du modèle proposé se trouve la mise en œuvre stratégique de l'entreposage décentralisé, empêchant les perturbations localisées (ex: grèves portuaires) de provoquer une défaillance systémique. De plus, la recherche détaille des stratégies de couverture multi-devises adaptées aux opérateurs d'import-export.

**3. Exemple Concret : Survivre à la Crise du Naira Nigérian**
Lors de la refonte du Naira nigérian en 2023 et de la flottaison monétaire qui a suivi, les importateurs centralisés traditionnels ont subi des pertes massives. Cependant, les entreprises de grande consommation qui avaient adopté de manière préventive un modèle adaptatif - utilisant des hubs régionaux décentralisés à Kano et Port Harcourt - ont maintenu avec succès la disponibilité des produits.

**4. Pays Bénéficiaires : Nigeria, Ghana, Côte d'Ivoire**
Cette recherche sert de plan d'action pour les opérations au Nigeria, au Ghana et en Côte d'Ivoire. S'appuyant sur des données empiriques approfondies, l'analyse prouve que les organisations utilisant des hubs décentralisés et des achats multidevises maintiennent systématiquement la stabilité de leurs marges."""

content = replace_paper(content, "Harmonisation Douanière Transfrontalière", paper1_fr)
content = replace_paper(content, "Intégration du Transport Multimodal", paper2_fr)
content = replace_paper(content, "Résilience de la Chaîne d'Approvisionnement", paper3_fr)


# ==============================================================================
# SPANISH PAPERS
# ==============================================================================

paper1_es = r"""**Resumen**
Este completo trabajo de investigación describe un marco estructural para la digitalización de los protocolos aduaneros transfronterizos entre la República Democrática del Congo (RDC) y Zambia, un nodo crítico en el corredor logístico de la SADC. El estudio demuestra que la sustitución de los sistemas de contabilidad manuales por el intercambio de manifiestos impulsado por API puede reducir los tiempos de espera promedio de 48 a 12 horas.

**1. Introducción**
Históricamente, la dependencia de sistemas de contabilidad manuales ha provocado graves cuellos de botella en África central y meridional. Para el transporte pesado que circula entre la RDC y Zambia, los tiempos de espera en la frontera con frecuencia superan las 48 horas. Estos retrasos agravan los costos de aterrizaje y reducen la competitividad de las exportaciones.

**2. El Marco de la Cámara de Compensación API**
Este documento propone una arquitectura unificada impulsada por API que integra bases de datos aduaneras dispares en una cámara de compensación digital. Al presentar de manera preventiva los manifiestos electrónicos antes de la llegada de la carga y utilizar algoritmos automatizados de evaluación de riesgos, las inspecciones físicas pueden ser focalizadas, minimizando drásticamente la fricción.

**3. Ejemplo de la Vida Real: El Éxito de Gatuna/Katuna**
Un precedente de gran éxito para este marco es la frontera de Gatuna/Katuna entre Ruanda y Uganda. Tras la implementación de un Puesto Fronterizo de Parada Única (OSBP) integrado con Sistemas de Seguimiento de Carga Electrónica (ECTS), los tiempos de tránsito se redujeron en más del 60%. Los camiones que antes esperaban días fueron despachados en horas.

**4. Países Beneficiados: RDC y Zambia**
La aplicación de este modelo a la frontera RDC-Zambia (particularmente Kasumbalesa) ofrece beneficios transformadores. El documento detalla la infraestructura de hardware necesaria y proyecta una mejora del 24% en la velocidad de la carga, lo que se traduce en un importante impulso económico."""

paper2_es = r"""**Resumen**
Esta investigación proporciona un análisis en profundidad de la relación costo-beneficio asociada con la adopción de redes de transporte multimodal en la provincia de Haut-Katanga, un centro principal para la extracción de minerales. Aboga por un cambio estratégico hacia un modelo híbrido ferrocarril-carretera para lograr una reducción del 15% en los costos.

**1. Introducción**
Tradicionalmente, los sectores industriales de la región de Haut-Katanga han dependido casi exclusivamente del transporte por carretera. Esta dependencia singular expone las cadenas de suministro a una volatilidad extrema derivada del deterioro de la infraestructura vial, las interrupciones climáticas estacionales y la fluctuación de los costos de combustible.

**2. El Modelo Híbrido Ferrocarril-Carretera**
Esta investigación aboga por migrar el 40% de las adquisiciones industriales pesadas a corredores ferroviarios mejorados, manteniendo el transporte por carretera exclusivamente para la entrega de última milla. El documento presenta un análisis de las capacidades ferroviarias actuales y describe las inversiones requeridas en los nodos de transferencia regionales.

**3. Ejemplo de la Vida Real: El Corredor de Maputo**
Un excelente ejemplo de éxito multimodal es el Corredor de Desarrollo de Maputo que une el corazón industrial de Sudáfrica con el Puerto de Maputo en Mozambique. Al invertir fuertemente en enlaces ferroviarios transfronterizos para complementar la carretera de peaje N4, los operadores logísticos lograron una reducción masiva en los costos de flete por tonelada.

**4. Países Beneficiados: RDC y Angola**
Haut-Katanga (RDC) se beneficiará enormemente de este modelo, particularmente a través de la integración con el Corredor de Lobito que conecta con Angola. A través de un modelado económico detallado, la investigación concluye que la integración multimodal produce una reducción del 15% en los costos totales al tiempo que construye una sólida mitigación de riesgos."""

paper3_es = r"""**Resumen**
Este análisis académico explora la construcción de cadenas de suministro resilientes en mercados emergentes altamente volátiles, con un enfoque específico en África Occidental. El documento presenta un modelo de adquisición adaptativo diseñado para aislar las redes logísticas de los choques macroeconómicos y la imprevisibilidad.

**1. Introducción**
Operar en los mercados emergentes de África Occidental presenta desafíos sistémicos únicos. La aguda volatilidad monetaria, los cambios geopolíticos y las políticas comerciales impredecibles requieren que las cadenas de suministro sean altamente elásticas. Los modelos de inventario tradicional (Just-In-Time) con frecuencia colapsan en estos entornos.

**2. Adquisición Adaptativa y Cobertura Estratégica**
Un elemento central del modelo propuesto es la implementación estratégica del almacenamiento descentralizado, evitando que las interrupciones localizadas (huelgas portuarias, disturbios) causen fallas sistémicas. Además, la investigación detalla estrategias de cobertura multidivisa para operadores de importación y exportación.

**3. Ejemplo de la Vida Real: Sobreviviendo a la Crisis de Nigeria**
Durante el rediseño del Naira nigeriano de 2023, los importadores centralizados tradicionales enfrentaron pérdidas masivas debido a la repentina escasez de divisas y los retrasos en la liquidación en el puerto de Apapa. Sin embargo, las empresas que habían adoptado de manera preventiva un modelo adaptativo, utilizando centros regionales descentralizados en Kano y Port Harcourt, mantuvieron con éxito la disponibilidad del producto.

**4. Países Beneficiados: Nigeria, Ghana, Costa de Marfil**
Esta investigación sirve como un modelo para las operaciones en Nigeria, Ghana y Costa de Marfil. Basado en amplios datos empíricos, el análisis demuestra que las organizaciones que emplean centros descentralizados mantienen constantemente la estabilidad de los márgenes durante períodos de estrés económico severo."""

content = replace_paper(content, "Armonización Aduanera Transfronteriza", paper1_es)
content = replace_paper(content, "Integración de Transporte Multimodal", paper2_es)
content = replace_paper(content, "Resiliencia de la Cadena de Suministro", paper3_es)

with open('src/lib/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Research papers updated successfully!")
