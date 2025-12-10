import { Show, Quote, NavItem } from './types';

// Using high-quality fashion placeholders
export const PAST_SHOWS: Show[] = [
  {
    id: '1',
    season: 'Fall/Winter',
    year: '2023',
    title: 'Notte Oscura',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop',
    description: 'A homage to the shadows of the Duomo.'
  },
  {
    id: '2',
    season: 'Spring/Summer',
    year: '2024',
    title: 'Vetro Liquido',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop',
    description: 'Transparency meets structure.'
  },
  {
    id: '3',
    season: 'Fall/Winter',
    year: '2024',
    title: 'Rosso Milano',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1288&auto=format&fit=crop',
    description: 'The distinct red of the city tramlines.'
  }
];

export const QUOTES: Quote[] = [
  {
    text: "Fashion is the armor to survive the reality of everyday life.",
    author: "Bill Cunningham"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Legacy', href: '#legacy' },
  { label: 'Collection', href: '#collection' },
  { label: 'Runway', href: '#runway' },
  { label: 'Contact', href: '#contact' },
];