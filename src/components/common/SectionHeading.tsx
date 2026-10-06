import React from 'react';
import { motion } from 'framer-motion';
import { FestiveDivider } from './FestiveDivider';

interface SectionHeadingProps {
  badge?: string;
  scriptKicker?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'center' | 'left' | 'right';
  theme?: 'light' | 'dark' | 'maroon';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  scriptKicker,
  title,
  titleHighlight,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark' || theme === 'maroon';

  const alignClasses =
    align === 'center'
      ? 'text-center items-center mx-auto'
      : align === 'right'
      ? 'text-right items-end ml-auto'
      : 'text-left items-start mr-auto';

  const badgeTheme =
    theme === 'maroon'
      ? 'bg-[#56131C] text-[#F4B63F] border-[#C9A24B]/50'
      : theme === 'dark'
      ? 'bg-[#3D2418] text-[#F4B63F] border-[#C9A24B]/40'
      : 'bg-[#FDEDEC] text-[#7A1F2B] border-[#F5B7B1]';

  const titleColor = isDark ? 'text-[#FFFBF5]' : 'text-[#2B1810]';
  const descColor = isDark ? 'text-[#F5EBD7]/85' : 'text-[#7E6356]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col space-y-3 max-w-3xl ${alignClasses} ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full border shadow-sm ${badgeTheme}`}
        >
          <span className="text-[#C9A24B] animate-pulse">✦</span>
          <span>{badge}</span>
          <span className="text-[#C9A24B] animate-pulse">✦</span>
        </motion.span>
      )}

      {scriptKicker && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-script text-2xl sm:text-3xl md:text-4xl text-[#C9A24B] leading-none pt-1"
        >
          {scriptKicker}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] ${titleColor}`}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="italic bg-gradient-to-r from-[#F4B63F] via-[#E8833A] to-[#C9A24B] bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0.7 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="w-full flex justify-center"
      >
        <FestiveDivider variant={isDark ? 'ivory' : 'gold'} size="md" />
      </motion.div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-sm sm:text-base md:text-lg font-serif italic leading-relaxed pt-1 ${descColor}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
