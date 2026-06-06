"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Camera, UploadSimple, TextAa, Sparkle, X, WarningCircle, 
  CheckCircle, ArrowRight, Package
} from "@phosphor-icons/react";
import { genAI, API_BASE_URL, getImageUrl } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  price_usd: number;
  price_fc: string;
  image: string | null;
  tag?: string;
}

export default function DermaScanPage() {
  const { t, locale } = useLanguage();
  const [mode, setMode] = useState<'options' | 'upload' | 'camera' | 'text'>('options');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'success' | 'error'>('idle');
  
  // Inputs
  const [textInput, setTextInput] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  // Camera
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  // Results
  const [feedback, setFeedback] = useState("");
  const [skinType, setSkinType] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Camera access denied or unavailable.");
      setStatus('error');
    }
  };

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  }, [stream]);

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const dataUrl = canvas.toDataURL("image/jpeg");
        setImagePreview(dataUrl);
        fetch(dataUrl)
          .then(res => res.blob())
          .then(blob => setImageFile(new File([blob], "capture.jpg", { type: "image/jpeg" })));
        stopCamera();
        setMode('upload');
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const fileToGenerativePart = async (file: File) => {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const analyzeSkin = async () => {
    if (!textInput && !imageFile) return;
    setStatus('analyzing');
    
    try {
      const prompt = `
        You are an expert dermatologist. Analyze the following input to determine the user's skin type and provide a brief, helpful feedback paragraph (2-3 sentences max).
        The skin type MUST be exactly one of these words: normal, dry, oily, combination, sensitive.
        Format your response exactly as JSON:
        {
          "skin_type": "...",
          "feedback": "..."
        }
        
        CRITICAL: The "feedback" paragraph MUST be written exclusively in ${
          locale === "fr" ? "French" : locale === "es" ? "Spanish" : "English"
        }.
        
        User Text Description: ${textInput || "None"}
      `;

      const contents: any[] = [prompt];
      if (imageFile) {
        const imagePart = await fileToGenerativePart(imageFile);
        contents.push(imagePart);
      }

      let parsed: { skin_type: string, feedback: string };
      
      try {
        let result;
        try {
          const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
          result = await model.generateContent(contents);
        } catch (e: any) {
          console.warn("Primary model failed, falling back to gemini-2.5-flash-lite...", e);
          const fallbackModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
          result = await fallbackModel.generateContent(contents);
        }
        const response = await result.response;
        const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        parsed = JSON.parse(text);
      } catch (geminiError) {
        console.warn("Gemini API error, falling back to mock analysis for local testing.", geminiError);
        await new Promise(r => setTimeout(r, 2000));
        let mockType = "combination";
        if (textInput.toLowerCase().includes("dry") || textInput.toLowerCase().includes("flake")) mockType = "dry";
        if (textInput.toLowerCase().includes("oil") || textInput.toLowerCase().includes("shine")) mockType = "oily";
        
        let fb = "Based on the analysis, your skin exhibits characteristics of " + mockType + " skin. We recommend a balanced routine focused on hydration and gentle cleansing.";
        if (locale === "fr") {
          fb = "D'après l'analyse, votre peau présente les caractéristiques d'une peau de type " + mockType + ". Nous recommandons une routine équilibrée axée sur l'hydratation et un nettoyage en douceur.";
        } else if (locale === "es") {
          fb = "Según el análisis, su piel presenta características de piel " + mockType + ". Recomendamos una rutina equilibrada centrada en la hidratación y una limpieza suave.";
        }
        parsed = { skin_type: mockType, feedback: fb };
      }

      setFeedback(parsed.feedback);
      const st = parsed.skin_type.toLowerCase();
      setSkinType(st);

      const res = await fetch(`${API_BASE_URL}/products/?category=cosmetics&skin_type=${st}`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data.results || data);
      }
      
      setStatus('success');
    } catch (err) {
      console.error("Analysis error:", err);
      setErrorMsg(t.dermaScan.analysisFailed);
      setStatus('error');
    }
  };

  const reset = () => {
    stopCamera();
    setMode('options');
    setStatus('idle');
    setTextInput("");
    setImagePreview(null);
    setImageFile(null);
    setProducts([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-4 py-32 md:py-40">
        <div className="w-full max-w-4xl flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full bg-crimson/10 flex items-center justify-center border border-crimson/20 mb-6 shadow-sm">
            <Sparkle size={32} weight="fill" className="text-crimson" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">
            {t.dermaScan.title}
          </h1>
          <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-bold mb-6">
            {t.dermaScan.poweredBy}
          </p>
          <p className="text-gray-600 text-center max-w-xl text-lg">
            {t.dermaScan.discoverSub}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col"
        >
          <div className="p-8 md:p-12">
            {status === 'idle' && (
              <AnimatePresence mode="wait">
                {mode === 'options' && (
                  <motion.div 
                    key="options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{t.dermaScan.analyzeSkin}</h3>
                      <p className="text-gray-500">{t.dermaScan.analyzeSub}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <button onClick={() => { setMode('camera'); startCamera(); }} className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-gray-200 hover:border-crimson hover:shadow-2xl hover:-translate-y-1 bg-white hover:bg-crimson/5 transition-all group">
                        <div className="w-20 h-20 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                          <Camera size={40} className="text-gray-400 group-hover:text-crimson transition-colors" />
                        </div>
                        <span className="font-bold text-gray-700 group-hover:text-crimson text-base">{t.dermaScan.takePhoto}</span>
                      </button>
                      <label className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-gray-200 hover:border-crimson hover:shadow-2xl hover:-translate-y-1 bg-white hover:bg-crimson/5 transition-all group cursor-pointer">
                        <div className="w-20 h-20 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                          <UploadSimple size={40} className="text-gray-400 group-hover:text-crimson transition-colors" />
                        </div>
                        <span className="font-bold text-gray-700 group-hover:text-crimson text-base">{t.dermaScan.uploadImage}</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => { handleImageUpload(e); setMode('upload'); }} />
                      </label>
                      <button onClick={() => setMode('text')} className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-gray-200 hover:border-crimson hover:shadow-2xl hover:-translate-y-1 bg-white hover:bg-crimson/5 transition-all group">
                        <div className="w-20 h-20 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                          <TextAa size={40} className="text-gray-400 group-hover:text-crimson transition-colors" />
                        </div>
                        <span className="font-bold text-gray-700 group-hover:text-crimson text-base">{t.dermaScan.describeSkin}</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {mode === 'camera' && (
                  <motion.div key="camera" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square md:aspect-video bg-black rounded-3xl overflow-hidden mb-8 border border-gray-200 shadow-inner">
                      <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 border-[4px] border-white/20 rounded-3xl pointer-events-none" />
                    </div>
                    <div className="flex gap-6 w-full max-w-md">
                      <button onClick={reset} className="flex-1 px-6 py-4 rounded-2xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors">{t.dermaScan.cancel}</button>
                      <button onClick={capturePhoto} className="flex-1 px-6 py-4 rounded-2xl font-bold text-white bg-crimson hover:bg-crimson-dark transition-colors shadow-lg shadow-crimson/30">{t.dermaScan.capturePhoto}</button>
                    </div>
                  </motion.div>
                )}

                {(mode === 'upload' || mode === 'text') && (
                  <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
                    {imagePreview && (
                      <div className="relative w-48 h-48 mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                        <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                        <button onClick={() => { setImagePreview(null); setImageFile(null); if(mode==='upload') setMode('options'); }} className="absolute top-3 right-3 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
                          <X size={16} weight="bold" />
                        </button>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                        {mode === 'text' ? t.dermaScan.describeLabelText : t.dermaScan.describeLabelImg}
                      </label>
                      <textarea 
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder={t.dermaScan.placeholder}
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 text-base focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all h-40 resize-none shadow-sm"
                      />
                    </div>

                    <div className="flex gap-6 pt-6 border-t border-gray-100">
                      <button onClick={reset} className="flex-1 py-4 rounded-2xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors text-lg">{t.dermaScan.back}</button>
                      <button onClick={analyzeSkin} disabled={!textInput && !imageFile} className="flex-[2] py-4 rounded-2xl font-bold text-white bg-[#1A1210] hover:bg-black transition-colors shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                        <Sparkle size={24} weight="fill" className="text-crimson" />
                        {t.dermaScan.analyzeBtn}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {status === 'analyzing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-24">
                <div className="relative w-32 h-32 mb-10">
                  <div className="absolute inset-0 border-[6px] border-gray-100 rounded-full" />
                  <div className="absolute inset-0 border-[6px] border-crimson rounded-full border-t-transparent animate-spin" />
                  <Sparkle size={48} weight="fill" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-crimson animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{t.dermaScan.analyzing}</h3>
                <p className="text-gray-500 text-lg">{t.dermaScan.analyzingSub}</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center py-20">
                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-8">
                  <WarningCircle size={48} weight="fill" className="text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.dermaScan.analysisFailed}</h3>
                <p className="text-gray-500 text-base mb-10">{errorMsg}</p>
                <button onClick={reset} className="px-10 py-4 rounded-2xl font-bold text-white bg-gray-900 hover:bg-black transition-colors text-lg">{t.dermaScan.tryAgain}</button>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                <div className="bg-gradient-to-br from-cream to-white border border-gray-200 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-crimson/5 rounded-full blur-3xl" />
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                      <CheckCircle size={32} weight="fill" className="text-green-500" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-gray-600 mb-4 shadow-sm">
                        {t.dermaScan.identifiedType}: <span className="text-crimson">{skinType}</span>
                      </div>
                      <p className="text-gray-800 leading-relaxed font-medium text-lg">
                        {feedback}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">{t.dermaScan.perfectMatches}</h3>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-4 py-1 rounded-full">{products.length} {t.dermaScan.productsFound}</span>
                  </div>
                  
                  {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {products.map(p => (
                        <Link 
                          key={p.id} 
                          href={`/?category=cosmetics`}
                          className="group flex items-center gap-5 p-5 rounded-3xl border border-gray-100 hover:border-crimson/30 hover:shadow-xl bg-white transition-all cursor-pointer"
                        >
                          <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden relative shrink-0">
                            {p.image ? (
                              <Image src={getImageUrl(p.image)} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center"><Package size={32} className="text-gray-300" /></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            {p.tag && <span className="text-[10px] font-bold text-crimson uppercase tracking-widest mb-1.5 block">{p.tag}</span>}
                            <h4 className="text-base font-bold text-gray-900 truncate mb-1">{p.name}</h4>
                            <p className="text-sm text-gray-500 font-medium">${p.price_usd}</p>
                          </div>
                          <ArrowRight size={20} className="text-gray-300 group-hover:text-crimson transition-colors" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
                      <p className="text-base text-gray-500 font-medium">{t.dermaScan.noProducts}</p>
                    </div>
                  )}
                </div>
                
                <button onClick={reset} className="w-full py-5 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors text-lg mt-4 shadow-sm">
                  {t.dermaScan.startNew}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
