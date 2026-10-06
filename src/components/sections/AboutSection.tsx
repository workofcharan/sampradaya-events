import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { FestiveDivider } from '../common/FestiveDivider';
import { SITE_DATA } from '../../data/siteData';
import { Crown, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { MandalaWatermark } from '../common/MandalaWatermark';

export const AboutSection: React.FC = () => {
  const { founder, brand } = SITE_DATA.config;

  const pillars = [
    {
      title: 'IDEATE',
      desc: 'Deep listening to ancestral traditions, family desires, and creative dreamscapes.',
      icon: <Sparkles className="w-4 h-4 text-[#F4B63F]" />,
    },
    {
      title: 'IMPROVISE',
      desc: 'Seamless real-time adaptability, dynamic contingency choreography, and effortless problem-solving.',
      icon: <HeartHandshake className="w-4 h-4 text-[#E8833A]" />,
    },
    {
      title: 'IMPRESS',
      desc: 'Breathtaking visual scenography, flawless timing, and lasting emotional resonance for your guests.',
      icon: <Crown className="w-4 h-4 text-[#C9A24B]" />,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-paper-texture overflow-hidden">
      {/* Rotating Background Mandala */}
      <MandalaWatermark
        size={500}
        opacity={0.04}
        className="top-10 -right-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionHeading
          badge="Royal Heritage & Vision"
          scriptKicker="The Sampradaya Legacy"
          title="Curating Timeless Grandeur in the Heart of"
          titleHighlight="Hyderabad"
          description="Where sacred Vedic customs harmonize with palatial modern luxury to immortalize your most cherished day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Multi-Image Indian Arched Scenography Cluster */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 sm:py-8">
            {/* Main Arch Jharokha Image (Center) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-sm aspect-[3/4] arch-frame overflow-hidden border-2 border-[#C9A24B]/70 shadow-2xl bg-[#2B1810]"
            >
              <img
                src="/assets/instagram/sampradaya_white_temple_gopuram_mandap.png"
                alt="Sampradaya Royal Gopuram Temple Mandap - Sampradaya Events"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D05]/85 via-transparent to-transparent" />
              
              {/* Badge Over Arch */}
              <div className="absolute bottom-6 left-5 right-5 text-center bg-[#1C0D05]/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#F4B63F]/40 shadow-lg">
                <span className="font-serif font-bold text-xs uppercase tracking-widest text-[#F4B63F] block">
                  Authentic Temple Gopuram
                </span>
                <span className="text-[11px] text-[#F5EBD7] font-serif italic">
                  Grand Vedic Mandap Architecture
                </span>
              </div>
            </motion.div>

            {/* Overlapping Top-Left Small Arch Image (Floral Peacock Ceremony) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block absolute -top-4 -left-6 z-20 w-40 h-48 rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-[#2B1810]"
            >
              <img
                src="/assets/instagram/sampradaya_floral_peacock_ceremony.png"
                alt="Sampradaya Traditional Floral Peacock Ceremony"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#7A1F2B]/10" />
              <div className="absolute bottom-2 left-2 right-2 text-center bg-[#1C0D05]/85 backdrop-blur-xs py-1 rounded-lg border border-[#F4B63F]/30 text-[9px] font-serif font-bold text-[#F4B63F] uppercase">
                Floral Peacock 🦚
              </div>
            </motion.div>

            {/* Overlapping Bottom-Right Small Arch Image (Namam Sanctum) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="hidden sm:block absolute -bottom-6 -right-6 z-20 w-44 h-52 rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-[#2B1810]"
            >
              <img
                src="/assets/instagram/sampradaya_venkateswara_namam_mandap.png"
                alt="Sampradaya Sacred Venkateswara Namam Mandap"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#7A1F2B]/10" />
              <div className="absolute bottom-2 left-2 right-2 text-center bg-[#1C0D05]/85 backdrop-blur-xs py-1 rounded-lg border border-[#F4B63F]/30 text-[9px] font-serif font-bold text-[#F4B63F] uppercase">
                Tirupati Namam 🪔
              </div>
            </motion.div>

            {/* Gold Corner Decorative Rings */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full border-2 border-dashed border-[#C9A24B]/30 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border-2 border-dashed border-[#C9A24B]/30 pointer-events-none" />
          </div>

          {/* Right Column: Brand Story & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B1810] leading-snug">
                "We do not merely execute events; we safeguard the sanctity and joy of your family."
              </h3>
              
              <p className="text-sm sm:text-base text-[#5C3820] leading-relaxed font-serif">
                Founded in Hyderabad, <strong className="text-[#7A1F2B]">Sampradaya Events</strong> was born from a profound passion for preserving sacred Indian wedding rituals while infusing world-class scenography, gourmet hospitality, and cinematic production standards.
              </p>

              <p className="text-sm sm:text-base text-[#5C3820] leading-relaxed font-serif">
                Whether orchestrating a 3-day royal wedding at Taj Falaknuma Palace, a lavish gala reception at Novotel HICC, or an intimate traditional Gruhapravesham, our obsessive attention to detail ensures that every sacred Muhurtham minute is honored.
              </p>
            </div>

            {/* The 3 Pillars Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#C9A24B]/40 shadow-sm space-y-2 hover:border-[#C9A24B] transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FBF4E6] flex items-center justify-center border border-[#C9A24B]/30">
                    {p.icon}
                  </div>
                  <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#7A1F2B]">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-[#7E6356] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Founder Note & Calligraphic Signature */}
            <div className="bg-[#FFFBF5] p-6 sm:p-8 rounded-3xl border-2 border-[#C9A24B]/40 shadow-festive relative overflow-hidden space-y-4">
              <div className="corner-ornament-tl" />
              <div className="corner-ornament-br" />

              <p className="text-xs sm:text-sm text-[#5C3820] font-serif italic leading-relaxed">
                "{founder.note}"
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-[#F5EBD7]">
                <div>
                  <h5 className="font-cormorant font-bold text-lg text-[#2B1810]">
                    {founder.name}
                  </h5>
                  <span className="text-[11px] text-[#C9A24B] uppercase font-semibold tracking-wider">
                    {founder.role}
                  </span>
                </div>

                <div className="font-script text-2xl sm:text-3xl text-[#7A1F2B] pr-2 select-none">
                  {founder.signatureText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
