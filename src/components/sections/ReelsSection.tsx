import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import { InstagramIcon } from '../common/InstagramIcon';
import { Play, Eye, Volume2, Sparkles, ArrowUpRight } from 'lucide-react';

export const ReelsSection: React.FC = () => {
  const { reels } = SITE_DATA;
  const { brand } = SITE_DATA.config;

  return (
    <section className="relative py-24 bg-[#2B1810] text-[#FFFBF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          theme="dark"
          badge="Live from Instagram"
          scriptKicker="Captured Vibrations"
          title="Trending Reels &"
          titleHighlight="Viral Moments"
          description="Join our 31,000+ member Instagram community for daily glimpses into real celebrations, behind-the-scenes decor builds, and emotional Muhurthams."
        />

        {/* 4-Reel Vertical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[9/16] border-2 border-[#C9A24B]/40 shadow-royal bg-[#1A0E0A] flex flex-col justify-between"
            >
              {/* Thumbnail Image */}
              <img
                src={reel.videoThumb}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

              {/* Top Bar on Reel */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#7A1F2B]/90 border border-[#F4B63F]/50 text-[#F4B63F]">
                  {reel.tag}
                </span>

                <div className="flex items-center gap-1 text-[11px] text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <Eye className="w-3 h-3 text-[#F4B63F]" />
                  <span>{reel.views}</span>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <a
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 my-auto mx-auto w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-[#F4B63F] flex items-center justify-center text-white group-hover:scale-120 group-hover:bg-[#7A1F2B] transition-all shadow-royal"
                aria-label={`Watch ${reel.title} on Instagram`}
              >
                <Play className="w-6 h-6 fill-[#F4B63F] text-[#F4B63F] ml-1" />
              </a>

              {/* Bottom Reel Caption & Profile Bar */}
              <div className="relative z-10 p-5 space-y-2 bg-gradient-to-t from-black/95 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#F4B63F] to-[#7A1F2B] p-0.5">
                    <img
                      src="/assets/sampradaya-logo.png"
                      alt=""
                      className="w-full h-full object-contain rounded-full bg-[#2B1810]"
                    />
                  </div>
                  <span className="text-xs font-serif font-bold text-[#F4B63F]">
                    {brand.instagramHandle}
                  </span>
                </div>

                <p className="font-serif text-xs text-[#FFFBF5] leading-snug line-clamp-2">
                  {reel.title}
                </p>

                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-[#C9A24B] hover:text-[#FFFBF5] pt-1"
                >
                  <span>Watch on Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Follow Community Banner */}
        <div className="bg-gradient-to-r from-[#7A1F2B] via-[#56131C] to-[#7A1F2B] p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#C9A24B]/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4B63F]">
              <InstagramIcon className="w-4 h-4" />
              <span>Verified Creator Community</span>
            </div>
            <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFBF5]">
              Follow @sampradayaevents ({brand.instagramFollowers} Followers)
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EBD7]/85 font-serif">
              Stay inspired with daily wedding reels, mandap time-lapses, and couple entries.
            </p>
          </div>

          <a
            href="https://www.instagram.com/sampradayaevents"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A24B] via-[#F4B63F] to-[#C9A24B] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-widest hover:brightness-105 shadow-royal transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-[#2B1810]" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-[#2B1810]" />
          </a>
        </div>
      </div>
    </section>
  );
};
