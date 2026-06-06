"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  SignOut, Plus, Trash, Storefront, Package, Info, 
  PencilSimple, ShoppingCart, ChartLineUp, WarningCircle, CheckCircle
} from "@phosphor-icons/react";
import { API_BASE_URL, getAuthHeaders, getImageUrl, genAI } from "@/lib/api";
import toast from "react-hot-toast";

interface AdminProduct {
  id: number;
  name: string;
  desc: string;
  price: number;
  priceFc: string;
  category: string;
  tag: string;
  rating: number;
  reviews: number;
  image: string;
  stock: number;
}

interface Order {
  id: number;
  order_number: string;
  customer_name: string;
  customer_email: string;
  total_amount: string;
  status: string;
  is_paid: boolean;
  created_at: string;
  items: any[];
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'finance'>('orders');
  
  // Data States
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [categories, setCategories] = useState<{id: string, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLowStockModal, setShowLowStockModal] = useState(false);

  // Form State (Products)
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", desc: "", price: 0, priceFc: "",
    category: "", tag: "", rating: 5.0, reviews: 0, stock: 10, skin_type: "all"
  });

  const isCosmeticsCategory = () => {
    const cat = categories.find(c => c.id.toString() === formData.category.toString());
    return cat ? cat.name.toLowerCase().includes("cosmetic") : false;
  };
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'products') {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/products/`),
          fetch(`${API_BASE_URL}/products/categories/`)
        ]);
        if (productsRes.ok) {
          const data = await productsRes.json();
          const productsArray = data.results || data;
          setProducts(productsArray.map((item: any) => ({
            ...item, desc: item.description, price: item.price_usd, priceFc: item.price_fc,
            rating: 5.0, reviews: 0, image: getImageUrl(item.image)
          })));
        }
        if (categoriesRes.ok) {
          const cats = await categoriesRes.json();
          setCategories(cats);
        }
      } else {
        const [ordersRes, dashRes] = await Promise.all([
          fetch(`${API_BASE_URL}/orders/`, { headers: getAuthHeaders() }),
          fetch(`${API_BASE_URL}/orders/admin/dashboard/`, { headers: getAuthHeaders() })
        ]);
        if (ordersRes.ok) {
          const data = await ordersRes.json();
          setOrders(data.results || data);
        }
        if (dashRes.ok) {
          setDashboardData(await dashRes.json());
        }
      }
    } catch (err) {
      toast.error("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dis_admin_token");
    router.push("/admin");
  };

  /* --- PRODUCT ACTIONS --- */
  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      toast.loading("Translating & Saving...", { id: "save-toast" });
      let name_fr = "", name_es = "", desc_fr = "", desc_es = "";
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Translate the following product name and description into French and Spanish.\nReturn exactly this JSON format with no markdown formatting:\n{\n  "name_fr": "French name",\n  "name_es": "Spanish name",\n  "desc_fr": "French description",\n  "desc_es": "Spanish description"\n}\nName: ${formData.name}\nDescription: ${formData.desc}`;
        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        const parsed = JSON.parse(text);
        name_fr = parsed.name_fr || "";
        name_es = parsed.name_es || "";
        desc_fr = parsed.desc_fr || "";
        desc_es = parsed.desc_es || "";
      } catch (err) {
        console.warn("Translation failed", err);
      }

      const payload = new FormData();
      payload.append("name", formData.name);
      if (name_fr) payload.append("name_fr", name_fr);
      if (name_es) payload.append("name_es", name_es);
      payload.append("description", formData.desc);
      if (desc_fr) payload.append("description_fr", desc_fr);
      if (desc_es) payload.append("description_es", desc_es);
      payload.append("price_usd", String(formData.price));
      payload.append("price_fc", formData.priceFc);
      payload.append("category", formData.category);
      payload.append("tag", formData.tag);
      payload.append("stock", String(formData.stock));
      if (isCosmeticsCategory()) {
        payload.append("skin_type", formData.skin_type);
      }
      if (imageFile) payload.append("image", imageFile);

      const url = editingId ? `${API_BASE_URL}/products/${editingId}/` : `${API_BASE_URL}/products/`;
      const method = editingId ? "PATCH" : "POST";
      const headers: any = { ...getAuthHeaders() };
      delete headers["Content-Type"];

      const res = await fetch(url, { method, headers, body: payload });
      if (res.ok) {
        toast.success(editingId ? "Updated!" : "Added!", { id: "save-toast" });
        setEditingId(null);
        setFormData({ name: "", desc: "", price: 0, priceFc: "", category: "", tag: "", rating: 5.0, reviews: 0, stock: 10, skin_type: "all" });
        setImageFile(null);
        fetchData();
      } else {
        toast.error("Failed to save product.", { id: "save-toast" });
      }
    } catch (err) {
      toast.error("Network error.", { id: "save-toast" });
    } finally {
      setIsAdding(false);
    }
  };

  const handleProductDelete = async (id: number) => {
    if (!confirm("Delete this product?")) return;
    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}/`, { method: "DELETE", headers: getAuthHeaders() });
      if (res.ok) {
        setProducts(products.filter(p => p.id !== id));
        toast.success("Product deleted.");
      }
    } catch (err) {
      toast.error("Network error.");
    }
  };

  /* --- ORDER ACTIONS --- */
  const updateOrderStatus = async (orderNumber: string, status: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/orders/admin/orders/${orderNumber}/update/`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        toast.success("Order status updated!");
        fetchData();
      } else {
        toast.error("Failed to update status.");
      }
    } catch (err) {
      toast.error("Network error.");
    }
  };

  const markAsPaid = async (orderNumber: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/orders/admin/orders/${orderNumber}/update/`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ is_paid: true })
      });
      if (res.ok) {
        toast.success("Order marked as paid!");
        fetchData();
      } else {
        toast.error("Failed to update payment status.");
      }
    } catch (err) {
      toast.error("Network error.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#1A1210] text-white flex flex-col md:fixed md:h-full z-10">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Storefront size={24} className="text-crimson" weight="fill" />
            DIS Admin
          </h2>
          <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Django Platform</p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === 'orders' ? 'bg-crimson/10 text-crimson' : 'text-white/70 hover:bg-white/5'}`}
              >
                <ShoppingCart size={20} weight={activeTab === 'orders' ? 'fill' : 'regular'} />
                Orders & Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === 'products' ? 'bg-crimson/10 text-crimson' : 'text-white/70 hover:bg-white/5'}`}
              >
                <Package size={20} weight={activeTab === 'products' ? 'fill' : 'regular'} />
                Inventory Management
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('finance')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === 'finance' ? 'bg-crimson/10 text-crimson' : 'text-white/70 hover:bg-white/5'}`}
              >
                <ChartLineUp size={20} weight={activeTab === 'finance' ? 'fill' : 'regular'} />
                Finance & Analytics
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-left text-white/70 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-colors">
            <SignOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 flex-1 p-4 sm:p-8 lg:p-12 w-full overflow-hidden">
        {activeTab === 'orders' && (
          <div className="space-y-8 animate-fade-in">
            <header>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
              <p className="text-gray-500 mt-1">Real-time sales and order pipeline.</p>
            </header>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <ChartLineUp size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Today&apos;s Sales</p>
                  <p className="text-2xl font-bold text-gray-900">NGN {dashboardData?.today?.sales?.toLocaleString() || 0}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShoppingCart size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Today&apos;s Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData?.today?.orders || 0}</p>
                </div>
              </div>
              <div 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setShowLowStockModal(true)}
              >
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <WarningCircle size={24} className="text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Low Stock Alerts</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData?.low_stock?.length || 0}</p>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100">
                      <th className="p-4 pl-6">Order</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {loading ? (
                      <tr><td colSpan={5} className="p-12 text-center text-gray-400">Loading...</td></tr>
                    ) : orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/50">
                        <td className="p-4 pl-6">
                          <p className="text-sm font-bold text-gray-900">{order.order_number}</p>
                          <p className="text-[10px] text-gray-500 uppercase">{new Date(order.created_at).toLocaleDateString()}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-sm text-gray-900 font-medium">{order.customer_name || 'N/A'}</p>
                          <p className="text-xs text-gray-500">{order.customer_email}</p>
                        </td>
                        <td className="p-4 text-sm font-bold text-gray-900">
                          ${parseFloat(order.total_amount).toLocaleString()}
                        </td>
                        <td className="p-4">
                          <select 
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.order_number, e.target.value)}
                            className="text-xs font-bold bg-gray-100 border-none rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-crimson outline-none cursor-pointer"
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="PAYMENT_REVIEW">PAYMENT REVIEW</option>
                            <option value="PROCESSING">PROCESSING</option>
                            <option value="SHIPPED">SHIPPED</option>
                            <option value="DELIVERED">DELIVERED</option>
                            <option value="CANCELLED">CANCELLED</option>
                          </select>
                        </td>
                        <td className="p-4">
                          {order.is_paid ? (
                            <span className="flex items-center gap-1 text-xs font-bold text-green-600"><CheckCircle weight="fill" /> Paid</span>
                          ) : (
                            <button onClick={() => markAsPaid(order.order_number)} className="text-xs font-bold text-orange-500 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg transition-colors">Mark as Paid</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="animate-fade-in grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">{editingId ? "Edit Product" : "Add Product"}</h2>
                <form onSubmit={handleProductSubmit} className="space-y-4">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none" />
                  <input type="text" required value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} placeholder="Description" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" required value={formData.price} onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})} placeholder="Price USD" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none" />
                    <input type="text" required value={formData.priceFc} onChange={(e) => setFormData({...formData, priceFc: e.target.value})} placeholder="Price FC" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none">
                      <option value="">Select Category</option>
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <input type="number" required value={formData.stock} onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})} placeholder="Stock" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none" />
                  </div>
                  {isCosmeticsCategory() && (
                    <div className="grid grid-cols-1 gap-4">
                      <select value={formData.skin_type} onChange={(e) => setFormData({...formData, skin_type: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-crimson outline-none">
                        <option value="all">All Skin Types</option>
                        <option value="normal">Normal</option>
                        <option value="dry">Dry</option>
                        <option value="oily">Oily</option>
                        <option value="combination">Combination</option>
                        <option value="sensitive">Sensitive</option>
                      </select>
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="w-full text-sm" />
                  <button type="submit" disabled={isAdding} className="w-full bg-crimson text-white font-bold py-3.5 rounded-xl shadow-sm hover:bg-crimson-dark">Save Product</button>
                </form>
              </div>
            </div>
            
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100"><h2 className="text-lg font-bold text-gray-900">Inventory</h2></div>
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs text-gray-500 font-bold border-b border-gray-100">
                    <tr><th className="p-4 pl-6">Product</th><th className="p-4">Stock</th><th className="p-4">Actions</th></tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id} className="border-b border-gray-50">
                        <td className="p-4 pl-6 text-sm font-bold text-gray-900">{p.name}</td>
                        <td className="p-4 text-sm">{p.stock} units</td>
                        <td className="p-4 flex gap-2">
                          <button onClick={() => { setEditingId(p.id); setFormData({name: p.name, desc: p.desc, price: p.price, priceFc: p.priceFc, category: p.category, tag: p.tag, rating: p.rating, reviews: p.reviews, stock: p.stock, skin_type: (p as any).skin_type || 'all'}); }} className="p-2 text-gray-400 hover:text-blue-600"><PencilSimple size={18} /></button>
                          <button onClick={() => handleProductDelete(p.id)} className="p-2 text-gray-400 hover:text-red-600"><Trash size={18} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="space-y-8 animate-fade-in">
            <header>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Finance & Analytics</h1>
              <p className="text-gray-500 mt-1">Detailed revenue reports and top performing products.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold text-gray-500 uppercase mb-2">Today&apos;s Revenue</p>
                <p className="text-3xl font-bold text-gray-900">NGN {dashboardData?.finance?.today?.toLocaleString() || 0}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold text-gray-500 uppercase mb-2">This Week</p>
                <p className="text-3xl font-bold text-gray-900">NGN {dashboardData?.finance?.week?.toLocaleString() || 0}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold text-gray-500 uppercase mb-2">This Month</p>
                <p className="text-3xl font-bold text-gray-900">NGN {dashboardData?.finance?.month?.toLocaleString() || 0}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold text-gray-500 uppercase mb-2">This Year</p>
                <p className="text-3xl font-bold text-gray-900">NGN {dashboardData?.finance?.year?.toLocaleString() || 0}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">Top Selling Products</h2>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100">
                    <th className="p-4 pl-6">Product</th>
                    <th className="p-4">Total Sold</th>
                    <th className="p-4">Est. Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dashboardData?.top_products?.length > 0 ? dashboardData.top_products.map((p: any) => (
                    <tr key={p.id} className="hover:bg-gray-50/50">
                      <td className="p-4 pl-6 text-sm font-bold text-gray-900">{p.name}</td>
                      <td className="p-4 text-sm text-gray-600">{p.total_sold} units</td>
                      <td className="p-4 text-sm font-bold text-green-600">${parseFloat(p.price_usd || 0) * p.total_sold}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={3} className="p-8 text-center text-gray-400">No data available yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Low Stock Modal */}
      {showLowStockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <WarningCircle size={24} className="text-red-600" />
                Low Stock Items
              </h3>
              <button onClick={() => setShowLowStockModal(false)} className="text-gray-400 hover:text-gray-900 font-bold text-xl">&times;</button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {dashboardData?.low_stock?.length > 0 ? (
                <ul className="space-y-4">
                  {dashboardData.low_stock.map((item: any) => (
                    <li key={item.id} className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <span className="font-bold text-gray-900 text-sm">{item.name}</span>
                      <span className="text-xs font-bold px-3 py-1 bg-red-50 text-red-600 rounded-full">{item.stock} units left</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500 py-8">All items are sufficiently stocked.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
