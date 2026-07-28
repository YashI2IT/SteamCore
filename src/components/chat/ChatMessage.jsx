import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatMessage({ message, isAI }) {
  const formattedMessage = message;

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
