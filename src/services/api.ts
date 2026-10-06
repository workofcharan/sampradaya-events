import { CustomerUser, Booking, SlotAvailability, EventType, TimeSlot } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const TOKEN_KEY = 'sampradaya_customer_jwt';

export const customerTokenService = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  remove: () => localStorage.removeItem(TOKEN_KEY),
};

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = customerTokenService.get();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    (headers as any)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Request failed with status ${response.status}`);
  }

  return data;
}

export const api = {
  // Authentication
  async register(name: string, email: string, phone: string, password: string): Promise<{ token: string; user: CustomerUser }> {
    const data = await fetchWithAuth('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, password }),
    });
    if (data.token) customerTokenService.set(data.token);
    return data;
  },

  async login(email: string, password: string): Promise<{ token: string; user: CustomerUser }> {
    const data = await fetchWithAuth('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (data.token) customerTokenService.set(data.token);
    return data;
  },

  async getMe(): Promise<{ user: CustomerUser }> {
    return fetchWithAuth('/api/auth/me');
  },

  // Slot Availability
  async getAvailableSlots(date: string): Promise<{ date: string; slots: SlotAvailability[] }> {
    return fetchWithAuth(`/api/slots/available?date=${encodeURIComponent(date)}`);
  },

  // Create Booking
  async createBooking(bookingData: {
    eventType: EventType;
    eventDate: string;
    timeSlot: TimeSlot;
    venue: string;
    guestCount: number;
    budgetRange: string;
    notes?: string;
    customerName?: string;
    phone?: string;
    email?: string;
  }): Promise<{ message: string; booking: Booking }> {
    return fetchWithAuth('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  },

  // My Bookings
  async getMyBookings(): Promise<{ bookings: Booking[]; count: number }> {
    return fetchWithAuth('/api/bookings/my');
  },
};
