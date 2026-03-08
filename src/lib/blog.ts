import { Article } from '../types/article';

export async function getArticles(): Promise<Article[]> {
  // Simulate fetching articles
  return [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Simulate fetching article by slug
  return null;
}
