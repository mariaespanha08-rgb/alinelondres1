export type Language = 'pt' | 'en';

export interface ServiceItem {
  id: string;
  name: { pt: string; en: string };
  price: string;
  duration?: { pt: string; en: string };
  description: { pt: string; en: string };
  image: string;
  items?: { pt: string; en: string; price: string }[];
  whatsappMessage: { pt: string; en: string };
}

export interface GalleryPhoto {
  id: number;
  url: string;
  alt: { pt: string; en: string };
  caption: { pt: string; en: string };
}

export interface FAQItem {
  question: { pt: string; en: string };
  answer: { pt: string; en: string };
}

export interface BookingFormData {
  name: string;
  service: string;
  preferredDays: string[];
  preferredTime: string;
  clientType: 'new' | 'existing';
  finishPreference: 'natural' | 'shellac' | 'nailart' | 'undecided';
  notes: string;
  agreedToTerms: boolean;
}
