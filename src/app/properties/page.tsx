import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyGrid from "@/components/properties/PropertyGrid";
import PropertyCTA from "@/components/properties/PropertyCTA";

export const metadata = {
  title: "Our Properties | Marrakech Property Service - Managed Properties",
  description: "Properties managed by MPS across Marrakech. Villas, riads, and apartments in Palmeraie, Medina, Hivernage, and Guéliz with expected revenue.",
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
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
