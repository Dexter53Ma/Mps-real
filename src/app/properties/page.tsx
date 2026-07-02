import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyGrid from "@/components/properties/PropertyGrid";
import PropertyCTA from "@/components/properties/PropertyCTA";

export const metadata: Metadata = {
  title: "Our Properties | Marrakech Property Service",
  description: "Properties managed by MPS across Marrakech. Villas, riads, and apartments in Palmeraie, Medina, Hivernage, and Guéliz with expected revenue.",
  openGraph: {
    title: "Our Properties | Marrakech Property Service",
    description: "Properties managed by MPS across Marrakech. Villas, riads, and apartments in Palmeraie, Medina, Hivernage, and Guéliz.",
    url: "https://www.marrakechpropertyservice.com/properties/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/properties/",
  },
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema path="/properties" />
      <Header />
      <main>
        <PropertiesHero />
        <PropertyFilters />
        <PropertyGrid />
        <PropertyCTA />
      </main>
      <Footer />
    </div>
  );
}
