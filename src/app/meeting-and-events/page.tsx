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

        <FlexibleSpaces />
        <EverythingYouNeed />
        <AvailableSpaces />
        <BookingEnquiry />
      </main>
      <Footer />
    </div>
  );
}
