import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cleaning & Maintenance",
  description:
    "Hospitality-grade cleaning and property maintenance for Marrakech rentals. Turnover cleaning, deep cleaning, pool care, garden upkeep, and emergency repairs.",
  openGraph: {
    title: "Cleaning & Maintenance | Marrakech Property Service",
    description: "Hospitality-grade cleaning and maintenance for Marrakech vacation rentals.",
    url: "https://www.marrakechpropertyservice.com/services/cleaning-maintenance/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/services/cleaning-maintenance/",
  },
};

export default function CleaningMaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/services/cleaning-maintenance" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Cleaning & Maintenance",
        description: "Hospitality-grade cleaning and property maintenance for Marrakech vacation rentals. Turnover cleaning, deep cleaning, pool care, garden upkeep.",
        provider: { "@type": "LocalBusiness", name: "Marrakech Property Service", url: "https://www.marrakechpropertyservice.com" },
        areaServed: { "@type": "City", name: "Marrakech" },
        serviceType: "Cleaning & Maintenance",
      }} />
      <Header />

      <main className="flex-1">
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a href="/meeting-and-events/" className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Services
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">Cleaning & Maintenance</h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[800px]">
              Hospitality-grade cleaning and comprehensive property maintenance to keep your Marrakech property in perfect condition.
            </p>
          </div>
        </section>

        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">Cleaning Standards</h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Cleanliness is the top factor in guest reviews. Our hospitality-grade cleaning teams follow strict protocols to ensure every property meets the highest standards between guest stays. We use professional-grade cleaning products and follow hotel-industry hygiene practices.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Our turnover cleaning service includes full property sanitization, fresh linens and towels, bathroom deep clean, kitchen cleaning, floor care, and restocking of toiletries and amenities. We also conduct regular deep cleaning on a scheduled basis.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  For maintenance, our team handles everything from routine pool care and garden upkeep to plumbing repairs, electrical issues, and HVAC servicing. We have relationships with trusted local contractors for specialized work.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Turnover Cleaning", desc: "Full property cleaning between guests with fresh linens, towels, and amenities." },
                { title: "Deep Cleaning", desc: "Scheduled deep cleaning including upholstery, carpets, and hard-to-reach areas." },
                { title: "Pool & Garden", desc: "Regular pool maintenance, chemical balancing, and garden upkeep." },
                { title: "Property Maintenance", desc: "Plumbing, electrical, HVAC, and general repairs handled promptly." },
              ].map((item) => (
                <div key={item.title} className="bg-[#FBEFDD] rounded-[9px] p-[24px]">
                  <h3 className="text-[18px] font-medium text-[#1A171A] mb-[8px]">{item.title}</h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A171A] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">Keep Your Property Perfect</h2>
            <a href="/enquire/" className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]">
              Learn More
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
