import { motion } from 'framer-motion';

export default function TypingIndicator() {
  return (
    <div className="mb-4 flex w-full justify-start">
      <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-steam-navy shadow-sm">
        <span className="text-sm font-bold">S</span>
      </div>
      <div className="relative flex max-w-[80%] items-center gap-1 rounded-2xl rounded-tl-sm border border-gray-100 bg-white px-4 py-4 shadow-sm">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          className="h-1.5 w-1.5 rounded-full bg-steam-navy/50"
        />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          className="h-1.5 w-1.5 rounded-full bg-steam-navy/50"
        />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          className="h-1.5 w-1.5 rounded-full bg-steam-navy/50"
        />
      </div>
    </div>
  );
}
