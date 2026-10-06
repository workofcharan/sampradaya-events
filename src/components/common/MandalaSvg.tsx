import React from 'react';

interface MandalaSvgProps {
  className?: string;
  size?: number | string;
  isAnimated?: boolean;
}

export const MandalaSvg: React.FC<MandalaSvgProps> = ({
  className = '',
  size = 64,
  isAnimated = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className} ${isAnimated ? 'animate-spin-slow' : ''}`}
      aria-hidden="true"
    >
      <defs>
        {/* Radial Gold/Saffron Gradient */}
        <radialGradient id="mandalaCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4B63F" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#E8833A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7A1F2B" stopOpacity="1" />
        </radialGradient>

        <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4B63F" />
          <stop offset="50%" stopColor="#FFF8ED" />
          <stop offset="100%" stopColor="#C9A24B" />
        </linearGradient>

        <linearGradient id="vermilionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#7A1F2B" />
        </linearGradient>
      </defs>

      {/* Outer Decorative Ring */}
      <circle
        cx="100"
        cy="100"
        r="94"
        stroke="url(#goldFiligree)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.8"
      />
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="#7A1F2B"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* 12 Outer Petals (Deep Maroon & Vermilion) */}
      <g opacity="0.95">
        {[...Array(12)].map((_, i) => {
          const angle = i * 30;
          return (
            <path
              key={`outer-petal-${i}`}
              d="M100 12 C106 32, 118 45, 124 64 C116 68, 108 72, 100 74 C92 72, 84 68, 76 64 C82 45, 94 32, 100 12 Z"
              fill="url(#vermilionGrad)"
              stroke="#F4B63F"
              strokeWidth="0.8"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </g>

      {/* 12 Middle Petals (Saffron & Marigold Orange) */}
      <g opacity="0.95">
        {[...Array(12)].map((_, i) => {
          const angle = i * 30 + 15;
          return (
            <path
              key={`mid-petal-${i}`}
              d="M100 32 C104 46, 114 55, 118 70 C110 73, 105 76, 100 77 C95 76, 90 73, 82 70 C86 55, 96 46, 100 32 Z"
              fill="#E8833A"
              stroke="#FFF8ED"
              strokeWidth="0.6"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </g>

      {/* 8 Inner Marigold Golden Petals */}
      <g>
        {[...Array(8)].map((_, i) => {
          const angle = i * 45;
          return (
            <path
              key={`inner-petal-${i}`}
              d="M100 52 C103 62, 110 68, 112 80 C106 82, 103 84, 100 85 C97 84, 94 82, 88 80 C90 68, 97 62, 100 52 Z"
              fill="#F4B63F"
              stroke="#7A1F2B"
              strokeWidth="0.5"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </g>

      {/* Central Radiance Ring */}
      <circle
        cx="100"
        cy="100"
        r="28"
        fill="url(#mandalaCenterGlow)"
        stroke="url(#goldFiligree)"
        strokeWidth="1.5"
      />

      {/* Sacred Center Lotus / Star */}
      <circle cx="100" cy="100" r="14" fill="#7A1F2B" />
      <circle cx="100" cy="100" r="7" fill="#F4B63F" />
      <circle cx="100" cy="100" r="3" fill="#FFF8ED" />

      {/* Small Outer Dots */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cx = 100 + 82 * Math.cos(angle);
        const cy = 100 + 82 * Math.sin(angle);
        return (
          <circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r="2"
            fill="#F4B63F"
          />
        );
      })}
    </svg>
  );
};
