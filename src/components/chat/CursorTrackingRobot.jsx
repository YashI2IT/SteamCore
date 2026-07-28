import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorTrackingRobot({ size = 40 }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse position from -1 to 1 based on screen center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Max translation for the pupils - restricted to prevent clipping
  const maxMoveX = size * 0.08;
  const maxMoveY = size * 0.06;

  return (
    <div 
      className="relative flex shrink-0 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden border border-gray-100"
      style={{ width: size, height: size }}
    >
      {/* Robot Head / Visor */}
      <div 
        className="relative bg-[#1c1e1c] flex items-center justify-center overflow-hidden rounded-full shadow-inner"
        style={{ width: size * 0.65, height: size * 0.42 }}
      >
        {/* Glow effect in the visor */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        
        {/* Pupils */}
        <motion.div
          animate={{
            x: mousePosition.x * maxMoveX,
            y: mousePosition.y * maxMoveY
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="absolute flex items-center justify-center gap-[12%]"
          style={{ width: '100%' }}
        >
          <div 
            className="bg-[#8ec254] rounded-full shadow-[0_0_8px_rgba(142,194,84,0.9)]" 
            style={{ width: size * 0.14, height: size * 0.14 }}
          />
          <div 
            className="bg-[#8ec254] rounded-full shadow-[0_0_8px_rgba(142,194,84,0.9)]" 
            style={{ width: size * 0.14, height: size * 0.14 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
