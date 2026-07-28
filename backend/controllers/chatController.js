import Chat from '../models/Chat.js';
import Session from '../models/Session.js';
import Visitor from '../models/Visitor.js';
import { searchFAQ } from '../services/searchService.js';
import { generateOllamaResponse } from '../services/ollamaService.js';

export const handleChat = async (req, res) => {
  try {
    const { sessionId, message, browser, device } = req.body;
    const ip = req.ip || req.connection.remoteAddress;

    if (!sessionId || !message) {
      return res.status(400).json({ success: false, message: 'Session ID and message are required' });
    }

    // 1. Register Session and Visitor
    await Session.findOneAndUpdate(
      { sessionId },
      { sessionId, ip, browser, device },
      { upsert: true, returnDocument: 'after' }
    );

    const visitor = await Visitor.findOneAndUpdate(
      { ip },
      { $inc: { visitCount: 1 }, lastVisit: new Date(), userAgent: browser },
      { upsert: true, returnDocument: 'after' }
    );

    // 2. Save User Message
    await Chat.create({ sessionId, role: 'user', message, browser, ip, device });

    // 3. Pre-processing & Intent Detection
    const lowerMessage = message.toLowerCase();
    const leadKeywords = ['need quotation', 'need proposal', 'need inspection', 'need consultancy', 'need energy audit', 'need boiler audit', 'need training', 'need project', 'need amc', 'need maintenance'];
    
    // Check if user is asking for a lead form
    if (leadKeywords.some(keyword => lowerMessage.includes(keyword))) {
      const responseMsg = "I can certainly help with that. Please fill out the lead form below, and our engineering team will get back to you with a proposal.";
      await Chat.create({ sessionId, role: 'assistant', message: responseMsg });
      return res.json({ success: true, response: responseMsg, triggerLeadForm: true });
    }

    // Intercept basic greetings
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
    if (greetings.includes(lowerMessage.trim())) {
      const responseMsg = "Hello! 👋 Welcome to SteamCore Energy Engineering LLP. I'm your Engineering AI Assistant. I can help you with Boiler Consultancy, Energy Audits, Reliability Engineering, Project Consultancy, and Training Programs. How may I help you today?";
      await Chat.create({ sessionId, role: 'assistant', message: responseMsg });
      return res.json({ success: true, response: responseMsg });
    }

    // 4. Hybrid RAG - Search Local Knowledge Base (FAQ)
    const faqAnswer = searchFAQ(message);
    
    if (faqAnswer) {
      await Chat.create({ sessionId, role: 'assistant', message: faqAnswer });
      return res.json({ success: true, response: faqAnswer });
    }

    // 5. If no exact/fuzzy FAQ match, use Ollama AI with context
    // Fetch last 5 messages for context
    const history = await Chat.find({ sessionId }).sort({ createdAt: -1 }).limit(5).lean();
    history.reverse();

    const responseStream = await generateOllamaResponse(message, history);

    // Set headers for Server-Sent Events (SSE)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // flush the headers to establish SSE connection

    let fullResponse = '';
    
    // Read the stream
    const reader = responseStream.body.getReader();
    const decoder = new TextDecoder('utf-8');
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\\n').filter(line => line.trim() !== '');
      
      for (const line of lines) {
        try {
          const parsed = JSON.parse(line);
          const token = parsed.message?.content || parsed.response; // Fallback for both endpoints
          if (token) {
            fullResponse += token;
            // Send chunk to client
            res.write(`data: ${JSON.stringify({ chunk: token })}\\n\\n`);
          }
        } catch (e) {
          // ignore parsing errors for partial chunks
        }
      }
    }

    // Tell client stream is done
    res.write('data: [DONE]\\n\\n');
    res.end();

    // Save full AI Response to DB after streaming completes
    await Chat.create({ sessionId, role: 'assistant', message: fullResponse });

  } catch (error) {
    console.error('Chat Error:', error);
    // If headers are not sent, we can return 500, otherwise we just end stream
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      res.end();
    }
  }
};

export const getHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const history = await Chat.find({ sessionId }).sort({ createdAt: 1 });
    res.json({ success: true, data: history });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const clearHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;
    await Chat.deleteMany({ sessionId });
    res.json({ success: true, message: 'Chat history cleared' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
