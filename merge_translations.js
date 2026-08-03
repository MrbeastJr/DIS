const fs = require('fs');
const { execSync } = require('child_process');

// 1. Get original translations.ts from git HEAD
const originalContent = execSync('git show HEAD:src/lib/translations.ts').toString();

// 2. We can't easily eval TypeScript, but we can extract the new keys we need from the CURRENT corrupted translations.ts
const currentContent = fs.readFileSync('src/lib/translations.ts', 'utf8');

// We know we need to add:
// - `spamWarning` string
// - `dermaScan` object
// - `trackOrder` object
// to `Translations` interface and to `en`, `fr`, `es` in `translations` object.

// Actually, since I am a script, I can just read the current file and write it properly.
// BUT parsing the corrupted typescript is hard. 
// A better way: I can restore the file, then append the new keys manually via string replacement!

fs.writeFileSync('src/lib/translations.ts.backup', currentContent);
execSync('git checkout HEAD src/lib/translations.ts');

let newContent = fs.readFileSync('src/lib/translations.ts', 'utf8');

// 1. Update interface Translations
const interfaceAdditions = `
  spamWarning: string;
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
`;

newContent = newContent.replace('  cta: {', interfaceAdditions + '\n  cta: {');


// 2. Add to EN
const enAdditions = `
    spamWarning: "Order placed successfully! Please check your spam/junk folder for your confirmation email.",
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
    },
`;
newContent = newContent.replace('    cta: {', enAdditions + '\n    cta: {');


// 3. Add to FR
const frAdditions = `
    spamWarning: "Commande passée avec succès ! Veuillez vérifier votre dossier spam/courrier indésirable pour votre e-mail de confirmation.",
    dermaScan: {
      title: "Derma-Scan IA",
      poweredBy: "Propulsé par Gemini",
      discover: "Découvrez Votre Produit Idéal !",
      discoverSub: "Scannez votre type de peau pour obtenir des cosmétiques qui vous correspondent parfaitement.",
      analyzeSkin: "Analysez Votre Peau",
      analyzeSub: "Choisissez comment vous souhaitez que notre IA analyse votre peau pour trouver les produits cosmétiques parfaits.",
      takePhoto: "Prendre une Photo",
      uploadImage: "Télécharger une Image",
      describeSkin: "Décrire la Peau",
      cancel: "Annuler",
      capturePhoto: "Capturer la Photo",
      describeLabelText: "Décrivez vos problèmes de peau",
      describeLabelImg: "Ajouter des détails supplémentaires (Optionnel)",
      placeholder: "ex. Ma zone T est grasse mais mes joues sont sèches...",
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
      startNew: "Nouvelle Analyse"
    },
    trackOrder: {
      tag: "Logistique et Distribution",
      title: "Suivre Votre Commande",
      subtitle: "Entrez votre numéro de commande et votre e-mail pour obtenir des mises à jour en temps réel.",
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
    },
`;
// Replace the second occurrence of cta: { (which belongs to FR)
let frIndex = newContent.indexOf('    cta: {', newContent.indexOf('    cta: {') + 1);
newContent = newContent.slice(0, frIndex) + frAdditions + '\n' + newContent.slice(frIndex);


// 4. Add to ES
const esAdditions = `
    spamWarning: "¡Pedido realizado con éxito! Por favor, revise su carpeta de spam/correo no deseado para encontrar su correo de confirmación.",
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
    },
`;

// Replace the third occurrence of cta: { (which belongs to ES)
let esIndex = newContent.indexOf('    cta: {', frIndex + frAdditions.length);
newContent = newContent.slice(0, esIndex) + esAdditions + '\n' + newContent.slice(esIndex);

fs.writeFileSync('src/lib/translations.ts', newContent);
console.log("Translations successfully restored and merged!");
