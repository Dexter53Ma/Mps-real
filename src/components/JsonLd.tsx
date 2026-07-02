export function JsonLdScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marrakech Property Service",
    alternateName: "MPS",
    description:
      "Full-service property management for villas, riads, and apartments in Marrakech. Airbnb & Booking.com optimization, professional photography, cleaning, maintenance, and 24/7 guest support.",
    url: "https://www.marrakechpropertyservice.com",
    telephone: "+212621189496",
    email: "info@marrakechpropertyservice.com",
    image: "https://www.marrakechpropertyservice.com/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png",
    logo: "https://www.marrakechpropertyservice.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Route de Ouarzazate",
      addressLocality: "Marrakech",
      addressRegion: "Marrakech-Safi",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.6295,
      longitude: -7.9811,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Marrakech",
      },
      {
        "@type": "Neighborhood",
        name: "Palmeraie",
      },
      {
        "@type": "Neighborhood",
        name: "Medina",
      },
      {
        "@type": "Neighborhood",
        name: "Hivernage",
      },
      {
        "@type": "Neighborhood",
        name: "Guéliz",
      },
    ],
    serviceType: [
      "Property Management",
      "Airbnb Management",
      "Vacation Rental Management",
      "Concierge Services",
      "Professional Photography",
      "Property Maintenance",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/MarrakechPropertyService",
      "https://www.instagram.com/marrakechpropertyservice/",
      "https://www.linkedin.com/company/marrakech-property-service/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marrakech Property Service",
    url: "https://www.marrakechpropertyservice.com",
    logo: "https://www.marrakechpropertyservice.com/images/logo.png",
    description: "Marrakech's leading luxury property management company specializing in villas, riads, and apartments.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212621189496",
      contactType: "customer service",
      availableLanguage: ["English", "French", "Arabic"],
    },
    sameAs: [
      "https://www.facebook.com/MarrakechPropertyService",
      "https://www.instagram.com/marrakechpropertyservice/",
      "https://www.linkedin.com/company/marrakech-property-service/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marrakech Property Service",
    url: "https://www.marrakechpropertyservice.com",
    publisher: {
      "@type": "Organization",
      name: "Marrakech Property Service",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.marrakechpropertyservice.com/properties/?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const servicePropertyManagement = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Property Management",
    description: "Full-service property management for villas, riads, and apartments in Marrakech. Includes Airbnb & Booking.com optimization, professional photography, cleaning, maintenance, and 24/7 guest support.",
    provider: {
      "@type": "LocalBusiness",
      name: "Marrakech Property Service",
      url: "https://www.marrakechpropertyservice.com",
    },
    areaServed: {
      "@type": "City",
      name: "Marrakech",
    },
    serviceType: "Property Management",
    category: "Real Estate Services",
    offers: {
      "@type": "Offer",
      price: "Contact for pricing",
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
    },
  };

  const serviceAirbnbManagement = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Airbnb Management",
    description: "Professional Airbnb management services including listing optimization, guest communication, cleaning, and maintenance in Marrakech.",
    provider: {
      "@type": "LocalBusiness",
      name: "Marrakech Property Service",
      url: "https://www.marrakechpropertyservice.com",
    },
    areaServed: {
      "@type": "City",
      name: "Marrakech",
    },
    serviceType: "Airbnb Management",
    category: "Vacation Rental Management",
    offers: {
      "@type": "Offer",
      price: "Contact for pricing",
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <JsonLdScript schema={localBusiness} />
      <JsonLdScript schema={organization} />
      <JsonLdScript schema={website} />
      <JsonLdScript schema={servicePropertyManagement} />
      <JsonLdScript schema={serviceAirbnbManagement} />
    </>
  );
}
