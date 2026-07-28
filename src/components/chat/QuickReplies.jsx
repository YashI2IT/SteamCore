import { motion } from 'framer-motion';

export default function QuickReplies({ onSelect }) {
  const replies = [
    'Boiler Consultancy',
    'Energy Audit',
    'Training',
    'Projects',
    'Industries',
    'Founder',
    'Get Quotation',
    'Talk to Engineer'
  ];

  return (
    <div className="relative mb-3 w-full">
      {/* Fade mask for smooth scrolling edges */}
      <div className="absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-white/90 to-transparent pointer-events-none" />
      
      <div className="flex w-full overflow-x-auto overflow-y-visible px-1 pb-4 pt-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="flex flex-nowrap gap-2 pr-6">
          {replies.map((reply, index) => (
            <motion.button
              key={reply}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25, 
                delay: index * 0.05 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: "#1a2130", // Assuming this is close to steam-navy
                color: "#ffffff",
                borderColor: "#1a2130"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(reply)}
              className="shrink-0 whitespace-nowrap rounded-full border border-steam-navy/15 bg-steam-navy/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-steam-navy/85 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_20px_rgba(26,33,48,0.15)]"
            >
              {reply}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
