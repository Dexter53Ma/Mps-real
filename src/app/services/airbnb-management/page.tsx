import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Airbnb Management",
  description:
    "Professional Airbnb management in Marrakech. Listing optimization, pricing strategy, guest communication, cleaning, and 24/7 support. Maximize your occupancy and revenue.",
  openGraph: {
    title: "Airbnb Management | Marrakech Property Service",
    description: "Professional Airbnb management in Marrakech to maximize your occupancy and revenue.",
    url: "https://www.marrakechpropertyservice.com/services/airbnb-management/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/services/airbnb-management/",
  },
};

export default function AirbnbManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/services/airbnb-management" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Airbnb Management",
        description: "Professional Airbnb management services including listing optimization, guest communication, cleaning, and maintenance in Marrakech.",
        provider: { "@type": "LocalBusiness", name: "Marrakech Property Service", url: "https://www.marrakechpropertyservice.com" },
        areaServed: { "@type": "City", name: "Marrakech" },
        serviceType: "Airbnb Management",
      }} />
      <Header />

      <main className="flex-1">
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a href="/meeting-and-events/" className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Services
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">Airbnb Management</h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[800px]">
              Maximize your Airbnb occupancy and revenue with professional listing optimization, pricing strategy, and guest management.
            </p>
          </div>
        </section>

        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">Our Airbnb Approach</h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Airbnb is the leading platform for vacation rentals in Marrakech, and our management approach is designed to maximize your performance on it. We optimize every element of your listing — from professional photography and compelling descriptions to strategic pricing and instant booking settings.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Our team monitors your listing performance daily, adjusting pricing based on demand signals, competitor analysis, and local events. We respond to guest inquiries within minutes, maintaining the fast response times that Airbnb&apos;s algorithm rewards with higher search rankings.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  We also manage your Superhost status by maintaining high ratings, quick responses, and zero cancellations. Properties managed by MPS consistently achieve 4.8+ star ratings and Superhost designation within the first three months.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Listing Optimization", desc: "Professional photos, compelling copy, SEO-optimized titles, and strategic keyword placement for maximum visibility." },
                { title: "Dynamic Pricing", desc: "Real-time rate adjustments using market data, competitor analysis, and demand forecasting." },
                { title: "Guest Communication", desc: "Fast, professional responses to inquiries, booking management, and 24/7 in-stay support." },
                { title: "Review Management", desc: "Proactive review solicitation, response management, and rating optimization strategies." },
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
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">Optimize Your Airbnb Today</h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 max-w-[600px] mx-auto mb-[40px]">
              Let us take your Airbnb listing to Superhost status. Professional management, maximum occupancy, premium rates.
            </p>
            <a href="/enquire/" className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]">
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
