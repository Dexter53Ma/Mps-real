import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dynamic Pricing",
  description:
    "Data-driven dynamic pricing for Marrakech vacation rentals. Real-time rate optimization based on demand, seasonality, and local events. Maximize revenue and occupancy.",
  openGraph: {
    title: "Dynamic Pricing | Marrakech Property Service",
    description: "Data-driven dynamic pricing to maximize your Marrakech rental revenue.",
    url: "https://www.marrakechpropertyservice.com/services/dynamic-pricing/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/services/dynamic-pricing/",
  },
};

export default function DynamicPricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/services/dynamic-pricing" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Dynamic Pricing",
        description: "Data-driven dynamic pricing for Marrakech vacation rentals. Real-time rate optimization based on demand, seasonality, and local events.",
        provider: { "@type": "LocalBusiness", name: "Marrakech Property Service", url: "https://www.marrakechpropertyservice.com" },
        areaServed: { "@type": "City", name: "Marrakech" },
        serviceType: "Dynamic Pricing",
      }} />
      <Header />

      <main className="flex-1">
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a href="/meeting-and-events/" className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Services
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">Dynamic Pricing</h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[800px]">
              Maximize your revenue with data-driven pricing. Real-time rate optimization based on demand, seasonality, and local events.
            </p>
          </div>
        </section>

        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">How Dynamic Pricing Works</h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Static pricing leaves money on the table. Our dynamic pricing engine analyzes hundreds of data points — including demand trends, competitor pricing, local events, seasonal patterns, and booking lead times — to set optimal rates for your property every day.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  During high-demand periods like the Marrakech International Film Festival, Ramadan, or European school holidays, our system automatically increases rates to capture maximum value. During slower periods, it adjusts rates downward to maintain occupancy.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Properties using dynamic pricing typically see 15-30% higher revenue compared to static pricing strategies. The system runs continuously, adjusting rates multiple times per day to match market conditions.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Real-Time Optimization", desc: "Rates adjusted multiple times daily based on live demand data and market conditions." },
                { title: "Event-Based Pricing", desc: "Automatic rate increases during festivals, conferences, and high-demand periods." },
                { title: "Competitor Analysis", desc: "Continuous monitoring of competing properties to maintain competitive positioning." },
                { title: "Seasonal Strategies", desc: "Customized pricing curves for peak, shoulder, and low seasons." },
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
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">Maximize Your Revenue</h2>
            <a href="/enquire/" className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]">
              Get a Pricing Analysis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
