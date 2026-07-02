"use client";

import { useState } from "react";

const locations = [
  { value: "", label: "All locations" },
  { value: "palmeraie", label: "Palmeraie" },
  { value: "medina", label: "Medina" },
  { value: "hivernage", label: "Hivernage" },
  { value: "gueliz", label: "Guéliz" },
  { value: "ouarzazate", label: "Ouarzazate" },
];

const capacities = [
  { value: "", label: "All capacity" },
  { value: "0-4", label: "1-4 guests" },
  { value: "5-8", label: "5-8 guests" },
  { value: "9-12", label: "9-12 guests" },
  { value: "12+", label: "12+ guests" },
];

const sqftRanges = [
  { value: "", label: "Property size" },
  { value: "0-200", label: "0 - 200 m²" },
  { value: "200-400", label: "200 - 400 m²" },
  { value: "400+", label: "400+ m²" },
];

const amenities = [
  "Available property",
  "Private pool",
  "Rooftop terrace",
  "Daily housekeeping",
  "Concierge service",
  "Private chef",
  "Airport transfer",
  "MPS Club",
  "Spa access",
  "Garden",
  "Secure parking",
  "High-speed WiFi",
  "Air conditioning",
];

export default function WorkspaceFilters() {
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [sqft, setSqft] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [showAvailableOnly, setShowAvailableOnly] = useState(true);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
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
              className="w-full sm:min-w-[180px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] pr-[40px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)] cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[12px] pointer-events-none" viewBox="0 0 12 15" fill="none">
              <path d="M6.42807 0.5L6.42807 14.5M6.42807 14.5L1 9.07193M6.42807 14.5L11.8561 9.07193" stroke="#1A171A" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full sm:min-w-[150px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] pr-[40px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)] cursor-pointer"
            >
              {capacities.map((cap) => (
                <option key={cap.value} value={cap.value}>
                  {cap.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[12px] pointer-events-none" viewBox="0 0 12 15" fill="none">
              <path d="M6.42807 0.5L6.42807 14.5M6.42807 14.5L1 9.07193M6.42807 14.5L11.8561 9.07193" stroke="#1A171A" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              className="w-full sm:min-w-[140px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] pr-[40px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)] cursor-pointer"
            >
              {sqftRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[12px] pointer-events-none" viewBox="0 0 12 15" fill="none">
              <path d="M6.42807 0.5L6.42807 14.5M6.42807 14.5L1 9.07193M6.42807 14.5L11.8561 9.07193" stroke="#1A171A" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative w-full sm:w-auto">
            <button className="w-full sm:min-w-[140px] appearance-none bg-white border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)] cursor-pointer flex items-center justify-between gap-[8px]">
              <span>Amenities</span>
              <svg className="w-[14px] h-[14px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4H14M2 8H14M2 12H14" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Amenity Tags */}
        <div className="flex flex-wrap gap-[6px] md:gap-[8px] mb-[16px] md:mb-[20px]">
          {amenities.map((amenity) => (
            <button
              key={amenity}
              onClick={() => toggleAmenity(amenity)}
              className={`px-[10px] md:px-[14px] py-[6px] md:py-[8px] rounded-full text-[11px] md:text-[13px] font-[family-name:var(--font-gt-walsheim-prolight)] transition-all ${
                selectedAmenities.includes(amenity)
                  ? "bg-[#274038] text-white"
                  : "bg-white text-[#1A171A] border border-[#1A171A]/10 hover:border-[#274038]"
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>

        {/* View Toggle & Results */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px]">
          <div className="flex items-center gap-[8px] md:gap-[16px]">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-[6px] md:p-[8px] rounded-[4px] transition-colors ${
                viewMode === "grid" ? "bg-[#274038] text-white" : "text-[#1A171A]"
              }`}
            >
              <svg className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" viewBox="0 0 16 16" fill="currentColor">
                <rect x="0" y="0" width="7" height="7" rx="1"/>
                <rect x="9" y="0" width="7" height="7" rx="1"/>
                <rect x="0" y="9" width="7" height="7" rx="1"/>
                <rect x="9" y="9" width="7" height="7" rx="1"/>
              </svg>
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`p-[6px] md:p-[8px] rounded-[4px] transition-colors ${
                viewMode === "map" ? "bg-[#274038] text-white" : "text-[#1A171A]"
              }`}
            >
              <svg className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C5.243 0 3 2.243 3 5c0 3.75 5 10 5 10s5-6.25 5-10c0-2.757-2.243-5-5-5zm0 7.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
            </button>
            <span className="hidden md:inline-flex items-center px-[12px] py-[6px] border border-[#1A171A]/20 rounded-full text-[12px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)]">
              Available property
            </span>
          </div>

          <div className="flex items-center gap-[10px] md:gap-[12px]">
            <span className="text-[12px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)]">Showing 9 results</span>
            <label className="flex items-center gap-[6px] md:gap-[8px] cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] accent-[#274038]"
              />
              <span className="text-[11px] md:text-[13px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)]">Showing available properties only. Include fully let properties.</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
