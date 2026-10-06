import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBookingWizard } from '../context/BookingWizardContext';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { FestiveDivider } from '../components/common/FestiveDivider';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  ArrowRight,
  ShieldCheck,
  BookmarkCheck,
  Sparkles,
} from 'lucide-react';

export const BookingConfirmationPage: React.FC = () => {
  const { lastConfirmedBooking, resetWizard } = useBookingWizard();
  const { user } = useCustomerAuth();

  useEffect(() => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C0392B', '#E8833A', '#F4B63F', '#DFB15B'],
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const booking = lastConfirmedBooking;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-in zoom-in-95 duration-300">
      {/* Celebration Header */}
      <div className="text-center space-y-3">
        <div className="w-20 h-20 rounded-full bg-[#ECFDF5] border-2 border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#B7791F] font-serif font-bold bg-[#FEF9E7] px-3.5 py-1 rounded-full border border-[#FAD7A0] inline-block">
          Slot Reservation Confirmed
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B2314]">
          Congratulations{user?.name ? `, ${user.name}` : ''}!
        </h1>
        <p className="text-xs sm:text-sm text-[#5C3820] max-w-md mx-auto font-serif italic">
          Your sacred celebration slot has been registered and placed in the review queue.
        </p>
        <FestiveDivider variant="gold" />
      </div>

      {/* Booking Dossier Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#DFB15B] relative overflow-hidden space-y-6">
        <div className="corner-ornament-tl" />
        <div className="corner-ornament-tr" />
        <div className="corner-ornament-bl" />
        <div className="corner-ornament-br" />

        {/* Top Reference Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F5EBD7]">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8D6E63] font-semibold block">
              Booking Reference Number
            </span>
            <span className="text-xl font-mono font-bold text-[#C0392B]">
              {booking?.id || 'SMP-NEW'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5C3820] font-medium">Initial Status:</span>
            <span className="text-xs font-bold text-[#B7791F] bg-[#FEF9E7] border border-[#FAD7A0] px-3 py-1 rounded-full">
              Pending Review
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-[#FBF4E6] border border-[#DFB15B]/30 space-y-1">
            <span className="text-[#8D6E63] flex items-center gap-1 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#C0392B]" /> Event Date & Slot
            </span>
            <p className="font-serif font-bold text-sm text-[#3B2314]">
              {booking?.eventDate || 'Confirmed Date'}
            </p>
            <p className="text-[#E8833A] font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" /> {booking?.timeSlot || 'Slot'} Window
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FBF4E6] border border-[#DFB15B]/30 space-y-1">
            <span className="text-[#8D6E63] flex items-center gap-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C0392B]" /> Celebration Type
            </span>
            <p className="font-serif font-bold text-sm text-[#3B2314]">
              {booking?.eventType || 'Royal Celebration'}
            </p>
            <p className="text-[#5C3820] flex items-center gap-2">
              <span>{booking?.guestCount || 350} Guests</span> • <span>{booking?.budgetRange || '₹10L - ₹25L'}</span>
            </p>
          </div>

          <div className="sm:col-span-2 p-3.5 rounded-xl bg-[#FBF4E6] border border-[#DFB15B]/30 space-y-1">
            <span className="text-[#8D6E63] flex items-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#C0392B]" /> Venue Location
            </span>
            <p className="font-medium text-[#3B2314]">
              {booking?.venue || 'Taj Falaknuma Palace / ITC Kohenur, Hyderabad'}
            </p>
          </div>
        </div>

        {/* Reassurance Notice */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FEF9E7] to-[#FFFDF9] border border-[#FAD7A0] text-xs text-[#B7791F] flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-[#3B2314]">What happens next?</h4>
            <p className="text-[#5C3820] mt-0.5 leading-relaxed">
              Our Head Event Curator is reviewing your muhurtham slot. Once accepted, your booking status will advance to <strong>In Queue</strong> and our team will coordinate the venue walk-through.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <Link
            to="/my-bookings"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#3B2314] text-[#DFB15B] text-xs font-bold uppercase tracking-wider hover:bg-[#5C3820] shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <BookmarkCheck className="w-4 h-4 text-[#F4B63F]" />
            <span>Go to My Bookings Page</span>
          </Link>

          <Link
            to="/events"
            onClick={resetWizard}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#DFB15B] text-xs font-semibold text-[#5C3820] hover:bg-[#F5EBD7] transition-all text-center"
          >
            Book Another Ceremony
          </Link>
        </div>
      </div>
    </div>
  );
};
