import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { EventTypeSelectPage } from './pages/EventTypeSelectPage';
import { CustomerAuthPage } from './pages/CustomerAuthPage';
import { SlotBookingPage } from './pages/SlotBookingPage';
import { BookingConfirmationPage } from './pages/BookingConfirmationPage';
import { MyBookingsPage } from './pages/MyBookingsPage';
import { BrandedLoader } from './components/common/BrandedLoader';
import { PetalCelebrationCanvas } from './components/common/PetalCelebrationCanvas';
import { ScrollToTop } from './components/common/ScrollToTop';
import { useLenis } from './hooks/useLenis';

export const App: React.FC = () => {
  // Initialize Lenis smooth scrolling
  useLenis();

  const [hasLoaded, setHasLoaded] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FBF4E6] flex flex-col justify-between text-[#2B1810] relative selection:bg-[#7A1F2B] selection:text-[#FFFBF5]">
      {/* 1. Initial Branded Loader */}
      {!hasLoaded && <BrandedLoader onComplete={() => setHasLoaded(true)} />}

      {/* 2. Festive Marigold & Rose Petals Falling Celebration Canvas */}
      <PetalCelebrationCanvas />

      {/* 5. Automatic Smooth Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Top Ornate Toran Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1F2B] via-[#F4B63F] to-[#7A1F2B] z-[60]" />

      {/* Luxury Sticky Navbar */}
      <Navbar />

      {/* Main Customer Viewport with Page Transitions */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/events" element={<EventTypeSelectPage />} />
              <Route path="/auth" element={<CustomerAuthPage />} />
              <Route path="/book-slot" element={<SlotBookingPage />} />
              <Route path="/confirmation" element={<BookingConfirmationPage />} />
              <Route path="/my-bookings" element={<MyBookingsPage />} />

              {/* Aliases for direct deep link navigation */}
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/services" element={<Navigate to="/#services" replace />} />
              <Route path="/gallery" element={<Navigate to="/#portfolio" replace />} />
              <Route path="/portfolio" element={<Navigate to="/#portfolio" replace />} />
              <Route path="/testimonials" element={<Navigate to="/#testimonials" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
