import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import { PortfolioProject } from '../../types';
import { Lightbox } from '../common/Lightbox';
import { CaseStudyModal } from '../common/CaseStudyModal';
import { MapPin, Eye, BookOpen, Sparkles, Heart } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<PortfolioProject | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ url: string; caption?: string }[]>([]);

  const categories = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'Weddings', label: 'Royal Weddings' },
    { id: 'Receptions', label: 'Receptions' },
    { id: 'Haldi & Mehendi', label: 'Haldi & Mehendi' },
    { id: 'Sangeet', label: 'Sangeet Nights' },
    { id: 'Corporate', label: 'Corporate Galas' },
  ];

  const filteredProjects = SITE_DATA.portfolioProjects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handleOpenLightboxForProject = (project: PortfolioProject, initialPhotoIdx = 0) => {
    const formatted = project.photos.map((p) => ({
      url: p.url,
      caption: `${project.couplesNames} • ${project.venue} — ${p.caption}`,
    }));
    setLightboxImages(formatted);
    setLightboxIndex(initialPhotoIdx);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#FFFBF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Signature Celebrations"
          scriptKicker="Curated Love Stories"
          title="Featured Events &"
          titleHighlight="Real Weddings"
          description="A visual chronicle of bespoke weddings, palace galas, and sacred Muhurthams curated across Hyderabad and royal destinations."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-[#7A1F2B] text-[#FFFBF5] border-[#C9A24B] shadow-md scale-105'
                  : 'bg-[#FBF4E6] text-[#5C3820] border-[#C9A24B]/30 hover:border-[#C9A24B]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Masonry / Grid of Signature Case Studies */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative rounded-[2.5rem] overflow-hidden bg-[#1E0D07] border border-white/10 hover:border-[#F4B63F]/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-royal transition-all duration-500 flex flex-col justify-between"
              >
                {/* Main Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0 bg-[#120703]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810] via-black/20 to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-[#7A1F2B]/90 backdrop-blur-md border border-[#F4B63F]/50 text-[10px] uppercase font-bold tracking-widest text-[#F4B63F]">
                    {project.category}
                  </div>

                  {/* Photo Count Pill */}
                  <button
                    onClick={() => handleOpenLightboxForProject(project, 0)}
                    className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B1810]/80 backdrop-blur-md border border-[#C9A24B]/40 text-white text-[11px] font-sans hover:bg-[#7A1F2B] transition-colors"
                    title="View Photos in Lightbox"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#F4B63F]" />
                    <span>{project.photos.length} Photos</span>
                  </button>
                </div>

                {/* Multi-Image Mini Celebration Strip */}
                <div className="grid grid-cols-3 gap-1 px-4 pt-2 bg-[#23120A] border-y border-[#C9A24B]/20">
                  {project.photos.slice(0, 3).map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handleOpenLightboxForProject(project, pIdx)}
                      className="relative aspect-video rounded-lg overflow-hidden border border-[#C9A24B]/30 hover:border-[#F4B63F] group/thumb transition-all"
                    >
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover/thumb:scale-115 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between text-[#FFFBF5]">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#F4B63F] font-serif">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.venue}</span>
                    </div>

                    <h3 className="font-cormorant text-2xl font-bold text-[#FFFBF5] group-hover:text-[#F4B63F] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-script text-xl text-[#F4B63F] pb-1">
                      {project.couplesNames}
                    </p>

                    <p className="text-xs text-[#F5EBD7]/80 font-serif line-clamp-2 leading-relaxed">
                      {project.story}
                    </p>
                  </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#C9A24B]/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveCaseStudy(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#3D2418] hover:bg-[#7A1F2B] text-white text-xs font-serif font-bold uppercase tracking-wider border border-[#C9A24B]/40 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#F4B63F]" />
                    <span>Case Study & Album</span>
                  </button>

                  <button
                    onClick={() => handleOpenLightboxForProject(project, 0)}
                    className="p-2.5 rounded-xl bg-[#3D2418] hover:bg-[#C9A24B] hover:text-[#2B1810] text-[#F4B63F] border border-[#C9A24B]/40 transition-colors"
                    title="Open Fullscreen Gallery"
                    aria-label="Open Lightbox"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Full Deep Dive Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onOpenPhoto={(photoIndex) => {
          if (activeCaseStudy) {
            handleOpenLightboxForProject(activeCaseStudy, photoIndex);
          }
        }}
      />

      {/* Fullscreen Photo Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
