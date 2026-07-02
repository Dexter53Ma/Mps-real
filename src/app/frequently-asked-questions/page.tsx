import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "Frequently Asked Questions | Marrakech Property Service",
  description: "Everything you need to know about our luxury properties and concierge services in Marrakech.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[60px] md:pb-[80px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a
              href="/"
              className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]"
            >
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </a>
            <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-medium leading-[1] tracking-tight mb-[20px]">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[700px] mb-[32px]">
              Everything you need to know about our luxury properties and concierge services in Marrakech. Can&apos;t find what you&apos;re looking for? Contact our team.
            </p>
            <div className="flex flex-wrap gap-[12px]">
              <a
                href="/contact-us/"
                className="btn-hover inline-flex items-center px-[24px] py-[12px] bg-white text-[#274038] rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white/90 min-h-[44px]"
              >
                Contact Us
              </a>
              <a
                href="/properties/"
                className="btn-hover inline-flex items-center px-[24px] py-[12px] border border-white text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white hover:text-[#274038] min-h-[44px]"
              >
                View Properties
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-[#FBEFDD] py-[40px] md:py-[60px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <div className="flex flex-wrap gap-[16px] md:gap-[24px] justify-center">
              {[
                { label: "MPS Club", href: "/storey-club" },
                { label: "Properties", href: "/properties/" },
                { label: "Services", href: "/meeting-and-events/" },
                { label: "Event Space", href: "/event-space/" },
                { label: "Sustainability", href: "/sustainability/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="btn-hover inline-flex items-center px-[20px] py-[10px] bg-white text-[#1A171A] rounded-full text-[14px] font-medium no-underline transition-all duration-300 hover:bg-[#274038] hover:text-white min-h-[44px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <FaqAccordion />

        {/* Still Have Questions */}
        <section className="bg-[#FBEFDD] py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[20px]">
              Still Have Questions?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6] mb-[32px] max-w-[600px] mx-auto">
              Our team is here to help. Get in touch with us and we&apos;ll answer any questions you have about our properties and services.
            </p>
            <div className="flex flex-wrap gap-[16px] justify-center">
              <a
                href="/contact-us/"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#274038] text-white rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-[#1A171A] min-h-[44px]"
              >
                Contact Our Team
              </a>
              <a
                href="tel:+212621189496"
                className="btn-hover inline-flex items-center px-[32px] py-[14px] border border-[#1A171A] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-[#1A171A] hover:text-white min-h-[44px]"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#1A171A] py-[80px] md:py-[100px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-center">
              <div>
                <h2 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-tight mb-[20px]">
                  Ready to Find Your Dream Property?
                </h2>
                <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] mb-[32px]">
                  Let us help you find the perfect luxury property in Marrakech. Our expert team is ready to guide you through every step of the process.
                </p>
                <div className="flex flex-wrap gap-[16px]">
                  <a
                    href="/properties/"
                    className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white min-h-[44px]"
                  >
                    Browse Properties
                  </a>
                  <a
                    href="/contact-us/"
                    className="btn-hover inline-flex items-center px-[32px] py-[14px] border border-white text-white rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-white hover:text-[#1A171A] min-h-[44px]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/intro/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_008-1-scaled-1.jpg"
                  alt="Luxury property in Marrakech"
                  className="w-full h-auto rounded-[12px] object-cover aspect-[4/3] img-zoom"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
