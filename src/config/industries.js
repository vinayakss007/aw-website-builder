/**
 * Industry definitions for the website builder.
 * Each industry has pre-built templates (static + dynamic) and hero image config.
 * AI is ONLY used to fill content if not available in the template.
 */

const INDUSTRIES = {
  restaurant: {
    id: 'restaurant',
    name: 'Restaurant & Food',
    description: 'Restaurants, cafes, bakeries, food trucks',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    colorScheme: { primary: '#D4380D', secondary: '#FFF7E6', accent: '#FA8C16' },
    sections: ['hero', 'menu', 'about', 'gallery', 'testimonials', 'reservations', 'contact'],
  },
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    description: 'Hospitals, clinics, dental offices, wellness centers',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
    colorScheme: { primary: '#096DD9', secondary: '#F0F5FF', accent: '#36CFC9' },
    sections: ['hero', 'services', 'doctors', 'about', 'appointments', 'testimonials', 'contact'],
  },
  'real-estate': {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property listings, real estate agencies, brokers',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
    colorScheme: { primary: '#135200', secondary: '#F6FFED', accent: '#52C41A' },
    sections: ['hero', 'featured-properties', 'services', 'about', 'agents', 'testimonials', 'contact'],
  },
  education: {
    id: 'education',
    name: 'Education & Learning',
    description: 'Schools, universities, tutoring, online courses',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    colorScheme: { primary: '#1D39C4', secondary: '#F0F5FF', accent: '#597EF7' },
    sections: ['hero', 'programs', 'about', 'faculty', 'campus', 'testimonials', 'admissions', 'contact'],
  },
  fitness: {
    id: 'fitness',
    name: 'Fitness & Gym',
    description: 'Gyms, yoga studios, personal trainers, sports clubs',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
    colorScheme: { primary: '#000000', secondary: '#F5F5F5', accent: '#FF4D4F' },
    sections: ['hero', 'programs', 'trainers', 'schedule', 'pricing', 'testimonials', 'contact'],
  },
  technology: {
    id: 'technology',
    name: 'Technology & SaaS',
    description: 'Tech startups, SaaS companies, IT services',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    colorScheme: { primary: '#722ED1', secondary: '#F9F0FF', accent: '#B37FEB' },
    sections: ['hero', 'features', 'how-it-works', 'pricing', 'integrations', 'testimonials', 'cta', 'contact'],
  },
  legal: {
    id: 'legal',
    name: 'Legal & Law Firm',
    description: 'Law firms, attorneys, legal consultants',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80',
    colorScheme: { primary: '#1F1F1F', secondary: '#FAFAFA', accent: '#D4B106' },
    sections: ['hero', 'practice-areas', 'attorneys', 'about', 'case-results', 'testimonials', 'contact'],
  },
  photography: {
    id: 'photography',
    name: 'Photography & Creative',
    description: 'Photographers, videographers, creative studios',
    heroImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80',
    colorScheme: { primary: '#262626', secondary: '#FFFFFF', accent: '#EB2F96' },
    sections: ['hero', 'portfolio', 'services', 'about', 'pricing', 'testimonials', 'contact'],
  },
  'salon-spa': {
    id: 'salon-spa',
    name: 'Salon & Spa',
    description: 'Beauty salons, spas, barbershops, nail studios',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
    colorScheme: { primary: '#9E1068', secondary: '#FFF0F6', accent: '#F759AB' },
    sections: ['hero', 'services', 'gallery', 'team', 'pricing', 'booking', 'testimonials', 'contact'],
  },
  construction: {
    id: 'construction',
    name: 'Construction & Building',
    description: 'Construction companies, contractors, architects',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    colorScheme: { primary: '#D46B08', secondary: '#FFF7E6', accent: '#FFA940' },
    sections: ['hero', 'services', 'projects', 'about', 'team', 'safety', 'testimonials', 'contact'],
  },
};

module.exports = { INDUSTRIES };
