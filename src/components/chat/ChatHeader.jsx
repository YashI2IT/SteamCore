import { X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import CursorTrackingRobot from './CursorTrackingRobot';

export default function ChatHeader({ toggleMinimize, toggleChat }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4 text-steam-navy">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="text-[17px] font-bold text-steam-navy">S</span>
        </div>
        <div>
          <h3 className="font-semibold leading-none tracking-wide text-steam-navy">SteamCore AI</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-[11px] text-steam-body/70">Engineering Consultant</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600 border border-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={toggleMinimize}
          className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={toggleChat}
          className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
