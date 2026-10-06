import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EventType, TimeSlot, Booking } from '../types';

interface BookingWizardData {
  eventType: EventType;
  eventDate: string;
  timeSlot: TimeSlot;
  venue: string;
  guestCount: number;
  budgetRange: string;
  notes: string;
}

interface BookingWizardContextType {
  data: BookingWizardData;
  updateData: (updates: Partial<BookingWizardData>) => void;
  lastConfirmedBooking: Booking | null;
  setLastConfirmedBooking: (booking: Booking | null) => void;
  resetWizard: () => void;
}

const getDefaultDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toISOString().split('T')[0];
};

const initialData: BookingWizardData = {
  eventType: 'Wedding',
  eventDate: getDefaultDate(),
  timeSlot: 'Evening',
  venue: 'Taj Falaknuma Palace / ITC Kohenur, Hyderabad',
  guestCount: 350,
  budgetRange: '₹10L - ₹25L',
  notes: '',
};

const BookingWizardContext = createContext<BookingWizardContextType | undefined>(undefined);

export const BookingWizardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<BookingWizardData>(initialData);
  const [lastConfirmedBooking, setLastConfirmedBooking] = useState<Booking | null>(null);

  const updateData = (updates: Partial<BookingWizardData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const resetWizard = () => {
    setData(initialData);
  };

  return (
    <BookingWizardContext.Provider
      value={{
        data,
        updateData,
        lastConfirmedBooking,
        setLastConfirmedBooking,
        resetWizard,
      }}
    >
      {children}
    </BookingWizardContext.Provider>
  );
};

export const useBookingWizard = () => {
  const context = useContext(BookingWizardContext);
  if (!context) {
    throw new Error('useBookingWizard must be used within a BookingWizardProvider');
  }
  return context;
};
