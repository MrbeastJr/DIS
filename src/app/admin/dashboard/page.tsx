"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  SignOut, Plus, Trash, Storefront, Package, Info, CheckCircle
} from "@phosphor-icons/react";

/* ── Mirroring the Trading Page Data Structure ── */
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
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [isAdding, setIsAdding] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: 0,
    priceFc: "",
    category: "Skincare",
    tag: "",
    rating: 5.0,
    reviews: 0,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 300 * 1024) {
        setImageError("Image size must be less than 300KB to save DB space.");
        setImageFile(null);
      } else {
        setImageError("");
        setImageFile(file);
      }
    } else {
      setImageFile(null);
      setImageError("");
    }
  };

  // Fetch mock products (Prepping for PythonAnywhere API)
  useEffect(() => {
    const fetchProducts = async () => {
      // MOCK FETCH:
      // const res = await fetch("https://your-pythonanywhere-app.com/api/products/");
      // const data = await res.json();
      
      // Simulating network delay
      setTimeout(() => {
        setProducts([
          {
            id: 1,
            name: "Luminous Glow Serum",
            desc: "A powerful brightening serum infused with Vitamin C and botanical extracts.",
            price: 25,
            priceFc: "50,000 FC",
            category: "Skincare",
            tag: "Best Seller",
            rating: 4.8,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
          }
        ]);
        setLoading(false);
      }, 800);
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    // Clear mock cookies/session
    router.push("/admin");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);

    // MOCK POST REQUEST TO DJANGO BACKEND:
    // const payload = new FormData();
    // payload.append("name", formData.name);
    // payload.append("desc", formData.desc);
    // ...
    // if (imageFile) payload.append("image", imageFile);
    // await fetch("https://your-pythonanywhere-app.com/api/products/", {
    //   method: "POST",
    //   body: payload
    // });

    setTimeout(() => {
      const mockImageUrl = imageFile ? URL.createObjectURL(imageFile) : "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop";
      
      const newProduct: AdminProduct = {
        id: Date.now(), // Mock ID from DB
        ...formData,
        image: mockImageUrl
      };
      
      setProducts([newProduct, ...products]);
      setSuccessMsg("Product successfully added to the database!");
      setIsAdding(false);
      
      // Reset form
      setFormData({
        name: "",
        desc: "",
        price: 0,
        priceFc: "",
        category: "Skincare",
        tag: "",
        rating: 5.0,
        reviews: 0,
      });
      setImageFile(null);
      setImageError("");

      setTimeout(() => setSuccessMsg(""), 3000);
    }, 1000);
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
          <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">PythonAnywhere Backend</p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-crimson/10 text-crimson rounded-xl font-bold text-sm transition-colors">
                <Package size={20} weight="fill" />
                Trading Products
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-white/70 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-colors"
          >
            <SignOut size={20} />
            Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 flex-1 p-4 sm:p-8 lg:p-12 w-full overflow-hidden">
        <header className="mb-10 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Manage Trading Products</h1>
          <p className="text-gray-500 mt-1">Add, edit, or remove products displayed on the public Trading page.</p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Add Product Form */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Plus size={20} className="text-crimson" />
                Add New Product
              </h2>

              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-medium flex items-center gap-2">
                  <CheckCircle size={18} weight="fill" />
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Product Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="e.g. Luminous Glow Serum" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Short Description</label>
                    <input type="text" required value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} placeholder="e.g. A powerful brightening serum..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Price (USD)</label>
                    <input type="number" required min="0" value={formData.price} onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Price (FC)</label>
                    <input type="text" required value={formData.priceFc} onChange={(e) => setFormData({...formData, priceFc: e.target.value})} placeholder="e.g. 50,000 FC" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Category</label>
                    <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all">
                      <option>Skincare</option>
                      <option>Body Care</option>
                      <option>Hair Care</option>
                      <option>Fragrance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Badge Tag</label>
                    <input type="text" value={formData.tag} onChange={(e) => setFormData({...formData, tag: e.target.value})} placeholder="e.g. Best Seller" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Rating</label>
                    <input type="number" required step="0.1" min="0" max="5" value={formData.rating} onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value)})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Reviews</label>
                    <input type="number" required min="0" value={formData.reviews} onChange={(e) => setFormData({...formData, reviews: parseInt(e.target.value)})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Product Image (Max 300KB)</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} className={`w-full bg-gray-50 border ${imageError ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-2.5 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-crimson/10 file:text-crimson hover:file:bg-crimson/20 focus:outline-none transition-all cursor-pointer`} />
                  {imageError ? (
                    <p className="text-[10px] text-red-500 mt-1 font-bold">{imageError}</p>
                  ) : (
                    <p className="text-[10px] text-gray-400 mt-1">Backend must handle multipart/form-data</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isAdding || !!imageError}
                  className="w-full mt-2 bg-crimson hover:bg-crimson-dark text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isAdding ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Add Product to DB</>
                  )}
                </button>
              </form>
            </div>
            
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-3 text-blue-800">
              <Info size={24} className="shrink-0 text-blue-600" />
              <p className="text-xs leading-relaxed font-medium">
                <strong>Backend Ready:</strong> This interface is prepared for the PythonAnywhere endpoints. 
                Currently running in mock-mode. Real DB integration will replace the `fetch()` placeholders in the codebase.
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">Database Inventory</h2>
              </div>
              
              <div className="p-0">
                {loading ? (
                  <div className="p-12 text-center text-gray-400 text-sm font-medium animate-pulse">
                    Querying PythonAnywhere Database...
                  </div>
                ) : products.length === 0 ? (
                  <div className="p-12 text-center text-gray-500 text-sm font-medium">
                    No products found. Add one to get started.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100">
                          <th className="p-4 pl-6">Product</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Price</th>
                          <th className="p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                          <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="p-4 pl-6 flex items-center gap-4">
                              {product.image ? (
                                <div className="w-12 h-12 rounded-lg border border-gray-200 overflow-hidden relative bg-gray-100">
                                  <Image src={product.image} alt="Product" fill className="object-cover" />
                                </div>
                              ) : (
                                <div className="w-12 h-12 rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
                                  <Package size={20} className="text-gray-400" />
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-bold text-gray-900">{product.name}</p>
                                {product.tag && <span className="inline-block px-2 py-0.5 mt-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md">{product.tag}</span>}
                              </div>
                            </td>
                            <td className="p-4 text-sm text-gray-600 font-medium">
                              {product.category}
                            </td>
                            <td className="p-4">
                              <p className="text-sm font-bold text-gray-900">${product.price}</p>
                              <p className="text-xs text-gray-500">{product.priceFc}</p>
                            </td>
                            <td className="p-4">
                              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Product (Mock)">
                                <Trash size={18} weight="fill" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
