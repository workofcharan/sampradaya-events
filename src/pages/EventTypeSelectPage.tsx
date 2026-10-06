import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingWizard } from '../context/BookingWizardContext';
import { EventType } from '../types';
import { FestiveDivider } from '../components/common/FestiveDivider';
import {
  Crown,
  Heart,
  Sun,
  Sparkles,
  Music,
  Wine,
  Flame,
  Briefcase,
  Layers,
  FileText,
  ArrowRight,
  Users,
  Check,
} from 'lucide-react';

interface EventTypeCard {
  type: EventType;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  capacity: string;
  features: string[];
  bannerGradient: string;
}

export const EventTypeSelectPage: React.FC = () => {
  const { data, updateData } = useBookingWizard();
  const navigate = useNavigate();

  const eventCatalog: EventTypeCard[] = [
    {
      type: 'Wedding',
      title: 'Royal Vedic Wedding',
      tagline: 'Sacred Muhurtham, Grand Mandaps & Shehnai Troupes',
      icon: <Crown className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '400 - 2,500 Guests',
      features: ['Carved Champa & Marigold Mandap', 'Vedic Priest & Muhurtham Coordination', 'Elephant & Dhol Procession', 'Royal 7-Course Feast Setup'],
      bannerGradient: 'from-[#7A1F2B] to-[#C0392B]',
    },
    {
      type: 'Engagement',
      title: 'Engagement & Roka',
      tagline: 'Ring Exchange Gazebos & Romantic Pastel Florals',
      icon: <Heart className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '150 - 500 Guests',
      features: ['Pastel Flower Canopy', 'Fairy Light Tunnel Walkway', 'Acoustic Violin / Flute Ensemble', 'Designer Cake Cutting Table'],
      bannerGradient: 'from-[#C0392B] to-[#E8833A]',
    },
    {
      type: 'Haldi',
      title: 'Vibrant Haldi Ceremony',
      tagline: 'Marigold Showers, Brass Urli Tubs & Yellow Canopy',
      icon: <Sun className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '100 - 400 Guests',
      features: ['Natural Brass Urli Tubs', 'Fresh Marigold Rain Cascade', 'Yellow Floral Drapes & Pillows', 'Traditional Dholak Folk Singers'],
      bannerGradient: 'from-[#E8833A] to-[#F4B63F]',
    },
    {
      type: 'Mehendi',
      title: 'Mehendi Extravaganza',
      tagline: 'Boho Rajasthani Canopies & Henna Stations',
      icon: <Sparkles className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '100 - 350 Guests',
      features: ['Organic Mehendi Artist Lounges', 'Bangle & Jutti Gift Cart', 'Colourful Diwan Seating', 'Live Bangra / Gidda Troupe'],
      bannerGradient: 'from-[#047857] to-[#10B981]',
    },
    {
      type: 'Sangeet',
      title: 'Bollywood Sangeet Night',
      tagline: 'High-Energy Dance Stages, Lighting & DJ Rigs',
      icon: <Music className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '300 - 1,000 Guests',
      features: ['Concert Grade Sound & Trusses', 'LED Video Backdrop Rigs', 'Choreographed Stage FX', 'Signature Mocktail / Cocktail Lounge'],
      bannerGradient: 'from-[#6B21A8] to-[#9333EA]',
    },
    {
      type: 'Reception',
      title: 'Grand Palace Reception',
      tagline: 'Crystal Chandeliers, Gold Arches & Fine Dining',
      icon: <Wine className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '500 - 3,000 Guests',
      features: ['Palatial Gold & Floral Backdrops', 'Red Carpet VIP Entrance', 'Classical Fusion Symphony Band', 'Multi-Cuisine Buffet Pavilion'],
      bannerGradient: 'from-[#7A1F2B] to-[#E8833A]',
    },
    {
      type: 'Ceremony',
      title: 'Sacred Vedic Ceremonies',
      tagline: 'Gruhapravesham, Upanayanam & Muhurtham Pujas',
      icon: <Flame className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '50 - 400 Guests',
      features: ['Homam & Diya Sanctum', 'Fresh Mango Leaf Thoranams', 'Authentic Purohit & Prasadam Logistics', 'Traditional Banana Leaf Dining'],
      bannerGradient: 'from-[#962D22] to-[#D35400]',
    },
    {
      type: 'Corporate',
      title: 'Corporate Gala & Conclaves',
      tagline: 'Annual Awards, Leadership Summits & Dinners',
      icon: <Briefcase className="w-6 h-6 text-[#FFFBF5]" />,
      capacity: '200 - 1,500 Guests',
      features: ['Keynote Stage & Podium Branding', 'Full Audio-Visual Rigs', 'Executive Delegate Registration', 'Cocktail Networking Lounge'],
      bannerGradient: 'from-[#2B1810] to-[#5C3820]',
    },
  ];

  const handleSelectAndProceed = (type: EventType) => {
    updateData({ eventType: type });
    navigate('/book-slot');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FEF9E7] border border-[#FAD7A0] text-[#B7791F] text-xs font-serif font-bold uppercase tracking-widest">
          <span>Step 1 of 3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-bold text-[#2B1810]">
          Select Your Type of Celebration
        </h1>
        <p className="text-xs sm:text-sm text-[#7E6356] font-serif">
          Each ceremony at Sampradaya is tailored with authentic Vedic traditions, bespoke floral aesthetics, and master coordinators.
        </p>
        <FestiveDivider variant="gold" />
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventCatalog.map((item) => {
          const isSelected = data.eventType === item.type;
          return (
            <div
              key={item.type}
              onClick={() => handleSelectAndProceed(item.type)}
              className={`rounded-3xl bg-white border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:shadow-festive-hover hover:-translate-y-1.5 ${
                isSelected
                  ? 'border-[#7A1F2B] shadow-royal ring-2 ring-[#7A1F2B]/20'
                  : 'border-[#C9A24B]/40 shadow-sm'
              }`}
            >
              {/* Card Header Strip */}
              <div className={`p-4 bg-gradient-to-r ${item.bannerGradient} text-white flex items-center justify-between`}>
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold bg-black/20 px-2.5 py-1 rounded-full text-white/90">
                  <Users className="w-3 h-3" />
                  <span>{item.capacity}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-cormorant font-bold text-xl text-[#2B1810] group-hover:text-[#7A1F2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7E6356] font-serif mt-1 leading-snug">
                    {item.tagline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F5EBD7] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B7791F]">
                      Key Inclusions:
                    </span>
                    <ul className="space-y-1 text-xs text-[#5C3820] font-serif">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Select Button */}
                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-[#7A1F2B] text-white shadow'
                      : 'bg-[#FBF4E6] text-[#2B1810] hover:bg-[#7A1F2B] hover:text-white border border-[#C9A24B]/50'
                  }`}
                >
                  <span>{isSelected ? 'Selected — Choose Slot' : 'Select This Event'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
