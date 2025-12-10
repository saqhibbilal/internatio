export interface Show {
  id: string;
  season: string;
  year: string;
  title: string;
  image: string;
  description: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}