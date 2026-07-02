import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Locations | Marrakech Property Service",
  description:
    "Explore our premium property locations across Marrakech's most exclusive neighborhoods.",
  openGraph: {
  title: "Locations",
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
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Explore Marrakech&apos;s Best Neighborhoods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {[
                {
                  name: "Palmeraie",
                  slug: "palmeraie",
                  description: "Exclusive resort area with luxury villas and world-class amenities. The Palmeraie is one of Marrakech's most prestigious neighborhoods, offering expansive properties with private pools, lush gardens, and stunning Atlas Mountain views. Perfect for those seeking privacy and tranquility.",
                  properties: "15+ properties",
                },
                {
                  name: "Medina",
                  slug: "medina",
                  description: "Historic heart of Marrakech with traditional riads and authentic charm. The UNESCO-listed Medina features narrow winding streets, bustling souks, and beautifully restored riads with interior courtyards. Immerse yourself in Moroccan culture while staying in a piece of living history.",
                  properties: "12+ properties",
                },
                {
                  name: "Hivernage",
                  slug: "hivernage",
                  description: "Modern luxury district with contemporary apartments and premium facilities. Hivernage is Marrakech's upscale modern quarter, home to five-star hotels, fine dining restaurants, and sleek residential complexes. Ideal for the modern lifestyle with easy access to the Medina.",
                  properties: "10+ properties",
                },
                {
                  name: "Guéliz",
                  slug: "gueliz",
                  description: "Modern Marrakech with easy access to shops, restaurants and cultural attractions. Guéliz is the city's vibrant new town, offering a cosmopolitan lifestyle with tree-lined boulevards, art galleries, and a thriving café culture. Perfect for urban living.",
                  properties: "8+ properties",
                },
              ].map((location) => (
                <a
                  key={location.name}
                  href={`/locations/${location.slug}/`}
                  className="block bg-[#FBEFDD] rounded-[9px] p-[32px] md:p-[40px] hover:bg-[#F5D6AB] transition-colors no-underline"
                >
                  <h3 className="text-[28px] md:text-[32px] font-medium text-[#1A171A] mb-[12px]">
                    {location.name}
                  </h3>
                  <p className="text-[16px] text-[#1A171A]/80 mb-[16px] leading-[1.6]">
                    {location.description}
                  </p>
                  <p className="text-[14px] text-[#1A171A]/60 uppercase tracking-[0.1em]">
                    {location.properties}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Locations */}
        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[40px]">
              Why Location Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { title: "Rental Yield", description: "Properties in prime locations like the Palmeraie and Hivernage command higher nightly rates and maintain strong occupancy rates year-round." },
                { title: "Lifestyle", description: "Each neighborhood offers a distinct living experience — from the cultural immersion of the Medina to the modern convenience of Guéliz." },
                { title: "Investment Growth", description: "Marrakech&apos;s real estate market continues to grow, with premium locations offering the strongest appreciation potential for property investors." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-[9px] p-[32px]">
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#1A171A]/70 leading-[1.6]">
                    {item.description}
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
            <div className="rounded-[9px] overflow-hidden aspect-[16/9] md:aspect-[2/1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108862.0876!2d-8.05!3d31.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef1f1e1e1e1e%3A0x1e1e1e1e1e1e1e1e!2sMarrakech!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Marrakech locations - Palmeraie, Medina, Hivernage, Guéliz"
                className="w-full h-full"
              />
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
