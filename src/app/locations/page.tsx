import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Locations | Marrakech Property Service",
  description:
    "Explore our premium property locations across Marrakech's most exclusive neighborhoods.",
  openGraph: {
    title: "Locations | Marrakech Property Service",
    description: "Explore our premium property locations across Marrakech's most exclusive neighborhoods.",
    url: "https://www.marrakechpropertyservice.com/locations/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/locations/",
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/locations" />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px] md:mb-[32px]">
              Our Locations
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Discover Marrakech&apos;s most exclusive neighborhoods through our curated collection of premium properties.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="bg-white py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {[
                {
                  name: "Palmeraie",
                  description: "Exclusive resort area with luxury villas and world-class amenities. Perfect for those seeking privacy and tranquility.",
                  properties: "15+ properties",
                },
                {
                  name: "Medina",
                  description: "Historic heart of Marrakech with traditional riads and authentic charm. Immerse yourself in Moroccan culture.",
                  properties: "12+ properties",
                },
                {
                  name: "Hivernage",
                  description: "Modern luxury district with contemporary apartments and premium facilities. Ideal for the modern lifestyle.",
                  properties: "10+ properties",
                },
                {
                  name: "Guéliz",
                  description: "Modern Marrakech with easy access to shops, restaurants and cultural attractions. Perfect for urban living.",
                  properties: "8+ properties",
                },
              ].map((location) => (
                <div
                  key={location.name}
                  className="bg-[#FBEFDD] rounded-[9px] p-[32px] md:p-[40px] hover:bg-[#F5D6AB] transition-colors"
                >
                  <h2 className="text-[28px] md:text-[32px] font-medium text-[#1A171A] mb-[12px]">
                    {location.name}
                  </h2>
                  <p className="text-[16px] text-[#1A171A]/80 mb-[16px] leading-[1.6]">
                    {location.description}
                  </p>
                  <p className="text-[14px] text-[#1A171A]/60 uppercase tracking-[0.1em]">
                    {location.properties}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-[#1A171A] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[40px]">
              Explore Marrakech
            </h2>
            <div className="bg-[#274038] rounded-[9px] p-[40px] md:p-[60px] text-center">
              <p className="text-white/80 text-[16px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-prolight)]">
                Interactive map coming soon. Contact us for detailed location information.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#4F0003] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">
              Find Your Perfect Location
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Let us help you discover the ideal neighborhood for your Marrakech property.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[32px] py-[14px] rounded-[6px] text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:bg-[#F5D6AB] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
