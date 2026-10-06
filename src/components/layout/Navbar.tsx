import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCustomerAuth } from '../../context/CustomerAuthContext';
import { MandalaLogo } from '../common/MandalaLogo';
import {
  Calendar,
  Sparkles,
  User,
  LogOut,
  Menu,
  X,
  BookmarkCheck,
  ArrowRight,
} from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

export const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useCustomerAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / winHeight) * 100)));
      }

      if (!isHomePage) {
        setActiveSection('');
        return;
      }

      const sectionIds = ['about', 'services', 'how-we-work', 'themes', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = scrollY + 220;

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      if (!current && scrollY + window.innerHeight >= document.documentElement.scrollHeight - 150) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.hash, location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const scrollToAnchor = (id: string) => {
    setIsMobileOpen(false);
    setActiveSection(id);
    if (!isHomePage) {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', action: () => scrollToAnchor('about') },
    { id: 'services', label: 'Services', action: () => scrollToAnchor('services') },
    { id: 'how-we-work', label: 'How We Work', action: () => scrollToAnchor('how-we-work') },
    { id: 'themes', label: 'Themes', action: () => scrollToAnchor('themes') },
    { id: 'portfolio', label: 'Portfolio', action: () => scrollToAnchor('portfolio') },
    { id: 'testimonials', label: 'Testimonials', action: () => scrollToAnchor('testimonials') },
    { id: 'contact', label: 'Contact', action: () => scrollToAnchor('contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120502]/95 backdrop-blur-2xl py-2.5 border-b border-[#F4B63F]/40 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
            : 'bg-[#140602]/85 backdrop-blur-xl py-3.5 border-b border-[#C9A24B]/30 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Royal Identity */}
          <MandalaLogo
            size="md"
            variant="light"
            showTagline={false}
          />

          {/* Desktop Navigation Links with Active Scrollspy Highlighting */}
          <nav className="hidden xl:flex items-center gap-1.5 text-[12px] font-serif font-medium uppercase tracking-[0.15em] bg-[#1C0D05]/60 p-1.5 rounded-full border border-[#C9A24B]/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={link.action}
                  className={`relative px-4 py-1.5 rounded-full transition-all duration-300 group select-none ${
                    isActive
                      ? 'text-[#F4B63F] font-bold drop-shadow-[0_0_8px_rgba(244,182,63,0.5)]'
                      : 'text-[#FFFBF5]/80 hover:text-[#FFFBF5]'
                  }`}
                >
                  {/* Animated Active Golden Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2B1006] via-[#4A2010] to-[#2B1006] border border-[#F4B63F]/80 shadow-[0_0_15px_rgba(244,182,63,0.35)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>

                  {/* Active Bottom Glow Dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F4B63F] shadow-[0_0_6px_#F4B63F]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}

                  {/* Hover Accent Dot when not active */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A24B] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </button>
              );
            })}

            {isAuthenticated && (
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'text-[#F4B63F] font-bold bg-[#2B1006] border border-[#F4B63F]/70'
                      : 'text-[#FFFBF5]/80 hover:text-[#F4B63F]'
                  }`
                }
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-[#E8833A]" />
                <span>My Bookings</span>
              </NavLink>
            )}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated && (
              <div className="flex items-center gap-3">
                <Link
                  to="/my-bookings"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1006]/90 border border-[#F4B63F]/50 text-xs text-[#FFFBF5] shadow-sm hover:border-[#F4B63F] transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-[#F4B63F]" />
                  <span className="font-serif font-bold tracking-wide">{user?.name}</span>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className="p-2 rounded-full hover:bg-rose-950/50 text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Gold "Book Now" CTA Button */}
            <Link
              to="/book-slot"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-serif font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                location.pathname === '/book-slot'
                  ? 'bg-gradient-to-r from-[#F4B63F] via-[#FFE8B4] to-[#F4B63F] text-[#1B0B04] shadow-[0_0_20px_rgba(244,182,63,0.6)] border-2 border-white'
                  : 'bg-gradient-to-r from-[#C9A24B] via-[#F4B63F] to-[#C9A24B] text-[#1B0B04] hover:brightness-110 shadow-[0_4px_18px_rgba(244,182,63,0.3)] border border-[#FFF8ED]/40'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#1B0B04]" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2.5 xl:hidden">
            <Link
              to="/book-slot"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#1B0B04] font-serif font-bold text-[11px] uppercase tracking-wider shadow-sm"
            >
              <Calendar className="w-3 h-3 text-[#1B0B04]" />
              <span>Book</span>
            </Link>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2.5 rounded-xl bg-[#2B1006]/90 border border-[#F4B63F]/50 text-[#FFFBF5] hover:text-[#F4B63F] transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Depth Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A24B] via-[#F4B63F] to-[#E8833A] shadow-[0_0_8px_#F4B63F]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] bg-[#1A0804] text-[#FFFBF5] flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between border-b border-[#C9A24B]/30 pb-4">
              <MandalaLogo size="sm" variant="light" />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2.5 rounded-full bg-[#2B1006] border border-[#F4B63F]/50 text-white"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links with Active State */}
            <div className="space-y-3 py-6">
              {navLinks.map((link, idx) => {
                const isActive = isHomePage && activeSection === link.id;

                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx }}
                    onClick={link.action}
                    className={`w-full text-left font-cormorant text-2xl font-bold tracking-wider py-2.5 px-4 rounded-2xl flex items-center justify-between transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2B1006] via-[#4A2010] to-[#2B1006] text-[#F4B63F] border border-[#F4B63F]/70 shadow-gold'
                        : 'text-[#FFFBF5]/85 hover:text-[#F4B63F] border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs ${isActive ? 'text-[#F4B63F] scale-125' : 'text-[#C9A24B]/60'}`}>
                      {isActive ? '✦' : '❖'}
                    </span>
                  </motion.button>
                );
              })}

              {isAuthenticated && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-2"
                >
                  <Link
                    to="/my-bookings"
                    onClick={() => setIsMobileOpen(false)}
                    className="block font-cormorant text-2xl font-bold text-[#F4B63F] py-2 px-4 rounded-2xl bg-[#2B1006] border border-[#F4B63F]/40"
                  >
                    My Bookings ({user?.name})
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="space-y-4 border-t border-[#C9A24B]/30 pt-6">
              <Link
                to="/book-slot"
                onClick={() => setIsMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#C9A24B] to-[#F4B63F] text-[#1B0B04] font-serif font-bold text-xs uppercase tracking-widest shadow-royal"
              >
                <Calendar className="w-4 h-4 text-[#1B0B04]" />
                <span>Reserve Auspicious Slot</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-xs text-[#F5EBD7]/70 font-serif">
                <span>{SITE_DATA.config.contact.phoneFormatted}</span>
                <span>{SITE_DATA.config.contact.address.area}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
