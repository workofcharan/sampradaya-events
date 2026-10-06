import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MandalaLogo } from '../common/MandalaLogo';
import { MandalaWatermark } from '../common/MandalaWatermark';
import { FestiveDivider } from '../common/FestiveDivider';
import { InstagramIcon } from '../common/InstagramIcon';
import { SITE_DATA } from '../../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { contact, brand } = SITE_DATA.config;
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2B1810] text-[#FFFBF5] pt-20 pb-12 overflow-hidden border-t-2 border-[#C9A24B]/50">
      {/* Background Rotating Watermark */}
      <MandalaWatermark
        size={600}
        opacity={0.04}
        className="bottom-0 -right-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top Newsletter & Consultation Banner */}
        <div className="bg-gradient-to-r from-[#3D2418] via-[#56131C] to-[#3D2418] rounded-3xl p-8 sm:p-12 border border-[#C9A24B]/40 shadow-royal flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#F4B63F]">
              Royal Wedding Journal & Inspiration
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFBF5]">
              Stay Inspired by Hyderabad’s Grandest Celebrations
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EBD7]/80 font-serif">
              Subscribe to receive curated decor lookbooks, Vedic Muhurtham calendars, and palace venue guides.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-serif text-[#F4B63F] bg-[#2B1810]/80 px-6 py-3.5 rounded-full border border-[#C9A24B]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you! You are subscribed to Sampradaya Journal.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-72 px-5 py-3.5 rounded-full bg-[#2B1810] border border-[#C9A24B]/50 text-xs text-[#FFFBF5] placeholder-[#F5EBD7]/50 focus:border-[#F4B63F] outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#2B1810] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <MandalaLogo size="lg" variant="light" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#F5EBD7]/80 font-serif leading-relaxed pt-2">
              Hyderabad’s premier luxury wedding and event planning company. Orchestrating sacred Vedic Muhurthams, palatial receptions, and emotional family milestones with royal grace since {brand.establishedYear}.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#3D2418] border border-[#C9A24B]/40 text-[#F4B63F] hover:bg-emerald-700 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/sampradayaevents"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#3D2418] border border-[#C9A24B]/40 text-[#F4B63F] hover:bg-[#7A1F2B] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="p-2.5 rounded-full bg-[#3D2418] border border-[#C9A24B]/40 text-[#F4B63F] hover:bg-[#C9A24B] hover:text-[#2B1810] transition-colors"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#F4B63F]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5EBD7]/80 font-serif">
              <li>
                <button onClick={() => scrollToAnchor('about')} className="hover:text-[#F4B63F] transition-colors">
                  About Sampradaya
                </button>
              </li>
              <li>
                <button onClick={() => scrollToAnchor('services')} className="hover:text-[#F4B63F] transition-colors">
                  Services Directory
                </button>
              </li>
              <li>
                <button onClick={() => scrollToAnchor('how-we-work')} className="hover:text-[#F4B63F] transition-colors">
                  How We Work (3 I's)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToAnchor('themes')} className="hover:text-[#F4B63F] transition-colors">
                  Decor & Moodboards
                </button>
              </li>
              <li>
                <button onClick={() => scrollToAnchor('portfolio')} className="hover:text-[#F4B63F] transition-colors">
                  Real Weddings & Galas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToAnchor('testimonials')} className="hover:text-[#F4B63F] transition-colors">
                  Couple Stories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToAnchor('faq')} className="hover:text-[#F4B63F] transition-colors">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Index (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#F4B63F]">
              Curated Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5EBD7]/80 font-serif">
              <li>
                <Link to="/book-slot" className="hover:text-[#F4B63F] transition-colors">
                  Grand Vedic Weddings
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="hover:text-[#F4B63F] transition-colors">
                  Palatial Receptions & Galas
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="hover:text-[#F4B63F] transition-colors">
                  Haldi & Mangala Snanam
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="hover:text-[#F4B63F] transition-colors">
                  Royal Sangeet & Choreography
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="hover:text-[#F4B63F] transition-colors">
                  Bespoke Decor & Scenography
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="hover:text-[#F4B63F] transition-colors">
                  Sacred Vedic Ceremonies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#F4B63F]">
              Hyderabad Studio
            </h4>
            <div className="space-y-3 text-xs text-[#F5EBD7]/85 font-serif">
              <p>
                {contact.address.line1}, {contact.address.line2}, {contact.address.area}, {contact.address.city} - {contact.address.pincode}
              </p>
              <p className="text-[#F4B63F] font-bold">
                Direct: {contact.phoneFormatted}
              </p>
              <p>
                Email: {contact.email}
              </p>
              <div className="pt-2">
                <Link
                  to="/book-slot"
                  className="inline-flex items-center gap-1.5 text-xs font-serif font-bold uppercase tracking-wider text-[#F4B63F] hover:text-white"
                >
                  <span>Reserve Auspicious Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Fine Print */}
        <div className="pt-8 border-t border-[#C9A24B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#F5EBD7]/60 font-serif">
          <p>
            © {new Date().getFullYear()} Sampradaya Events. All Rights Reserved. Crafted with royal devotion in Hyderabad.
          </p>

          <p className="flex items-center gap-1">
            <span>Ideate • Improvise • Impress</span>
            <span>•</span>
            <span>Positioning: "{brand.positioning}"</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
