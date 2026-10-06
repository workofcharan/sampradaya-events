import React from 'react';
import { MandalaSvg } from './MandalaSvg';

interface MandalaWatermarkProps {
  className?: string;
  size?: number | string;
  opacity?: number;
  reverse?: boolean;
}

export const MandalaWatermark: React.FC<MandalaWatermarkProps> = ({
  className = '',
  size = 400,
  opacity = 0.05,
  reverse = false,
}) => {
  return (
    <div
      className={`pointer-events-none absolute select-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className={reverse ? 'animate-spin-reverse-slow' : 'animate-spin-slow'}>
        <MandalaSvg size={size} />
      </div>
    </div>
  );
};
