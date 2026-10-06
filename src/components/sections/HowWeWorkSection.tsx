import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import {
  Sparkles,
  Palette,
  CalendarCheck,
  Flame,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowWeWorkSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = SITE_DATA.processSteps;

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-[#F4B63F]" />,
    Palette: <Palette className="w-5 h-5 text-[#E8833A]" />,
    CalendarCheck: <CalendarCheck className="w-5 h-5 text-[#C9A24B]" />,
    Flame: <Flame className="w-5 h-5 text-[#C0392B]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#F4B63F]" />,
    Crown: <Sparkles className="w-5 h-5 text-[#F4B63F]" />,
    Camera: <Sparkles className="w-5 h-5 text-[#F4B63F]" />,
  };

  return (
    <section id="how-we-work" className="relative py-24 bg-[#2B1810] text-[#FFFBF5] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7A1F2B]/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F4B63F]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionHeading
          theme="dark"
          badge="The Sampradaya Methodology"
          scriptKicker="Precision & Grace"
          title="How We Choreograph Your"
          titleHighlight="Auspicious Day"
          description="From initial vision to the final emotional farewell, discover our 5-phase royal event architecture."
        />

        {/* Interactive Steps Navigation Pill Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-none max-w-4xl mx-auto border-b border-[#C9A24B]/30">
          {steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <motion.button
                key={step.step}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl transition-all duration-300 shrink-0 font-serif border ${
                  isActive
                    ? 'bg-[#7A1F2B] text-[#FFFBF5] border-[#F4B63F] shadow-royal scale-105'
                    : 'bg-[#3D2418]/60 text-[#F5EBD7]/70 border-[#C9A24B]/20 hover:border-[#C9A24B]'
                }`}
              >
                <span className="text-xs font-bold text-[#F4B63F] tracking-widest">{step.step}</span>
                <span className="text-xs font-bold uppercase tracking-wider">{step.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Step Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A0E0A]/90 p-8 sm:p-12 rounded-[2.5rem] border-2 border-[#C9A24B]/40 shadow-2xl relative overflow-hidden">
          {/* Left Column: Step Description */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#7A1F2B] border border-[#F4B63F]/50 flex items-center justify-center shadow-lg">
                    {iconMap[steps[activeStepIndex].iconName] || <Sparkles className="w-5 h-5 text-[#F4B63F]" />}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#F4B63F] block">
                      Phase {steps[activeStepIndex].step}
                    </span>
                    <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#FFFBF5]">
                      {steps[activeStepIndex].title}: {steps[activeStepIndex].subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#F5EBD7]/90 font-serif leading-relaxed">
                  {steps[activeStepIndex].description}
                </p>

                {/* Checklist items */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#F4B63F] block">
                    Deliverables & Protocols:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStepIndex].details.map((detail, dIdx) => (
                      <motion.div
                        key={dIdx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: dIdx * 0.06 }}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#2B1810] border border-[#C9A24B]/30 text-xs text-[#F5EBD7]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F4B63F] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Consultation Trigger */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/book-slot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all hover:scale-105 active:scale-95 group/btn"
              >
                <span>Initiate Step 1 Discovery</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Timeline Cards */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((st, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStepIndex(i)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  i === activeStepIndex
                    ? 'bg-[#7A1F2B]/90 border-[#F4B63F] shadow-lg translate-x-2'
                    : 'bg-[#2B1810]/60 border-[#C9A24B]/20 hover:border-[#C9A24B]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-sm text-[#F4B63F]">{st.step}</span>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#FFFBF5]">{st.title}</h4>
                    <span className="text-[11px] text-[#F5EBD7]/60 block line-clamp-1">
                      {st.subtitle}
                    </span>
                  </div>
                </div>

                <span className={`text-xs ${i === activeStepIndex ? 'text-[#F4B63F]' : 'text-white/30'}`}>
                  ❖
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
