export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': ['Organization', 'LocalBusiness'],
        name: 'NUBIZ',
        alternateName: 'Supreme Digital Business Services',
        url: 'https://nubiz.ae',
        logo: 'https://nubiz.ae/favicon.svg',
        description:
          'NUBIZ is a UAE business setup consultancy specialising in freezone company formation, mainland setup, offshore structures, and corporate services in Dubai.',
        telephone: '+971564899004',
        email: 'info@nubiz.ae',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Inside Max Metro Station, Al Jafiliya',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 25.2334324,
          longitude: 55.2920744,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '20:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '363',
          bestRating: '5',
        },
        sameAs: [
          'https://www.google.com/maps/place/Supreme+Digital+Business+Services/@25.233478,55.292228,17.25z',
        ],
        parentOrganization: {
          '@type': 'Organization',
          name: 'Supreme Digital Business Services',
          url: 'https://supremeservices.ae',
        },
      }}
    />
  )
}

export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'NUBIZ',
        url: 'https://nubiz.ae',
        description:
          'UAE business setup consultancy. Freezone, mainland, offshore company formation in Dubai.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://nubiz.ae/blog?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        provider: {
          '@type': 'Organization',
          name: 'NUBIZ',
          url: 'https://nubiz.ae',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Arab Emirates',
        },
        serviceType: 'Business Setup Consultancy',
      }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url,
        datePublished,
        dateModified,
        author: {
          '@type': 'Organization',
          name: 'NUBIZ',
          url: 'https://nubiz.ae',
        },
        publisher: {
          '@type': 'Organization',
          name: 'NUBIZ',
          logo: {
            '@type': 'ImageObject',
            url: 'https://nubiz.ae/favicon.svg',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  )
}
