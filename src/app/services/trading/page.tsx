"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass, Funnel, ShoppingBag, Star, WhatsappLogo,
  ArrowLeft, X, Heart, Eye, Tag, Package, Truck, ShieldCheck,
  ShoppingCart, Plus, Minus, Trash,
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

/* ── Cart Item Type ── */
interface CartItem {
  id: number;
  name: string;
  price: number;
  priceFc: string;
  image: string;
  qty: number;
}

/* ── Product Catalog ── */
const categoryKeys = ["All", "Skincare", "Body Care", "Hair Care", "Fragrance"] as const;

const productsData = [
  {
    id: 1,
    nameIndex: 0,
    price: 25,
    priceFc: "50,000 FC",
    category: "Skincare",
    tag: "Best Seller",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    nameIndex: 1,
    price: 40,
    priceFc: "80,000 FC",
    category: "Skincare",
    tag: "Featured",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    nameIndex: 2,
    price: 30,
    priceFc: "60,000 FC",
    category: "Body Care",
    tag: "Popular",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    nameIndex: 3,
    price: 20,
    priceFc: "40,000 FC",
    category: "Body Care",
    tag: "Organic",
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1643185450492-6ba77dea4e17?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    nameIndex: 4,
    price: 35,
    priceFc: "70,000 FC",
    category: "Hair Care",
    tag: "New",
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    nameIndex: 5,
    price: 18,
    priceFc: "36,000 FC",
    category: "Skincare",
    tag: "Trending",
    rating: 4.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    nameIndex: 6,
    price: 55,
    priceFc: "110,000 FC",
    category: "Fragrance",
    tag: "Premium",
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1594035910387-fea081e84dfb?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    nameIndex: 7,
    price: 28,
    priceFc: "56,000 FC",
    category: "Body Care",
    tag: "Popular",
    rating: 4.7,
    reviews: 181,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
  },
];

/* ── Quick View Modal ── */
function ProductModal({ product, onClose, ts }: {
  product: { name: string; desc: string; price: number; priceFc: string; category: string; tag: string; rating: number; reviews: number; image: string };
  onClose: () => void;
  ts: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-pearl transition-colors z-20 cursor-pointer">
          <X size={18} className="text-espresso" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square bg-cream/50 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="400px" unoptimized />
            <span className="absolute top-4 left-4 px-3 py-1 bg-crimson text-white text-[10px] font-bold uppercase rounded-full tracking-wider">
              {product.tag}
            </span>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-walnut/40 font-bold block mb-2">{product.category}</span>
              <h2 className="text-display-sm font-bold text-espresso mb-3 leading-tight">{product.name}</h2>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" className={i < Math.floor(product.rating) ? "text-amber-400" : "text-pearl"} />
                  ))}
                </div>
                <span className="text-xs text-walnut/50 font-medium">{product.rating} ({product.reviews} {ts.reviews})</span>
              </div>

              <p className="text-body-sm text-walnut/70 leading-relaxed mb-6">{product.desc}</p>

              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-espresso/5">
                <span className="text-display-sm font-bold text-espresso">${product.price}</span>
                <span className="text-body-sm text-walnut/40 font-medium">{product.priceFc}</span>
              </div>

              {/* Trust badges */}
              <div className="space-y-2 mb-6">
                {[
                  { icon: Truck, text: ts.deliveryBadge },
                  { icon: ShieldCheck, text: ts.authenticBadge },
                  { icon: Package, text: ts.packagingBadge },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-walnut/50 font-medium">
                    <badge.icon size={14} className="text-crimson/60 flex-shrink-0" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/243990301518?text=${encodeURIComponent(`Hi Okey, I'd like to order:\n\n🛒 ${product.name}\n💰 $${product.price} (${product.priceFc})\n\nPlease confirm availability and delivery options.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#25D366] text-white rounded-2xl text-center text-sm font-bold hover:bg-[#20BD5A] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              style={{ textDecoration: "none" }}
            >
              <WhatsappLogo size={22} weight="fill" />
              <span>{ts.orderVia}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Store Page ── */
export default function TradingStorePage() {
  const { t } = useLanguage();
  const ts = t.tradingStore;
  const [search, setSearch] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [quickView, setQuickView] = useState<{ name: string; desc: string; price: number; priceFc: string; category: string; tag: string; rating: number; reviews: number; image: string } | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleFav = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addToCart = (product: { id: number; name: string; price: number; priceFc: string; image: string }) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === product.id);
      if (existing) return prev.map((c) => c.id === product.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  const buildWhatsAppMessage = () => {
    const lines = cart.map((c) => `\u2022 ${c.name} x${c.qty} — $${c.price * c.qty}`);
    return encodeURIComponent(
      `Hi Okey,\n\nI'd like to place an order from DIS Beauty & Cosmetics:\n\n${lines.join("\n")}\n\n💰 Total: $${cartTotal}\n\nPlease confirm availability, delivery options, and payment details. Thank you!`
    );
  };

  // Build localized products
  const products = useMemo(() => productsData.map((p) => ({
    ...p,
    name: ts.productNames[p.nameIndex] || "",
    desc: ts.productDescs[p.nameIndex] || "",
  })), [ts]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategoryIndex === 0 || p.category === categoryKeys[activeCategoryIndex];
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategoryIndex, search, products]);

  return (
    <main className="bg-white min-h-screen text-espresso w-full max-w-full overflow-hidden">
      <Navbar />

      {/* ── Store Hero ── */}
      <section
        className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden"
        style={{ backgroundColor: "#1A1210" }}
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=1600&h=600&fit=crop"
            alt="Beauty products"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1210] via-[#1A1210]/80 to-[#1A1210]/60" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-white/50 hover:text-white transition-colors mb-8 group"
            style={{ textDecoration: "none" }}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t?.serviceDetail?.backToHome || "Back to Home"}</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/20 text-crimson-light text-[10px] font-bold uppercase tracking-wider mb-4">
                <ShoppingBag size={12} weight="fill" />
                {ts.badge}
              </div>
              <h1 className="text-display-lg md:text-display-xl font-bold text-white mb-3 leading-[1.06]" style={{ whiteSpace: "pre-line" }}>
                {ts.heroTitle}<span className="text-crimson">.</span>
              </h1>
              <p className="text-body-md text-white/60 max-w-md leading-relaxed">
                {ts.heroSub}
              </p>
            </div>

            <div className="flex items-center gap-3 text-white/40 text-xs font-medium">
              <span className="flex items-center gap-1.5"><Package size={14} /> {productsData.length} {ts.productsCount}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5"><Truck size={14} /> {ts.freeDelivery}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search & Filters Bar ── */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-espresso/5 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-walnut/30" />
            <input
              type="text"
              placeholder={ts.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-cream/60 border border-espresso/5 text-body-sm text-espresso placeholder:text-walnut/30 focus:outline-none focus:border-crimson/30 focus:bg-white transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            <Funnel size={16} className="text-walnut/30 flex-shrink-0 mr-1 hidden sm:block" />
            {ts.categories.map((cat: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategoryIndex === idx
                    ? "bg-espresso text-white shadow-sm"
                    : "bg-cream/50 text-walnut/60 hover:bg-cream hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="section-padding max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <p className="text-body-sm text-walnut/50 font-medium">
            {ts.showing} <span className="text-espresso font-bold">{filtered.length}</span> {ts.products}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <MagnifyingGlass size={48} className="text-walnut/10 mx-auto mb-4" />
            <p className="text-body-lg text-walnut/40 font-medium">{ts.noResults}</p>
            <p className="text-body-sm text-walnut/25 mt-1">{ts.noResultsSub}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setQuickView(product)}
                className="group rounded-2xl md:rounded-3xl border border-espresso/[0.06] bg-white hover:border-crimson/20 hover:shadow-xl hover:shadow-espresso/[0.04] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-square bg-cream/30 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                  {/* Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[9px] md:text-[10px] font-bold uppercase rounded-full text-crimson tracking-wider shadow-sm flex items-center gap-1">
                    <Tag size={10} weight="fill" /> {product.tag}
                  </span>

                  {/* Hover Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFav(product.id); }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
                        favorites.has(product.id) ? "bg-crimson text-white" : "bg-white/90 backdrop-blur-sm text-walnut/60 hover:text-crimson"
                      }`}
                    >
                      <Heart size={16} weight={favorites.has(product.id) ? "fill" : "regular"} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setQuickView(product); }}
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-walnut/60 hover:text-espresso shadow-md transition-all cursor-pointer"
                    >
                      <Eye size={16} />
                    </button>
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Info */}
                <div className="p-3 md:p-4">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} weight="fill" className={i < Math.floor(product.rating) ? "text-amber-400" : "text-pearl"} />
                    ))}
                    <span className="text-[9px] text-walnut/30 ml-1 font-medium">({product.reviews})</span>
                  </div>

                  <h3 className="text-body-sm font-bold text-espresso mb-1 leading-snug line-clamp-2 group-hover:text-crimson transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-[11px] text-walnut/40 leading-relaxed line-clamp-2 mb-3 hidden md:block">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-body-md font-bold text-espresso">${product.price}</span>
                      <span className="text-[10px] text-walnut/30 block font-medium">{product.priceFc}</span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); addToCart({ id: product.id, name: product.name, price: product.price, priceFc: product.priceFc, image: product.image }); }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-espresso flex items-center justify-center text-white hover:bg-crimson transition-colors shadow-sm cursor-pointer"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} weight="fill" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ── Store Trust Banner ── */}
      <section className="bg-cream/40 border-t border-espresso/5 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[Truck, ShieldCheck, WhatsappLogo, Package].map((IconComp, i) => (
            <div key={i} className="text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-white border border-espresso/5 flex items-center justify-center shadow-sm">
                <IconComp size={22} className="text-crimson" weight="light" />
              </div>
              <h4 className="text-body-sm font-bold text-espresso">{ts.trustBadges[i]?.title}</h4>
              <p className="text-[10px] text-walnut/40 font-medium uppercase tracking-wider">{ts.trustBadges[i]?.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1A1210" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-md font-bold text-white mb-4">
            {ts.bulkTitle}
          </h2>
          <p className="text-body-md text-white/60 mb-8 max-w-xl mx-auto">
            {ts.bulkSub}
          </p>
          <a
            href="https://wa.me/243990301518?text=Hi%20Okey%2C%20I'm%20interested%20in%20wholesale%20pricing%20for%20your%20beauty%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-espresso font-bold text-body-sm rounded-full hover:bg-cream transition-all duration-300 shadow-lg"
            style={{ textDecoration: "none" }}
          >
            <WhatsappLogo size={22} weight="fill" className="text-[#25D366]" />
            <span>{ts.bulkCta}</span>
          </a>
        </div>
      </section>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <motion.button
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          onClick={() => setCartOpen(true)}
          className="fixed bottom-24 md:bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-espresso text-white flex items-center justify-center shadow-2xl hover:bg-crimson transition-colors cursor-pointer"
        >
          <ShoppingCart size={24} weight="fill" />
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-crimson text-white text-[11px] font-bold flex items-center justify-center">{cartCount}</span>
        </motion.button>
      )}

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickView && <ProductModal product={quickView} onClose={() => setQuickView(null)} ts={ts} />}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex justify-end" onClick={() => setCartOpen(false)}>
            <div className="absolute inset-0 bg-espresso/50 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-espresso/5">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} weight="fill" className="text-espresso" />
                  <h3 className="text-body-lg font-bold text-espresso">Cart ({cartCount})</h3>
                </div>
                <button onClick={() => setCartOpen(false)} className="w-9 h-9 rounded-full bg-cream flex items-center justify-center hover:bg-pearl transition-colors cursor-pointer">
                  <X size={16} className="text-espresso" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingBag size={40} className="text-walnut/10 mx-auto mb-3" />
                    <p className="text-body-sm text-walnut/40">Your cart is empty</p>
                  </div>
                ) : cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-2xl border border-espresso/5 bg-cream/20">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" unoptimized />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-body-sm font-bold text-espresso truncate">{item.name}</h4>
                      <p className="text-xs text-walnut/40 font-medium">${item.price} x {item.qty} = <span className="text-espresso font-bold">${item.price * item.qty}</span></p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-lg bg-cream flex items-center justify-center hover:bg-pearl cursor-pointer"><Minus size={12} weight="bold" /></button>
                        <span className="text-body-sm font-bold text-espresso w-6 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-lg bg-cream flex items-center justify-center hover:bg-pearl cursor-pointer"><Plus size={12} weight="bold" /></button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-walnut/30 hover:text-crimson hover:bg-crimson/5 cursor-pointer"><Trash size={14} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-espresso/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-walnut/60 font-medium">Total</span>
                    <span className="text-display-sm font-bold text-espresso">${cartTotal}</span>
                  </div>
                  <a
                    href={`https://wa.me/243990301518?text=${buildWhatsAppMessage()}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] text-white rounded-2xl text-center text-sm font-bold hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2 shadow-lg"
                    style={{ textDecoration: "none" }}
                  >
                    <WhatsappLogo size={22} weight="fill" />
                    <span>{ts.orderVia}</span>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
