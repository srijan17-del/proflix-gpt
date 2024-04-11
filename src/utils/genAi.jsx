import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "./constants";
// Access your API key (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(API_KEY);
