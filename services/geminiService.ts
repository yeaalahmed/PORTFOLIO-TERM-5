import { GoogleGenAI, Chat } from "@google/genai";
import { PROJECTS, SKILLS, PORTFOLIO_OWNER, EXPERIENCE, PORTFOLIO_EMAIL } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of ${PORTFOLIO_OWNER}, a Mechanical Engineering Co-op student at Memorial University.
Your goal is to impress potential employers (recruiters, engineering managers) who are visiting this portfolio website.

Here is your context/experience data:
PROJECTS: ${JSON.stringify(PROJECTS)}
SKILLS: ${JSON.stringify(SKILLS)}
WORK EXPERIENCE: ${JSON.stringify(EXPERIENCE)}
EMAIL: ${PORTFOLIO_EMAIL}

Tone: Professional, enthusiastic, yet slightly "retro-engineering" (think 1960s NASA engineer precision mixed with modern tech savvy).
Constraint: Keep answers concise (under 3 sentences) unless asked for details.
Goal: Encourage the user to hire you for a work term.
Always mention specific tools (like Onshape, Python, NDT) if relevant to the question.
If asked about contact info, provide the email address or direct them to the contact section.
`;

export const initChat = () => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API Key not found");
        return null;
    }
    const ai = new GoogleGenAI({ apiKey });
    
    // We use a chat session to maintain history
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to init chat", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string) => {
  if (!chatSession) {
    initChat();
  }
  
  if (!chatSession) {
      throw new Error("Chat session could not be initialized. Check API Key.");
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};