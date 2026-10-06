import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Lightbox } from '../common/Lightbox';
import { Sparkles, Eye, Heart, Camera, Crown, Flame, Music, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CelebrationMoment {
  id: string;
  title: string;
  subtitle: string;
  venue: string;
  category: string;
  image: string;
  size: 'large' | 'tall' | 'wide' | 'standard';
  badge: string;
  guestVibe: string;
  likes: string;
}

const CELEBRATION_MOMENTS: CelebrationMoment[] = [
  {
    id: 'moment-1',
    title: 'The Royal White Gopuram Mandapam',
    subtitle: 'Carved South Indian Temple Sanctum with Fresh Red Rose Garlands & Auspicious Plantains',
    venue: 'Hyderabad Palace & Heritage Convention Grounds',
    category: 'Vedic Muhurtham Sanctum',
    image: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
    size: 'large',
    badge: 'Temple Architecture',
    guestVibe: 'Divine Vedic Chants & Auspicious Sanctum',
    likes: '42.8K',
  },
  {
    id: 'moment-2',
    title: 'Sacred Venkateswara Tirupati Sanctum',
    subtitle: 'Illuminated Tirupati Namam, Cascading Marigold Garlands & Traditional Brass Diya Glow',
    venue: 'Royal Wedding Arena, Hyderabad',
    category: 'Devotional Muhurtham',
    image: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
    size: 'tall',
    badge: 'Sacred Namam Sanctum',
    guestVibe: 'Spiritual Grandeur & Golden Warmth',
    likes: '39.4K',
  },
  {
    id: 'moment-3',
    title: 'Grand White Lotus Reception Stage',
    subtitle: 'Majestic Carved Lotus Centerpiece with Cascading Jasmine & Exotic Pink Orchid Bloom',
    venue: 'Hyderabad Luxury Convention Center',
    category: 'Royal Reception Scenography',
    image: '/assets/instagram/sampradaya_white_lotus_stage.png',
    size: 'wide',
    badge: 'Lotus Elegance',
    guestVibe: 'Regal Orchid Florals & Soft Starlight',
    likes: '35.9K',
  },
  {
    id: 'moment-4',
    title: 'Illuminated Gold Ganesha Sanctuary',
    subtitle: 'Gilded Royal Pillars, Sacred Floral Ganesha Motif & Warm Festive Chandeliers',
    venue: 'Hyderabad Heritage Palace',
    category: 'Auspicious Stage Decor',
    image: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
    size: 'standard',
    badge: 'Divine Ganesha',
    guestVibe: 'Auspicious Blessings & Golden Radiance',
    likes: '28.7K',
  },
  {
    id: 'moment-5',
    title: 'Auspicious Floral Peacock Ceremony',
    subtitle: 'Hand-Woven White Floral Peacock Artistry & Traditional Chevron Yellow Backdrop',
    venue: 'Heritage Courtyard, Hyderabad',
    category: 'Pellikuthuru & Traditional Rites',
    image: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
    size: 'tall',
    badge: 'Floral Craftsmanship',
    guestVibe: 'Joyous Family Festivities',
    likes: '31.3K',
  },
];

export const CelebrationBentoGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = CELEBRATION_MOMENTS.map((m) => ({
    url: m.image,
    caption: `${m.title} • ${m.venue} (${m.subtitle})`,
  }));

  return (
    <section className="relative py-28 bg-[#180C07] text-[#FFFBF5] overflow-hidden border-y-2 border-[#C9A24B]/40">
      {/* Ambient Lighting & Royal Filigree Watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[#F4B63F]/10 rounded-full blur-[140px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1F2B]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8833A]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B1810]/90 border border-[#C9A24B]/70 text-[#F4B63F] text-xs font-serif uppercase tracking-[0.2em] shadow-royal">
            <Sparkles className="w-3.5 h-3.5 text-[#E8833A]" />
            <span>Grand Festive Visual Archive</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFFBF5] tracking-tight leading-tight">
            Immortalizing Every Sacred{' '}
            <span className="italic bg-gradient-to-r from-[#F4B63F] via-[#FFE8B4] to-[#C9A24B] bg-clip-text text-transparent">
              Celebration Angle
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#F5EBD7]/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
            From the fragrance of sacred Agni to the euphoria of yellow flower petal showers, explore the multi-dimensional grandeur created by Sampradaya Events across Hyderabad.
          </p>
        </div>

        {/* Ultra-Luxurious Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {/* Item 1: Large Featured Mandap (Span 7 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => handleOpenLightbox(0)}
            onMouseEnter={() => setActiveHoverId(CELEBRATION_MOMENTS[0].id)}
            onMouseLeave={() => setActiveHoverId(null)}
            className="group md:col-span-7 md:row-span-2 relative rounded-[3rem] overflow-hidden border border-white/10 hover:border-[#F4B63F]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] cursor-pointer bg-[#2B1810]"
          >
            <img
              src={CELEBRATION_MOMENTS[0].image}
              alt={CELEBRATION_MOMENTS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-[#140803]/40 to-transparent" />

            {/* Top Floating Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="px-4 py-1.5 rounded-full bg-[#7A1F2B]/90 backdrop-blur-md border border-[#F4B63F]/40 text-xs font-serif font-bold uppercase tracking-wider text-[#F4B63F] shadow-lg">
                👑 {CELEBRATION_MOMENTS[0].badge}
              </span>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0D05]/80 backdrop-blur-md border border-white/15 text-xs text-[#FFFBF5]">
                <Heart className="w-3.5 h-3.5 text-[#E8833A] fill-[#E8833A]" />
                <span className="font-semibold">{CELEBRATION_MOMENTS[0].likes}</span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#F4B63F] block font-bold">
                {CELEBRATION_MOMENTS[0].category} • {CELEBRATION_MOMENTS[0].venue}
              </span>
              <h3 className="font-cormorant text-2xl sm:text-4xl font-bold text-[#FFFBF5] leading-tight group-hover:text-[#F4B63F] transition-colors">
                {CELEBRATION_MOMENTS[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBD7]/80 font-serif italic line-clamp-2">
                {CELEBRATION_MOMENTS[0].subtitle}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A24B] font-semibold">
                <Eye className="w-4 h-4" />
                <span>Click to View Full Palace Scenography Lightbox</span>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Tall Haldi Euphoria (Span 5 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onClick={() => handleOpenLightbox(1)}
            onMouseEnter={() => setActiveHoverId(CELEBRATION_MOMENTS[1].id)}
            onMouseLeave={() => setActiveHoverId(null)}
            className="group md:col-span-5 md:row-span-2 relative rounded-[3rem] overflow-hidden border border-white/10 hover:border-[#F4B63F]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] cursor-pointer bg-[#2B1810]"
          >
            <img
              src={CELEBRATION_MOMENTS[1].image}
              alt={CELEBRATION_MOMENTS[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-[#140803]/40 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="px-4 py-1.5 rounded-full bg-[#7A1F2B]/90 backdrop-blur-md border border-[#F4B63F]/60 text-xs font-serif font-bold uppercase tracking-wider text-[#F4B63F] shadow-lg">
                🛕 {CELEBRATION_MOMENTS[1].badge}
              </span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2B1810]/80 backdrop-blur-md border border-[#C9A24B]/40 text-xs text-[#FFFBF5]">
                <Heart className="w-3.5 h-3.5 text-[#F4B63F] fill-[#F4B63F]" />
                <span className="font-semibold">{CELEBRATION_MOMENTS[1].likes}</span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#F4B63F] block font-bold">
                {CELEBRATION_MOMENTS[1].category}
              </span>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#FFFBF5] leading-snug group-hover:text-[#F4B63F] transition-colors">
                {CELEBRATION_MOMENTS[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBD7]/80 font-serif italic">
                {CELEBRATION_MOMENTS[1].subtitle}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A24B] font-semibold">
                <Eye className="w-4 h-4" />
                <span>View Vedic Architecture Lightbox</span>
              </div>
            </div>
          </motion.div>

          {/* Item 3: Wide Ballroom Gala (Span 6 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onClick={() => handleOpenLightbox(2)}
            className="group md:col-span-6 relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#F4B63F]/40 shadow-xl cursor-pointer bg-[#2B1810]"
          >
            <img
              src={CELEBRATION_MOMENTS[2].image}
              alt={CELEBRATION_MOMENTS[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-black/40 to-transparent" />

            <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-[#7A1F2B]/90 backdrop-blur-md border border-[#F4B63F]/40 text-[11px] font-serif uppercase tracking-wider text-[#F4B63F]">
              ✨ {CELEBRATION_MOMENTS[2].badge}
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-10">
              <h4 className="font-cormorant text-xl sm:text-2xl font-bold text-[#FFFBF5] group-hover:text-[#F4B63F] transition-colors">
                {CELEBRATION_MOMENTS[2].title}
              </h4>
              <p className="text-xs text-[#F5EBD7]/80 font-serif italic">
                {CELEBRATION_MOMENTS[2].venue}
              </p>
            </div>
          </motion.div>

          {/* Item 4: Lotus Varmala (Span 3 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onClick={() => handleOpenLightbox(4)}
            className="group md:col-span-3 relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#F4B63F]/40 shadow-xl cursor-pointer bg-[#2B1810]"
          >
            <img
              src={CELEBRATION_MOMENTS[4].image}
              alt={CELEBRATION_MOMENTS[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-black/40 to-transparent" />

            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#1C0D05]/90 backdrop-blur-md border border-white/15 text-[10px] font-serif uppercase tracking-wider text-[#F4B63F]">
              🪷 {CELEBRATION_MOMENTS[4].badge}
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h4 className="font-cormorant text-lg sm:text-xl font-bold text-[#FFFBF5] group-hover:text-[#F4B63F] transition-colors">
                {CELEBRATION_MOMENTS[4].title}
              </h4>
              <p className="text-[11px] text-[#F5EBD7]/80 font-serif italic truncate">
                {CELEBRATION_MOMENTS[4].subtitle}
              </p>
            </div>
          </motion.div>

          {/* Item 5: Stone Temple Sanctum (Span 3 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={() => handleOpenLightbox(3)}
            className="group md:col-span-3 relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#F4B63F]/40 shadow-xl cursor-pointer bg-[#2B1810]"
          >
            <img
              src={CELEBRATION_MOMENTS[3].image}
              alt={CELEBRATION_MOMENTS[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-black/40 to-transparent" />

            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#1C0D05]/90 backdrop-blur-md border border-white/15 text-[10px] font-serif uppercase tracking-wider text-[#F4B63F]">
              🪔 {CELEBRATION_MOMENTS[3].badge}
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h4 className="font-cormorant text-lg sm:text-xl font-bold text-[#FFFBF5] group-hover:text-[#F4B63F] transition-colors">
                {CELEBRATION_MOMENTS[3].title}
              </h4>
              <p className="text-[11px] text-[#F5EBD7]/80 font-serif italic truncate">
                {CELEBRATION_MOMENTS[3].subtitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Booking & Consultation Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] bg-gradient-to-r from-[#2B1810] via-[#1C0D05] to-[#2B1810] border border-[#F4B63F]/30 shadow-royal">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#FFFBF5]">
              Ready to Design Your Sovereign Celebration?
            </h4>
            <p className="text-xs sm:text-sm text-[#F5EBD7]/80 font-serif italic">
              Reserve your auspicious Muhurtham dates with Hyderabad’s premier wedding curators.
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C9A24B] via-[#F4B63F] to-[#E8833A] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-gold transition-all duration-300 shrink-0"
          >
            <span>Explore All 10 Event Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox for Multi-Image Fullscreen View */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};
