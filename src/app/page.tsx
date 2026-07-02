import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import LocationSection from "@/components/LocationSection";
import LocationsSpacesSection from "@/components/LocationsSpacesSection";
import PillarsSection from "@/components/PillarsSection";
import MeetingRoomsSection from "@/components/MeetingRoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LogoCarousel from "@/components/LogoCarousel";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
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
