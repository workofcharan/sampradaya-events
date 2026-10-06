import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; caption?: string; tag?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  const currentImage = images[currentIndex] || images[0];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-[#1A0E0A]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between z-20 pb-4 border-b border-[#C9A24B]/30 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <span className="text-xs font-serif text-[#F4B63F] uppercase tracking-widest">
              Sampradaya Moments
            </span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-xs text-[#FFFBF5]/80 font-sans">
              {currentIndex + 1} of {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#3D2418] border border-[#C9A24B]/50 text-[#FFFBF5] hover:text-[#F4B63F] hover:bg-[#56131C] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Stage & Image */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Navigation Prev Button */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-[#2B1810]/80 border border-[#C9A24B]/50 text-[#FFFBF5] hover:bg-[#7A1F2B] hover:text-[#F4B63F] transition-all shadow-royal"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[75vh] flex items-center justify-center"
          >
            <img
              src={currentImage?.url}
              alt={currentImage?.caption || 'Celebration view'}
              className="max-h-[72vh] max-w-full object-contain rounded-2xl border-2 border-[#C9A24B]/40 shadow-2xl"
            />
          </motion.div>

          {/* Navigation Next Button */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-[#2B1810]/80 border border-[#C9A24B]/50 text-[#FFFBF5] hover:bg-[#7A1F2B] hover:text-[#F4B63F] transition-all shadow-royal"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption and Thumbnails */}
        <div className="max-w-4xl mx-auto w-full text-center space-y-3 pt-2">
          {currentImage?.caption && (
            <p className="text-sm sm:text-base font-serif italic text-[#FFFBF5] drop-shadow-md">
              {currentImage.caption}
            </p>
          )}

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 scrollbar-none max-w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 transition-all border ${
                    idx === currentIndex
                      ? 'border-[#F4B63F] scale-110 shadow-[0_0_10px_#F4B63F]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
