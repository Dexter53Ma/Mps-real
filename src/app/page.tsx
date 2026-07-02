import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import IntroSection from "@/components/IntroSection";
import LocationSection from "@/components/LocationSection";
import LocationsSpacesSection from "@/components/LocationsSpacesSection";
import PillarsSection from "@/components/PillarsSection";
import MeetingRoomsSection from "@/components/MeetingRoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LogoCarousel from "@/components/LogoCarousel";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marrakech Property Service | Luxury Property Management & Conciergerie",
  description:
    "Full-service property management for villas, riads, and apartments in Marrakech. Airbnb & Booking.com optimization, professional photography, cleaning, maintenance, and 24/7 guest support.",
  openGraph: {
    title: "Marrakech Property Service | Luxury Property Management",
    description:
      "Full-service property management for villas, riads, and apartments in Marrakech. Maximize your rental income with MPS.",
    url: "https://www.marrakechpropertyservice.com",
    siteName: "Marrakech Property Service",
    images: [
      {
        url: "/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png",
        width: 1200,
        height: 630,
        alt: "Luxury villa in Marrakech managed by MPS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrakech Property Service | Luxury Property Management",
    description:
      "Full-service property management for villas, riads, and apartments in Marrakech.",
    images: ["/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png"],
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <BreadcrumbSchema path="" />
      <Header />
      <main className="flex flex-col w-full">
        <HeroSection />
        <IntroSection />
        <LocationSection />
        <LocationsSpacesSection />
        <PillarsSection />
        <MeetingRoomsSection />
        <TestimonialsSection />
        <LogoCarousel />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
