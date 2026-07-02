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
  title: "Our Properties",
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

        {/* SEO Content Section */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                Luxury Properties in Marrakech
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Marrakech Property Service manages a curated portfolio of premium villas, riads, and apartments across Marrakech&apos;s most sought-after neighborhoods. Each property is carefully selected for its unique character, quality of construction, and rental potential.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Whether you&apos;re looking for a traditional riad in the historic Medina, a modern villa in the Palmeraie, or a stylish apartment in Guéliz, our portfolio offers options to suit every lifestyle and investment goal.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  All MPS-managed properties benefit from professional photography, dynamic pricing optimization, and 24/7 guest support — ensuring maximum returns for owners and exceptional experiences for guests.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Villas", description: "Spacious private villas with pools, gardens, and premium amenities in the Palmeraie and Hivernage areas." },
                { title: "Riads", description: "Traditional Moroccan riads with courtyard gardens, rooftop terraces, and authentic architectural details in the Medina." },
                { title: "Apartments", description: "Modern apartments in Guéliz and Hivernage with contemporary finishes and convenient access to city amenities." },
              ].map((type) => (
                <div key={type.title} className="bg-[#FBEFDD] rounded-[9px] p-[24px]">
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">
                    {type.title}
                  </h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PropertyCTA />
      </main>
      <Footer />
    </div>
  );
}
