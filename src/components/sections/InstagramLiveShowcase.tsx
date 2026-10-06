import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { InstagramIcon } from '../common/InstagramIcon';
import { CheckCircle2, Heart, MessageCircle, Play, ArrowUpRight, Sparkles, Camera, Eye, Filter } from 'lucide-react';
import { Lightbox } from '../common/Lightbox';

interface StoryHighlight {
  id: string;
  name: string;
  image: string;
  postIndex: number;
}

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  tag: string;
  category: 'mandap' | 'haldi' | 'reception' | 'sangeet' | 'entry';
  isVideo?: boolean;
}

const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    id: 'story-1',
    name: 'Lakeside Mandap 🌸',
    image: '/assets/instagram/sampradaya_lakeside_pink_mandap.png',
    postIndex: 0,
  },
  {
    id: 'story-2',
    name: 'Gopuram Mandap 🛕',
    image: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
    postIndex: 1,
  },
  {
    id: 'story-3',
    name: 'Enchanted Stage ✨',
    image: '/assets/instagram/sampradaya_enchanted_reception_stage.png',
    postIndex: 2,
  },
  {
    id: 'story-4',
    name: 'Couple Joy 💃',
    image: '/assets/instagram/sampradaya_couple_dance.png',
    postIndex: 4,
  },
  {
    id: 'story-5',
    name: 'Canopy Walkway 🌿',
    image: '/assets/instagram/sampradaya_green_canopy_walkway.png',
    postIndex: 3,
  },
  {
    id: 'story-6',
    name: 'Tirupati Namam 🪔',
    image: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
    postIndex: 5,
  },
];

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/assets/instagram/sampradaya_lakeside_pink_mandap.png',
    caption: 'Sunset lakeside mandap with pure white peacock architecture, soft blush florals & bespoke drapery. Breathtaking sacred vows by the water ✨🌸 #SampradayaEvents #TeluguWedding #LakesideMuhurtham',
    likes: '31.4K',
    comments: '1.1K',
    tag: 'Lakeside Mandap',
    category: 'mandap',
  },
  {
    id: 'ig-2',
    image: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
    caption: 'Authentic South Indian temple gopuram mandapam with carved white pillars, fresh red rose garlands, and auspicious banana trees for the sacred Muhurtham. #TempleMandap #TeluguWedding #SampradayaMoments',
    likes: '38.2K',
    comments: '1.2K',
    tag: 'Gopuram Mandap',
    category: 'mandap',
  },
  {
    id: 'ig-3',
    image: '/assets/instagram/sampradaya_enchanted_reception_stage.png',
    caption: 'Enchanted Forest ballroom reception with suspended crystal chandeliers, lush green canopy, and luxury white seating 🌿✨ #ReceptionGrandeur #SampradayaMoments',
    likes: '26.9K',
    comments: '730',
    tag: 'Enchanted Stage',
    category: 'reception',
  },
  {
    id: 'ig-4',
    image: '/assets/instagram/sampradaya_green_canopy_walkway.png',
    caption: 'Mint green floral canopy entryway with traditional hanging temple bells & banana tree accents for the royal guest welcome. #HeritageDecor #GrandEntry',
    likes: '21.8K',
    comments: '510',
    tag: 'Canopy Walkway',
    category: 'entry',
  },
  {
    id: 'ig-5',
    image: '/assets/instagram/sampradaya_couple_dance.png',
    caption: 'Pure happiness & dance euphoria! When two souls unite in celebration surrounded by loved ones and fresh jasmine garlands 🌸🕺 #CoupleDance #SangeetNight',
    likes: '35.1K',
    comments: '1.4K',
    tag: 'Couple Joy',
    category: 'sangeet',
  },
  {
    id: 'ig-6',
    image: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
    caption: 'Sacred Venkateswara Tirupati Namam mandapam glowing with thousands of yellow marigolds and traditional brass diya lamps for the auspicious Muhurtham. #TirupatiNamam #SacredMuhurtham',
    likes: '22.5K',
    comments: '890',
    tag: 'Tirupati Namam',
    category: 'mandap',
  },
  {
    id: 'ig-7',
    image: '/assets/instagram/sampradaya_white_lotus_stage.png',
    caption: 'Grand White Lotus stage scenography with cascading fragrant jasmine trails and royal pink orchids for an unforgettable sovereign evening ✨🪷 #WhiteLotus #ReceptionLuxe',
    likes: '25.3K',
    comments: '912',
    tag: 'White Lotus Stage',
    category: 'reception',
  },
  {
    id: 'ig-8',
    image: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
    caption: 'Auspicious Pellikuthuru & Haldi festivities! Handcrafted white floral peacocks and traditional yellow chevron backdrop with family blessings 🦚💛 #FloralPeacock #PelliKuthuru',
    likes: '13.7K',
    comments: '395',
    tag: 'Floral Peacock',
    category: 'haldi',
  },
  {
    id: 'ig-9',
    image: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
    caption: 'Illuminated gold pillar Ganesha sanctuary with floral backdrops and royal chandeliers for auspicious blessings and grand reception celebrations 👑🪔 #GoldGanesha #AuspiciousDecor',
    likes: '18.8K',
    comments: '490',
    tag: 'Gold Ganesha',
    category: 'reception',
  },
  {
    id: 'ig-10',
    image: '/assets/instagram/sampradaya_floral_elephant_traditional.png',
    caption: 'Majestic yellow marigold handcrafted elephant sculptures welcoming guests at the grand royal entrance. #GrandEntry #FloralElephant #RoyalWelcome',
    likes: '28.4K',
    comments: '1.2K',
    tag: 'Floral Elephant',
    category: 'entry',
  },
  {
    id: 'ig-11',
    image: '/assets/instagram/sampradaya_pastel_stage.png',
    caption: 'Romantic pastel floral arches and plush velvet seating pavilion for luxury cocktail and reception evenings 💐✨ #PastelLuxe #CocktailStage',
    likes: '21.0K',
    comments: '760',
    tag: 'Pastel Lounge',
    category: 'reception',
  },
  {
    id: 'ig-12',
    image: '/assets/instagram/traditional_marigold_diya_decor.jpg',
    caption: 'Traditional marigold floral arrangements and illuminated brass diyas for intimate family rituals and haldi celebrations 🪔✨ #HaldiDecor #MarigoldMagic',
    likes: '17.3K',
    comments: '510',
    tag: 'Marigold & Diya',
    category: 'haldi',
  },
];

export const InstagramLiveShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const filterTabs = [
    { id: 'all', label: 'All Instagram Posts (12)' },
    { id: 'mandap', label: 'Mandaps & Muhurthams' },
    { id: 'haldi', label: 'Haldi & Mehendi' },
    { id: 'reception', label: 'Receptions & Scenography' },
    { id: 'sangeet', label: 'Sangeet Nights' },
    { id: 'entry', label: 'Grand Entries & Varmala' },
  ];

  const filteredPosts = INSTAGRAM_POSTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const handleOpenPhoto = (idx: number) => {
    setActivePhotoIndex(idx);
    setLightboxOpen(true);
  };

  const handleOpenStory = (postIndex: number) => {
    setActivePhotoIndex(postIndex);
    setLightboxOpen(true);
  };

  const lightboxImages = filteredPosts.map((p) => ({
    url: p.image,
    caption: p.caption,
  }));

  return (
    <section className="relative py-24 bg-paper-texture overflow-hidden border-t-2 border-[#C9A24B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Official Instagram Portfolio"
          scriptKicker="The Visual Chronicle"
          title="Curated Glimpses from"
          titleHighlight="@sampradayaevents"
          description="Follow Hyderabad’s leading wedding curators for daily decor blueprints, live Muhurtham time-lapses, and real celebration magic."
        />

        {/* Instagram Profile Header Badge */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-[#C9A24B]/50 shadow-festive flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />

          <div className="flex items-center gap-5">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#F4B63F] via-[#E8833A] to-[#7A1F2B] p-1 shadow-royal shrink-0">
              <img
                src="/assets/sampradaya-logo.png"
                alt="Sampradaya Events Logo"
                className="w-full h-full object-contain rounded-full bg-[#2B1810]"
              />
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="font-cormorant font-bold text-2xl text-[#2B1810]">
                  sampradayaevents
                </h3>
                <span className="p-0.5 rounded-full bg-blue-500 text-white shadow-sm" title="Verified Creator">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#7A1F2B] text-[#FFFBF5]">
                  Verified
                </span>
              </div>
              <p className="text-xs text-[#7E6356] font-serif">
                Sampradaya Events • Luxury Wedding & Scenography Curators, Hyderabad
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-5 text-xs text-[#2B1810] font-sans pt-1">
                <span><strong className="font-bold text-[#7A1F2B]">850+</strong> posts</span>
                <span><strong className="font-bold text-[#7A1F2B]">31,200+</strong> followers</span>
                <span><strong className="font-bold text-[#7A1F2B]">100%</strong> Muhurtham Accuracy</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/sampradayaevents/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7A1F2B] via-[#942B39] to-[#7A1F2B] text-white font-serif font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-royal transition-all border border-[#C9A24B]/50"
          >
            <InstagramIcon className="w-4 h-4 text-[#F4B63F]" />
            <span>Follow @sampradayaevents</span>
            <ArrowUpRight className="w-4 h-4 text-[#F4B63F]" />
          </a>
        </div>

        {/* Instagram Story Highlights Tray */}
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7A1F2B] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B63F]" />
              <span>Instagram Story Highlights</span>
            </span>
            <span className="text-[11px] text-[#7E6356] font-serif italic">
              Click to view celebration stories
            </span>
          </div>

          <div className="flex items-center gap-5 overflow-x-auto pb-4 pt-1 px-2 scrollbar-none">
            {STORY_HIGHLIGHTS.map((story) => (
              <button
                key={story.id}
                onClick={() => handleOpenStory(story.postIndex)}
                className="flex flex-col items-center gap-1.5 shrink-0 group"
              >
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[3px] bg-gradient-to-tr from-[#F4B63F] via-[#E8833A] to-[#7A1F2B] shadow-md group-hover:scale-108 transition-transform">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-[#2B1810]">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-serif font-semibold text-[#2B1810] group-hover:text-[#7A1F2B] transition-colors whitespace-nowrap">
                  {story.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === tab.id
                  ? 'bg-[#7A1F2B] text-[#FFFBF5] border-[#C9A24B] shadow-md scale-105'
                  : 'bg-white text-[#5C3820] border-[#C9A24B]/30 hover:border-[#C9A24B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 12-Post Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] border-2 border-[#C9A24B]/40 shadow-festive bg-[#2B1810] cursor-pointer hover:shadow-royal hover:border-[#F4B63F] transition-all duration-500"
              onClick={() => handleOpenPhoto(idx)}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white" />

              {/* Tag Pill */}
              <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-[#7A1F2B]/95 backdrop-blur-md border border-[#F4B63F]/50 text-[10px] uppercase font-bold tracking-widest text-[#F4B63F] shadow-md">
                {post.tag}
              </div>

              {post.isVideo && (
                <div className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-black/70 text-white backdrop-blur-sm border border-white/20">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
              )}

              {/* Hover Details */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2.5">
                <p className="font-serif text-xs text-[#FFFBF5] line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs text-[#F4B63F]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#F4B63F]" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#FFFBF5]">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-[#F4B63F] flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Zoom
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={activePhotoIndex}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </section>
  );
};
