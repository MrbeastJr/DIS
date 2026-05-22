"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, LockKey, EnvelopeSimple } from "@phosphor-icons/react";
import { API_BASE_URL } from "@/lib/api";
import { toast } from "react-hot-toast";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/token-auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email, // Django DRF requires this key to be "username" even if we pass an email
          password,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("dis_admin_token", data.token);
        toast.success("Login successful!");
        router.push("/admin/dashboard");
      } else {
        setError("Invalid username or password.");
        toast.error("Invalid username or password.");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection.");
      toast.error("Network error. Please check your connection.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1A1210] p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden relative z-10">
        <div className="p-8 md:p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-crimson/10 rounded-full flex items-center justify-center mb-4 border border-crimson/20">
              <ShieldCheck size={32} className="text-crimson" weight="fill" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
              DIS Administration
            </h1>
            <p className="text-sm text-white/50 font-medium">
              Django Superuser Access Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeSimple size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dis.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="relative">
                <LockKey size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/50 transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-crimson hover:bg-crimson-dark text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(206,32,41,0.3)] hover:shadow-[0_0_30px_rgba(206,32,41,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Authenticate to Dashboard"
              )}
            </button>
          </form>
        </div>
        <div className="bg-black/40 py-4 px-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-medium">
            Protected by Django Backend &middot; PythonAnywhere
          </p>
        </div>
      </div>
    </main>
  );
}
