import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Concierge Services",
  description:
    "Premium concierge services for Marrakech guests. Airport transfers, restaurant reservations, excursion bookings, personal shopping, and 24/7 multilingual support.",
  openGraph: {
    title: "Concierge Services | Marrakech Property Service",
    description: "Premium concierge services for an unforgettable Marrakech experience.",
    url: "https://www.marrakechpropertyservice.com/services/concierge/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/services/concierge/",
  },
};

export default function ConciergePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/services/concierge" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Concierge Services",
        description: "Premium concierge services for Marrakech guests including airport transfers, restaurant reservations, excursions, and 24/7 support.",
        provider: { "@type": "LocalBusiness", name: "Marrakech Property Service", url: "https://www.marrakechpropertyservice.com" },
        areaServed: { "@type": "City", name: "Marrakech" },
        serviceType: "Concierge Services",
      }} />
      <Header />

      <main className="flex-1">
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a href="/meeting-and-events/" className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Services
            </a>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px]">Concierge Services</h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[800px]">
              Premium concierge support for an unforgettable Marrakech experience. Available 24/7 in English, French, Arabic, and Spanish.
            </p>
          </div>
        </section>

        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">What Our Concierge Offers</h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Our multilingual concierge team provides personalized support to ensure every guest has an exceptional Marrakech experience. From the moment of booking to check-out, we handle requests with care and attention to detail.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Whether you need airport transfers, restaurant reservations at Marrakech&apos;s finest dining establishments, guided tours of the Medina and Atlas Mountains, or personal shopping assistance in the souks, our concierge team makes it happen.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  We also arrange special experiences like private cooking classes, traditional hammam visits, hot air balloon rides over the Palmeraie, and desert excursions to the Sahara.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Airport Transfers", desc: "Private luxury transfers from Marrakech Menara Airport to your property." },
                { title: "Restaurant Reservations", desc: "Priority bookings at Marrakech's top restaurants and hidden gems." },
                { title: "Excursion Bookings", desc: "Atlas Mountain tours, desert excursions, and cultural experiences." },
                { title: "Personal Shopping", desc: "Guided shopping in the souks, antique dealers, and artisan workshops." },
                { title: "Private Experiences", desc: "Cooking classes, hammam visits, hot air balloons, and more." },
                { title: "24/7 Support", desc: "Multilingual assistance available around the clock via phone, WhatsApp, or email." },
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
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">Experience Marrakech at Its Best</h2>
            <a href="/enquire/" className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]">
              Contact Our Concierge
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
