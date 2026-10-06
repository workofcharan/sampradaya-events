import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { SITE_DATA } from '../../data/siteData';
import { InstagramIcon } from '../common/InstagramIcon';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const ContactSection: React.FC = () => {
  const { contact, brand } = SITE_DATA.config;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    guestCount: '300',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury booking inquiry submission with festive confetti celebration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory festive marigold & gold confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F4B63F', '#C9A24B', '#7A1F2B', '#E8833A', '#FFE8B4'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-paper-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Get In Touch"
          scriptKicker="Connect with Our Curators"
          title="Begin Your Journey with"
          titleHighlight="Sampradaya Events"
          description="Schedule a private consultation at our Hyderabad studio or invite our lead architects for a venue walkthrough."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2B1810] text-[#FFFBF5] p-8 sm:p-10 rounded-3xl border-2 border-[#C9A24B]/50 shadow-royal space-y-6 relative overflow-hidden">
              <div className="corner-ornament-tl" />
              <div className="corner-ornament-tr" />

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#F4B63F]">
                  Studio Headquarters
                </span>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#FFFBF5]">
                  Hyderabad Design Studio
                </h3>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs sm:text-sm font-serif">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#3D2418] border border-[#C9A24B]/40 text-[#F4B63F] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#FFFBF5] font-sans text-xs uppercase tracking-wider">
                      Address
                    </strong>
                    <p className="text-[#F5EBD7]/85 mt-0.5">
                      {contact.address.line1}, {contact.address.line2}
                    </p>
                    <p className="text-[#F4B63F] font-bold">
                      {contact.address.area}, {contact.address.city} - {contact.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#3D2418] border border-[#C9A24B]/40 text-[#E8833A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#FFFBF5] font-sans text-xs uppercase tracking-wider">
                      Direct Concierge
                    </strong>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-[#F5EBD7]/90 hover:text-[#F4B63F] transition-colors mt-0.5 block"
                    >
                      {contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#3D2418] border border-[#C9A24B]/40 text-[#F4B63F] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#FFFBF5] font-sans text-xs uppercase tracking-wider">
                      Email Inquiries
                    </strong>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[#F5EBD7]/90 hover:text-[#F4B63F] transition-colors mt-0.5 block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#3D2418] border border-[#C9A24B]/40 text-[#C9A24B] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#FFFBF5] font-sans text-xs uppercase tracking-wider">
                      Studio Hours
                    </strong>
                    <p className="text-[#F5EBD7]/85 mt-0.5">{contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels Bar */}
              <div className="pt-4 border-t border-[#C9A24B]/30 flex items-center gap-3">
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/sampradayaevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#7A1F2B] hover:bg-[#942B39] text-white font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-md border border-[#C9A24B]/40"
                >
                  <InstagramIcon className="w-4 h-4 text-[#F4B63F]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Frame with Gold Border */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#C9A24B]/40 shadow-md aspect-[16/9] bg-[#2B1810]">
              <iframe
                title="Sampradaya Events Hyderabad Map"
                src={contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Royal Consultation Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] border-2 border-[#C9A24B]/40 shadow-festive relative overflow-hidden">
            <div className="corner-ornament-tl" />
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />
            <div className="corner-ornament-br" />

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cormorant text-3xl font-bold text-[#2B1810]">
                  Namaste! Your Inquiry Has Been Received
                </h3>
                <p className="text-sm text-[#5C3820] font-serif max-w-md mx-auto leading-relaxed">
                  Our principal event architects (Radhika & Vamshi) will contact you within 4 hours to review your celebration vision and dates.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        eventType: 'Wedding',
                        eventDate: '',
                        guestCount: '300',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#FBF4E6] border border-[#C9A24B] text-xs font-serif font-bold uppercase tracking-wider text-[#7A1F2B] hover:bg-[#FDEDEC]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#7A1F2B]">
                    Consultation Blueprint
                  </span>
                  <h3 className="font-cormorant text-3xl font-bold text-[#2B1810]">
                    Request a Private Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7E6356] font-serif">
                    Tell us about your auspicious Muhurtham or celebration dates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ananya Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                      Celebration Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                    >
                      <option value="Wedding">Grand Vedic Wedding</option>
                      <option value="Reception">Palatial Reception</option>
                      <option value="Haldi">Haldi & Mangala Snanam</option>
                      <option value="Mehendi">Mehendi Soiree</option>
                      <option value="Sangeet">Royal Sangeet Night</option>
                      <option value="Engagement">Engagement & Ring Ceremony</option>
                      <option value="Ceremony">Sacred Ceremony (Gruhapravesham/Upanayanam)</option>
                      <option value="Corporate">Corporate & VIP Gala</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                      Auspicious Date / Month *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                      Estimated Guest Count
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 500"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#5C3820] block">
                    Your Vision, Preferred Venue, or Sacred Custom Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your desired decor palette, venue ideas (Taj Falaknuma, Novotel, etc.), or specific family rituals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C9A24B]/40 bg-[#FFFBF5] text-xs text-[#2B1810] focus:border-[#7A1F2B] focus:ring-1 focus:ring-[#7A1F2B] outline-none font-sans"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  variant="gold"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs sm:text-sm tracking-[0.2em]"
                >
                  <Send className="w-4 h-4 text-[#2B1810]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Consultation Request'}</span>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
