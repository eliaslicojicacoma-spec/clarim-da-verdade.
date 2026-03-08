import { BibleBook, BibleChapter } from '../types/bible';

export async function getBibleBooks(): Promise<BibleBook[]> {
  return [];
}

export async function getBibleChapter(book: string, chapter: number): Promise<BibleChapter | null> {
  return null;
}
