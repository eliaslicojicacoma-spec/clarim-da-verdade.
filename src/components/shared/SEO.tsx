import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  const siteTitle = title ? `${title} | Clarim da Verdade` : "Clarim da Verdade";
  const siteDescription = description || "Proclamando a Verdade e a Sã Doutrina";
  const siteUrl = url || "https://clarimdaverdade.org";
  const siteImage = image || "https://clarimdaverdade.org/og.jpg";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
