import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Meeting Spaces | Marrakech Property Service",
  description:
    "Book beautifully designed meeting spaces across Marrakech's most exclusive locations.",
  openGraph: {
    title: "Meeting Spaces | Marrakech Property Service",
    description: "Book beautifully designed meeting spaces across Marrakech's most exclusive locations.",
    url: "https://www.marrakechpropertyservice.com/meeting-space/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/meeting-space/",
  },
};

export default function MeetingSpacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/meeting-space" />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#FBEFDD] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h1 className="text-[#1A171A] text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px] md:mb-[32px]">
              Meeting Spaces
            </h1>
            <p className="text-[#1A171A]/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Professional meeting spaces in Marrakech&apos;s most prestigious locations. Perfect for business meetings, conferences, and corporate events.
            </p>
          </div>
        </section>

        {/* Spaces Section */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Available Spaces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {[
                { name: "Boardroom", capacity: "12-20 people", location: "Palmeraie" },
                { name: "Conference Room", capacity: "30-50 people", location: "Hivernage" },
                { name: "Private Suite", capacity: "4-8 people", location: "Medina" },
                { name: "Workshop Space", capacity: "20-40 people", location: "Guéliz" },
                { name: "Executive Room", capacity: "6-10 people", location: "Palmeraie" },
                { name: "Training Room", capacity: "15-25 people", location: "Hivernage" },
              ].map((space) => (
                <div
                  key={space.name}
                  className="bg-[#FBEFDD] rounded-[9px] p-[24px] hover:bg-[#F5D6AB] transition-colors"
                >
                  <h3 className="text-[20px] md:text-[24px] font-medium text-[#1A171A] mb-[8px]">
                    {space.name}
                  </h3>
                  <p className="text-[14px] text-[#1A171A]/70 mb-[4px]">
                    {space.capacity}
                  </p>
                  <p className="text-[14px] text-[#1A171A]/70">
                    {space.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#274038] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-[32px]">
              Book a Meeting Space
            </h2>
            <p className="text-[18px] md:text-[20px] text-white/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Contact us to reserve your perfect meeting space in Marrakech.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-[8px] bg-white text-[#274038] px-[32px] py-[14px] rounded-[6px] text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:bg-white/90 transition-colors"
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
