export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: Author;
  category: Category;
  tags: string[];
}

export interface Author {
  name: string;
  avatar: string;
  bio?: string;
}

export interface Category {
  name: string;
  slug: string;
}
