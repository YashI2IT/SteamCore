import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatMessage({ message, isAI }) {
  // Fix malformed markdown from small AI models
  let formattedMessage = message;
  if (isAI) {
    // 1. Fix missing newlines before bullet points (e.g., "word* Word" or "word• Word")
    formattedMessage = formattedMessage.replace(/([a-z0-9.:*])\s*(\*|-|•)\s+([A-Z])/g, '$1\n\n- $3');
    formattedMessage = formattedMessage.replace(/([a-z0-9.:*])\s*(\*|-|•)([A-Z])/g, '$1\n\n- $3');
    // 2. Catch raw unicode bullets and convert them to markdown dashes cleanly
    formattedMessage = formattedMessage.replace(/(^|\n)\s*•\s*/g, '$1- ');
    // 3. Fix completely squished list items (e.g., "utilitiesBoiler Consultancy:")
    formattedMessage = formattedMessage.replace(/([a-z])([A-Z][a-zA-Z\s]+:)/g, '$1\n\n- $2');
    // 4. Clean trailing garbage asterisks
    formattedMessage = formattedMessage.replace(/\*\*$/g, '');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full ${isAI ? 'justify-start' : 'justify-end'} mb-4`}
    >
      {isAI && (
        <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-steam-navy shadow-sm">
          <span className="text-sm font-bold">S</span>
        </div>
      )}
      
      <div
        className={`relative max-w-[80%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm ${
          isAI
            ? 'rounded-tl-sm border border-gray-100 bg-white text-steam-navy'
            : 'rounded-tr-sm bg-steam-navy text-white'
        }`}
      >
        {isAI ? (
          <div className="prose prose-sm prose-slate max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {formattedMessage}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{formattedMessage}</p>
        )}
      </div>
    </motion.div>
  );
}
