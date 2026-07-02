import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeetingHero from "@/components/meetings/MeetingHero";
import FlexibleSpaces from "@/components/meetings/FlexibleSpaces";
import EverythingYouNeed from "@/components/meetings/EverythingYouNeed";
import AvailableSpaces from "@/components/meetings/AvailableSpaces";
import BookingEnquiry from "@/components/meetings/BookingEnquiry";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Services | Marrakech Property Service",
  description: "Full-service property management for villas, riads and apartments in Marrakech. Airbnb management, cleaning, photography, maintenance and more.",
  openGraph: {
    title: "Our Services",
    description: "Full-service property management for villas, riads and apartments in Marrakech.",
    url: "https://www.marrakechpropertyservice.com/meeting-and-events/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/meeting-and-events/",
  },
};

export default function MeetingAndEventsPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema path="/meeting-and-events" />
      <Header />
      <main>
        <MeetingHero />

        {/* SEO Content Section */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                Complete Property Management Solutions
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Marrakech Property Service provides end-to-end property management for villa, riad, and apartment owners across Marrakech. Our comprehensive services handle every aspect of rental management, from listing creation and guest communication to cleaning, maintenance, and financial reporting.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  We specialize in optimizing properties for Airbnb, Booking.com, and other major rental platforms. Our data-driven approach to pricing and listing optimization ensures maximum occupancy and revenue for your property.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  With 24/7 guest support, professional cleaning teams, and dedicated property managers, MPS delivers a hands-off experience for owners while maintaining the highest standards for guests.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "For Property Owners", description: "Passive income without the hassle. We handle guests, maintenance, and bookings while you receive monthly reports and payouts." },
                { title: "For Guests", description: "Premium accommodations with professional service. Every MPS property meets consistent quality standards for a memorable Marrakech experience." },
                { title: "For Investors", description: "Data-driven management that maximizes ROI. Our dynamic pricing and occupancy optimization deliver strong returns on your property investment." },
              ].map((audience) => (
                <div key={audience.title} className="bg-[#FBEFDD] rounded-[9px] p-[24px]">
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">
                    {audience.title}
                  </h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pages Grid */}
        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {[
                { title: "Property Management", desc: "Full-service management covering listings, guests, cleaning, maintenance, and reporting.", href: "/services/property-management/" },
                { title: "Airbnb Management", desc: "Specialized Airbnb optimization, Superhost strategies, and multi-platform listings.", href: "/services/airbnb-management/" },
                { title: "Professional Photography", desc: "Interior, exterior, aerial drone, and lifestyle photography that drives bookings.", href: "/services/professional-photography/" },
                { title: "Cleaning & Maintenance", desc: "Hospitality-grade cleaning, pool care, garden upkeep, and emergency repairs.", href: "/services/cleaning-maintenance/" },
                { title: "Concierge Services", desc: "24/7 multilingual support, airport transfers, restaurants, and excursions.", href: "/services/concierge/" },
                { title: "Dynamic Pricing", desc: "Real-time rate optimization based on demand, seasonality, and local events.", href: "/services/dynamic-pricing/" },
              ].map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="block bg-white rounded-[9px] p-[32px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 no-underline"
                >
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">{service.title}</h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">{service.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FlexibleSpaces />
        <EverythingYouNeed />
        <AvailableSpaces />
        <BookingEnquiry />
      </main>
      <Footer />
    </div>
  );
}
