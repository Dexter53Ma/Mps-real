"use client";

import { useState } from "react";

const locations = [
  { value: "", label: "All locations" },
  { value: "palmeraie", label: "Palmeraie" },
  { value: "medina", label: "Medina" },
  { value: "hivernage", label: "Hivernage" },
  { value: "gueliz", label: "Guéliz" },
];

const propertyTypes = [
  { value: "", label: "All types" },
  { value: "villa", label: "Villa" },
  { value: "riad", label: "Riad" },
  { value: "apartment", label: "Apartment" },
];

const bedroomRanges = [
  { value: "", label: "All sizes" },
  { value: "1-2", label: "1-2 Bedrooms" },
  { value: "3-4", label: "3-4 Bedrooms" },
  { value: "5+", label: "5+ Bedrooms" },
];

const amenities = [
  "Private pool",
  "Rooftop terrace",
  "Garden",
  "Daily housekeeping",
  "Concierge",
  "Private chef",
  "Airport transfer",
  "Air conditioning",
  "Secure parking",
  "High-speed WiFi",
  "Spa access",
  "MPS Club",
];

export default function PropertyFilters() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  return (
    <section className="bg-[#FBEFDD] px-[24px] md:px-[40px] lg:px-[60px] pb-[30px] md:pb-[40px]">
      <div className="max-w-[1356px] mx-auto">
        {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-[10px] md:gap-[12px] mb-[16px] md:mb-[20px]">
          <div className="relative w-full sm:w-auto">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full sm:min-w-[180px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] pr-[40px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-jakarta)] cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>{loc.label}</option>
              ))}
            </select>
            <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[12px] pointer-events-none" viewBox="0 0 12 15" fill="none">
              <path d="M6.42807 0.5L6.42807 14.5M6.42807 14.5L1 9.07193M6.42807 14.5L11.8561 9.07193" stroke="#1A171A" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full sm:min-w-[150px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] pr-[40px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-jakarta)] cursor-pointer"
            >
              {propertyTypes.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[12px] pointer-events-none" viewBox="0 0 12 15" fill="none">
              <path d="M6.42807 0.5L6.42807 14.5M6.42807 14.5L1 9.07193M6.42807 14.5L11.8561 9.07193" stroke="#1A171A" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full sm:min-w-[150px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] pr-[40px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-jakarta)] cursor-pointer"
            >
              {bedroomRanges.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[12px] pointer-events-none" viewBox="0 0 12 15" fill="none">
              <path d="M6.42807 0.5L6.42807 14.5M6.42807 14.5L1 9.07193M6.42807 14.5L11.8561 9.07193" stroke="#1A171A" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* Amenity Tags */}
        <div className="flex flex-wrap gap-[6px] md:gap-[8px]">
          {amenities.map((amenity) => (
            <button
              key={amenity}
              onClick={() => toggleAmenity(amenity)}
              className={`px-[10px] md:px-[14px] py-[6px] md:py-[8px] rounded-full text-[11px] md:text-[13px] font-[family-name:var(--font-jakarta)] transition-all ${
                selectedAmenities.includes(amenity)
                  ? "bg-[#274038] text-white"
                  : "bg-white text-[#1A171A] border border-[#1A171A]/10 hover:border-[#274038]"
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
