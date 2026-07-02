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
      addressLocality: "Marrakech",
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
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marrakech Property Service",
    url: "https://www.marrakechpropertyservice.com",
    logo: "https://www.marrakechpropertyservice.com/images/logo.png",
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.marrakechpropertyservice.com/properties/?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
