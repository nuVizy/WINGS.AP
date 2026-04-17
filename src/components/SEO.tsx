import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEO({ title, description, canonical, type = 'website', image }: SEOProps) {
  const siteUrl = 'https://wingsap.netlify.app';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImage = image || `${siteUrl}/ogimage.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "WINGS",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": "WINGS is an alternative provision combining music, writing, and production with powerful personal experiences of hope and transformation.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "nick@wings-ap.com"
          }
        })}
      </script>
    </Helmet>
  );
}
