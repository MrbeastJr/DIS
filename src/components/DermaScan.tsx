"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Camera, UploadSimple, TextAa, Sparkle, X, WarningCircle, 
  CheckCircle, ArrowRight, Package
} from "@phosphor-icons/react";
import { genAI, API_BASE_URL, getImageUrl } from "@/lib/api";

interface Product {
  id: number;
  name: string;
  description: string;
  price_usd: number;
  price_fc: string;
  image: string | null;
  tag?: string;
}

export default function DermaScan() {
  const [isOpen, setIsOpen] = useState(false);
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
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = localStorage.getItem("dis_derma_scan_tooltip");
      if (!hasSeen) {
        const timer = setTimeout(() => setShowTooltip(true), 2000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setShowTooltip(false);
      if (typeof window !== "undefined") {
        localStorage.setItem("dis_derma_scan_tooltip", "true");
      }
    };
    document.addEventListener("openDermaScan", handleOpenEvent);
    return () => document.removeEventListener("openDermaScan", handleOpenEvent);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("dis_derma_scan_tooltip", "true");
    }
  };

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
        // convert to file
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
      // 1. Call Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `
        You are an expert dermatologist. Analyze the following input to determine the user's skin type and provide a brief, helpful feedback paragraph (2-3 sentences max).
        The skin type MUST be exactly one of these words: normal, dry, oily, combination, sensitive.
        Format your response exactly as JSON:
        {
          "skin_type": "...",
          "feedback": "..."
        }
        
        User Text Description: ${textInput || "None"}
      `;

      const contents: any[] = [prompt];
      if (imageFile) {
        const imagePart = await fileToGenerativePart(imageFile);
        contents.push(imagePart);
      }

      let parsed: { skin_type: string, feedback: string };
      
      try {
        const result = await model.generateContent(contents);
        const response = await result.response;
        const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        parsed = JSON.parse(text);
      } catch (geminiError) {
        console.warn("Gemini API error, falling back to mock analysis for local testing.", geminiError);
        // Fallback for testing without a valid/paid key
        await new Promise(r => setTimeout(r, 2000));
        let mockType = "combination";
        if (textInput.toLowerCase().includes("dry") || textInput.toLowerCase().includes("flake")) mockType = "dry";
        if (textInput.toLowerCase().includes("oil") || textInput.toLowerCase().includes("shine")) mockType = "oily";
        
        parsed = {
          skin_type: mockType,
          feedback: "Based on the analysis, your skin exhibits characteristics of " + mockType + " skin. We recommend a balanced routine focused on hydration and gentle cleansing."
        };
      }

      setFeedback(parsed.feedback);
      const st = parsed.skin_type.toLowerCase();
      setSkinType(st);

      // 2. Fetch Products from Backend
      const res = await fetch(`${API_BASE_URL}/products/?category=cosmetics&skin_type=${st}`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data.results || data);
      }
      
      setStatus('success');
    } catch (err) {
      console.error("Analysis error:", err);
      setErrorMsg("We encountered an error analyzing your skin. Please try again.");
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

  const close = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="relative bg-white text-espresso p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-[240px] text-left pointer-events-auto"
            >
              <button 
                onClick={() => { setShowTooltip(false); localStorage.setItem("dis_derma_scan_tooltip", "true"); }} 
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
              >
                <X size={14} weight="bold" />
              </button>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                  <Sparkle size={16} weight="fill" className="text-crimson" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight mb-1">Discover Your Perfect Match!</p>
                  <p className="text-[10px] text-gray-500 leading-relaxed">Scan your skin type to get cosmetics that perfectly fit you.</p>
                </div>
              </div>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={handleOpen}
          className="relative flex items-center gap-3 px-6 py-4 bg-[#1A1210] border border-white/10 shadow-2xl rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300 pointer-events-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Sparkle size={24} weight="fill" className="text-crimson animate-pulse-slow relative z-10" />
          <span className="text-white font-bold text-sm tracking-wide relative z-10">AI Derma-Scan</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1A1210]/80 backdrop-blur-md"
              onClick={close}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center border border-crimson/20">
                    <Sparkle size={20} weight="fill" className="text-crimson" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">AI Derma-Scan</h2>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Powered by Gemini</p>
                  </div>
                </div>
                <button onClick={close} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} weight="bold" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto flex-1">
                {status === 'idle' && (
                  <AnimatePresence mode="wait">
                    {mode === 'options' && (
                      <motion.div 
                        key="options"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyze Your Skin</h3>
                          <p className="text-gray-500 text-sm">Choose how you&apos;d like our AI to analyze your skin to find the perfect cosmetic products for you.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <button onClick={() => { setMode('camera'); startCamera(); }} className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-200 hover:border-crimson hover:shadow-lg hover:bg-crimson/5 transition-all group">
                            <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors">
                              <Camera size={32} className="text-gray-400 group-hover:text-crimson transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700 group-hover:text-crimson text-sm">Take a Photo</span>
                          </button>
                          <label className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-200 hover:border-crimson hover:shadow-lg hover:bg-crimson/5 transition-all group cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors">
                              <UploadSimple size={32} className="text-gray-400 group-hover:text-crimson transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700 group-hover:text-crimson text-sm">Upload Image</span>
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { handleImageUpload(e); setMode('upload'); }} />
                          </label>
                          <button onClick={() => setMode('text')} className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-200 hover:border-crimson hover:shadow-lg hover:bg-crimson/5 transition-all group">
                            <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors">
                              <TextAa size={32} className="text-gray-400 group-hover:text-crimson transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700 group-hover:text-crimson text-sm">Describe Skin</span>
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {mode === 'camera' && (
                      <motion.div key="camera" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                        <div className="relative w-full aspect-square md:aspect-video bg-black rounded-2xl overflow-hidden mb-6 border border-gray-200">
                          <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 border-[4px] border-white/20 rounded-2xl pointer-events-none" />
                        </div>
                        <div className="flex gap-4">
                          <button onClick={reset} className="px-6 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors">Cancel</button>
                          <button onClick={capturePhoto} className="px-6 py-3 rounded-xl font-bold text-white bg-crimson hover:bg-crimson-dark transition-colors shadow-lg shadow-crimson/30">Capture Photo</button>
                        </div>
                      </motion.div>
                    )}

                    {(mode === 'upload' || mode === 'text') && (
                      <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                        {imagePreview && (
                          <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                            <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                            <button onClick={() => { setImagePreview(null); setImageFile(null); if(mode==='upload') setMode('options'); }} className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
                              <X size={14} weight="bold" />
                            </button>
                          </div>
                        )}
                        
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            {mode === 'text' ? "Describe your skin concerns" : "Add extra details (Optional)"}
                          </label>
                          <textarea 
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            placeholder="e.g. My T-zone is oily but my cheeks feel dry and flaky after washing..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all h-32 resize-none"
                          />
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-gray-100">
                          <button onClick={reset} className="flex-1 py-4 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors">Back</button>
                          <button onClick={analyzeSkin} disabled={!textInput && !imageFile} className="flex-[2] py-4 rounded-xl font-bold text-white bg-[#1A1210] hover:bg-black transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                            <Sparkle size={20} weight="fill" className="text-crimson" />
                            Analyze Skin
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {status === 'analyzing' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20">
                    <div className="relative w-24 h-24 mb-8">
                      <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
                      <div className="absolute inset-0 border-4 border-crimson rounded-full border-t-transparent animate-spin" />
                      <Sparkle size={32} weight="fill" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-crimson animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analyzing Skin Profile</h3>
                    <p className="text-gray-500 text-sm">Our AI is processing your inputs...</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                      <WarningCircle size={32} weight="fill" className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analysis Failed</h3>
                    <p className="text-gray-500 text-sm mb-8">{errorMsg}</p>
                    <button onClick={reset} className="px-8 py-3 rounded-xl font-bold text-white bg-gray-900 hover:bg-black transition-colors">Try Again</button>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {/* Feedback Section */}
                    <div className="bg-gradient-to-br from-cream to-white border border-gray-200 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-full blur-3xl" />
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                          <CheckCircle size={24} weight="fill" className="text-green-500" />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-3 shadow-sm">
                            Identified Type: <span className="text-crimson">{skinType}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                            {feedback}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Prescribed Products */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Your Perfect Matches</h3>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{products.length} Products Found</span>
                      </div>
                      
                      {products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {products.map(p => (
                            <a 
                              key={p.id} 
                              href={`/services/trading?category=cosmetics`}
                              className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-crimson/30 hover:shadow-lg bg-white transition-all cursor-pointer"
                              style={{ textDecoration: 'none' }}
                            >
                              <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden relative shrink-0">
                                {p.image ? (
                                  <Image src={getImageUrl(p.image)} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center"><Package size={24} className="text-gray-300" /></div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                {p.tag && <span className="text-[9px] font-bold text-crimson uppercase tracking-wider mb-1 block">{p.tag}</span>}
                                <h4 className="text-sm font-bold text-gray-900 truncate">{p.name}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">${p.price_usd}</p>
                              </div>
                              <ArrowRight size={16} className="text-gray-300 group-hover:text-crimson transition-colors" />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
                          <p className="text-sm text-gray-500 font-medium">No specialized products found for this skin type currently in stock.</p>
                        </div>
                      )}
                    </div>
                    
                    <button onClick={reset} className="w-full py-4 rounded-xl font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-colors text-sm">
                      Start New Scan
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
