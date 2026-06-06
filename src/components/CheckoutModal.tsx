"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Spinner, CheckCircle } from "@phosphor-icons/react";
import { API_BASE_URL } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "react-hot-toast";

interface CheckoutModalProps {
  cart: any[];
  cartTotal: number;
  onClose: () => void;
}

export default function CheckoutModal({ cart, cartTotal, onClose }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t, locale } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const items = cart.map(item => ({ product_id: item.id, quantity: item.qty || 1 }));
      const payload = { ...formData, items, locale };

      const res = await fetch(`${API_BASE_URL}/orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create order. Please check your details or stock availability.");
      }

      const data = await res.json();
      
      const lines = cart.map((c) => `\u2022 ${c.name} x${c.qty || 1} — $${c.price * (c.qty || 1)}`);
      const whatsappMsg = encodeURIComponent(
        `Hi Okey,\n\nI've placed a new order!\n\n🧾 Order ID: ${data.order_id}\n👤 Name: ${formData.customer_name}\n📍 Address: ${formData.shipping_address}\n\nItems:\n${lines.join("\n")}\n\n💰 Total: $${data.total_amount}\n\nPlease confirm my order. Thank you!`
      );
      
      toast.success(t.spamWarning, { duration: 8000, style: { background: '#1A1210', color: '#fff', borderRadius: '12px' } });
      setTimeout(() => {
        window.open(`https://wa.me/243990301518?text=${whatsappMsg}`, '_blank');
      }, 3000);
      onClose();
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-[#1A1210]/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Secure Checkout</h3>
            <p className="text-xs text-gray-500 mt-1">Complete your order details</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} weight="bold" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
                value={formData.customer_name} onChange={e => setFormData({...formData, customer_name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
                value={formData.customer_email} onChange={e => setFormData({...formData, customer_email: e.target.value})} />
              <p className="text-[10px] text-gray-400 mt-1">Used for sending tracking updates.</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
              <input required type="tel" placeholder="+1234567890" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
                value={formData.customer_phone} onChange={e => setFormData({...formData, customer_phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Delivery Address</label>
              <textarea required placeholder="Enter full delivery address..." className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all resize-none h-24"
                value={formData.shipping_address} onChange={e => setFormData({...formData, shipping_address: e.target.value})} />
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-100 shrink-0 bg-gray-50">
          <div className="flex items-center justify-between font-bold text-gray-900 mb-4">
            <span className="text-sm">Total Amount (Excl. Tax)</span>
            <span className="text-xl text-crimson">${cartTotal}</span>
          </div>
          <button 
            type="submit" 
            form="checkout-form"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-white bg-crimson hover:bg-crimson-dark transition-colors shadow-lg shadow-crimson/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Spinner className="animate-spin" size={20} /> : <CheckCircle size={20} weight="fill" />}
            {loading ? "Processing..." : "Place Order & Pay"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
