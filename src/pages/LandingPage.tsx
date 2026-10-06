import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustStripSection } from '../components/sections/TrustStripSection';
import { CelebrityVipTrustSection } from '../components/sections/CelebrityVipTrustSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CelebrationBentoGallery } from '../components/sections/CelebrationBentoGallery';
import { ServicesSection } from '../components/sections/ServicesSection';
import { HowWeWorkSection } from '../components/sections/HowWeWorkSection';
import { ThemesShowcaseSection } from '../components/sections/ThemesShowcaseSection';
import { MuhurthamPanchangamWidget } from '../components/sections/MuhurthamPanchangamWidget';
import { BespokeBudgetCalculator } from '../components/sections/BespokeBudgetCalculator';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { InstagramLiveShowcase } from '../components/sections/InstagramLiveShowcase';
import { ReelsSection } from '../components/sections/ReelsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqSection } from '../components/sections/FaqSection';
import { ContactSection } from '../components/sections/ContactSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="space-y-0 animate-in fade-in duration-500">
      {/* 1. 3D Corridor Hero */}
      <HeroSection />

      {/* 2. Trust Strip & Verified Stats */}
      <TrustStripSection />

      {/* 3. Celebrity & Tollywood High-Profile Trust Showcase */}
      <CelebrityVipTrustSection />

      {/* 4. About Section with Indian Arched Multi-Image Scenography */}
      <AboutSection />

      {/* 5. Grand Asymmetric Celebration Bento Archive */}
      <CelebrationBentoGallery />

      {/* 6. 10 Curated Luxury Services */}
      <ServicesSection />

      {/* 7. How We Work (Ideate, Improvise, Impress Timeline) */}
      <HowWeWorkSection />

      {/* 8. Themes & Scenography Showcase with Before/After Toggle */}
      <ThemesShowcaseSection />

      {/* 8. Telugu Panchangam & Auspicious Muhurtham Calendar */}
      <MuhurthamPanchangamWidget />

      {/* 9. Interactive Bespoke Scenography Budget Estimator */}
      <BespokeBudgetCalculator />

      {/* 10. Featured Real Weddings & Deep-Dive Case Studies */}
      <PortfolioSection />

      {/* 11. Live Instagram @sampradayaevents 31K Feed Showcase */}
      <InstagramLiveShowcase />

      {/* 12. Viral Instagram Reels Corridor */}
      <ReelsSection />

      {/* 13. Couple Testimonials Carousel */}
      <TestimonialsSection />

      {/* 14. Frequently Asked Questions */}
      <FaqSection />

      {/* 15. Private Consultation & Hyderabad Studio Map */}
      <ContactSection />
    </div>
  );
};

export default LandingPage;
