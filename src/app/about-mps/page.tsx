import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";
import AboutHero from "@/components/about/AboutHero";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutWhatWeOffer from "@/components/about/AboutWhatWeOffer";
import AboutLocations from "@/components/about/AboutLocations";
import AboutGallery from "@/components/about/AboutGallery";
import AboutLandmarkBuildings from "@/components/about/AboutLandmarkBuildings";
import AboutMpsSpecial from "@/components/about/AboutMpsSpecial";
import AboutExpertManagement from "@/components/about/AboutExpertManagement";
import AboutSustainability from "@/components/about/AboutSustainability";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About MPS | Marrakech Property Management",
  description: "Specialized property management for villas, riads, and apartments in Marrakech. We handle Airbnb, Booking.com, cleaning, maintenance, and guest support.",
  openGraph: {
  title: "About MPS",
    description: "Specialized property management for villas, riads, and apartments in Marrakech.",
    url: "https://www.marrakechpropertyservice.com/about-mps/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/about-mps/",
  },
};

export default function AboutMpsPage() {
  return (
    <>
      <BreadcrumbSchema path="/about-mps" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About MPS | Marrakech Property Management",
        description: "Learn about Marrakech Property Service, Marrakech's leading luxury property management company.",
        url: "https://www.marrakechpropertyservice.com/about-mps/",
        mainEntity: {
          "@type": "LocalBusiness",
          name: "Marrakech Property Service",
          url: "https://www.marrakechpropertyservice.com",
        },
      }} />
      <Header />
      <main>
        <AboutHero />
        <AboutWhoWeAre />
        <AboutWhatWeOffer />
        <AboutLocations />
        <AboutGallery />
        <AboutLandmarkBuildings />
        <AboutMpsSpecial />
        <AboutExpertManagement />
        <AboutSustainability />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
