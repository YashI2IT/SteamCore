import { X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import CursorTrackingRobot from './CursorTrackingRobot';

export default function ChatHeader({ toggleMinimize, toggleChat }) {
  return (
    <div className="flex items-center justify-between border-b border-white/20 bg-[#1c1c1c]/95 backdrop-blur-xl p-4 text-white">
      <div className="flex items-center gap-3">
        <CursorTrackingRobot size={42} />
        <div>
          <h3 className="font-semibold leading-none tracking-wide text-white">SteamCore AI</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-xs text-white/70">Engineering Consultant</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-steam-green/20 px-2 py-0.5 text-[10px] font-medium text-steam-green">
              <span className="h-1.5 w-1.5 rounded-full bg-steam-green animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMinimize}
          className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={toggleChat}
          className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
