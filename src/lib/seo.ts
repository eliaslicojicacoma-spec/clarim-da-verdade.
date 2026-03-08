import { SEOProps } from '../types/seo';

export function constructMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
}: SEOProps = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: image || '/og.jpg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || '/og.jpg'],
    },
  };
}
