"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const typeOptions = ["Property", "Concierge Service", "Event Space"];

export default function ContactSearchCard() {
  const [type, setType] = useState("Property");
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#274038] rounded-[8px] md:rounded-[12px] p-[24px] md:p-[32px]`}>
      <h4 className="text-[20px] md:text-[24px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] mb-[16px] md:mb-[24px]">
        Find a space to call your own
      </h4>

      <div className="flex flex-col gap-[12px] md:gap-[16px]">
        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-[14px] md:px-[16px] py-[12px] md:py-[14px] bg-white border-none rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] appearance-none cursor-pointer"
          >
            {typeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] md:w-[12px] md:h-[12px] pointer-events-none text-[#1A171A]" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <button className="btn-hover w-full px-[16px] md:px-[20px] py-[12px] md:py-[14px] bg-[#FBEFDD] text-[#1A171A] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] transition-colors duration-300 hover:bg-white min-h-[44px]">
          Start Search
        </button>
      </div>
    </div>
  );
}
