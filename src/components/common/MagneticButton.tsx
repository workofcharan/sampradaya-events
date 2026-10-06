import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'maroon';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'gold',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * 0.2;
    const y = (clientY - centerY) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-serif font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 select-none overflow-hidden';

  const variantStyles = {
    gold: 'bg-gradient-to-r from-[#C9A24B] via-[#F4B63F] to-[#C9A24B] text-[#2B1810] shadow-[0_4px_20px_rgba(201,162,75,0.4)] hover:shadow-[0_8px_30px_rgba(201,162,75,0.6)] hover:brightness-105 border border-[#FFF8ED]/50',
    outline:
      'bg-transparent border-2 border-[#C9A24B] text-[#FFFBF5] hover:bg-[#C9A24B]/15 hover:border-[#F4B63F] shadow-[0_4px_15px_rgba(0,0,0,0.3)]',
    maroon:
      'bg-gradient-to-r from-[#7A1F2B] via-[#942B39] to-[#7A1F2B] text-[#FFFBF5] border border-[#C9A24B]/60 shadow-[0_4px_20px_rgba(122,31,43,0.4)] hover:shadow-[0_8px_30px_rgba(122,31,43,0.6)]',
  }[variant];

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {/* Subtle Inner Glow on Hover */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
