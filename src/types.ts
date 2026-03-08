export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
}

export interface ContactInfo {
  email: string;
  pix: string;
  paypal: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  location: string;
}
