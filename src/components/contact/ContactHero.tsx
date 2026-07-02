"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = [
  { label: "Properties", href: "/properties" },
  { label: "Event space", href: "/meeting-and-events" },
  { label: "Meeting space", href: "/meeting-and-events" },
];

export default function ContactHero() {
  const [activeTab, setActiveTab] = useState("Properties");
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} relative bg-[#FBEFDD] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[40px] md:pb-[60px] overflow-hidden min-h-[250px] md:min-h-[300px]`}>
      <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[60%]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M200 0C100 0 0 100 0 200C0 300 100 400 200 400L800 400L800 0L200 0Z"
            fill="#C3CEC3"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1356px] mx-auto px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
        <h1 className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] leading-[0.9] tracking-tight mb-[24px] md:mb-[40px]">
          Get in touch
        </h1>

        <div className="flex flex-wrap gap-[16px] md:gap-[24px]">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`text-[14px] md:text-[16px] no-underline transition-all duration-300 pb-[6px] md:pb-[8px] border-b-[2px] flex items-center gap-[6px] md:gap-[8px] font-[family-name:var(--font-gt-walsheim-prolight)] ${
                activeTab === tab.label
                  ? "text-[#1A171A] border-[#1A171A] font-[family-name:var(--font-gt-walsheim-medium)]"
                  : "text-[#1A171A]/60 border-transparent hover:text-[#1A171A]"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              <span className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] rounded-full border border-[#1A171A]/30 flex items-center justify-center">
                <svg className="w-[8px] h-[8px] md:w-[10px] md:h-[10px]" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4.5 7.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
