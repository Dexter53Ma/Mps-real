import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Guéliz Properties",
  description:
    "Modern apartments in Guéliz, Marrakech's vibrant new town. Tree-lined boulevards, art galleries, cafés, and easy access to the Medina. Investment guide and rental yields.",
  openGraph: {
    title: "Guéliz Properties | Marrakech Property Service",
    description: "Modern apartments in Marrakech's vibrant Guéliz district.",
    url: "https://www.marrakechpropertyservice.com/locations/gueliz/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/locations/gueliz/",
  },
};

export default function GuelizPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/locations/gueliz" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Guéliz, Marrakech",
        description: "Modern Marrakech district with tree-lined boulevards, art galleries, cafés, and convenient access to both the Medina and new city.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
          addressRegion: "Marrakech-Safi",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.6300,
          longitude: -8.0000,
        },
      }} />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a
              href="/locations/"
              className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]"
            >
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Locations
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">
              Guéliz
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Marrakech&apos;s vibrant new town — cosmopolitan living with art galleries, cafés, and modern amenities.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                About Guéliz
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Guéliz is Marrakech&apos;s modern new town, built during the French Protectorate era and now serving as the city&apos;s commercial and administrative center. With its wide tree-lined boulevards, art deco architecture, and contemporary lifestyle, Guéliz offers a completely different experience from the traditional Medina.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  The neighborhood is home to Marrakech&apos;s most cosmopolitan residents and visitors. Avenue Mohammed V is the main artery, lined with shops, restaurants, cafés, and galleries. The famous Jardin Majorelle, Yves Saint Laurent&apos;s former garden and museum, is located in Guéliz and attracts hundreds of thousands of visitors annually.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Apartments in Guéliz are popular with both short-term vacation renters and long-term tenants. The area offers modern infrastructure, supermarkets, international schools, and easy access to the Medina (10 minutes by taxi). It&apos;s the ideal choice for guests who want a comfortable, modern base with all city amenities at their doorstep.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Average Nightly Rate", value: "1,200 - 3,500 MAD", description: "Affordable luxury pricing for modern apartments with city views and contemporary amenities." },
                { title: "Peak Season", value: "Year-round", description: "Consistent demand from tourists, business travelers, and digital nomads throughout the year." },
                { title: "Property Types", value: "Apartments & Flats", description: "Modern apartments, studio flats, and penthouses in contemporary buildings." },
                { title: "Average Occupancy", value: "68%+", description: "Steady demand driven by proximity to amenities, attractions, and transport links." },
              ].map((stat) => (
                <div key={stat.title} className="bg-[#FBEFDD] rounded-[9px] p-[24px]">
                  <p className="text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[4px]">{stat.title}</p>
                  <p className="text-[24px] font-medium text-[#1A171A] mb-[8px]">{stat.value}</p>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Invest */}
        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Why Invest in Guéliz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { title: "Affordable Entry Point", description: "Guéliz offers lower entry prices than the Palmeraie or Hivernage, making it accessible for first-time property investors." },
                { title: "Digital Nomad Hub", description: "Modern apartments with high-speed internet attract the growing digital nomad community seeking extended stays." },
                { title: "Cultural Access", description: "Walking distance to the Majorelle Garden, art galleries, and restaurants — plus easy taxi access to the Medina." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-[9px] p-[32px]">
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">{item.title}</h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A171A] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">
              List Your Guéliz Apartment
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Let MPS manage your Guéliz apartment for maximum returns. Professional listings, dynamic pricing, and dedicated guest support.
            </p>
            <div className="flex flex-wrap gap-[16px] justify-center">
              <a
                href="/enquire/"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]"
              >
                Enquire Now
              </a>
              <a
                href="/properties/?location=gueliz"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] border border-white text-white rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white hover:text-[#1A171A] min-h-[44px]"
              >
                View Properties
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
