import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function test() {
  let name_fr = "", name_es = "", desc_fr = "", desc_es = "";
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Translate the following product name and description into French and Spanish.\nReturn exactly this JSON format with no markdown formatting:\n{\n  "name_fr": "French name",\n  "name_es": "Spanish name",\n  "desc_fr": "French description",\n  "desc_es": "Spanish description"\n}\nName: Dr. Althea 345 Cream\nDescription: Dr. Althea 345 Relief Cream 50ml`;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log("Raw response:", text);
    const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    console.log("Cleaned:", cleaned);
    const parsed = JSON.parse(cleaned);
    console.log("Parsed:", parsed);
  } catch (err) {
    console.error("Translation failed", err);
  }
}
test();
