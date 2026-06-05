export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
export const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL as string;

import { GoogleGenerativeAI } from "@google/generative-ai";

// Use the provided API key for Derma-Scan AI via env variable
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


/**
 * Returns headers with Authorization if a token exists in localStorage.
 */
export const getAuthHeaders = (): HeadersInit => {
  if (typeof window === "undefined") return { "Content-Type": "application/json" };
  
  const token = localStorage.getItem("dis_admin_token");
  if (token) {
    return {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    };
  }
  return { "Content-Type": "application/json" };
};

/**
 * Normalizes an image URL from the Django API.
 * If the URL is relative (e.g., /media/img.png), prepends the MEDIA_BASE_URL.
 */
export const getImageUrl = (url?: string | null): string => {
  if (!url) return "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop"; // fallback image
  if (url.startsWith("http")) return url;
  return `${MEDIA_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};
