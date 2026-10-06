export type EventType =
  | 'Wedding'
  | 'Engagement'
  | 'Haldi'
  | 'Mehendi'
  | 'Sangeet'
  | 'Reception'
  | 'Ceremony'
  | 'Corporate'
  | 'Decor & Theming'
  | 'Wedding Stationery'
  | 'Other';

export type TimeSlot = 'Morning' | 'Afternoon' | 'Evening';

export type BookingStatus = 'pending' | 'in_queue' | 'completed' | 'cancelled';

export interface CustomerUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer';
}

export interface StatusLogEntry {
  id: string;
  fromStatus?: BookingStatus;
  toStatus: BookingStatus;
  timestamp: string;
  actor: string;
  note?: string;
}

export interface Booking {
  id: string;
  customerId?: string;
  customerName: string;
  phone: string;
  email: string;
  eventType: EventType;
  eventDate: string;
  timeSlot: TimeSlot;
  venue: string;
  guestCount: number;
  budgetRange: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  status: BookingStatus;
  history: StatusLogEntry[];
  assignedManager?: string;
  estimatedAmount?: number;
}

export interface SlotAvailability {
  slot: TimeSlot;
  isAvailable: boolean;
  status: 'available' | 'reserved';
  timingLabel: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  eventType: EventType;
  image: string;
  features: string[];
  tag: string;
  popular?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Sparkles' | 'Palette' | 'CalendarCheck' | 'Flame' | 'HeartHandshake' | 'Crown' | 'Camera';
  details: string[];
}

export interface DecorTheme {
  id: 'traditional' | 'modern';
  name: string;
  tagline: string;
  description: string;
  palette: { name: string; hex: string }[];
  elements: string[];
  images: {
    url: string;
    caption: string;
    tag: string;
  }[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    venueName: string;
    transformationNote: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  couplesNames: string;
  category: 'Weddings' | 'Receptions' | 'Haldi & Mehendi' | 'Sangeet' | 'Ceremonies' | 'Corporate';
  venue: string;
  location: string;
  date: string;
  guestCount: string;
  theme: string;
  coverImage: string;
  photos: { url: string; caption: string; aspect?: 'tall' | 'wide' | 'square' }[];
  story: string;
  highlights: string[];
}

export interface ReelItem {
  id: string;
  title: string;
  views: string;
  duration: string;
  videoThumb: string;
  instagramUrl: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  names: string;
  eventType: string;
  venue: string;
  date: string;
  quote: string;
  storySnippet: string;
  rating: number;
  coupleImage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing & Packages' | 'Customization' | 'Destinations' | 'Muhurtham & Timing' | 'Bookings';
}

export interface AwardBadge {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
}
