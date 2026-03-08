import { SEOProps } from '../types/seo';

export function getMetadata({ title, description, image, url }: SEOProps = {}) {
  const siteTitle = title ? `${title} | Clarim da Verdade` : "Clarim da Verdade";
  const siteDescription = description || "Proclamando a Verdade e a Sã Doutrina";
  const siteUrl = url || "https://clarimdaverdade.org";
  const siteImage = image || "https://clarimdaverdade.org/og.jpg";

  return {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      images: [{ url: siteImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
    },
  };
}
