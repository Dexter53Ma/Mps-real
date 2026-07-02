import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Event Spaces | Marrakech Property Service",
  description:
    "Exclusive event spaces for unforgettable experiences in Marrakech's most prestigious venues.",
  openGraph: {
    title: "Event Spaces | Marrakech Property Service",
    description: "Exclusive event spaces for unforgettable experiences in Marrakech.",
    url: "https://www.marrakechpropertyservice.com/event-space/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/event-space/",
  },
};

export default function EventSpacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/event-space" />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#4F0003] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h1 className="text-[#FBEFDD] text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px] md:mb-[32px]">
              Event Spaces
            </h1>
            <p className="text-[#FBEFDD]/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Create unforgettable moments in Marrakech&apos;s most exclusive venues. From intimate gatherings to grand celebrations.
            </p>
          </div>
        </section>

        {/* Venues Section */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Our Venues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {[
                { name: "Villa Palmeraie", capacity: "Up to 100 guests", type: "Private Villa" },
                { name: "Riad Medina", capacity: "Up to 60 guests", type: "Traditional Riad" },
                { name: "Rooftop Hivernage", capacity: "Up to 150 guests", type: "Rooftop Terrace" },
                { name: "Garden Suite", capacity: "Up to 80 guests", type: "Garden Venue" },
              ].map((venue) => (
                <div
                  key={venue.name}
                  className="border border-[#1A171A]/20 rounded-[9px] p-[32px] hover:border-[#1A171A] transition-colors"
                >
                  <span className="text-[12px] uppercase tracking-[0.15em] text-[#1A171A]/60 mb-[8px] block">
                    {venue.type}
                  </span>
                  <h3 className="text-[24px] md:text-[28px] font-medium text-[#1A171A] mb-[8px]">
                    {venue.name}
                  </h3>
                  <p className="text-[16px] text-[#1A171A]/70">
                    {venue.capacity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Event Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { title: "Catering", description: "Private chefs and luxury dining experiences" },
                { title: "Entertainment", description: "Live music, DJs, and cultural performances" },
                { title: "Decorations", description: "Bespoke event styling and floral arrangements" },
              ].map((service) => (
                <div key={service.title} className="bg-white rounded-[9px] p-[24px]">
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#1A171A]/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A171A] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">
              Plan Your Event
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Let us help you create an unforgettable experience in Marrakech.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[32px] py-[14px] rounded-[6px] text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:bg-[#F5D6AB] transition-colors"
            >
              Enquire now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
