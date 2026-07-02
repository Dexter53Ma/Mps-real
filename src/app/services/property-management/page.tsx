import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Property Management",
  description:
    "Full-service property management for villas, riads, and apartments in Marrakech. Listing optimization, guest management, cleaning, maintenance, and financial reporting.",
  openGraph: {
    title: "Property Management | Marrakech Property Service",
    description: "Full-service property management for Marrakech villas, riads, and apartments.",
    url: "https://www.marrakechpropertyservice.com/services/property-management/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/services/property-management/",
  },
};

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/services/property-management" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Property Management",
        description: "Full-service property management for villas, riads, and apartments in Marrakech. Includes listing optimization, guest management, cleaning, maintenance, and financial reporting.",
        provider: { "@type": "LocalBusiness", name: "Marrakech Property Service", url: "https://www.marrakechpropertyservice.com" },
        areaServed: { "@type": "City", name: "Marrakech" },
        serviceType: "Property Management",
      }} />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a href="/meeting-and-events/" className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Services
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">
              Property Management
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[800px]">
              End-to-end property management for Marrakech villas, riads, and apartments. We handle everything so you earn passive income.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">What We Handle</h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Our property management service covers every aspect of running a successful rental property in Marrakech. From the moment we take over your property, we handle listings, guest communication, cleaning, maintenance, pricing optimization, and financial reporting.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  We manage properties across all major platforms — Airbnb, Booking.com, Vrbo, and direct booking channels — with synchronized calendars to prevent double bookings. Our dynamic pricing engine adjusts rates in real-time based on demand, seasonality, and local events.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Every property gets a dedicated manager who oversees the portfolio, ensuring personalized attention and consistent quality standards. You receive monthly reports with occupancy data, revenue figures, and guest feedback.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Listing Management", desc: "Professional listings on Airbnb, Booking.com, Vrbo, and direct booking channels with synchronized calendars." },
                { title: "Guest Communication", desc: "24/7 multilingual support from pre-booking questions to check-in instructions and in-stay assistance." },
                { title: "Cleaning & Turnover", desc: "Hospitality-grade cleaning between every guest stay with fresh linens, towels, and toiletries." },
                { title: "Maintenance", desc: "Pool care, garden upkeep, HVAC servicing, plumbing, and emergency repairs handled promptly." },
                { title: "Dynamic Pricing", desc: "Real-time rate optimization based on demand, seasonality, and local events to maximize revenue." },
                { title: "Financial Reporting", desc: "Monthly reports with occupancy data, revenue figures, and transparent accounting." },
              ].map((item) => (
                <div key={item.title} className="bg-[#FBEFDD] rounded-[9px] p-[24px]">
                  <h3 className="text-[18px] font-medium text-[#1A171A] mb-[8px]">{item.title}</h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
              {[
                { step: "01", title: "Consultation", desc: "We assess your property, discuss goals, and create a customized management plan." },
                { step: "02", title: "Onboarding", desc: "Professional photography, listing creation, and property setup with our quality standards." },
                { step: "03", title: "Go Live", desc: "Your property goes live across all platforms with optimized pricing and instant booking." },
                { step: "04", title: "Ongoing Management", desc: "24/7 guest support, cleaning, maintenance, and monthly performance reports." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-[9px] p-[32px]">
                  <p className="text-[48px] font-medium text-[#274038] mb-[8px]">{item.step}</p>
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">{item.title}</h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A171A] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">Ready to Get Started?</h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 max-w-[600px] mx-auto mb-[40px]">
              Let us manage your Marrakech property. Get a free consultation and customized management plan.
            </p>
            <a href="/enquire/" className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]">
              Request a Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
