import {
  ServiceItem,
  ProcessStep,
  DecorTheme,
  PortfolioProject,
  ReelItem,
  TestimonialItem,
  FaqItem,
  AwardBadge,
} from '../types';

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    positioning: string;
    establishedYear: number;
    instagramHandle: string;
    instagramFollowers: string;
    verified: boolean;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappLink: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
    };
    googleMapsEmbedUrl: string;
    hours: string;
  };
  stats: {
    yearsExperience: number;
    eventsPlanned: number;
    happyCouples: number;
    instagramCommunity: string;
  };
  awardsConfig: {
    showAwards: boolean;
    awards: AwardBadge[];
  };
  founder: {
    name: string;
    role: string;
    signatureText: string;
    note: string;
    image: string;
  };
  audio: {
    title: string;
    subtitle: string;
    src: string;
  };
}

export const SITE_DATA: {
  config: SiteConfig;
  services: ServiceItem[];
  processSteps: ProcessStep[];
  decorThemes: DecorTheme[];
  portfolioProjects: PortfolioProject[];
  reels: ReelItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
} = {
  config: {
    brand: {
      name: 'Sampradaya Events',
      tagline: 'IDEATE . IMPROVISE . IMPRESS',
      positioning: 'Creating everlasting impact on your BIG day.',
      establishedYear: 2014,
      instagramHandle: '@sampradayaevents',
      instagramFollowers: '31K+',
      verified: true,
    },
    contact: {
      phone: '+919618989007',
      phoneFormatted: '+91 96189 89007',
      whatsappNumber: '919618989007',
      whatsappLink:
        'https://wa.me/919618989007?text=Namaste%20Sampradaya%20Events%2C%20I%20would%20like%20to%20inquire%20about%20planning%20our%20celebration.',
      email: 'celebrations@sampradayaevents.com',
      address: {
        line1: 'Plot No. 42, Vaikuntam Enclave',
        line2: 'Near Cyber Towers, Hitech City Main Road',
        area: 'Madhapur - Gachibowli Corridor',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: '500081',
      },
      googleMapsEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3377759885237!2d78.37923707516624!3d17.443542283453313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e00bdf19fd%3A0x6b450280f5cfa419!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      hours: 'Mon - Sun: 09:00 AM - 09:00 PM IST (Consultations by Appointment)',
    },
    stats: {
      yearsExperience: 12,
      eventsPlanned: 850,
      happyCouples: 750,
      instagramCommunity: '31,200+',
    },
    awardsConfig: {
      showAwards: true,
      awards: [
        {
          id: 'award-1',
          title: 'Best Luxury Wedding Curator',
          issuer: 'Telangana Wedding Excellence Awards',
          year: '2025',
          icon: 'Crown',
        },
        {
          id: 'award-2',
          title: 'Excellence in Vedic Heritage Mandap Design',
          issuer: 'South India Event Conclave',
          year: '2024',
          icon: 'Sparkles',
        },
        {
          id: 'award-3',
          title: 'Top Rated Destination Wedding Planner',
          issuer: 'Luxury Bridal Guild Hyderabad',
          year: '2023',
          icon: 'HeartHandshake',
        },
      ],
    },
    founder: {
      name: 'Radhika & Vamshi Krishna',
      role: 'Founders & Principal Event Architects',
      signatureText: 'Radhika & Vamshi Krishna',
      note: 'Every wedding is a sacred tapestry of two lineages uniting. For over a decade across Hyderabad palaces and destination venues, we have honored age-old traditions with modern luxury scenography. We craft not just events, but emotionally transcendent milestones.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=800',
    },
    audio: {
      title: 'Auspicious Classical Raga',
      subtitle: 'Shehnai & Sitar Harmony',
      src: 'https://cdn.freesound.org/previews/573/573381_11861866-lq.mp3',
    },
  },

  services: [
    {
      id: 'grand-vedic-weddings',
      title: 'Grand Vedic Weddings',
      shortDesc: 'Regal Telugu & South Indian Vedic Muhurtham ceremonies with authentic floral architecture.',
      fullDesc:
        'Complete end-to-end royal wedding curation. From astrologically aligned Muhurtham logistics and sacred Agni mandaps to grand Baraat processions and guest hospitality across Hyderabad palaces.',
      eventType: 'Wedding',
      image: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
      features: [
        'Custom Hand-Carved & Floral Mandaps',
        'Vedic Muhurtham Stage Choreography',
        'Purohit & Pandit Coordination',
        'Royal Varmala & Grand Entries',
        'End-to-End Guest Hospitality Management',
      ],
      tag: 'Flagship Signature',
      popular: true,
    },
    {
      id: 'palatial-receptions',
      title: 'Palatial Receptions & Galas',
      shortDesc: 'Cinematic evening banquets with grand stage scenography, intelligent lighting & gourmet dining.',
      fullDesc:
        'Transform vast banquet halls and outdoor lawns into royal wonderlands. We orchestrate magnificent stage backdrops, ambient chandeliers, red-carpet entrances, and world-class live entertainment.',
      eventType: 'Reception',
      image: '/assets/instagram/sampradaya_white_lotus_stage.png',
      features: [
        'Couture Stage & Backdrop Architecture',
        'Concert-Grade Intelligent Moving Lights',
        'Red Carpet Photo Pavilions',
        'Live Symphony & Celebrity Artists',
        'Luxury Table Scapes & Crystal Centerpieces',
      ],
      tag: 'Grand Evening',
      popular: true,
    },
    {
      id: 'haldi-mangala-snanam',
      title: 'Haldi & Mangala Snanam',
      shortDesc: 'Auspicious turmeric blessings, marigold cascades, traditional brass urulis, and joyful flower showers.',
      fullDesc:
        'Infuse sacred turmeric rituals with vibrant marigold cascades, handcrafted brass urulis, floral jewelry, auspicious Vedic chanting, and festive family celebrations designed for everlasting memories.',
      eventType: 'Haldi',
      image: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
      features: [
        'Fresh South Indian Marigold & Jasmine Theming',
        'Ornate Handcrafted Brass Urulis & Traditional Jhoolas',
        'Sacred Petal Showers (Pushpa Vrishti) & Organic Turmeric',
        'Photobooths with Temple Bell Props & Floral Backdrops',
        'Pelli Koduku / Pelli Kooturu Ritual Staging',
      ],
      tag: 'Sunlit Joy',
    },
    {
      id: 'mehendi-soiree',
      title: 'Mehendi & Henna Soirees',
      shortDesc: 'Bohemian-traditional canopies, vibrant colorful drapes, live folk music and bespoke henna bars.',
      fullDesc:
        'A festival of laughter and art. We create relaxed Moroccan-Indian lounge seating, vibrant shamiyana tents, live bangle and parandi stalls, and premium henna master artists.',
      eventType: 'Mehendi',
      image: '/assets/instagram/sampradaya_green_canopy_walkway.png',
      features: [
        'Lounge Drapes, Diwans & Silk Cushions',
        'Renowned Henna & Mehendi Artists',
        'Live Bangle Making & Favor Stations',
        'Folk Singers & Acoustic Live Stalls',
        'Chic Floral Jewelry & Hair Styling Corners',
      ],
      tag: 'Vibrant Celebration',
    },
    {
      id: 'royal-sangeet-night',
      title: 'Royal Sangeet & Musical Nights',
      shortDesc: 'Concert-grade sound, high-res curved LED walls, DJ consoles, and electrifying stage choreography.',
      fullDesc:
        'Turn your pre-wedding night into an unforgettable stadium concert. Complete with celebrity choreographers, pyrotechnics, moving heads, cold sparks, and customized dance performance flows.',
      eventType: 'Sangeet',
      image: '/assets/instagram/sampradaya_couple_dance.png',
      features: [
        'High-Resolution Curved LED Backdrop Walls',
        'Professional Sound & Line-Array Systems',
        'Family Dance Choreography Direction',
        'Cold Pyro, CO2 Jets & Stage Fog FX',
        'DJ & Celebrity Emcee Curation',
      ],
      tag: 'High Energy',
      popular: true,
    },
    {
      id: 'engagements-roka',
      title: 'Engagements & Ring Ceremonies',
      shortDesc: 'Romantic pastel floral arches, intimate stage setups, and grand formal introductions.',
      fullDesc:
        'Celebrate the beginning of togetherness with tasteful romantic florals, customized neon monogram arches, champagne toast coordination, and graceful family exchanges.',
      eventType: 'Engagement',
      image: '/assets/instagram/sampradaya_pastel_stage.png',
      features: [
        'Romantic Floral Arches & Monograms',
        'Ring Exchange Stage Reveal Dynamics',
        'Custom Invitation & Video Screens',
        'Fine Dining & Live Mocktail Bars',
        'Professional Candid Photography Scrims',
      ],
      tag: 'Romantic Milestone',
    },
    {
      id: 'sacred-ceremonies',
      title: 'Sacred Ceremonies & Muhurthams',
      shortDesc: 'Gruhapravesham, Upanayanam, Satyanarayana Vratam, and auspicious milestone rituals.',
      fullDesc:
        'Rooted deeply in Telugu and Vedic traditions. We ensure flawless ritual arrangements, sacred homam havan setups, traditional kolam rangolis, thoranams, and traditional satvik feast catering management.',
      eventType: 'Ceremony',
      image: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
      features: [
        'Homam & Puja Staging with Brass Diya Lighting',
        'Mango Leaf Thoranams & Fresh Flower Garlands',
        'Rangoli & Kolam Floor Artistry',
        'Purohit & Prasadam Logistics',
        'Traditional Seating & Banana Leaf Dining Setup',
      ],
      tag: 'Sacred Tradition',
    },
    {
      id: 'decor-and-theming',
      title: 'Bespoke Decor & Scenography',
      shortDesc: 'Custom 3D-modeled floral installations, thematic walkways, architectural lighting, and mandaps.',
      fullDesc:
        'From conceptual sketch to physical reality. Our in-house decor craftspeople and floral artisans create breathtaking bespoke structures, floral ceilings, mirror pathways, and thematic installations.',
      eventType: 'Decor & Theming',
      image: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
      features: [
        '3D Renderings & Mood-Board Design',
        'Exotic Imported & Organic Floral Artistry',
        'Bespoke Metal, Wood & Acrylic Fabrication',
        'Fairy Light Tunnels & Ambient Chandeliers',
        'Custom Photo Booths & Memory Galleries',
      ],
      tag: 'Design Studio',
    },
    {
      id: 'corporate-vip-events',
      title: 'Corporate & VIP Galas',
      shortDesc: 'High-profile corporate annual meets, awards nights, product launches, and dignitary banquets.',
      fullDesc:
        'Polished executive event management with seamless audio-visual control, VIP protocol assistance, stage production, and brand-aligned ambiance.',
      eventType: 'Corporate',
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=85&w=1200',
      features: [
        'Corporate Stage & Keynote AV Rigs',
        'Dignitary & VIP Protocol Management',
        'Awards Trophy & Felicitation Flow',
        'Live Multi-Cam Streaming & Recording',
        'Networking Lounge & Cocktail Setup',
      ],
      tag: 'Executive Precision',
    },
    {
      id: 'wedding-stationery',
      title: 'Luxury Stationery & Royal Invites',
      shortDesc: 'Handcrafted boxed invitations, brass embossed scroll invites, wax seals, and digital portals.',
      fullDesc:
        'Make the first impression unforgettable with bespoke wedding stationery, personalized family heraldry, gold foil stamping, custom illustrated itineraries, and RSVP guest portals.',
      eventType: 'Wedding Stationery',
      image:
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=85&w=1200',
      features: [
        'Handmade Paper & Gold Leaf Letterpress',
        'Royal Boxed Invites with Mithai / Dry Fruits',
        'Custom Wax Seal Monograms & Ribbons',
        'Digital Video Save-The-Dates & Websites',
        'Event Stationery (Place cards, Menus, Signage)',
      ],
      tag: 'Artisan Heritage',
    },
  ],

  processSteps: [
    {
      step: '01',
      title: 'IDEATE',
      subtitle: 'Visioning & Astrological Muhurtham Alignment',
      description:
        'We begin with a personalized listening session. Understanding your family traditions, Muhurtham timings, venue preferences, and dream aesthetics.',
      iconName: 'Sparkles',
      details: [
        'Comprehensive 1-on-1 discovery meeting',
        'Muhurtham astrological calendar cross-check',
        'Budget blueprinting and transparent slot scoping',
      ],
    },
    {
      step: '02',
      title: 'DESIGN',
      subtitle: '3D Concept Scenography & Custom Mood Boards',
      description:
        'Our creative team translates your vision into photorealistic 3D renders, floral color palettes, entrance walkways, and mandap architecture.',
      iconName: 'Palette',
      details: [
        'Bespoke 3D walkthroughs of the venue',
        'Color swatch & flower sample curation',
        'Lighting, sound, and stage layout blueprints',
      ],
    },
    {
      step: '03',
      title: 'IMPROVISE',
      subtitle: 'Precision Vendor Symphony & Dynamic Logistics',
      description:
        'From caterers and florists to light technicians and artists, we align Hyderabad’s top vendors into one synchronized symphony, anticipating every contingency.',
      iconName: 'CalendarCheck',
      details: [
        'Vetted vendor contracts & timeline locks',
        'Comprehensive contingency & weather planning',
        'VIP guest hospitality & convoy management',
      ],
    },
    {
      step: '04',
      title: 'EXECUTE',
      subtitle: 'Flawless Muhurtham Day Orchestration',
      description:
        'On your big day, our dedicated shadow leads manage every micro-moment so your family can immerse wholly in the sacred emotions without a single worry.',
      iconName: 'Flame',
      details: [
        'Dedicated Bride & Groom shadow coordinators',
        'Precision minute-by-minute ritual cueing',
        'Live guest concierge and banquet monitoring',
      ],
    },
    {
      step: '05',
      title: 'IMPRESS',
      subtitle: 'Everlasting Impact & Treasured Memories',
      description:
        'The culmination of effortless luxury. Guests leave spellbound by the warmth and splendor, leaving you with eternal memories to cherish for generations.',
      iconName: 'HeartHandshake',
      details: [
        'Post-event wrap-up & asset handover',
        'Express raw photo/video reels delivery',
        'Lifelong family connection with Sampradaya',
      ],
    },
  ],

  decorThemes: [
    {
      id: 'traditional',
      name: 'Vedic Royal Heritage',
      tagline: 'Timeless South Indian Grandeur with Fresh Florals & Antique Brass',
      description:
        'Rich crimson, marigold, and temple-gold aesthetics inspired by historic South Indian temples and royal palaces. Features fragrant Mysore jasmine, Chettinad carved pillars, floating lotus urulis, and warm brass diya illumination.',
      palette: [
        { name: 'Deep Maroon', hex: '#7A1F2B' },
        { name: 'Marigold Yellow', hex: '#F4B63F' },
        { name: 'Antique Temple Gold', hex: '#C9A24B' },
        { name: 'Vedic Vermilion', hex: '#C0392B' },
        { name: 'Sacred Ivory', hex: '#FBF4E6' },
      ],
      elements: [
        'Hand-carved wooden mandap columns with gold leafing',
        'Cascading strings of fresh Mysore Jasmine & Genda Phool',
        'Giant antique brass Kuthu Vilakku oil lamps',
        'Lotus floral ponds with floating oil diyas',
        'Silk brocade & raw silk drapes with zari borders',
      ],
      images: [
        {
          url: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
          caption: 'Carved White Temple Gopuram Mandapam with Red Rose Garlands',
          tag: 'Mandap Architecture',
        },
        {
          url: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
          caption: 'Sacred Venkateswara Namam Sanctum with Marigold Garlands',
          tag: 'Sacred Mandap',
        },
        {
          url: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
          caption: 'Illuminated Gold Pillar Ganesha Sanctuary',
          tag: 'Ritual Sanctum',
        },
        {
          url: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
          caption: 'Handcrafted White Floral Peacock Ceremony Backdrop',
          tag: 'Royal Stage',
        },
      ],
      beforeAfter: {
        beforeImage:
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=85&w=1200',
        afterImage: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
        venueName: 'Hyderabad Palace & Heritage Convention Grounds',
        transformationNote:
          'Converted an open ground into a grand South Indian temple sanctum featuring carved white gopuram structures, auspicious banana trees, and fresh red rose garlands.',
      },
    },
    {
      id: 'modern',
      name: 'Contemporary Royal Luxe',
      tagline: 'Modern Elegance, Crystal Chandeliers & Dreamy Pastel Florals',
      description:
        'Sleek modern aesthetics featuring soft blush, champagne, and gold palettes. Designed for glamorous evening receptions, Sangeet galas, and high-fashion wedding banquets.',
      palette: [
        { name: 'Champagne Gold', hex: '#DFB15B' },
        { name: 'Blush Rose', hex: '#E8B4B8' },
        { name: 'Ivory Frost', hex: '#FFFBF5' },
        { name: 'Emerald Velvet', hex: '#1E3F20' },
        { name: 'Midnight Cocoa', hex: '#2B1810' },
      ],
      elements: [
        'Curved acrylic stages with mirror floor aisles',
        'Suspended crystal chandeliers with ambient warm fairy mesh',
        'Imported Dutch hydrangeas, peony, and pastel rose arches',
        'Intelligent beam light mapping and custom monogram gobo projections',
        'Velvet lounge seating with gold accent geometry',
      ],
      images: [
        {
          url: '/assets/instagram/sampradaya_white_lotus_stage.png',
          caption: 'Grand White Lotus Reception Stage with Orchid Florals',
          tag: 'Reception Grandeur',
        },
        {
          url: '/assets/instagram/sampradaya_enchanted_reception_stage.png',
          caption: 'Enchanted Forest Reception Ballroom with Crystal Chandeliers',
          tag: 'Ballroom Scenography',
        },
        {
          url: '/assets/instagram/sampradaya_couple_dance.png',
          caption: 'Celebration Sangeet Stage with Electrifying Energy',
          tag: 'Sangeet Stage',
        },
        {
          url: '/assets/instagram/sampradaya_pastel_stage.png',
          caption: 'Pastel Floral Tunnel & Seating Lounge',
          tag: 'Cocktail Lounge',
        },
      ],
      beforeAfter: {
        beforeImage:
          'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=1200',
        afterImage: '/assets/instagram/sampradaya_white_lotus_stage.png',
        venueName: 'Hyderabad Luxury Convention Center',
        transformationNote:
          'Created a breathtaking lotus-inspired sovereign stage with cascading jasmine and exotic orchids against pure ambient backdrops.',
      },
    },
  ],

  portfolioProjects: [
    {
      id: 'ananya-siddharth-taj-falaknuma',
      title: 'The Sovereign Gopuram & Namam Sanctum',
      couplesNames: 'Ananya & Siddharth',
      category: 'Weddings',
      venue: 'Hyderabad Palace & Heritage Lawns',
      location: 'Hyderabad',
      date: 'February 2025',
      guestCount: '650 Royalty & Dignitaries',
      theme: 'Vedic Gopuram & Sacred Tirupati Namam Architecture',
      coverImage: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
      story:
        'A 3-day royal extravaganza. From a sacred Vedic Mandap ceremony with traditional Mangala Vaadhyam to a majestic Gopuram Muhurtham amidst thousands of fragrant roses and royal shehnai maestros.',
      highlights: [
        'Carved South Indian temple gopuram sanctum architecture',
        'Divine Venkateswara Tirupati Namam altar with marigold cascades',
        'Traditional brass Kuthu Vilakku and Agni Kundam layout',
        'Auspicious plantain trees and fresh red rose garlands',
      ],
      photos: [
        {
          url: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
          caption: 'Carved White Gopuram Mandapam Sanctum',
          aspect: 'wide',
        },
        {
          url: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
          caption: 'Sacred Venkateswara Namam Sanctum with Marigold Florals',
          aspect: 'tall',
        },
        {
          url: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
          caption: 'Illuminated Gold Ganesha Sanctuary Stage',
          aspect: 'tall',
        },
        {
          url: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
          caption: 'Floral Peacock Ceremony Backdrop',
          aspect: 'wide',
        },
        {
          url: '/assets/instagram/sampradaya_white_lotus_stage.png',
          caption: 'Grand White Lotus Reception Stage',
          aspect: 'wide',
        },
      ],
    },
    {
      id: 'kavya-rohan-hicc-grand-reception',
      title: 'Grand Lotus Sovereign Reception',
      couplesNames: 'Kavya & Rohan',
      category: 'Receptions',
      venue: 'Novotel HICC Ballroom',
      location: 'Madhapur - Hitech City, Hyderabad',
      date: 'December 2024',
      guestCount: '1,200 Distinguished Guests',
      theme: 'White Lotus Elegance & Modern Royal Scenography',
      coverImage: '/assets/instagram/sampradaya_white_lotus_stage.png',
      story:
        'A magnificent high-production reception welcoming over a thousand guests. Featuring a grand white lotus centerpiece, cascading jasmine trails, and exotic pink orchid arrangements.',
      highlights: [
        'Majestic multi-tiered carved lotus stage backdrop',
        'Cascading jasmine strings and imported pink orchids',
        'Gourmet 8-cuisine live chef stations curated for 1,200 guests',
        'Ambient lighting and crystal chandelier ceiling canopy',
      ],
      photos: [
        {
          url: '/assets/instagram/sampradaya_white_lotus_stage.png',
          caption: 'Grand White Lotus Reception Stage with Orchid Blooms',
          aspect: 'wide',
        },
        {
          url: '/assets/instagram/sampradaya_enchanted_reception_stage.png',
          caption: 'Enchanted Forest Reception Ballroom with Crystal Chandeliers',
          aspect: 'wide',
        },
        {
          url: '/assets/instagram/sampradaya_couple_dance.png',
          caption: 'Couple First Dance on the Gala Stage',
          aspect: 'tall',
        },
      ],
    },
    {
      id: 'divya-vikram-marigold-haldi',
      title: 'Auspicious Peacock & Turmeric Celebration',
      couplesNames: 'Divya & Vikram',
      category: 'Ceremonies',
      venue: 'Fort Grand Resort & Palace Lawns',
      location: 'Shamshabad, Hyderabad',
      date: 'January 2025',
      guestCount: '350 Loved Ones',
      theme: 'Traditional Chevron Florals & Hand-Woven Peacocks',
      coverImage: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
      story:
        'A divine celebration filled with authentic Vedic rituals. Fresh yellow chevron florals, handcrafted white flower peacocks, traditional brass urulis, and sacred chanting made this an auspicious milestone.',
      highlights: [
        'Handcrafted white floral peacock sculptures and yellow chevron wall',
        'Customized brass urulis with fresh rose & lotus petals',
        'Sacred Pushpa Vrishti petal shower during the ceremony',
        'South Indian feast served on traditional banana leaves',
      ],
      photos: [
        {
          url: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
          caption: 'Auspicious Floral Peacock Ceremony & Family Blessings',
          aspect: 'tall',
        },
        {
          url: '/assets/instagram/sampradaya_ganesha_gold_stage.png',
          caption: 'Illuminated Gold Ganesha Blessing Altar',
          aspect: 'wide',
        },
        {
          url: '/assets/instagram/sampradaya_green_canopy_walkway.png',
          caption: 'Mint Green Canopy Entryway with Temple Bells',
          aspect: 'wide',
        },
        {
          url: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
          caption: 'Sacred Venkateswara Namam Sanctum',
          aspect: 'wide',
        },
      ],
    },
  ],

  reels: [
    {
      id: 'reel-1',
      title: 'Carved White Gopuram Mandapam Setup 🛕🌸',
      views: '2.8M views',
      duration: '0:34',
      videoThumb: '/assets/instagram/sampradaya_white_temple_gopuram_mandap.png',
      instagramUrl: 'https://www.instagram.com/sampradayaevents',
      tag: 'Trending Reel',
    },
    {
      id: 'reel-2',
      title: 'Sacred Venkateswara Namam Mandap with Marigolds ✨🪔',
      views: '2.1M views',
      duration: '0:28',
      videoThumb: '/assets/instagram/sampradaya_venkateswara_namam_mandap.png',
      instagramUrl: 'https://www.instagram.com/sampradayaevents',
      tag: 'Viral Moment',
    },
    {
      id: 'reel-3',
      title: 'Grand White Lotus Reception Stage Reveal 🪷👑',
      views: '1.6M views',
      duration: '0:45',
      videoThumb: '/assets/instagram/sampradaya_white_lotus_stage.png',
      instagramUrl: 'https://www.instagram.com/sampradayaevents',
      tag: 'Behind The Scenes',
    },
    {
      id: 'reel-4',
      title: 'Auspicious Floral Peacock Ceremony 🦚💛',
      views: '950K views',
      duration: '0:30',
      videoThumb: '/assets/instagram/sampradaya_floral_peacock_ceremony.png',
      instagramUrl: 'https://www.instagram.com/sampradayaevents',
      tag: 'Tradition & Joy',
    },
  ],

  testimonials: [
    {
      id: 'test-1',
      names: 'Ananya & Siddharth Reddy',
      eventType: '3-Day Royal Wedding & Reception',
      venue: 'Taj Falaknuma Palace, Hyderabad',
      date: 'February 2025',
      rating: 5,
      quote:
        '“Sampradaya Events did not just plan our wedding; they protected our family’s peace of mind. Radhika and Vamshi’s team treated every single Muhurtham ritual with reverence, while the decor made our international guests feel like they stepped into royal history. Flawless from start to finish!”',
      storySnippet:
        'Coordinated 450 VIP guests across 3 venues with precision timing and sacred Vedic decor.',
      coupleImage: '/assets/instagram/sampradaya_palace_mandap.jpg',
    },
    {
      id: 'test-2',
      names: 'Kavya & Rohan Singhania',
      eventType: 'Grand Sangeet & Reception Gala',
      venue: 'Novotel HICC & Hitex, Hyderabad',
      date: 'December 2024',
      rating: 5,
      quote:
        '“The stage, the lighting, the seamless flow of 1,200 guests—everything was like a dream. Their tagline ‘Ideate . Improvise . Impress’ is 100% genuine. When sudden rain threatened our lawn dinner, their team improvised within 20 minutes without anyone even noticing. Truly world class!”',
      storySnippet:
        'Orchestrated a 1,200 guest reception with live concert production and luxury catering management.',
      coupleImage: '/assets/instagram/sampradaya_pastel_stage.png',
    },
    {
      id: 'test-3',
      names: 'Divya & Vikram Rao',
      eventType: 'Traditional Telugu Wedding & Haldi',
      venue: 'Fort Grand Shamshabad, Hyderabad',
      date: 'January 2025',
      rating: 5,
      quote:
        '“Finding planners who understand both traditional Telugu Vedic rituals and contemporary luxury design is rare. Sampradaya nailed both! The fresh marigold cascades, the live Nadaswaram, and the digital slot tracking made the whole journey stress-free.”',
      storySnippet:
        'Bespoke traditional Muhurtham with 400+ kg fresh floral architecture.',
      coupleImage: '/assets/instagram/traditional_south_indian_kalyanam.jpg',
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      category: 'Pricing & Packages',
      question: 'How do you structure your wedding planning & decor fees?',
      answer:
        'We believe in complete transparency. We offer both comprehensive end-to-end wedding management packages and customized bespoke decor solutions. Our fees depend on guest scale, number of celebration days, complexity of decor scenography, and venue selection. We provide detailed line-item blueprints with zero hidden costs.',
    },
    {
      id: 'faq-2',
      category: 'Customization',
      question: 'Can we customize every element of the decor and theme?',
      answer:
        'Absolutely! Every Sampradaya event is unique. Our in-house design studio produces custom 3D renders, mood boards, floral swatches, and lighting schematics tailored to your personal love story and family traditions. We never use cookie-cutter templates.',
    },
    {
      id: 'faq-3',
      category: 'Destinations',
      question: 'Do you manage destination weddings outside Hyderabad?',
      answer:
        'Yes! While Hyderabad is our headquarters and home turf (with unmatched venue access across Falaknuma, ITC, Novotel, and palace resorts), our core team frequently curates destination weddings across Goa, Udaipur, Jaipur, Mahabalipuram, and international locales.',
    },
    {
      id: 'faq-4',
      category: 'Muhurtham & Timing',
      question: 'How do you handle precise Muhurtham timings (such as 3:00 AM or 4:30 AM)?',
      answer:
        'Telugu and South Indian Muhurthams often fall in auspicious early morning or midnight windows. Our team assigns dedicated ritual coordinators and Purohit liaisons who manage all sacred havan arrangements, floral offerings, and cueing so that your sacred moment is honoured to the exact minute.',
    },
    {
      id: 'faq-5',
      category: 'Bookings',
      question: 'How far in advance should we reserve our event date?',
      answer:
        'Due to high demand during auspicious Telugu wedding seasons (especially Karthika, Magha, and Vaisakha months), we recommend reserving your date 4 to 9 months in advance. You can use our online Slot Reservation portal on this site to check availability for Morning, Afternoon, or Evening slots.',
    },
    {
      id: 'faq-6',
      category: 'Pricing & Packages',
      question: 'What is the advance payment schedule?',
      answer:
        'We operate on a milestone-based payment structure: an initial booking deposit upon contract signing to lock the auspicious date, a phase payment upon 3D design and vendor confirmations, and a final balance prior to the wedding week.',
    },
  ],
};
