import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Crown, Sparkles, ShieldCheck, Star, Award, HeartHandshake, Eye } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

export const CelebrityVipTrustSection: React.FC = () => {
  const celebrityFeatures = [
    {
      title: 'Cinematic Red-Carpet Production',
      desc: 'High-definition live multi-cam broadcasting, concert-grade acoustic line-arrays, and custom celebrity green rooms.',
      icon: <Sparkles className="w-5 h-5 text-[#F4B63F]" />,
    },
    {
      title: '100% Strict Discretion & NDA Protection',
      desc: 'Trusted by renowned cine personalities, political dignitaries, and business magnates with private security corridors.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Palace & 5-Star Preferred Partner',
      desc: 'Unmatched priority access across Taj Falaknuma Palace, ITC Kohenur, Novotel HICC, Hitex, and Ramoji Film City.',
      icon: <Crown className="w-5 h-5 text-[#C9A24B]" />,
    },
    {
      title: 'Bespoke Star Choreography & Artists',
      desc: 'Direct booking and stage management of leading playback singers, DJ masters, and Tollywood choreographers.',
      icon: <Star className="w-5 h-5 text-[#E8833A]" />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#2B1810] via-[#1A0E0A] to-[#2B1810] text-[#FFFBF5] overflow-hidden border-y-2 border-[#C9A24B]/40">
      {/* Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#7A1F2B]/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F4B63F]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionHeading
          theme="dark"
          badge="Royal & Celebrity Weddings"
          scriptKicker="The Sovereign Standard"
          title="The Preferred Curators for"
          titleHighlight="Tollywood & High-Profile Dynasties"
          description="When Hyderabad’s celebrated icons and distinguished families envision their monumental day, they entrust Sampradaya Events with their grandest dreams."
        />

        {/* 4-Pillar VIP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {celebrityFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#3D2418]/75 backdrop-blur-md p-7 rounded-3xl border border-[#C9A24B]/40 shadow-royal hover:border-[#F4B63F] hover:-translate-y-1.5 transition-all space-y-3 relative group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#7A1F2B] border border-[#F4B63F]/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="font-cormorant font-bold text-xl text-[#FFFBF5] leading-snug">
                {feat.title}
              </h3>
              <p className="text-xs text-[#F5EBD7]/80 font-serif leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Grand Palace Banner & Quote Strip */}
        <div className="bg-[#1A0E0A]/95 rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#C9A24B]/60 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#F4B63F]">
              <Crown className="w-4 h-4 text-[#F4B63F]" />
              <span>Palatial Hyderabad Venues</span>
            </div>
            <h3 className="font-cormorant text-2xl sm:text-4xl font-bold text-[#FFFBF5] leading-tight">
              From 101-Dining Falaknuma to 3,000-Guest Convention Arenas
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EBD7]/85 font-serif italic leading-relaxed">
              "We coordinate every nuance with flawless security, auspicious Vedic purohits, gourmet master chefs, and breathtaking custom scenography."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-center p-4 rounded-2xl bg-[#3D2418] border border-[#C9A24B]/40">
              <span className="font-cormorant text-3xl font-bold text-[#F4B63F] block">31,000+</span>
              <span className="text-[11px] text-[#F5EBD7]/70 uppercase tracking-wider font-sans">Verified Followers</span>
            </div>
            <div className="text-center p-4 rounded-2xl bg-[#3D2418] border border-[#C9A24B]/40">
              <span className="font-cormorant text-3xl font-bold text-[#F4B63F] block">850+</span>
              <span className="text-[11px] text-[#F5EBD7]/70 uppercase tracking-wider font-sans">Grand Celebrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
