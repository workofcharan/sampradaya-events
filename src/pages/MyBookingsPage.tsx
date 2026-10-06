import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { api } from '../services/api';
import { Booking } from '../types';
import { StatusBadge } from '../components/common/StatusBadge';
import { FestiveDivider } from '../components/common/FestiveDivider';
import { SITE_DATA } from '../data/siteData';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  Sparkles,
  History,
  RefreshCw,
  BookmarkCheck,
  Lock,
  MessageCircle,
} from 'lucide-react';

export const MyBookingsPage: React.FC = () => {
  const { user, isAuthenticated } = useCustomerAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { contact } = SITE_DATA.config;

  const loadMyBookings = () => {
    if (!isAuthenticated) return;
    setIsLoading(true);
    api
      .getMyBookings()
      .then((res) => {
        setBookings(res.bookings || []);
      })
      .catch((err) => {
        console.error('Failed to load my bookings:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadMyBookings();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#FEF9E7] border border-[#FAD7A0] flex items-center justify-center text-[#B7791F] mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#3B2314]">
          Customer Sign In Required
        </h2>
        <p className="text-xs text-[#8D6E63]">
          Please sign in with your customer account to access your personal event bookings and live status updates.
        </p>
        <div className="pt-2">
          <Link
            to="/auth"
            state={{ from: '/my-bookings' }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7A1F2B] to-[#C9A24B] text-white text-xs font-serif font-bold uppercase tracking-wider shadow-md hover:brightness-110"
          >
            Sign In to View Bookings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-6 h-6 text-[#7A1F2B]" />
            <h1 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#2B1810]">
              My Event Reservations
            </h1>
          </div>
          <p className="text-xs text-[#7E6356] mt-0.5 font-serif">
            Logged in as <strong className="text-[#2B1810]">{user?.name}</strong> ({user?.email})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadMyBookings}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#C9A24B] text-xs font-semibold text-[#5C3820] hover:bg-[#F5EBD7] transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#7A1F2B] ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh Status</span>
          </button>

          <Link
            to="/events"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7A1F2B] to-[#C9A24B] text-white text-xs font-serif font-bold uppercase tracking-wider hover:brightness-110 shadow-sm transition-all"
          >
            <span>+ Book New Slot</span>
          </Link>
        </div>
      </div>

      <FestiveDivider variant="gold" className="my-2" />

      {/* Bookings List */}
      {isLoading ? (
        <div className="text-center py-16 text-xs text-[#7E6356] font-serif animate-pulse">
          Loading your sacred celebration dossiers...
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border-2 border-[#C9A24B]/40 shadow-festive space-y-4 max-w-md mx-auto">
          <Sparkles className="w-10 h-10 text-[#C9A24B] mx-auto" />
          <h3 className="font-cormorant font-bold text-2xl text-[#2B1810]">
            No Active Bookings Yet
          </h3>
          <p className="text-xs text-[#7E6356] font-serif">
            You have not booked any wedding or festive slots under this account yet.
          </p>
          <div className="pt-2">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2B1810] text-[#F4B63F] text-xs font-serif font-bold uppercase tracking-wider hover:bg-[#3D2418]"
            >
              Choose Celebration Type
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-3xl border-2 border-[#C9A24B]/40 shadow-festive hover:shadow-festive-hover transition-all overflow-hidden"
            >
              {/* Card Top Banner */}
              <div className="bg-gradient-to-r from-[#2B1810] via-[#3D2418] to-[#2B1810] p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-mono font-bold bg-[#7A1F2B] text-white px-2.5 py-0.5 rounded">
                      {booking.id}
                    </span>
                    <span className="text-xs text-[#F4B63F] font-serif font-bold">
                      {booking.eventType}
                    </span>
                  </div>
                  <h3 className="text-xl font-cormorant font-bold text-white mt-1">
                    {booking.customerName}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <StatusBadge status={booking.status} size="lg" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-6">
                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#FBF4E6] border border-[#C9A24B]/30 space-y-1">
                    <span className="text-[#7E6356] font-semibold flex items-center gap-1 font-serif">
                      <Calendar className="w-3.5 h-3.5 text-[#7A1F2B]" /> Date & Muhurtham Slot
                    </span>
                    <p className="font-serif font-bold text-sm text-[#2B1810]">
                      {booking.eventDate}
                    </p>
                    <p className="text-[#E8833A] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {booking.timeSlot} Window
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FBF4E6] border border-[#C9A24B]/30 space-y-1 sm:col-span-2">
                    <span className="text-[#7E6356] font-semibold flex items-center gap-1 font-serif">
                      <MapPin className="w-3.5 h-3.5 text-[#7A1F2B]" /> Venue & Scale
                    </span>
                    <p className="font-semibold text-sm text-[#2B1810] truncate">
                      {booking.venue}
                    </p>
                    <div className="flex items-center gap-3 text-[#5C3820]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#E8833A]" /> {booking.guestCount} Guests
                      </span>
                      <span>•</span>
                      <span className="font-bold text-[#7A1F2B]">{booking.budgetRange}</span>
                    </div>
                  </div>
                </div>

                {booking.notes && (
                  <div className="p-3.5 rounded-xl bg-[#FFFBF5] border border-[#EBDDC0] text-xs space-y-1">
                    <span className="font-bold uppercase tracking-wider text-[#7E6356] text-[10px]">
                      Your Decor & Ceremony Notes:
                    </span>
                    <p className="text-[#5C3820] font-serif italic">"{booking.notes}"</p>
                  </div>
                )}

                {/* Audit & Progress History */}
                <div className="pt-2 border-t border-[#F5EBD7] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7E6356] flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-[#7A1F2B]" /> Status Progression Log
                  </span>

                  <div className="space-y-2 pl-2">
                    {(booking.history || []).map((h, idx) => (
                      <div
                        key={h.id || idx}
                        className="text-xs bg-[#FBF4E6] p-2.5 rounded-xl border border-[#C9A24B]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                      >
                        <div className="space-y-0.5">
                          <span className="font-bold text-[#2B1810]">
                            {h.toStatus === 'in_queue'
                              ? 'Accepted & Scheduled in Queue'
                              : h.toStatus === 'completed'
                              ? 'Celebration Successfully Concluded'
                              : h.toStatus === 'pending'
                              ? 'Slot Request Placed'
                              : h.toStatus}
                          </span>
                          {h.note && <p className="text-[11px] text-[#5C3820]">{h.note}</p>}
                        </div>
                        <span className="text-[10px] text-[#7E6356] shrink-0 font-mono">
                          {new Date(h.timestamp).toLocaleString('en-IN', {
                            dateStyle: 'short',
                            timeStyle: 'short',
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concierge Desk Call Box */}
                <div className="p-3.5 bg-[#FFF8ED] border border-[#C9A24B]/40 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#7A1F2B]">
                    <Phone className="w-4 h-4 text-[#7A1F2B]" />
                    <span className="font-serif">Need to modify dates or discuss floral themes?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${contact.phone}`}
                      className="font-serif font-bold text-[#7A1F2B] hover:underline shrink-0"
                    >
                      Call: {contact.phoneFormatted}
                    </a>
                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
