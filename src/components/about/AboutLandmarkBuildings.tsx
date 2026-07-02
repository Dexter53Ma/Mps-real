"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const buildings = [
  {
    name: "Luxury Villa Palmeraie",
    location: "Palmeraie, Marrakech",
    capacity: "5-7 bedrooms",
    image: "/images/gallery/728469101_17918238216393261_531635481015596799_n.jpg",
    href: "/properties/villa-palmeraie-oasis/",
    amenities: ["Private pool", "Garden", "MPS Club", "Parking", "Concierge", "Wi-Fi"],
  },
  {
    name: "Traditional Riad Medina",
    location: "Medina, Marrakech",
    capacity: "4-6 bedrooms",
    image: "/images/gallery/b3d20402-8c92-4811-b801-0b6837aa4746.png",
    href: "/properties/riad-medina-heritage/",
    amenities: ["Rooftop terrace", "Wi-Fi", "Courtyard", "Fireplace", "Concierge", "Daily cleans"],
  },
  {
    name: "Modern Apartment Hivernage",
    location: "Hivernage, Marrakech",
    capacity: "2-4 bedrooms",
    image: "/images/gallery/3be646bb-f615-4d70-84bb-44042bd70040.png",
    href: "/properties/apartment-hivernage-luxury/",
    amenities: ["Daily cleans", "Pool access", "Gym", "Parking", "MPS Club", "Wi-Fi"],
  },
];

export default function AboutLandmarkBuildings() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#1A171A] text-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-[32px] sm:mb-[40px] md:mb-[60px]">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[16px] md:mb-[24px]">
            Set in landmark buildings across the capital
          </h2>
          <h5 className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.4] opacity-90 max-w-[800px]">
            All of our properties are hand-picked for their location, quality and services, giving you a luxury property that works harder for your lifestyle.
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px] mb-[40px] md:mb-[60px]">
          {buildings.map((building) => (
            <a
              key={building.name}
              href={building.href}
              className="group block bg-[#274038] rounded-[6px] md:rounded-[8px] overflow-hidden no-underline hover:bg-[#2A4A40] transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={building.image}
                  alt={building.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-[16px] md:p-[20px] lg:p-[24px]">
                <p className="text-[11px] md:text-[12px] uppercase tracking-wide mb-[6px] md:mb-[8px] opacity-70 font-[family-name:var(--font-gt-walsheim-prolight)]">Property</p>
                <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[10px] md:mb-[12px]">
                  {building.name}
                </h2>
                <div className="flex flex-wrap items-center gap-[10px] md:gap-[16px] mb-[12px] md:mb-[16px]">
                  <h5 className="text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-medium)] opacity-90">{building.location}</h5>
                  <h5 className="text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-medium)] opacity-90">{building.capacity}</h5>
                </div>
                <p className="text-[13px] md:text-[14px] mb-[12px] md:mb-[16px] font-[family-name:var(--font-gt-walsheim-prolight)]">Available now</p>
                <div className="flex flex-wrap gap-[6px] md:gap-[8px]">
                  {building.amenities.slice(0, 4).map((amenity) => (
                    <span
                      key={amenity}
                      className="text-[11px] md:text-[12px] px-[10px] md:px-[12px] py-[4px] md:py-[6px] bg-[#1A171A]/30 rounded-full font-[family-name:var(--font-gt-walsheim-prolight)]"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] md:gap-[24px] pt-[24px] md:pt-[40px] border-t border-[#FBEFDD]/10">
          <div className="flex flex-wrap gap-[16px] md:gap-[24px]">
            <a href="/properties" className="text-[13px] md:text-[14px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity">
              → Properties
            </a>
            <a href="/meeting-space" className="text-[13px] md:text-[14px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity">
              → Meeting space
            </a>
            <a href="/event-space" className="text-[13px] md:text-[14px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity">
              → Event space
            </a>
          </div>
          <a
            href="/locations/"
            className="btn-hover inline-flex items-center justify-center border border-[#FBEFDD] text-[#FBEFDD] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] px-[20px] md:px-[24px] py-[10px] md:py-[12px] min-h-[44px] rounded-[6px] no-underline hover:bg-[#FBEFDD] hover:text-[#1A171A] transition-all"
          >
            View all locations
          </a>
        </div>
      </div>
    </section>
  );
}
