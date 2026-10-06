import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MandalaSvg } from './MandalaSvg';

interface BrandedLoaderProps {
  onComplete?: () => void;
}

export const BrandedLoader: React.FC<BrandedLoaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant 1.8s branding animation on initial session load
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#2B1810] text-center px-4 overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7A1F2B]/35 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#F4B63F]/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-6">
            {/* Animated Mandala Container */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative p-2"
            >
              <div className="absolute inset-0 rounded-full border border-[#F4B63F]/40 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#C9A24B] via-[#F4B63F] to-[#7A1F2B] shadow-[0_0_30px_rgba(244,182,63,0.4)] overflow-hidden">
                <img
                  src="/assets/sampradaya-logo.png"
                  alt="Sampradaya Events Official Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#FFFBF5] uppercase">
                SAMPRADAYA EVENTS
              </h1>
              <p className="font-serif italic text-xs sm:text-sm text-[#F4B63F] tracking-widest">
                IDEATE • IMPROVISE • IMPRESS
              </p>
            </motion.div>

            {/* Loading Gold Line */}
            <div className="w-40 h-[1.5px] bg-[#56131C] rounded-full overflow-hidden relative mt-4">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#F4B63F] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
