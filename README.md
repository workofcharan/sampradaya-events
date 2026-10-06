# Sampradaya Events — Luxury Customer Website

> **"IDEATE . IMPROVISE . IMPRESS"**  
> *Creating everlasting impact on your BIG day.*  
> Hyderabad’s premier luxury wedding and event planning company.

---

## 🏛️ Brand Overview

**Sampradaya Events** is a Hyderabad-based luxury wedding and event planning brand (Instagram [@sampradayaevents](https://www.instagram.com/sampradayaevents), 31K+ verified followers). This public customer-facing frontend is crafted with royal elegance, warm Vedic authenticity, and cinematic digital storytelling.

- **Color Palette**:
  - Sacred Ivory / Cream: `#FBF4E6` / `#FFFBF5`
  - Royal Deep Maroon: `#7A1F2B`
  - Vedic Vermilion: `#C0392B`
  - Auspicious Saffron: `#E8833A`
  - Marigold Gold: `#F4B63F`
  - Antique Gold: `#C9A24B`
  - Dark Cocoa: `#2B1810`
- **Typography**:
  - Headings: *Cormorant Garamond* & *Playfair Display*
  - Accents & Signatures: *Great Vibes* script
  - Body & UI: *Poppins*
- **Visual Scenography**: Gold hairline borders, rotating mandala watermarks, Indian architectural jharokha arches, paper grain texture, and smooth momentum scrolling.

---

## ⚡ Tech Stack

- **React 18 + TypeScript + Vite 6**
- **Tailwind CSS 3.4** (Custom luxury theme with royal shadows and colors)
- **Framer Motion** (Smooth section reveals, animated tagline cadence, modal spring dynamics)
- **Lenis** (Momentum smooth inertia scrolling)
- **Lucide Icons & Canvas Confetti**
- **React Router 6**

---

## 📂 Project Architecture

```
sampradaya-events/
├── public/
│   └── assets/                  # Logo, mandala artwork, and photography
├── src/
│   ├── components/
│   │   ├── common/              # MandalaSvg, MandalaLogo, MandalaWatermark, CustomCursor,
│   │   │                        # BackgroundMusic, BrandedLoader, Lightbox, CaseStudyModal,
│   │   │                        # MagneticButton, SectionHeading, FestiveDivider, StatusBadge
│   │   ├── layout/              # Navbar (blur-on-scroll + mobile menu), Footer
│   │   └── sections/            # HeroSection, TrustStripSection, AboutSection,
│   │                            # ServicesSection, HowWeWorkSection, ThemesShowcaseSection,
│   │                            # PortfolioSection, ReelsSection, TestimonialsSection,
│   │                            # FaqSection, ContactSection
│   ├── context/                 # CustomerAuthContext, BookingWizardContext
│   ├── data/
│   │   └── siteData.ts          # 🌟 CENTRAL CONTENT CONFIG (Client Editable)
│   ├── hooks/                   # useLenis (smooth momentum scroll)
│   ├── pages/                   # LandingPage, EventTypeSelectPage, CustomerAuthPage,
│   │                            # SlotBookingPage, BookingConfirmationPage, MyBookingsPage
│   ├── services/                # api.ts (backend bridge via VITE_API_URL + localStorage fallback)
│   ├── types/                   # TypeScript interfaces & domain types
│   ├── App.tsx                  # Root app layout with cursor, loader, audio, and routes
│   └── main.tsx
├── index.html                   # Fonts, OpenGraph, Schema.org LocalBusiness JSON-LD
└── tailwind.config.js           # Extended luxury design tokens
```

---

## 🛠️ Content Editing Guide (For Client)

All website content, metrics, phone numbers, awards, images, and services are consolidated in **`src/data/siteData.ts`**. You can modify this single file without touching any code or UI components:

| Content Item | Config Location in `siteData.ts` |
| :--- | :--- |
| **Phone & WhatsApp** | `SITE_DATA.config.contact.phone`, `SITE_DATA.config.contact.whatsappLink` |
| **Hyderabad Studio Address** | `SITE_DATA.config.contact.address` (Madhapur - Gachibowli) |
| **Trust Metrics** | `SITE_DATA.config.stats` (Years, Events Planned, Happy Couples, Followers) |
| **Award Badges** | `SITE_DATA.config.awardsConfig.showAwards` & `.awards` array |
| **Founder Note & Signature**| `SITE_DATA.config.founder` |
| **Services Catalog** | `SITE_DATA.services` (10 services with descriptions, features, tags) |
| **Process Steps (3 I's)** | `SITE_DATA.processSteps` (Ideate, Design, Improvise, Execute, Impress) |
| **Decor Themes** | `SITE_DATA.decorThemes` (Traditional Vedic & Modern Luxe swatches/photos) |
| **Portfolio & Case Studies**| `SITE_DATA.portfolioProjects` (Couple stories, venues, 6-10 photos each) |
| **Instagram Reels** | `SITE_DATA.reels` (Video preview thumbnails, view counts, titles) |
| **Testimonials Carousel** | `SITE_DATA.testimonials` (Couple portraits, quotes, ratings, venues) |
| **FAQs** | `SITE_DATA.faqs` (Categorized Q&As) |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

---

## 💎 Key Luxury Features

1. **Branded Initial Loader**: Vector mandala draws itself with SVG stroke paths and gold pulse before fading into the hero.
2. **Hero Corridor**: Slow-zoom cinematic slideshow, dark maroon overlay, animated word-by-word reveal of *"IDEATE . IMPROVISE . IMPRESS"*, and magnetic gold CTA buttons.
3. **Smooth Inertia Scrolling**: Powered by Lenis for fluid, premium desktop and touch scrolling.
4. **Custom Gold Cursor**: Desktop spring physics cursor with magnetic expansion on clickable buttons and links.
5. **Subtle Background Music**: Auspicious classical Shehnai/Sitar raga toggle with live visualizer bars (muted by default).
6. **Themes & Scenography Showcase**: Tabbed Traditional vs. Modern decor moodboards with interactive Before/After venue transformation toggle.
7. **Masonry Portfolio & Case Studies**: Fullscreen responsive Lightbox viewer and deep-dive drawer for signature weddings (e.g. Taj Falaknuma Palace, Novotel HICC, Fort Grand).
8. **Live Slot Reservation Matrix**: 4-step wizard with real-time morning (8 AM), afternoon (12 PM), and evening (5 PM) slot checking, guest count, venue selection, and customer tracking on `/my-bookings`.
9. **SEO & Structured Data**: Built-in `LocalBusiness` / `EventPlanner` JSON-LD schema for Hyderabad wedding searches, OpenGraph tags, and semantic HTML.
# sampradaya-events
