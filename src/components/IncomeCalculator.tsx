"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const propertyTypes = ["Villa", "Riad", "Apartment"];
const locations = ["Palmeraie", "Medina", "Hivernage", "Guéliz"];
const bedrooms = ["1", "2", "3", "4", "5+"];

const rateData: Record<string, Record<string, Record<string, { low: number; high: number }>>> = {
  Villa: {
    Palmeraie: { "1": { low: 1500, high: 2500 }, "2": { low: 2000, high: 3500 }, "3": { low: 3000, high: 5000 }, "4": { low: 4000, high: 7000 }, "5+": { low: 5000, high: 10000 } },
    Medina: { "1": { low: 1000, high: 1800 }, "2": { low: 1500, high: 2500 }, "3": { low: 2000, high: 3500 }, "4": { low: 2500, high: 4500 }, "5+": { low: 3500, high: 6000 } },
    Hivernage: { "1": { low: 1200, high: 2000 }, "2": { low: 1800, high: 3000 }, "3": { low: 2500, high: 4000 }, "4": { low: 3500, high: 5500 }, "5+": { low: 4500, high: 8000 } },
    Guéliz: { "1": { low: 800, high: 1500 }, "2": { low: 1200, high: 2000 }, "3": { low: 1800, high: 3000 }, "4": { low: 2500, high: 4000 }, "5+": { low: 3000, high: 5000 } },
  },
  Riad: {
    Palmeraie: { "1": { low: 1200, high: 2000 }, "2": { low: 1800, high: 2800 }, "3": { low: 2500, high: 4000 }, "4": { low: 3000, high: 5000 }, "5+": { low: 4000, high: 6500 } },
    Medina: { "1": { low: 1000, high: 1800 }, "2": { low: 1500, high: 2500 }, "3": { low: 2000, high: 3500 }, "4": { low: 2500, high: 4500 }, "5+": { low: 3500, high: 5500 } },
    Hivernage: { "1": { low: 1000, high: 1800 }, "2": { low: 1500, high: 2500 }, "3": { low: 2000, high: 3200 }, "4": { low: 2500, high: 4000 }, "5+": { low: 3000, high: 5000 } },
    Guéliz: { "1": { low: 800, high: 1400 }, "2": { low: 1200, high: 2000 }, "3": { low: 1500, high: 2500 }, "4": { low: 2000, high: 3200 }, "5+": { low: 2500, high: 4000 } },
  },
  Apartment: {
    Palmeraie: { "1": { low: 800, high: 1400 }, "2": { low: 1200, high: 2000 }, "3": { low: 1600, high: 2800 }, "4": { low: 2000, high: 3500 }, "5+": { low: 2500, high: 4500 } },
    Medina: { "1": { low: 700, high: 1200 }, "2": { low: 1000, high: 1800 }, "3": { low: 1400, high: 2400 }, "4": { low: 1800, high: 3000 }, "5+": { low: 2200, high: 3800 } },
    Hivernage: { "1": { low: 900, high: 1500 }, "2": { low: 1300, high: 2200 }, "3": { low: 1800, high: 2800 }, "4": { low: 2200, high: 3500 }, "5+": { low: 2800, high: 4200 } },
    Guéliz: { "1": { low: 600, high: 1100 }, "2": { low: 900, high: 1500 }, "3": { low: 1200, high: 2000 }, "4": { low: 1500, high: 2600 }, "5+": { low: 2000, high: 3200 } },
  },
};

export default function IncomeCalculator() {
  const { ref, isRevealed } = useScrollReveal();
  const [propertyType, setPropertyType] = useState("Villa");
  const [location, setLocation] = useState("Palmeraie");
  const [bedroom, setBedroom] = useState("3");
  const [showResult, setShowResult] = useState(false);

  const rates = rateData[propertyType]?.[location]?.[bedroom] || { low: 1000, high: 2000 };
  const monthlyLow = rates.low * 30;
  const monthlyHigh = rates.high * 30;
  const annualLow = monthlyLow * 12;
  const annualHigh = monthlyHigh * 12;
  const occupancyRate = 75;
  const annualEstimateLow = Math.round((annualLow * occupancyRate) / 100 / 1000) * 1000;
  const annualEstimateHigh = Math.round((annualHigh * occupancyRate) / 1000) * 1000;

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] py-[60px] md:py-[80px] px-[20px] sm:px-[40px]`}>
      <div className="max-w-[1356px] mx-auto">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[12px]">
            Estimate Your Rental Income
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#1A171A]/70 max-w-[600px] mx-auto">
            See how much your Marrakech property could earn with professional management.
          </p>
        </div>

        <div className="bg-white rounded-[12px] p-[24px] md:p-[40px] shadow-[0_2px_20px_rgba(0,0,0,0.06)] max-w-[900px] mx-auto">
          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] md:gap-[24px] mb-[32px]">
            <div>
              <label className="block text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[8px]">
                Property Type
              </label>
              <div className="flex gap-[8px]">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => { setPropertyType(type); setShowResult(true); }}
                    className={`flex-1 py-[10px] px-[8px] rounded-[6px] text-[14px] font-medium transition-all duration-300 min-h-[44px] ${
                      propertyType === type
                        ? "bg-[#274038] text-white"
                        : "bg-[#FBEFDD] text-[#1A171A] hover:bg-[#F5D6AB]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[8px]">
                Location
              </label>
              <div className="flex flex-wrap gap-[8px]">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { setLocation(loc); setShowResult(true); }}
                    className={`py-[10px] px-[12px] rounded-[6px] text-[13px] font-medium transition-all duration-300 min-h-[44px] ${
                      location === loc
                        ? "bg-[#274038] text-white"
                        : "bg-[#FBEFDD] text-[#1A171A] hover:bg-[#F5D6AB]"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[8px]">
                Bedrooms
              </label>
              <div className="flex gap-[8px]">
                {bedrooms.map((b) => (
                  <button
                    key={b}
                    onClick={() => { setBedroom(b); setShowResult(true); }}
                    className={`flex-1 py-[10px] px-[6px] rounded-[6px] text-[14px] font-medium transition-all duration-300 min-h-[44px] ${
                      bedroom === b
                        ? "bg-[#274038] text-white"
                        : "bg-[#FBEFDD] text-[#1A171A] hover:bg-[#F5D6AB]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={`transition-all duration-500 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="border-t border-[#1A171A]/10 pt-[32px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] text-center">
                <div>
                  <p className="text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[4px]">Nightly Rate</p>
                  <p className="text-[24px] md:text-[28px] font-medium text-[#1A171A]">
                    {rates.low.toLocaleString()} - {rates.high.toLocaleString()} <span className="text-[14px] font-normal text-[#1A171A]/60">MAD</span>
                  </p>
                </div>
                <div>
                  <p className="text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[4px]">Monthly Revenue</p>
                  <p className="text-[24px] md:text-[28px] font-medium text-[#274038]">
                    {(monthlyLow * occupancyRate / 100).toLocaleString()} - {(monthlyHigh * occupancyRate / 100).toLocaleString()} <span className="text-[14px] font-normal text-[#1A171A]/60">MAD</span>
                  </p>
                </div>
                <div>
                  <p className="text-[13px] text-[#1A171A]/60 uppercase tracking-[0.1em] mb-[4px]">Annual Estimate (75% occ.)</p>
                  <p className="text-[28px] md:text-[32px] font-medium text-[#4F0003]">
                    {annualEstimateLow.toLocaleString()} - {annualEstimateHigh.toLocaleString()} <span className="text-[14px] font-normal text-[#1A171A]/60">MAD</span>
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-[#1A171A]/50 text-center mt-[16px]">
                Estimates based on 75% average occupancy rate. Actual revenue depends on property condition, season, and market conditions.
              </p>
              <div className="text-center mt-[24px]">
                <a
                  href="/enquire/"
                  className="btn-hover inline-flex items-center px-[32px] py-[14px] bg-[#274038] text-white rounded-full text-[16px] font-medium no-underline transition-all duration-300 hover:bg-[#1A171A] min-h-[44px]"
                >
                  Get a Free Valuation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
