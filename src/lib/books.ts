import { Book } from '../types/book';

export async function getBooks(): Promise<Book[]> {
  return [];
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  return null;
}
