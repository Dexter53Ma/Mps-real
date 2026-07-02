"use client";

import { useState } from "react";
import { MapMarkerIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const locations = [
  { name: "Palmeraie", area: "Palm Grove Resort Area", count: "15+ properties managed" },
  { name: "Medina", area: "Historic Quarter", count: "12+ properties managed" },
  { name: "Hivernage", area: "Luxury District", count: "10+ properties managed" },
  { name: "Guéliz", area: "Modern Marrakech", count: "8+ properties managed" },
];

const markerPositions = [
  { top: "35%", left: "58%" },
  { top: "45%", left: "48%" },
  { top: "30%", left: "32%" },
  { top: "40%", left: "42%" },
];

const popupImages = [
  "/images/locations/1FA-level-2-shared-space-1.jpeg",
  "/images/locations/Storey-OrsmanEX-scaled.jpg",
  "/images/locations/Storey-2-Kingdom-StEXL-scaled.jpg",
  "/images/locations/Storey-388EX-scaled.jpg",
];

export default function LocationSection() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#274038] text-[#F1F4F1]`}>
      <div className="py-[60px] md:py-[120px] px-[20px] sm:px-[40px] max-w-[1356px] mx-auto">
        <p className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] opacity-70 mb-4">
          Where we manage
        </p>
        <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight mb-6">
          Properties managed across Marrakech&apos;s most exclusive neighborhoods
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[1.6] max-w-[1049px] opacity-90">
          MPS manages premium villas, riads, and apartments in Marrakech&apos;s
          most sought-after locations. Each area offers unique advantages for
          short-term rental success — from the resort atmosphere of Palmeraie
          to the cultural charm of the Medina.
        </p>

        <div className="flex gap-3 md:gap-6 mt-10 flex-wrap">
          {locations.map((loc, i) => (
            <button
              key={loc.name}
              onClick={() => setActiveLocation(activeLocation === i ? null : i)}
              className={`text-left px-4 py-4 rounded-lg transition-all ${
                activeLocation === i
                  ? "bg-white/10 border-b-2 border-[#FB4920]"
                  : "border-b-2 border-transparent hover:bg-white/5"
              }`}
            >
              <span className="block font-medium text-[16px]">{loc.name}</span>
              <span className="block text-[13px] opacity-70 mt-1">{loc.area}</span>
              <span className="block text-[13px] opacity-70">{loc.count}</span>
            </button>
          ))}
        </div>

        <div className="relative mt-10 rounded-xl overflow-hidden">
          <img
            src="/images/locations/Map5-2.png"
            alt="Map of managed properties in Marrakech"
            className="w-full h-auto"
          />
          {markerPositions.map((pos, i) => (
            <div key={i} className="absolute" style={{ top: pos.top, left: pos.left }}>
              <button
                onClick={() => setActiveLocation(activeLocation === i ? null : i)}
                className="text-[#FB4920] w-6 h-8 cursor-pointer hover:scale-125 transition-transform"
              >
                <MapMarkerIcon className="w-6 h-8" />
              </button>
              {activeLocation === i && (
                <div className="absolute bg-white rounded-xl shadow-2xl w-[200px] sm:w-[260px] z-20 -top-[180px] sm:-top-[200px] left-1/2 -translate-x-1/2 overflow-hidden">
                  <img
                    src={popupImages[i]}
                    alt={locations[i].name}
                    className="w-full h-[120px] sm:h-[160px] object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <p className="font-medium text-[#1A171A] text-[14px] sm:text-[16px]">{locations[i].name}</p>
                    <p className="text-[11px] sm:text-[13px] text-gray-500 mt-1">{locations[i].area}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <a
          href="/enquire/"
          className="mt-10 bg-[#1A171A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 no-underline hover:bg-[#2a2529] transition-colors group"
        >
          <img
            src="/images/locations/20230905-Regents-Place_1-Triton-Square5-copy-scaled-1.jpg"
            alt="Managed property"
            className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-cover rounded-lg"
          />
          <div className="text-center md:text-left">
            <p className="text-[20px] md:text-[24px] font-medium text-white">
              List your Marrakech property with us
            </p>
            <p className="text-[14px] text-white/60 mt-2 group-hover:text-white/80 transition-colors">
              Start earning passive income →
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
