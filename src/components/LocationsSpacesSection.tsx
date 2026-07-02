"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const spaces = [
  {
    name: "Luxury Villa Palmeraie",
    location: "Palmeraie, Marrakech",
    sizes: "5-7 bedrooms",
    image: "/images/gallery/1c296e25-d249-406a-931b-acc6f9d28134.png",
  },
  {
    name: "Traditional Riad Medina",
    location: "Medina, Marrakech",
    sizes: "4-6 bedrooms",
    image: "/images/gallery/ce48f59e-a0bb-4ad7-8796-516d4f8ae380.png",
  },
  {
    name: "Modern Apartment Hivernage",
    location: "Hivernage, Marrakech",
    sizes: "2-4 bedrooms",
    image: "/images/gallery/741126e5-d668-4753-84b6-50b1c35d9390.png",
  },
];

export default function LocationsSpacesSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-white`}>
      <div className="py-[80px] md:py-[120px] px-[40px] max-w-[1356px] mx-auto">
        <h2 className="text-[36px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-4 text-[#1A171A]">
          Choose from MPS properties<br />across Marrakech
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[1.6] max-w-[800px] text-gray-600 mb-12">
          MPS&apos;s portfolio gives you instant access to luxury properties and world-class concierge services.
        </p>

        <div className="flex flex-col gap-0">
          {spaces.map((space, index) => (
            <a
              key={space.name}
              href="/properties/"
              className="group flex flex-col md:flex-row items-stretch border-b border-gray-200 last:border-b-0 no-underline"
            >
              <div className="w-full md:w-[500px] h-[300px] overflow-hidden flex-shrink-0">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 p-[30px] md:p-[40px] flex flex-col justify-center">
                <span className="text-[12px] uppercase tracking-[0.15em] text-gray-400 mb-[12px]">
                  Property
                </span>
                <h3 className="text-[28px] md:text-[36px] font-medium text-[#1A171A] mb-[12px]">
                  {space.name}
                </h3>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] text-gray-500">
                    {space.location}
                  </p>
                  <p className="text-[16px] text-gray-500">
                    {space.sizes}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="/properties/"
            className="btn-hover min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-[#1A171A] text-white text-[14px] rounded no-underline hover:bg-[#274038] transition-colors"
          >
            All Properties
          </a>
          <a
            href="/meeting-and-events/"
            className="btn-hover min-h-[44px] inline-flex items-center justify-center px-6 py-3 border border-[#1A171A] text-[#1A171A] text-[14px] rounded no-underline hover:bg-[#1A171A] hover:text-white transition-colors"
          >
            Meeting Spaces
          </a>
          <a
            href="/properties/"
            className="btn-hover min-h-[44px] inline-flex items-center justify-center px-6 py-3 border border-[#1A171A] text-[#1A171A] text-[14px] rounded no-underline hover:bg-[#1A171A] hover:text-white transition-colors"
          >
            Event Spaces
          </a>
        </div>
      </div>
    </section>
  );
}
