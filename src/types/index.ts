export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  name: string;
  location: string;
  mission: string;
  email: string;
  pix: string;
  paypal: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
}

export interface Hymn {
  id: string;
  number: number;
  title: string;
  content: string;
  category?: string;
}

export interface Study {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  image: string;
  description: string;
  link: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}
