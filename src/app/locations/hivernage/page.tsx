import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hivernage Properties",
  description:
    "Modern luxury apartments and residences in Hivernage, Marrakech's upscale contemporary district. Five-star hotels, fine dining, and premium facilities. Investment guide.",
  openGraph: {
    title: "Hivernage Properties | Marrakech Property Service",
    description: "Modern luxury apartments in Marrakech's upscale Hivernage district.",
    url: "https://www.marrakechpropertyservice.com/locations/hivernage/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/locations/hivernage/",
  },
};

export default function HivernagePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/locations/hivernage" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Hivernage, Marrakech",
        description: "Modern luxury district with contemporary apartments, five-star hotels, and premium amenities in Marrakech.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
          addressRegion: "Marrakech-Safi",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.6200,
          longitude: -8.0100,
        },
      }} />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#1A171A] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
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
              Hivernage
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Marrakech&apos;s modern luxury quarter — contemporary apartments, five-star hotels, and world-class dining.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                About Hivernage
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Hivernage is Marrakech&apos;s most modern and upscale district, located just west of the historic Medina. This contemporary neighborhood is home to five-star hotels including the La Mamounia and the Royal Mansour, as well as sleek residential complexes, fine dining restaurants, and upscale shopping.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Properties in Hivernage offer a modern lifestyle with easy access to both the Medina and the Palmeraie. The district features tree-lined boulevards, landscaped gardens, and contemporary architecture that contrasts with the traditional riads of the old city. It&apos;s the ideal choice for guests who prefer modern amenities and a cosmopolitan atmosphere.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Hivernage is also Marrakech&apos;s entertainment hub, with nightclubs, cocktail bars, and the famous Casino de Marrakech. The area attracts a younger, affluent demographic seeking a vibrant social scene alongside luxury accommodations. Properties here benefit from strong demand from both leisure and business travelers.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Average Nightly Rate", value: "2,000 - 6,000 MAD", description: "Premium pricing for modern apartments and luxury residences with hotel-grade amenities." },
                { title: "Peak Season", value: "Oct - Apr", description: "Strong demand during European winter, with additional peaks during conferences and events." },
                { title: "Property Types", value: "Apartments & Residences", description: "Modern apartments, penthouses, and luxury residences in contemporary complexes." },
                { title: "Average Occupancy", value: "72%+", description: "Consistent demand from both leisure tourists and business travelers." },
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
              Why Invest in Hivernage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { title: "Modern Infrastructure", description: "New-build properties with modern amenities, elevator access, underground parking, and concierge services." },
                { title: "Business Travel", description: "Proximity to the convention center and major hotels makes Hivernage a preferred choice for corporate travelers." },
                { title: "Lifestyle Appeal", description: "Fine dining, nightlife, and upscale shopping attract a premium clientele willing to pay top rates." },
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
              List Your Hivernage Property
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Maximize your Hivernage apartment&apos;s potential with professional management. Dynamic pricing, multi-platform listings, and premium guest support.
            </p>
            <div className="flex flex-wrap gap-[16px] justify-center">
              <a
                href="/enquire/"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]"
              >
                Enquire Now
              </a>
              <a
                href="/properties/?location=hivernage"
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
