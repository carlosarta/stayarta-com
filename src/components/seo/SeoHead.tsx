import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = "STAYArta - Tecnología Retro Futurista | eCommerce & IA",
  description = "Fusionamos estética retro pop tech con herramientas de IA moderna. Automatización eCommerce, asistente Nova AI y soluciones digitales innovadoras.",
  canonical,
  ogImage = "/og-default.jpg",
  ogType = "website",
  keywords = ["tecnología retro", "automatización ecommerce", "asistente IA", "diseño ui retro", "herramientas automatización"]
}) => {
  const fullTitle = title.includes("STAYArta") ? title : `${title} | STAYArta`;
  const siteUrl = "https://stayarta.com";
  const fullCanonical = canonical ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) : siteUrl;
  
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="STAYArta" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Estructura de Datos */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "STAYArta",
          "legalName": "CARLOS ARTA LLC",
          "description": "Fusionamos estética retro pop tech con herramientas de IA moderna",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4320 SW 57TH AVE",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33155-5328",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "hola@stayarta.com",
            "telephone": "+34 662 652 300",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};
