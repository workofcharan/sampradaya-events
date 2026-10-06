import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import { Star, ChevronLeft, ChevronRight, Quote, Heart, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = SITE_DATA.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-paper-texture overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Words of Gratitude"
          scriptKicker="Eternal Bonds"
          title="From Our Beloved"
          titleHighlight="Couples & Families"
          description="Read how our dedication to ritual authenticity and luxury management created everlasting memories for families across Hyderabad."
        />

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white rounded-[2.5rem] border-2 border-[#C9A24B]/40 p-8 sm:p-12 lg:p-16 shadow-festive relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="corner-ornament-tl" />
              <div className="corner-ornament-tr" />
              <div className="corner-ornament-bl" />
              <div className="corner-ornament-br" />

              {/* Left Column: Couple Photo in Arched Frame */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="relative w-44 sm:w-52 aspect-[3/4] arch-frame overflow-hidden border-3 border-[#C9A24B] shadow-royal bg-[#2B1810]">
                  <img
                    src={current.coupleImage}
                    alt={current.names}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810]/60 via-transparent to-transparent" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-cormorant font-bold text-xl text-[#2B1810]">
                    {current.names}
                  </h4>
                  <div className="flex items-center justify-center gap-1 text-xs text-[#7A1F2B] font-serif">
                    <MapPin className="w-3 h-3 text-[#E8833A]" />
                    <span>{current.venue}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Emotional Quote & Stars */}
              <div className="lg:col-span-8 space-y-6">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, rIdx) => (
                    <Star
                      key={rIdx}
                      className="w-5 h-5 fill-[#F4B63F] text-[#F4B63F]"
                    />
                  ))}
                  <span className="ml-2 text-xs uppercase font-bold tracking-widest text-[#7E6356]">
                    5.0 Verified Family Review
                  </span>
                </div>

                <p className="font-serif italic text-base sm:text-xl lg:text-2xl text-[#2B1810] leading-relaxed">
                  {current.quote}
                </p>

                <div className="pt-4 border-t border-[#F5EBD7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#7E6356] font-sans">
                  <span>{current.eventType} • {current.date}</span>
                  <span className="font-serif italic text-[#7A1F2B]">
                    "{current.storySnippet}"
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev / Next Buttons */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-[#C9A24B]/50 text-[#2B1810] hover:bg-[#7A1F2B] hover:text-[#FFFBF5] transition-all shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 transition-all rounded-full ${
                    idx === currentIndex
                      ? 'w-6 bg-[#7A1F2B]'
                      : 'w-2 bg-[#C9A24B]/40 hover:bg-[#C9A24B]'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-[#C9A24B]/50 text-[#2B1810] hover:bg-[#7A1F2B] hover:text-[#FFFBF5] transition-all shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
