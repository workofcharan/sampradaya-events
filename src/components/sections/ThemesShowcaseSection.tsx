import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import { DecorTheme } from '../../types';
import { Sparkles, Palette, Layers, RefreshCw, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThemesShowcaseSection: React.FC = () => {
  const [activeThemeId, setActiveThemeId] = useState<'traditional' | 'modern'>('traditional');
  const [showAfterOnly, setShowAfterOnly] = useState(true);

  const activeTheme =
    SITE_DATA.decorThemes.find((t) => t.id === activeThemeId) || SITE_DATA.decorThemes[0];

  return (
    <section id="themes" className="relative py-24 bg-paper-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Scenography & Moodboards"
          scriptKicker="Bespoke Aesthetics"
          title="Themes & Decor"
          titleHighlight="Showcase"
          description="Explore our signature scenography collections: from sacred temple heritage to glamorous modern ballrooms."
        />

        {/* Theme Switcher Tabs */}
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto p-1.5 rounded-full bg-[#EBDDC0] border border-[#C9A24B]/40 shadow-inner">
          <button
            onClick={() => setActiveThemeId('traditional')}
            className={`flex-1 py-3 px-6 rounded-full font-serif font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              activeThemeId === 'traditional'
                ? 'bg-[#7A1F2B] text-[#FFFBF5] shadow-md scale-102'
                : 'text-[#5C3820] hover:text-[#7A1F2B]'
            }`}
          >
            Traditional Vedic
          </button>

          <button
            onClick={() => setActiveThemeId('modern')}
            className={`flex-1 py-3 px-6 rounded-full font-serif font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              activeThemeId === 'modern'
                ? 'bg-[#7A1F2B] text-[#FFFBF5] shadow-md scale-102'
                : 'text-[#5C3820] hover:text-[#7A1F2B]'
            }`}
          >
            Modern Royal Luxe
          </button>
        </div>

        {/* Active Theme Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTheme.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Header & Palette Bar */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#C9A24B]/40 shadow-festive space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F5EBD7] pb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#7A1F2B]">
                    Signature Collection
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#2B1810]">
                    {activeTheme.name}
                  </h3>
                  <p className="font-serif italic text-sm text-[#7E6356] mt-1">
                    {activeTheme.tagline}
                  </p>
                </div>

                {/* Color Palette Swatches */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7E6356] block">
                    Curated Color Palette:
                  </span>
                  <div className="flex items-center gap-2">
                    {activeTheme.palette.map((swatch, sIdx) => (
                      <div
                        key={sIdx}
                        className="group relative flex flex-col items-center cursor-pointer"
                        title={`${swatch.name} (${swatch.hex})`}
                      >
                        <div
                          className="w-8 h-8 rounded-full border-2 border-[#FFFBF5] shadow-md group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <span className="text-[9px] font-sans font-semibold text-[#5C3820] mt-1 hidden sm:block">
                          {swatch.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Elements & Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm sm:text-base text-[#5C3820] font-serif leading-relaxed">
                    {activeTheme.description}
                  </p>
                  
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#7A1F2B] block">
                      Architectural Decor Highlights:
                    </span>
                    <ul className="space-y-2">
                      {activeTheme.elements.map((elem, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2.5 text-xs text-[#5C3820]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B] shrink-0 mt-1.5" />
                          <span>{elem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Before/After Showcase Card */}
                {activeTheme.beforeAfter && (
                  <div className="lg:col-span-6 bg-[#FBF4E6] p-6 rounded-2xl border border-[#C9A24B]/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A1F2B]">
                        <RefreshCw className="w-4 h-4 text-[#C9A24B]" />
                        <span>Venue Transformation</span>
                      </div>

                      <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#C9A24B]/30 text-xs">
                        <button
                          onClick={() => setShowAfterOnly(false)}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                            !showAfterOnly
                              ? 'bg-[#7A1F2B] text-white'
                              : 'text-[#7E6356] hover:text-[#7A1F2B]'
                          }`}
                        >
                          Raw Venue
                        </button>
                        <button
                          onClick={() => setShowAfterOnly(true)}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                            showAfterOnly
                              ? 'bg-[#C9A24B] text-[#2B1810]'
                              : 'text-[#7E6356] hover:text-[#2B1810]'
                          }`}
                        >
                          Sampradaya Magic
                        </button>
                      </div>
                    </div>

                    {/* Transformation Image */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#C9A24B]/40 shadow-inner bg-[#2B1810]">
                      <img
                        src={
                          showAfterOnly
                            ? activeTheme.beforeAfter.afterImage
                            : activeTheme.beforeAfter.beforeImage
                        }
                        alt="Venue Transformation"
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute bottom-3 left-3 right-3 bg-[#2B1810]/80 backdrop-blur-md p-2.5 rounded-xl border border-[#C9A24B]/40 text-white text-[11px] font-serif">
                        <span className="font-bold text-[#F4B63F] block">
                          {activeTheme.beforeAfter.venueName}
                        </span>
                        <span className="text-[#F5EBD7]/80 text-[10px]">
                          {showAfterOnly ? '✨ Fully Curated Scenography' : '🏛️ Raw Venue Space Before Transformation'}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#7E6356] font-serif italic">
                      "{activeTheme.beforeAfter.transformationNote}"
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery of Theme Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {activeTheme.images.map((img, iIdx) => (
                <div
                  key={iIdx}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#C9A24B]/40 shadow-md bg-[#2B1810]"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end text-white opacity-85 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4B63F]">
                      {img.tag}
                    </span>
                    <p className="font-serif text-xs font-semibold leading-snug mt-0.5">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
