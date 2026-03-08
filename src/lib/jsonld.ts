export function generateArticleJsonLd(article: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: article.coverImage,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Clarim da Verdade',
      logo: {
        '@type': 'ImageObject',
        url: 'https://clarimdaverdade.org/logo.png',
      },
    },
    description: article.excerpt,
  };
}
