import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MandalaSvg } from './MandalaSvg';

interface MandalaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  variant?: 'dark' | 'light' | 'gold' | 'maroon';
  textClassName?: string;
  className?: string;
  useImage?: boolean;
}

export const MandalaLogo: React.FC<MandalaLogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = false,
  variant = 'dark',
  textClassName = '',
  className = '',
  useImage = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const pixelSizeMap = {
    sm: 36,
    md: 48,
    lg: 60,
    xl: 82,
  };

  const titleSizeMap = {
    sm: 'text-sm tracking-wider',
    md: 'text-base sm:text-lg tracking-widest',
    lg: 'text-xl sm:text-2xl tracking-widest',
    xl: 'text-2xl sm:text-3xl tracking-widest',
  };

  const brandTextColor =
    variant === 'light'
      ? 'text-[#FFFBF5]'
      : variant === 'gold'
      ? 'text-[#F4B63F]'
      : variant === 'maroon'
      ? 'text-[#7A1F2B]'
      : 'text-[#2B1810]';

  const subTextColor =
    variant === 'light'
      ? 'text-[#F4B63F]'
      : variant === 'gold'
      ? 'text-[#FFF8ED]'
      : 'text-[#7A1F2B]';

  const px = pixelSizeMap[size];

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3.5 group transition-transform duration-300 ${className}`}
      aria-label="Sampradaya Events Home"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-[#F4B63F]/25 rounded-full blur-md group-hover:bg-[#F4B63F]/45 transition-colors" />
        {useImage && !imgError ? (
          <div
            style={{ width: px, height: px }}
            className="relative z-10 rounded-full p-[2px] bg-gradient-to-tr from-[#C9A24B] via-[#F4B63F] to-[#7A1F2B] shadow-[0_2px_10px_rgba(244,182,63,0.35)] group-hover:scale-105 transition-transform duration-500 overflow-hidden bg-white/10"
          >
            <img
              src="/assets/sampradaya-logo.png"
              alt="Sampradaya Events Official Logo"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ) : (
          <MandalaSvg
            size={px}
            className="relative z-10 transition-transform duration-700 group-hover:rotate-45"
          />
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-cormorant font-bold uppercase leading-tight tracking-[0.16em] ${brandTextColor} ${titleSizeMap[size]} ${textClassName}`}
          >
            SAMPRADAYA
          </span>
          <span
            className={`font-sans text-[9px] sm:text-[10px] tracking-[0.28em] font-semibold uppercase ${subTextColor} mt-0.5`}
          >
            EVENTS • HYDERABAD
          </span>
          {showTagline && (
            <span className="font-serif italic text-[11px] text-[#C9A24B] tracking-normal mt-0.5">
              Ideate • Improvise • Impress
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
