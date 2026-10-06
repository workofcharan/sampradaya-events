import React from 'react';

export const FestiveToranamHeader: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden pointer-events-none z-30 select-none" aria-hidden="true">
      {/* Repeating Marigold and Mango Leaf Garland SVG */}
      <div className="w-full flex items-center justify-around h-7 sm:h-9 bg-gradient-to-r from-[#5B0E18] via-[#7A1F2B] to-[#5B0E18] border-b border-[#F4B63F]/50 shadow-md">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-1 sm:space-x-2">
            {/* Mango Leaf Motif */}
            <span className="text-[10px] sm:text-xs text-emerald-400 transform -rotate-12 drop-shadow">🍃</span>
            {/* Orange Marigold */}
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#F4B63F] to-[#E8833A] inline-block shadow-[0_0_6px_rgba(244,182,63,0.8)]" />
            {/* Yellow Marigold */}
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-[#FFE8B4] to-[#F4B63F] inline-block shadow-[0_0_6px_rgba(255,232,180,0.8)]" />
            {/* Brass Bell Motif */}
            {i % 2 === 0 && (
              <span className="text-[10px] sm:text-xs text-[#F4B63F] drop-shadow animate-pulse">🔔</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
