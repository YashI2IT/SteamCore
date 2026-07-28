import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';
import LeadForm from './LeadForm';
import CursorTrackingRobot from './CursorTrackingRobot';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initialize Session ID
    let currentSessionId = localStorage.getItem('steamcore_chat_session');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('steamcore_chat_session', currentSessionId);
    }
    setSessionId(currentSessionId);

    // Initial welcome message
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        message: 'Hello! 👋 Welcome to SteamCore Energy Engineering LLP. I\'m your Engineering AI Assistant. I can help you with Boiler Consultancy, Energy Audits, Reliability Engineering, Project Consultancy, and Training Programs. How may I help you today?'
      }
    ]);

    // Load history if any (could fetch from backend in a real app)
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showLeadForm]);

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), role: 'user', message: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const browser = navigator.userAgent;
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, message: text, browser })
      });
      
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        setIsTyping(false);
        
        if (data.triggerLeadForm) {
          setShowLeadForm(true);
        }
        
        if (data.response) {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, role: 'assistant', message: data.response }
          ]);
        }
      } else if (contentType && contentType.includes('text/event-stream')) {
        // Handle streaming response
        setIsTyping(false); // Hide typing indicator since we will show text instantly
        
        const messageId = Date.now() + 1;
        setMessages((prev) => [
          ...prev,
          { id: messageId, role: 'assistant', message: '' }
        ]);

        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let streamBuffer = '';
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          streamBuffer += decoder.decode(value, { stream: true });
          const lines = streamBuffer.split('\n');
          
          streamBuffer = lines.pop(); // Keep incomplete line in buffer
          
          for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            
            if (line.startsWith('data: ')) {
              const dataStr = line.replace('data: ', '');
              if (dataStr === '[DONE]') {
                break;
              }
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk) {
                  setMessages(prev => prev.map(msg => 
                    msg.id === messageId 
                      ? { ...msg, message: msg.message + parsed.chunk }
                      : msg
                  ));
                }
              } catch (e) {}
            }
          }
        }
      } else {
        throw new Error('Server returned HTML or unknown content type (Vercel crash)');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', message: 'Sorry, I am currently offline or facing an issue reaching the server.' }
      ]);
    }
  };

  const handleLeadSubmit = async (formData) => {
    try {
      await fetch(`${BACKEND_URL}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, sessionId })
      });
      setShowLeadForm(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'assistant', message: 'Thank you! Your details have been submitted. Our engineering team will contact you shortly.' }
      ]);
    } catch (error) {
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 5, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(true)}
            className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 overflow-hidden rounded-full border border-white/50 bg-gradient-to-tr from-[#e3d7c5] to-[#f7f2ea] px-2 py-2 pr-4 text-steam-navy shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:bottom-6 sm:right-6 sm:gap-3 sm:pr-6"
          >
            {/* Premium Shimmer Sweep Effect */}
            <div className="absolute inset-0 z-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
            
            <div className="relative z-10">
              <CursorTrackingRobot size={44} />
            </div>
            <span className="relative z-10 text-[14px] sm:text-base font-semibold tracking-wide text-steam-navy/90 transition-colors duration-300 group-hover:text-black">Ask SteamCore AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            style={{ transformOrigin: 'bottom right' }}
            className={`fixed z-50 flex flex-col overflow-hidden border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.16)] bottom-4 left-4 right-4 rounded-[28px] sm:bottom-6 sm:left-auto sm:right-6 sm:w-[380px] sm:max-w-[calc(100vw-2rem)] ${isMinimized ? 'h-auto' : 'h-[80dvh] max-h-[750px] sm:h-[600px] sm:max-h-[calc(100vh-4rem)]'}`}
          >
            <ChatHeader 
              toggleMinimize={() => setIsMinimized(!isMinimized)} 
              toggleChat={() => setIsOpen(false)} 
            />

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-steam-navy/20">
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg.message} isAI={msg.role === 'assistant'} />
                  ))}
                  
                  {isTyping && <TypingIndicator />}
                  
                  {showLeadForm && (
                    <LeadForm 
                      onSubmit={handleLeadSubmit} 
                      onCancel={() => setShowLeadForm(false)} 
                    />
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-gray-100 bg-white p-4">
                  {messages.length < 3 && !showLeadForm && (
                    <QuickReplies onSelect={(reply) => handleSend(reply)} />
                  )}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="relative flex items-center"
                  >
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="w-full rounded-full border border-gray-300 bg-white py-3 pl-4 pr-12 text-sm focus:border-steam-navy focus:outline-none focus:ring-1 focus:ring-steam-navy"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-steam-navy text-white transition-colors hover:bg-steam-navy/90 disabled:opacity-50"
                    >
                      <Send size={16} className="-ml-0.5" />
                    </button>
                  </form>
                  <div className="mt-2 text-center">
                    <span className="text-[10px] text-gray-500">Powered by SteamCore AI</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
