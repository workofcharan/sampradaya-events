import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBookingWizard } from '../context/BookingWizardContext';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { api } from '../services/api';
import { EventType, TimeSlot, SlotAvailability } from '../types';
import { FestiveDivider } from '../components/common/FestiveDivider';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export const SlotBookingPage: React.FC = () => {
  const { data, updateData, setLastConfirmedBooking } = useBookingWizard();
  const { user, isAuthenticated } = useCustomerAuth();
  const navigate = useNavigate();

  const [availableSlots, setAvailableSlots] = useState<SlotAvailability[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Fetch slot availability when date changes
  useEffect(() => {
    if (!data.eventDate) return;
    setIsLoadingSlots(true);
    setErrorMessage('');

    api
      .getAvailableSlots(data.eventDate)
      .then((res) => {
        setAvailableSlots(res.slots || []);
      })
      .catch((err) => {
        console.error('Failed to load slots:', err);
      })
      .finally(() => {
        setIsLoadingSlots(false);
      });
  }, [data.eventDate]);

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: '/book-slot' } });
      return;
    }

    if (!data.eventDate || !data.venue) {
      setErrorMessage('Please provide your event date and preferred venue.');
      return;
    }

    // Check if chosen slot is available
    const chosenSlotInfo = availableSlots.find((s) => s.slot === data.timeSlot);
    if (chosenSlotInfo && !chosenSlotInfo.isAvailable) {
      setErrorMessage(`The ${data.timeSlot} slot on ${data.eventDate} is already reserved. Please select another slot or date.`);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await api.createBooking({
        eventType: data.eventType,
        eventDate: data.eventDate,
        timeSlot: data.timeSlot,
        venue: data.venue,
        guestCount: Number(data.guestCount) || 100,
        budgetRange: data.budgetRange,
        notes: data.notes,
        customerName: user?.name,
        phone: user?.phone,
        email: user?.email,
      });

      setLastConfirmedBooking(response.booking);
      navigate('/confirmation');
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to reserve booking slot.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSlotAvailable = (slot: TimeSlot) => {
    const found = availableSlots.find((s) => s.slot === slot);
    return found ? found.isAvailable : true;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9E7] border border-[#FAD7A0] text-[#B7791F] text-xs font-semibold uppercase">
          <span>Step 2 of 3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B2314]">
          Reserve Your Auspicious Slot
        </h1>
        <p className="text-xs sm:text-sm text-[#8D6E63]">
          Live date & time slot reservation with real-time palace availability
        </p>
        <FestiveDivider variant="gold" />
      </div>

      {/* Booking Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#DFB15B] relative overflow-hidden">
        <div className="corner-ornament-tl" />
        <div className="corner-ornament-tr" />
        <div className="corner-ornament-bl" />
        <div className="corner-ornament-br" />

        {/* User Auth Status Banner */}
        {!isAuthenticated && (
          <div className="p-4 mb-6 rounded-2xl bg-[#FEF9E7] border border-[#FAD7A0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#B7791F]">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C0392B] shrink-0" />
              <span>You can configure your slot now, and will sign in to confirm and save to your account.</span>
            </div>
            <Link
              to="/auth"
              state={{ from: '/book-slot' }}
              className="px-4 py-1.5 rounded-lg bg-[#3B2314] text-[#DFB15B] font-semibold text-center hover:bg-[#5C3820] shrink-0"
            >
              Sign In First
            </Link>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 mb-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmitBooking} className="space-y-6">
          {/* Section 1: Event Type & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1.5">
                Celebration Type *
              </label>
              <select
                value={data.eventType}
                onChange={(e) => updateData({ eventType: e.target.value as EventType })}
                className="w-full px-3 py-2.5 rounded-xl border border-[#DFB15B] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
              >
                <option value="Wedding">Royal Vedic Wedding</option>
                <option value="Engagement">Engagement & Roka Ceremony</option>
                <option value="Haldi">Vibrant Haldi Ceremony</option>
                <option value="Mehendi">Mehendi Extravaganza</option>
                <option value="Sangeet">Bollywood Sangeet Night</option>
                <option value="Reception">Grand Palace Reception</option>
                <option value="Birthday">Milestone Birthday Jubilee</option>
                <option value="Corporate">Corporate Gala & Conclaves</option>
                <option value="Other">Other Bespoke Gathering</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1.5">
                Auspicious Event Date *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#8D6E63] absolute left-3.5 top-3" />
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={data.eventDate}
                  onChange={(e) => updateData({ eventDate: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#DFB15B] text-xs font-semibold text-[#3B2314] focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Time Slot Picker with Live Availability */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820]">
                Select Time Slot (Muhurtham Window) *
              </label>
              {isLoadingSlots && (
                <span className="text-[10px] text-[#B7791F] animate-pulse font-medium">
                  Checking live slot matrix...
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Morning Slot */}
              {(() => {
                const available = isSlotAvailable('Morning');
                const isSelected = data.timeSlot === 'Morning';
                return (
                  <button
                    type="button"
                    disabled={!available}
                    onClick={() => updateData({ timeSlot: 'Morning' })}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all relative ${
                      isSelected && available
                        ? 'border-[#C0392B] bg-[#FDEDEC]/70 shadow-md ring-2 ring-[#C0392B]/20'
                        : available
                        ? 'border-[#DFB15B]/50 bg-white hover:bg-[#FBF4E6]'
                        : 'border-slate-200 bg-slate-50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif font-bold text-[#3B2314]">
                        Morning Slot
                      </span>
                      {available ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Open
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                          Reserved
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5C3820] mt-1 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E8833A]" /> 8:00 AM - 2:00 PM
                    </p>
                    <p className="text-[10px] text-[#8D6E63] mt-0.5">
                      Ideal for Vedic muhurtham rituals
                    </p>
                  </button>
                );
              })()}

              {/* Afternoon Slot */}
              {(() => {
                const available = isSlotAvailable('Afternoon');
                const isSelected = data.timeSlot === 'Afternoon';
                return (
                  <button
                    type="button"
                    disabled={!available}
                    onClick={() => updateData({ timeSlot: 'Afternoon' })}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all relative ${
                      isSelected && available
                        ? 'border-[#C0392B] bg-[#FDEDEC]/70 shadow-md ring-2 ring-[#C0392B]/20'
                        : available
                        ? 'border-[#DFB15B]/50 bg-white hover:bg-[#FBF4E6]'
                        : 'border-slate-200 bg-slate-50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif font-bold text-[#3B2314]">
                        Afternoon Slot
                      </span>
                      {available ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Open
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                          Reserved
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5C3820] mt-1 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E8833A]" /> 12:00 PM - 5:00 PM
                    </p>
                    <p className="text-[10px] text-[#8D6E63] mt-0.5">
                      Ideal for Haldi & Mehendi festivities
                    </p>
                  </button>
                );
              })()}

              {/* Evening Slot */}
              {(() => {
                const available = isSlotAvailable('Evening');
                const isSelected = data.timeSlot === 'Evening';
                return (
                  <button
                    type="button"
                    disabled={!available}
                    onClick={() => updateData({ timeSlot: 'Evening' })}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all relative ${
                      isSelected && available
                        ? 'border-[#C0392B] bg-[#FDEDEC]/70 shadow-md ring-2 ring-[#C0392B]/20'
                        : available
                        ? 'border-[#DFB15B]/50 bg-white hover:bg-[#FBF4E6]'
                        : 'border-slate-200 bg-slate-50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif font-bold text-[#3B2314]">
                        Evening Slot
                      </span>
                      {available ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Open
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                          Reserved
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5C3820] mt-1 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E8833A]" /> 5:00 PM - 11:00 PM
                    </p>
                    <p className="text-[10px] text-[#8D6E63] mt-0.5">
                      Ideal for Sangeet & Grand Receptions
                    </p>
                  </button>
                );
              })()}
            </div>
          </div>

          {/* Section 3: Venue, Guests, Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="sm:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1.5">
                Expected Guests
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#8D6E63] absolute left-3 top-3" />
                <input
                  type="number"
                  min="25"
                  step="25"
                  value={data.guestCount}
                  onChange={(e) => updateData({ guestCount: Number(e.target.value) })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#DFB15B] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1.5">
                Budget Allocation
              </label>
              <select
                value={data.budgetRange}
                onChange={(e) => updateData({ budgetRange: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-[#DFB15B] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
              >
                <option value="₹5L - ₹10L">₹5L - ₹10L (Intimate Gathering)</option>
                <option value="₹10L - ₹25L">₹10L - ₹25L (Grand Festive Classic)</option>
                <option value="₹25L - ₹50L">₹25L - ₹50L (Royal Heritage Mandap)</option>
                <option value="₹50L+">₹50L+ (Palatial Bespoke Extravaganza)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1.5">
              Preferred Palace / Resort Venue Location *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#8D6E63] absolute left-3.5 top-3" />
              <input
                type="text"
                required
                placeholder="e.g. Taj Falaknuma Palace / ITC Kohenur / Custom Private Estate"
                value={data.venue}
                onChange={(e) => updateData({ venue: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#DFB15B] text-xs focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1.5">
              Special Decor & Vedic Ritual Notes
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your floral preferences (marigold, jasmine, lotus), mandap styling, acoustic setup, or guest arrival welcome..."
              value={data.notes}
              onChange={(e) => updateData({ notes: e.target.value })}
              className="w-full p-3 rounded-xl border border-[#DFB15B] text-xs focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#F5EBD7]">
            <Link
              to="/events"
              className="text-xs font-semibold text-[#5C3820] hover:text-[#C0392B] transition-colors"
            >
              ← Back to Event Types
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#C0392B] via-[#D35400] to-[#E8833A] text-white text-xs font-bold uppercase tracking-wider shadow-xl hover:brightness-110 active:scale-[0.99] transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Transmitting Slot...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#F4B63F]" />
                  <span>Confirm Slot Reservation</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
