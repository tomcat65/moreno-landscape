import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';

/**
 * Structured Data (JSON-LD) for SEO
 * Provides LocalBusiness schema for better search engine understanding
 */
export function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://morenolandscaping.vip',
    name: siteConfig.name,
    image: 'https://morenolandscaping.vip/images/logos/logo2.png',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.primaryAreas[0],
      addressRegion: siteConfig.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.7858',
      longitude: '-95.8244',
    },
    url: 'https://morenolandscaping.vip',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      ...siteConfig.primaryAreas.map(area => ({
        '@type': 'City',
        name: area,
        addressRegion: siteConfig.state,
      })),
      ...siteConfig.extendedAreas.map(area => ({
        '@type': 'City',
        name: area,
        addressRegion: siteConfig.state,
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDesc,
          url: `https://morenolandscaping.vip/services#${service.slug}`,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ].filter(url => url !== '#'),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: 'https://morenolandscaping.vip',
    logo: 'https://morenolandscaping.vip/images/logos/logo2.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'Customer Service',
      areaServed: siteConfig.state,
      availableLanguage: ['English', 'Spanish'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}

