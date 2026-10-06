import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';
import { MandalaWatermark } from '../common/MandalaWatermark';
import { ImageStreamHero, StreamImage } from '../ui/image-stream-hero';

// Curated authentic celebration moments from Sampradaya Events & Hyderabad Palaces
const SAMPRADAYA_HERO_STREAM: StreamImage[] = [
  {
    src: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
    alt: 'Majestic White Temple Gopuram Mandap with Rose Garlands - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
    alt: 'Traditional Venkateswara Namam & Marigold Mandap - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
    alt: 'Royal Gold Pillar Stage with Illuminated Lord Ganesha - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_white_lotus_stage.png',
    alt: 'Cascading Jasmine Strings & Grand White Lotus Stage - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
    alt: 'Traditional Yellow Chevron Floral Backdrop & White Peacock - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_floral_elephant_traditional.png',
    alt: 'Handcrafted Floral Elephant & Banana Leaf Traditional Decor - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_lakeside_pink_mandap.png',
    alt: 'Lakeside Floral Round Mandap - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_couple_dance.png',
    alt: 'Joyful Couple Dance & Sangeet Celebrations - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_enchanted_reception_stage.png',
    alt: 'Enchanted Forest Reception Ballroom Scenography - Sampradaya Events',
  },
  {
    src: '/assets/instagram/sampradaya_green_canopy_walkway.png',
    alt: 'Mint Green Canopy Walkway with Temple Bells - Sampradaya Events',
  },
];

export const HeroSection: React.FC = () => {
  const taglineWords = ['IDEATE', '•', 'IMPROVISE', '•', 'IMPRESS'];

  return (
    <section className="relative w-full overflow-hidden bg-[#160703] flex flex-col items-center justify-between text-center pt-16">
      {/* 3D Infinity Image Stream Corridor Background */}
      <ImageStreamHero
        images={SAMPRADAYA_HERO_STREAM}
        speed={20}
        cards={10}
        axis={50}
        className="w-full h-[100vh] min-h-[780px] max-h-[1050px] bg-gradient-to-b from-[#2B1006] via-[#160703] to-[#0D0402] shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] border-b-2 border-[#C9A24B]/50"
      >
        {/* Ambient Warm Temple Diya Lighting & Gold Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#F4B63F]/16 rounded-full blur-[140px]" />
          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#7A1F2B]/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#E8833A]/20 rounded-full blur-[120px]" />
        </div>

        {/* Rotating Background Mandala Watermark */}
        <MandalaWatermark
          size={700}
          opacity={0.07}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Hero Foreground Content Overlaid on 3D Corridor */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center py-8 sm:py-12 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
          {/* Top Royal Sovereign Badge */}
          <div className="space-y-2 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#2B1207]/95 backdrop-blur-md border border-[#F4B63F]/70 text-[#F4B63F] text-xs sm:text-sm font-serif uppercase tracking-[0.22em] shadow-[0_4px_20px_rgba(244,182,63,0.25)] animate-in fade-in duration-700">
              <Crown className="w-4 h-4 text-[#F4B63F] animate-pulse" />
              <span>The Royal Wedding & Celebration Curators of Hyderabad</span>
            </div>
          </div>

          {/* Central Luxury Frosted Celebration Pavilion Card */}
          <div className="space-y-6 max-w-2xl w-full backdrop-blur-2xl bg-[#140602]/85 px-6 sm:px-10 py-10 sm:py-14 rounded-[3rem] border border-[#F4B63F]/35 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(244,182,63,0.18)] relative overflow-hidden pointer-events-auto">
            <div className="space-y-4">
              <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-[#FFFBF5] tracking-tight leading-[1.12] drop-shadow-2xl">
                Creating{' '}
                <span className="italic bg-gradient-to-r from-[#F4B63F] via-[#FFE8B4] to-[#C9A24B] bg-clip-text text-transparent">
                  Everlasting Impact
                </span>{' '}
                on Your BIG Day.
              </h1>

              {/* Tagline: IDEATE • IMPROVISE • IMPRESS */}
              <div className="flex items-center justify-center flex-wrap gap-2.5 py-1">
                {taglineWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className={`font-serif tracking-[0.22em] text-xs sm:text-sm md:text-base font-bold ${
                      word === '•'
                        ? 'text-[#E8833A]'
                        : 'text-[#F4B63F] drop-shadow-[0_2px_10px_rgba(244,182,63,0.5)]'
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#F5EBD7]/90 max-w-lg mx-auto font-serif italic leading-relaxed drop-shadow-md">
                From palatial Falaknuma Muhurthams to electrifying star sangeet concerts, we orchestrate sacred Vedic traditions with cinematic luxury.
              </p>
            </div>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
};
