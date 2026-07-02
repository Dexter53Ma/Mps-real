import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Medina Properties",
  description:
    "Discover traditional riads in Marrakech's historic Medina. UNESCO-listed heritage, authentic Moroccan architecture, and immersive cultural experiences. Rental yields and investment guide.",
  openGraph: {
    title: "Medina Properties | Marrakech Property Service",
    description: "Traditional riads in Marrakech's UNESCO-listed historic Medina.",
    url: "https://www.marrakechpropertyservice.com/locations/medina/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/locations/medina/",
  },
};

export default function MedinaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/locations/medina" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Medina, Marrakech",
        description: "Historic UNESCO-listed heart of Marrakech with traditional riads, bustling souks, and authentic Moroccan architecture.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
          addressRegion: "Marrakech-Safi",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.6258,
          longitude: -7.9891,
        },
      }} />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#4F0003] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
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
              Medina
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              The UNESCO-listed historic heart of Marrakech — traditional riads, bustling souks, and centuries of Moroccan culture.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                About the Medina
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  The Medina of Marrakech is a UNESCO World Heritage Site and one of the most vibrant historic quarters in North Africa. Enclosed by ancient ramparts, this labyrinthine district is home to traditional riads — restored courtyard houses that offer an authentic Moroccan living experience.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Riads in the Medina are among the most sought-after properties for vacation rentals. Their unique architectural features — interior courtyards, rooftop terraces, intricate tilework, and ornate plaster carvings — attract guests seeking an authentic cultural experience. Many riads have been carefully restored to blend traditional design with modern comforts.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  The Medina is surrounded by famous landmarks including the Jemaa el-Fnaa square, the Koutoubia Mosque, the Bahia Palace, and the Majorelle Garden. Guests staying in Medina properties have easy walking access to souks, restaurants, and cultural attractions, making it one of Marrakech&apos;s most popular areas for tourism.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Average Nightly Rate", value: "1,500 - 5,000 MAD", description: "Competitive pricing for authentic riads with varying levels of luxury and restoration." },
                { title: "Peak Season", value: "Year-round", description: "The Medina attracts visitors throughout the year, with peaks during spring and autumn." },
                { title: "Property Types", value: "Riads & Townhouses", description: "Traditional courtyard houses with rooftop terraces and authentic Moroccan design." },
                { title: "Average Occupancy", value: "70%+", description: "Strong demand from cultural tourists and families seeking authentic experiences." },
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
              Why Invest in the Medina
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { title: "Cultural Heritage", description: "Owning a riad in the Medina means preserving a piece of Moroccan heritage while generating income from cultural tourism." },
                { title: "Unique Experiences", description: "Medina riads offer experiences that hotels cannot replicate — private courtyards, rooftop dining, and authentic Moroccan hospitality." },
                { title: "Growing Tourism", description: "Marrakech welcomes over 12 million visitors annually, with the Medina remaining the top destination for international tourists." },
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
              List Your Medina Riad
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Let MPS manage your Medina riad with professional care. We handle restoration guidance, guest management, and marketing to maximize your returns.
            </p>
            <div className="flex flex-wrap gap-[16px] justify-center">
              <a
                href="/enquire/"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]"
              >
                Enquire Now
              </a>
              <a
                href="/properties/?location=medina"
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
