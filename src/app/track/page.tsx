"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MagnifyingGlass, CheckCircle, Package, Truck, 
  MapPin, Clock, FileText, XCircle, CreditCard
} from "@phosphor-icons/react";
import { API_BASE_URL } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Matching the backend Order.STATUS_CHOICES
const STATUS_STAGES = [
  { id: "PENDING", label: "Pending", icon: Clock },
  { id: "PAYMENT_REVIEW", label: "Payment Review", icon: CreditCard },
  { id: "PROCESSING", label: "Processing", icon: Package },
  { id: "SHIPPED", label: "Shipped", icon: Truck },
  { id: "DELIVERED", label: "Delivered", icon: MapPin },
];

export default function TrackOrderPage() {
  const { t } = useLanguage();
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryOrder = params.get("order_number");
      const queryEmail = params.get("email");
      if (queryOrder && queryEmail) {
        setOrderNumber(queryOrder);
        setEmail(queryEmail);
        fetchOrder(queryOrder, queryEmail);
      }
    }
  }, []);

  const fetchOrder = async (oNum: string, mail: string) => {
    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const res = await fetch(`${API_BASE_URL}/orders/track/?order_number=${oNum}&email=${mail}`);
      if (res.ok) {
        const data = await res.json();
        setOrder(data);
      } else {
        const errData = await res.json();
        setError(errData.error || "Order not found. Please check your details.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchOrder(orderNumber, email);
  };

  const currentStageIndex = order ? STATUS_STAGES.findIndex(s => s.id === order.status) : -1;
  const isCancelled = order?.status === 'CANCELLED';

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-cream/30 to-white">
        <div className="w-full max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[10px] font-bold uppercase tracking-wider mb-4">
              <Package size={14} weight="fill" />{t.trackOrder.tag}</span>
            <h1 className="text-display-sm md:text-display-md font-bold text-espresso mb-4">
              {t.trackOrder.title}
            </h1>
            <p className="text-body-sm text-walnut/60 max-w-lg mx-auto">
              {t.trackOrder.subtitle}
            </p>
          </div>

          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16">
            <div className="flex-1 relative">
              <FileText size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-walnut/40" />
              <input
                type="text"
                required
                value={orderNumber}
                onChange={e => setOrderNumber(e.target.value)}
                placeholder={t.trackOrder.orderNumPlaceholder}
                className="w-full bg-white border border-espresso/10 rounded-2xl py-4 pl-12 pr-4 text-espresso placeholder-walnut/40 focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all shadow-sm"
              />
            </div>
            <div className="flex-1 relative">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t.trackOrder.emailPlaceholder}
                className="w-full bg-white border border-espresso/10 rounded-2xl py-4 px-6 text-espresso placeholder-walnut/40 focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all shadow-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-espresso text-white font-bold rounded-2xl hover:bg-cocoa transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 shrink-0"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <MagnifyingGlass size={20} weight="bold" />
                  {t.trackOrder.trackBtn}
                </>
              )}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-red-50 border border-red-100 rounded-2xl text-center max-w-md mx-auto"
              >
                <XCircle size={32} weight="fill" className="text-red-500 mx-auto mb-2" />
                <p className="text-sm font-bold text-red-900">{error}</p>
              </motion.div>
            )}

            {order && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl border border-espresso/10 shadow-xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-espresso p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">{t.trackOrder.detailsLabel}</p>
                    <h2 className="text-2xl font-bold text-white mb-2">{order.order_number}</h2>
                    <p className="text-white/80 text-sm">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">{t.trackOrder.totalLabel}</p>
                    <p className="text-2xl font-bold text-white">NGN {parseFloat(order.total_amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mt-2 ${order.is_paid ? 'bg-green-500/20 text-green-300' : 'bg-white/10 text-white/60'}`}>
                      {order.is_paid ? t.trackOrder.paid : t.trackOrder.unpaid}
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-8 md:p-12">
                  {isCancelled ? (
                    <div className="text-center py-8">
                      <XCircle size={64} weight="fill" className="text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t.trackOrder.cancelledTitle}</h3>
                      <p className="text-gray-500 text-sm">{t.trackOrder.cancelledSub}</p>
                    </div>
                  ) : (
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute top-8 left-6 md:top-10 md:left-10 bottom-8 md:bottom-10 w-0.5 bg-gray-100" />
                      <div 
                        className="absolute top-8 left-6 md:top-10 md:left-10 w-0.5 bg-crimson transition-all duration-1000"
                        style={{ height: `${(Math.max(0, currentStageIndex) / (STATUS_STAGES.length - 1)) * 100}%` }}
                      />

                      {/* Stages */}
                      <div className="space-y-12 relative z-10">
                        {STATUS_STAGES.map((stage, idx) => {
                          const Icon = stage.icon;
                          const isCompleted = idx <= currentStageIndex;
                          const isCurrent = idx === currentStageIndex;

                          return (
                            <motion.div 
                              key={stage.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className={`flex items-start gap-6 md:gap-8 ${isCompleted ? 'opacity-100' : 'opacity-40'}`}
                            >
                              <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${isCurrent ? 'bg-crimson text-white shadow-lg shadow-crimson/30 ring-4 ring-crimson/10' : isCompleted ? 'bg-espresso text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                                <Icon size={isCurrent ? 32 : 24} weight={isCompleted ? "fill" : "regular"} className="md:hidden" />
                                <Icon size={isCurrent ? 40 : 32} weight={isCompleted ? "fill" : "regular"} className="hidden md:block" />
                              </div>
                              <div className="pt-2 md:pt-6">
                                <h4 className={`text-base md:text-lg font-bold ${isCurrent ? 'text-crimson' : 'text-gray-900'}`}>
                                  {t.trackOrder.stages[stage.id]?.label || stage.label}
                                </h4>
                                {isCurrent && (
                                  <p className="text-sm text-gray-500 mt-1">
                                    {t.trackOrder.stages[stage.id]?.desc}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Items */}
                <div className="bg-gray-50 border-t border-gray-100 p-8">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">{t.trackOrder.itemsLabel}</h4>
                  <div className="space-y-4">
                    {order.items?.map((item: any) => (
                      <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                            <Package size={20} className="text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{item.product_name}</p>
                            <p className="text-xs text-gray-500">{t.trackOrder.qtyLabel}: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-sm font-bold text-gray-900">
                          ${parseFloat(item.price).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
