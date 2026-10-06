import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Heart, Users, Award, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

export const TrustStripSection: React.FC = () => {
  const { stats, awardsConfig, brand } = SITE_DATA.config;

  const trustMetrics = [
    {
      label: 'Years of Royal Experience',
      value: `${stats.yearsExperience}+`,
      subtext: `Established in ${brand.establishedYear}`,
      icon: <Crown className="w-5 h-5 text-[#F4B63F]" />,
    },
    {
      label: 'Grand Events Planned',
      value: `${stats.eventsPlanned}+`,
      subtext: 'Weddings, Receptions & Galas',
      icon: <Sparkles className="w-5 h-5 text-[#E8833A]" />,
    },
    {
      label: 'Ecstatic Families & Couples',
      value: `${stats.happyCouples}+`,
      subtext: '100% Muhurtham Accuracy',
      icon: <Heart className="w-5 h-5 text-[#C0392B]" />,
    },
    {
      label: 'Instagram Community',
      value: brand.instagramFollowers,
      subtext: 'Verified @sampradayaevents',
      icon: <Users className="w-5 h-5 text-[#C9A24B]" />,
    },
  ];

  return (
    <section id="trust-strip" className="relative z-20 w-full bg-gradient-to-b from-[#160703] via-[#1C0D05] to-[#2B1810] py-8 sm:py-12 border-b border-[#C9A24B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Golden Metric Bar */}
        <div className="bg-gradient-to-r from-[#1C0D05] via-[#2B1408] to-[#1C0D05] rounded-[2.5rem] border border-[#F4B63F]/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C9A24B]/20">
          {trustMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`flex flex-col items-center text-center space-y-2 ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-0' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#3D2418] border border-[#C9A24B]/40 flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <span className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#F4B63F] via-[#FFE8B4] to-[#C9A24B] bg-clip-text text-transparent leading-none">
                {item.value}
              </span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#FFFBF5]">
                {item.label}
              </p>
              <span className="text-[10px] sm:text-[11px] text-[#F5EBD7]/70 font-sans">
                {item.subtext}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Client Awards & Accreditations Slot */}
        {awardsConfig.showAwards && awardsConfig.awards.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#C9A24B]/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#F4B63F]">
              <Award className="w-4 h-4 text-[#F4B63F]" />
              <span>Recognitions & Honours</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {awardsConfig.awards.map((award) => (
                <div
                  key={award.id}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D2418]/90 border border-[#C9A24B]/40 text-[11px] text-[#FFFBF5] font-serif shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F4B63F]" />
                  <span>{award.title}</span>
                  <span className="text-[#C9A24B] font-bold">({award.year})</span>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};
