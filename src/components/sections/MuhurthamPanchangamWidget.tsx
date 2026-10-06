import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, Calendar, Moon, Sun, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useBookingWizard } from '../../context/BookingWizardContext';

interface MuhurthamMonth {
  name: string;
  season: string;
  significance: string;
  dates: { date: string; day: string; nakshatra: string; slot: 'Morning' | 'Evening' }[];
}

const MUHURTHAM_CALENDAR: MuhurthamMonth[] = [
  {
    name: 'Karthika Masam (Nov - Dec)',
    season: 'Autumn Auspicious Season',
    significance: 'Regarded as the holiest month for Telugu weddings; divine radiance and sacred prosperity.',
    dates: [
      { date: '14 Nov 2025', day: 'Friday', nakshatra: 'Rohini Nakshatra', slot: 'Morning' },
      { date: '21 Nov 2025', day: 'Friday', nakshatra: 'Uttara Phalguni', slot: 'Morning' },
      { date: '27 Nov 2025', day: 'Thursday', nakshatra: 'Anuradha', slot: 'Evening' },
      { date: '05 Dec 2025', day: 'Friday', nakshatra: 'Hastha', slot: 'Morning' },
    ],
  },
  {
    name: 'Magha Masam (Jan - Feb)',
    season: 'Royal Winter Weddings',
    significance: 'The royal wedding season in Hyderabad palaces; cool pleasant weather for outdoor mandaps.',
    dates: [
      { date: '18 Jan 2026', day: 'Sunday', nakshatra: 'Mrugasira', slot: 'Morning' },
      { date: '25 Jan 2026', day: 'Sunday', nakshatra: 'Pushyami', slot: 'Morning' },
      { date: '08 Feb 2026', day: 'Sunday', nakshatra: 'Makha', slot: 'Evening' },
      { date: '15 Feb 2026', day: 'Sunday', nakshatra: 'Uttara', slot: 'Morning' },
    ],
  },
  {
    name: 'Vaisakha Masam (Apr - May)',
    season: 'Golden Spring Muhurthams',
    significance: 'Bountiful harvest and blossoming abundance; highly revered for grand palace ceremonies.',
    dates: [
      { date: '24 Apr 2026', day: 'Friday', nakshatra: 'Swathi Nakshatra', slot: 'Morning' },
      { date: '01 May 2026', day: 'Friday', nakshatra: 'Visakha', slot: 'Morning' },
      { date: '08 May 2026', day: 'Friday', nakshatra: 'Anuradha', slot: 'Evening' },
      { date: '15 May 2026', day: 'Friday', nakshatra: 'Moola', slot: 'Morning' },
    ],
  },
];

export const MuhurthamPanchangamWidget: React.FC = () => {
  const [activeMonthIdx, setActiveMonthIdx] = useState(0);
  const navigate = useNavigate();
  const { updateData } = useBookingWizard();

  const handleSelectDate = (dateStr: string, slot: 'Morning' | 'Evening') => {
    updateData({
      eventDate: dateStr,
      timeSlot: slot,
    });
    navigate('/book-slot');
  };

  const currentMonth = MUHURTHAM_CALENDAR[activeMonthIdx];

  return (
    <section className="relative py-24 bg-[#FFFBF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Auspicious Astrological Vedic Timing"
          scriptKicker="Shubha Muhurtham"
          title="Telugu Panchangam"
          titleHighlight="Wedding Calendar"
          description="Curated auspicious wedding windows aligned with Vedic astrological alignment, nakshatras, and palace availability."
        />

        {/* Month Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3">
          {MUHURTHAM_CALENDAR.map((month, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMonthIdx(idx)}
              className={`px-6 py-3 rounded-full font-serif font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${
                idx === activeMonthIdx
                  ? 'bg-[#7A1F2B] text-[#FFFBF5] border-[#C9A24B] shadow-royal scale-105'
                  : 'bg-[#FBF4E6] text-[#5C3820] border-[#C9A24B]/30 hover:border-[#C9A24B]'
              }`}
            >
              {month.name}
            </button>
          ))}
        </div>

        {/* Active Month Feature Display */}
        <div className="bg-[#1C0D05] rounded-[3rem] p-8 sm:p-12 border border-[#F4B63F]/25 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-[#FFFBF5] relative overflow-hidden space-y-8">

          {/* Month Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C9A24B]/30 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#F4B63F] block">
                {currentMonth.season}
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#FFFBF5]">
                {currentMonth.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBD7]/80 font-serif italic">
                {currentMonth.significance}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#3D2418] px-4 py-2 rounded-full border border-[#C9A24B]/40 text-xs font-serif text-[#F4B63F] shrink-0">
              <Sparkles className="w-4 h-4 text-[#F4B63F]" />
              <span>Verified by Senior Astrologers</span>
            </div>
          </div>

          {/* 4 Date Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentMonth.dates.map((d, dIdx) => (
              <motion.div
                key={dIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: dIdx * 0.1 }}
                className="bg-[#3D2418]/90 rounded-2xl p-6 border border-[#C9A24B]/40 space-y-4 hover:border-[#F4B63F] hover:bg-[#56131C] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#F4B63F]">
                      {d.day}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7A1F2B] border border-[#C9A24B]/40 text-white font-sans">
                      {d.slot}
                    </span>
                  </div>

                  <h4 className="font-cormorant text-2xl font-bold text-[#FFFBF5]">
                    {d.date}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-[#F5EBD7]/75 font-serif">
                    <Moon className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>{d.nakshatra}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectDate(d.date, d.slot)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md transition-all mt-2"
                >
                  <span>Lock This Date</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
