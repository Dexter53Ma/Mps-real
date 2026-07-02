import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Palmeraie Properties",
  description:
    "Discover luxury villas in the Palmeraie, Marrakech's most prestigious resort area. Private pools, gardens, and Atlas Mountain views. Expected rental yields and investment potential.",
  openGraph: {
    title: "Palmeraie Properties | Marrakech Property Service",
    description: "Luxury villas in the Palmeraie with private pools and Atlas Mountain views.",
    url: "https://www.marrakechpropertyservice.com/locations/palmeraie/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/locations/palmeraie/",
  },
};

export default function PalmeraiePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/locations/palmeraie" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Palmeraie, Marrakech",
        description: "Exclusive resort area with luxury villas, private pools, and world-class amenities in the Palmeraie district of Marrakech.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
          addressRegion: "Marrakech-Safi",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.6500,
          longitude: -7.9800,
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
              Palmeraie
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Marrakech&apos;s most exclusive resort area — luxury villas with private pools, lush gardens, and stunning Atlas Mountain views.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                About the Palmeraie
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  The Palmeraie is a palm grove stretching across the northern outskirts of Marrakech, home to some of the city&apos;s most luxurious private villas and resort properties. Named after the thousands of date palms that line its streets, the Palmeraie offers a tranquil retreat just 15 minutes from the bustling Medina.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  This exclusive area is synonymous with luxury living in Marrakech. Properties here feature expansive private grounds, swimming pools, manicured gardens, and often private tennis courts. The neighborhood attracts high-net-worth individuals and families seeking privacy, space, and world-class amenities.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  The Palmeraie is also home to several five-star resorts, golf courses, and fine dining restaurants, making it a popular choice for luxury vacation rentals. Properties in this area command premium nightly rates and maintain strong occupancy throughout the year, particularly during the peak season from October to April.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Average Nightly Rate", value: "2,500 - 8,000 MAD", description: "Premium pricing for luxury villas with pools and private grounds." },
                { title: "Peak Season", value: "Oct - Apr", description: "Highest demand during European winter months and holiday periods." },
                { title: "Property Types", value: "Villas & Estates", description: "Spacious private properties with gardens, pools, and modern amenities." },
                { title: "Average Occupancy", value: "75%+", description: "Strong year-round occupancy driven by luxury tourism demand." },
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
              Why Invest in the Palmeraie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { title: "Premium Positioning", description: "The Palmeraie is Marrakech's most prestigious address. Properties here attract high-value guests willing to pay premium rates for privacy and luxury." },
                { title: "Strong Rental Yields", description: "Luxury villas in the Palmeraie generate some of the highest rental yields in Marrakech, with peak-season rates 3-5x higher than standard properties." },
                { title: "Capital Appreciation", description: "Limited land availability and持续 demand for luxury properties make the Palmeraie one of Marrakech's strongest real estate investment markets." },
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
              List Your Palmeraie Property
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Maximize your Palmeraie villa&apos;s potential with MPS property management. Professional photography, dynamic pricing, and 24/7 guest support.
            </p>
            <div className="flex flex-wrap gap-[16px] justify-center">
              <a
                href="/enquire/"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]"
              >
                Enquire Now
              </a>
              <a
                href="/properties/?location=palmeraie"
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
