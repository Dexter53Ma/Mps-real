import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Photography",
  description:
    "Professional property photography for Marrakech villas, riads, and apartments. Interior, exterior, aerial, and lifestyle photography that drives more bookings and higher rates.",
  openGraph: {
    title: "Professional Photography | Marrakech Property Service",
    description: "Professional property photography that drives more bookings and higher rates in Marrakech.",
    url: "https://www.marrakechpropertyservice.com/services/professional-photography/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/services/professional-photography/",
  },
};

export default function PhotographyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/services/professional-photography" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Professional Photography",
        description: "Professional property photography for Marrakech villas, riads, and apartments. Interior, exterior, aerial, and lifestyle photography.",
        provider: { "@type": "LocalBusiness", name: "Marrakech Property Service", url: "https://www.marrakechpropertyservice.com" },
        areaServed: { "@type": "City", name: "Marrakech" },
        serviceType: "Professional Photography",
      }} />
      <Header />

      <main className="flex-1">
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a href="/meeting-and-events/" className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Services
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">Professional Photography</h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[800px]">
              Stunning property photography that showcases your Marrakech property at its best. More bookings, higher rates, better guest expectations.
            </p>
          </div>
        </section>

        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">Why Professional Photography Matters</h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Professional photography is the single most impactful investment for your vacation rental. Studies show that listings with professional photos receive 40% more bookings and command rates 20-30% higher than those with amateur photography.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Our photography team specializes in real estate and hospitality, understanding how to capture the unique character of Marrakech properties — from the intricate tilework of a Medina riad to the expansive gardens of a Palmeraie villa.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  We offer a complete range of photography services including interior shots, exterior views, aerial drone photography, twilight photography, and lifestyle images that help guests imagine their stay.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Interior Photography", desc: "Professional interior shots that highlight architecture, design, and ambiance of your property." },
                { title: "Exterior & Grounds", desc: "Pool areas, gardens, terraces, and outdoor spaces that showcase your property's full appeal." },
                { title: "Aerial Drone", desc: "Stunning aerial perspectives showing property layout, surroundings, and proximity to attractions." },
                { title: "Lifestyle Images", desc: "Curated lifestyle shots that help guests visualize their stay and emotional experience." },
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
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">Transform Your Listing</h2>
            <a href="/enquire/" className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]">
              Book a Photo Session
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
