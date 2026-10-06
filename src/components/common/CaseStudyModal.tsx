import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Users, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../../types';
import { FestiveDivider } from './FestiveDivider';
import { Link } from 'react-router-dom';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenPhoto,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A0E0A]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-10 max-w-5xl w-full bg-[#FBF4E6] rounded-[2rem] border-2 border-[#C9A24B]/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-[#2B1810]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810] via-[#2B1810]/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2B1810]/80 border border-[#C9A24B]/60 text-[#FFFBF5] hover:bg-[#7A1F2B] hover:text-[#F4B63F] transition-all shadow-lg"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1 bg-[#7A1F2B]/90 rounded-full border border-[#F4B63F]/50 text-[#F4B63F]">
                {project.category} Signature Case Study
              </span>
              <h2 className="font-cormorant text-2xl sm:text-4xl md:text-5xl font-bold text-[#FFFBF5] leading-tight drop-shadow-md">
                {project.title}
              </h2>
              <p className="font-script text-xl sm:text-2xl text-[#F4B63F]">
                {project.couplesNames}
              </p>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
            {/* Quick Meta Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#F5EBD7] p-5 rounded-2xl border border-[#C9A24B]/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white text-[#7A1F2B] border border-[#C9A24B]/40 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7E6356] block tracking-wider">
                    Venue
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#2B1810]">
                    {project.venue}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white text-[#E8833A] border border-[#C9A24B]/40 shadow-sm">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7E6356] block tracking-wider">
                    Date
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#2B1810]">
                    {project.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white text-[#C9A24B] border border-[#C9A24B]/40 shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7E6356] block tracking-wider">
                    Attendance
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#2B1810]">
                    {project.guestCount}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white text-[#7A1F2B] border border-[#C9A24B]/40 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7E6356] block tracking-wider">
                    Decor Theme
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#2B1810]">
                    {project.theme}
                  </span>
                </div>
              </div>
            </div>

            {/* Story & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#2B1810]">
                  The Celebration Chronicle
                </h3>
                <p className="text-sm sm:text-base text-[#5C3820] leading-relaxed font-serif">
                  {project.story}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#C9A24B]/40 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7A1F2B]">
                  <Sparkles className="w-4 h-4" />
                  <span>Curation Highlights</span>
                </div>
                <ul className="space-y-2.5">
                  {project.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#5C3820]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 6-10 Photo Gallery Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EBDDC0] pb-3">
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-[#2B1810]">
                  Celebration Gallery ({project.photos.length} Captured Moments)
                </h3>
                <span className="text-xs text-[#7E6356] font-serif italic">
                  Click any photo to open high-res lightbox
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.photos.map((photo, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => onOpenPhoto(pIdx)}
                    className="relative group rounded-xl overflow-hidden aspect-[4/3] border border-[#C9A24B]/40 bg-[#1A0E0A] text-left"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                      <p className="text-xs font-serif italic leading-snug">{photo.caption}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-[#7A1F2B] to-[#56131C] p-6 sm:p-8 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C9A24B]/50">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-cormorant text-2xl font-bold text-[#FFFBF5]">
                  Envisioning a similar celebration for your big day?
                </h4>
                <p className="text-xs text-[#F5EBD7]/80 font-serif">
                  Reserve your auspicious Muhurtham slot with Sampradaya Events today.
                </p>
              </div>

              <Link
                to="/book-slot"
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-widest hover:brightness-105 shadow-md transition-all"
              >
                <span>Book This Event Style</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
