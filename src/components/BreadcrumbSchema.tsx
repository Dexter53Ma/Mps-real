import { JsonLdScript } from "@/components/JsonLd";

const BASE_URL = "https://www.marrakechpropertyservice.com";

const pageNames: Record<string, string> = {
  "": "Home",
  properties: "Properties",
  "about-mps": "About MPS",
  "contact-us": "Contact Us",
  enquire: "Enquire",
  "meeting-and-events": "Our Services",
  locations: "Locations",
  "frequently-asked-questions": "FAQ",
  "our-latest-storey": "Our Latest MPS",
  "storey-club": "MPS Club",
  sustainability: "Sustainability",
  "meeting-space": "Meeting Spaces",
  "event-space": "Event Spaces",
  "privacy-notice": "Privacy Notice",
  "terms-of-use": "Terms of Use",
  "terms-conditions": "Terms & Conditions",
};

export default function BreadcrumbSchema({ path }: { path: string }) {
  const segments = path.replace(/^\//, "").replace(/\/$/, "").split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ];

  if (segments.length > 0) {
    const pageSlug = segments[0];
    const pageName = pageNames[pageSlug] || pageSlug;
    itemListElement.push({
      "@type": "ListItem" as const,
      position: 2,
      name: pageName,
      item: `${BASE_URL}/${pageSlug}/`,
    });
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return <JsonLdScript schema={breadcrumb} />;
}
