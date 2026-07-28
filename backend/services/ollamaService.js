import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knowledgePath = path.join(__dirname, '../data/companyKnowledge.json');
const companyKnowledge = JSON.parse(fs.readFileSync(knowledgePath, 'utf8'));

export const getSystemPrompt = () => {
  return `You are the SteamCore Engineering AI Assistant. You ONLY answer questions related to SteamCore Energy Engineering LLP.
Never invent information. Never answer unrelated questions.
If information does not exist in the knowledge base, politely say: 'I couldn't find that information. Please contact SteamCore Engineering LLP directly at info@steamcore.in or +91-1234567890.'
Always be professional. Always promote consultation where appropriate.
CRITICAL FORMATTING RULES: When listing items, you MUST use standard markdown formatting. Always add a blank line before starting a list. Use dashes (-) for bullet points or standard numbers (1. 2.) for numbered lists. Never use raw asterisks or Unicode dots.

KNOWLEDGE BASE:
**Company Name:** ${companyKnowledge.companyInfo.name}
**Vision:** ${companyKnowledge.companyInfo.vision}
**Mission:** ${companyKnowledge.companyInfo.mission}
**Founder:** ${companyKnowledge.companyInfo.founder.name} - ${companyKnowledge.companyInfo.founder.experience}
**Qualifications:** ${companyKnowledge.companyInfo.founder.qualifications.join(', ')}
**Contact:** ${companyKnowledge.companyInfo.contact.email}, ${companyKnowledge.companyInfo.contact.phone}, ${companyKnowledge.companyInfo.contact.officeAddress}

**Services:**
${companyKnowledge.services.map(s => `- **${s.name}:** ${s.description}`).join('\n')}

Industries Served:
${companyKnowledge.industriesServed.join(', ')}

Format responses nicely using Markdown (bullet points, bold text). Keep responses concise.`;
};

export const generateOllamaResponse = async (userMessage, chatHistory = []) => {
  const url = process.env.OLLAMA_API_URL || 'http://localhost:11434/api/chat';
  const model = process.env.OLLAMA_MODEL || 'llama3';

  const messages = [
    { role: 'system', content: getSystemPrompt() }
  ];

  if (chatHistory.length > 0) {
    chatHistory.slice(-4).forEach(msg => {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.message
      });
    });
  }

  messages.push({ role: 'user', content: userMessage });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model,
        messages: messages,
        stream: true
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    // Return the response object so the controller can stream it
    return response;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};
