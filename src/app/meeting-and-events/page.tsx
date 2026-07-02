import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeetingHero from "@/components/meetings/MeetingHero";
import FlexibleSpaces from "@/components/meetings/FlexibleSpaces";
import EverythingYouNeed from "@/components/meetings/EverythingYouNeed";
import AvailableSpaces from "@/components/meetings/AvailableSpaces";
import BookingEnquiry from "@/components/meetings/BookingEnquiry";

export const metadata: Metadata = {
  title: "Our Services | Marrakech Property Service",
  description: "Full-service property management for villas, riads and apartments in Marrakech. Airbnb management, cleaning, photography, maintenance and more.",
  openGraph: {
    title: "Our Services | Marrakech Property Service",
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
      <Header />
      <main>
        <MeetingHero />
        <FlexibleSpaces />
        <EverythingYouNeed />
        <AvailableSpaces />
        <BookingEnquiry />
      </main>
      <Footer />
    </div>
  );
}
