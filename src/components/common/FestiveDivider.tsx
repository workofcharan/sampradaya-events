import React from 'react';

interface FestiveDividerProps {
  variant?: 'gold' | 'maroon' | 'saffron' | 'ivory';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FestiveDivider: React.FC<FestiveDividerProps> = ({
  variant = 'gold',
  className = '',
  size = 'md',
}) => {
  const lineWidth =
    size === 'sm' ? 'w-12 sm:w-20' : size === 'lg' ? 'w-24 sm:w-44' : 'w-16 sm:w-28';

  const colorConfig = {
    gold: {
      line: 'from-transparent via-[#C9A24B] to-transparent',
      symbol: 'text-[#C9A24B]',
      dot: 'bg-[#F4B63F]',
    },
    maroon: {
      line: 'from-transparent via-[#7A1F2B] to-transparent',
      symbol: 'text-[#7A1F2B]',
      dot: 'bg-[#C0392B]',
    },
    saffron: {
      line: 'from-transparent via-[#E8833A] to-transparent',
      symbol: 'text-[#E8833A]',
      dot: 'bg-[#F4B63F]',
    },
    ivory: {
      line: 'from-transparent via-[#FFF8ED]/60 to-transparent',
      symbol: 'text-[#F4B63F]',
      dot: 'bg-[#FFF8ED]',
    },
  }[variant];

  return (
    <div
      className={`flex items-center justify-center gap-3 py-2 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className={`h-[1px] ${lineWidth} bg-gradient-to-r ${colorConfig.line}`} />
      
      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${colorConfig.dot}`} />
        <span className={`text-xs sm:text-sm font-serif ${colorConfig.symbol}`}>❖ ✦ ❖</span>
        <span className={`w-1.5 h-1.5 rounded-full ${colorConfig.dot}`} />
      </div>

      <div className={`h-[1px] ${lineWidth} bg-gradient-to-l ${colorConfig.line}`} />
    </div>
  );
};
