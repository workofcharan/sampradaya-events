import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import { ServiceItem } from '../../types';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import { useBookingWizard } from '../../context/BookingWizardContext';

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const { updateData } = useBookingWizard();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleBookService = (service: ServiceItem) => {
    updateData({ eventType: service.eventType });
    navigate('/book-slot');
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'wedding', label: 'Weddings & Muhurtham' },
    { id: 'pre-wedding', label: 'Haldi, Mehendi & Sangeet' },
    { id: 'reception', label: 'Receptions & Decor' },
    { id: 'ceremony', label: 'Ceremonies & Corporate' },
  ];

  const filteredServices = SITE_DATA.services.filter((s) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'wedding') return s.eventType === 'Wedding' || s.eventType === 'Engagement';
    if (selectedCategory === 'pre-wedding')
      return s.eventType === 'Haldi' || s.eventType === 'Mehendi' || s.eventType === 'Sangeet';
    if (selectedCategory === 'reception')
      return s.eventType === 'Reception' || s.eventType === 'Decor & Theming' || s.eventType === 'Wedding Stationery';
    if (selectedCategory === 'ceremony')
      return s.eventType === 'Ceremony' || s.eventType === 'Corporate';
    return true;
  });

  return (
    <section id="services" className="relative py-24 bg-[#FFFBF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Bespoke Offerings"
          scriptKicker="Sacred Rites & Grand Celebrations"
          title="Curated Services for Your"
          titleHighlight="Auspicious Milestones"
          description="Every celebration is handcrafted with sacred authenticity, opulent florals, and seamless hospitality."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-serif font-semibold tracking-wider transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-[#7A1F2B] text-[#FFFBF5] border-[#C9A24B] shadow-md scale-105'
                  : 'bg-[#FBF4E6] text-[#5C3820] border-[#C9A24B]/30 hover:border-[#C9A24B]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Services Cards Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-[2.5rem] bg-[#1E0D07] overflow-hidden border border-white/10 hover:border-[#F4B63F]/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-royal transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Gradient */}
                <div className="relative h-64 w-full overflow-hidden shrink-0 bg-[#120703]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810] via-[#2B1810]/30 to-transparent" />

                  {/* Popular or Tag Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7A1F2B]/90 backdrop-blur-md border border-[#F4B63F]/60 text-[10px] uppercase tracking-widest font-serif font-bold text-[#F4B63F] shadow-md">
                    {service.popular ? <Crown className="w-3 h-3 text-[#F4B63F]" /> : <Sparkles className="w-3 h-3 text-[#E8833A]" />}
                    <span>{service.tag}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between bg-[#2B1810] text-[#FFFBF5]">
                  <div className="space-y-2.5">
                    <h3 className="font-cormorant text-2xl font-bold text-[#FFFBF5] group-hover:text-[#F4B63F] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#F5EBD7]/80 font-serif leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 pt-2 border-t border-[#C9A24B]/20">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-[11px] text-[#F5EBD7]/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B63F] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 mt-auto border-t border-[#C9A24B]/20 flex items-center justify-between">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleBookService(service)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#7A1F2B] via-[#942B39] to-[#7A1F2B] hover:from-[#C9A24B] hover:to-[#F4B63F] hover:text-[#2B1810] text-white text-xs font-serif font-bold uppercase tracking-wider transition-all duration-300 shadow-md border border-[#C9A24B]/50 group/btn"
                    >
                      <span>Reserve For {service.eventType}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
