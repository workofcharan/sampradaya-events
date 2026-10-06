import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import {
  IndianRupee,
  Sparkles,
  Crown,
  Calendar,
  Users,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const BespokeBudgetCalculator: React.FC = () => {
  const [eventType, setEventType] = useState<'Wedding' | 'Reception' | 'Sangeet' | 'Combo'>('Wedding');
  const [venueTier, setVenueTier] = useState<'Palace' | 'FiveStar' | 'Resort'>('Palace');
  const [guestCount, setGuestCount] = useState<number>(500);
  const [decorTier, setDecorTier] = useState<'VedicRoyal' | 'CrystalLuxe' | 'FloralParadise'>('VedicRoyal');

  // Realistic luxury pricing model for Hyderabad luxury weddings
  const calculateEstimate = () => {
    let base = 800000;

    if (eventType === 'Wedding') base = 1500000;
    if (eventType === 'Reception') base = 1200000;
    if (eventType === 'Sangeet') base = 900000;
    if (eventType === 'Combo') base = 2500000;

    const venueMultiplier = venueTier === 'Palace' ? 1.6 : venueTier === 'FiveStar' ? 1.3 : 1.0;
    const decorMultiplier = decorTier === 'VedicRoyal' ? 1.5 : decorTier === 'CrystalLuxe' ? 1.4 : 1.2;
    const guestFactor = (guestCount / 500) * 0.4 + 0.6;

    const total = Math.round((base * venueMultiplier * decorMultiplier * guestFactor) / 50000) * 50000;
    const lowRange = Math.round((total * 0.85) / 50000) * 50000;
    const highRange = Math.round((total * 1.2) / 50000) * 50000;

    return {
      min: (lowRange / 100000).toFixed(1),
      max: (highRange / 100000).toFixed(1),
    };
  };

  const estimate = calculateEstimate();

  const getWhatsAppEstimateLink = () => {
    const text = `Namaste Sampradaya Events! I used the online Celebration Blueprint Estimator:\n• Event: ${eventType}\n• Venue Style: ${venueTier}\n• Guests: ${guestCount}\n• Decor: ${decorTier}\n• Estimated Range: ₹${estimate.min}L - ₹${estimate.max}L.\nI would like to schedule a private consultation.`;
    return `https://wa.me/919618989007?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative py-24 bg-paper-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Scenography Blueprint Calculator"
          scriptKicker="Bespoke Estimation"
          title="Curate & Estimate Your"
          titleHighlight="Dream Celebration"
          description="Interactive blueprint estimator crafted for Hyderabad weddings, palatial venues, and Vedic custom decor."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[3rem] border border-[#C9A24B]/30 shadow-[0_20px_50px_rgba(0,0,0,0.08)] space-y-8 relative overflow-hidden">

            {/* 1. Event Type Selector */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-[#7A1F2B] block">
                1. Select Celebration Scope
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'Wedding', label: 'Vedic Wedding' },
                  { id: 'Reception', label: 'Palace Reception' },
                  { id: 'Sangeet', label: 'Star Sangeet' },
                  { id: 'Combo', label: '3-Day Royal Package' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEventType(item.id as any)}
                    className={`py-3 px-3 rounded-2xl text-xs font-serif font-bold uppercase transition-all border ${
                      eventType === item.id
                        ? 'bg-[#7A1F2B] text-white border-[#C9A24B] shadow-md scale-102'
                        : 'bg-[#FBF4E6] text-[#5C3820] border-[#C9A24B]/30 hover:border-[#C9A24B]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Venue Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-[#7A1F2B] block">
                2. Venue Prestige Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Palace', label: 'Historic Palace (Falaknuma)' },
                  { id: 'FiveStar', label: '5-Star Ballroom (ITC / HICC)' },
                  { id: 'Resort', label: 'Luxury Resort & Lawn (Fort Grand)' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVenueTier(v.id as any)}
                    className={`p-3 rounded-2xl text-xs font-serif font-semibold text-left transition-all border ${
                      venueTier === v.id
                        ? 'bg-[#3D2418] text-[#F4B63F] border-[#F4B63F] shadow-md'
                        : 'bg-[#FBF4E6] text-[#5C3820] border-[#C9A24B]/30'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase font-bold tracking-wider text-[#7A1F2B]">
                  3. Expected Royal Attendance
                </label>
                <span className="font-cormorant font-bold text-xl text-[#7A1F2B]">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={2500}
                step={50}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-[#EBDDC0] rounded-lg appearance-none cursor-pointer accent-[#7A1F2B]"
              />
              <div className="flex justify-between text-[10px] text-[#7E6356] font-mono">
                <span>100 Intimate</span>
                <span>500 Grand</span>
                <span>1,000 Palatial</span>
                <span>2,500+ Mega Gala</span>
              </div>
            </div>

            {/* 4. Decor Theme */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-[#7A1F2B] block">
                4. Decor & Floral Architecture Density
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'VedicRoyal', label: 'Vedic Temple Gold & Jasmine Mandap' },
                  { id: 'CrystalLuxe', label: 'Crystal Chandeliers & LED Runway' },
                  { id: 'FloralParadise', label: 'Marigold & Lotus Petal Paradise' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDecorTier(d.id as any)}
                    className={`p-3 rounded-2xl text-xs font-serif text-left transition-all border ${
                      decorTier === d.id
                        ? 'bg-[#7A1F2B] text-white border-[#F4B63F] shadow-md'
                        : 'bg-[#FBF4E6] text-[#5C3820] border-[#C9A24B]/30'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculated Blueprint Card */}
          <div className="lg:col-span-5 bg-[#2B1810] text-[#FFFBF5] p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#C9A24B]/60 shadow-royal space-y-6 relative overflow-hidden">
            <div className="corner-ornament-tl" />
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />
            <div className="corner-ornament-br" />

            <div className="space-y-1 text-center">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#F4B63F]">
                Estimated Blueprint Scope
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-[#FFFBF5]">
                Curated Investment Range
              </h3>
            </div>

            {/* Price Box */}
            <div className="bg-[#3D2418] p-6 rounded-2xl border border-[#C9A24B]/50 text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#F5EBD7]/70 font-sans">
                Turnkey Scenography & Coordination
              </span>
              <div className="font-cormorant text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#F4B63F] via-[#FFE8B4] to-[#C9A24B] bg-clip-text text-transparent">
                ₹{estimate.min}L - ₹{estimate.max}L
              </div>
              <span className="text-[10px] text-[#F4B63F] font-serif italic">
                *Subject to venue logistics and auspicious Muhurtham hours
              </span>
            </div>

            {/* Inclusions Breakdown */}
            <div className="space-y-2.5 text-xs text-[#F5EBD7]">
              <span className="font-bold uppercase tracking-wider text-[#F4B63F] text-[10px] block">
                Estimated Inclusions:
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B63F] shrink-0" />
                <span>Bespoke 3D Mandap / Stage Photorealistic Blueprint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B63F] shrink-0" />
                <span>100% Fresh Mysore Jasmine / Imported Exotic Florals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B63F] shrink-0" />
                <span>Dedicated Bride & Groom Shadow Concierge Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B63F] shrink-0" />
                <span>Sound & Intelligent Lighting Rig Direction</span>
              </div>
            </div>

            {/* WhatsApp Direct Dispatch Action */}
            <div className="pt-4 space-y-3">
              <a
                href={getWhatsAppEstimateLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:brightness-110 text-white font-serif font-bold text-xs uppercase tracking-wider shadow-royal transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Estimate to WhatsApp Concierge</span>
              </a>

              <Link
                to="/book-slot"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md transition-all"
              >
                <span>Proceed to Reserve Auspicious Slot</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
