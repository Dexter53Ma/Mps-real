"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const accordionItems = [
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102201/Property-1CommunitySpace.svg",
    title: "Luxury, ready-to-move properties",
    content: "Step into carefully curated luxury properties from day one. No need to manage complex purchases, maintenance or set-up thanks to our expert teams.",
  },
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102503/bike-1.svg",
    title: "Premium amenities",
    content: "All of MPS's properties offer outstanding amenities including private pools, gardens and spa facilities with concierge services as and when you need them.",
  },
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102505/Property-1Networking.svg",
    title: "Expert concierge teams",
    content: "On hand to make everything work seamlessly. From property acquisition to day-to-day management and lifestyle services.",
  },
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102501/Property-1Sustainability.svg",
    title: "Prime locations",
    content: "MPS properties are located in some of the most prestigious and sought-after neighborhoods in Marrakech.",
  },
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102504/Property-1Transport.svg",
    title: "Easy access",
    content: "All of MPS's properties are conveniently located near major transportation hubs and attractions.",
  },
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102502/Property-1Amenities.svg",
    title: "Local experiences",
    content: "From Marrakech's vibrant souks and restaurants to exclusive spa retreats, MPS puts you in the city's most exciting areas.",
  },
  {
    icon: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102201/Property-1CommunitySpace.svg",
    title: "Community and events",
    content: "MPS clients are part of an exclusive calendar of events – learn, connect with fellow property owners, or just be inspired.",
  },
];

export default function WhatMakesStoreySpecial() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#4F0003] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">
        <div className="flex-1 text-[#FBEFDD]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.1] mb-[12px] md:mb-[16px]">
            What makes MPS Special
          </h2>
          <p className="text-[15px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] mb-[24px] md:mb-[32px] opacity-80">
            The luxury. The concierge services. The personalisation. And the simple, straightforward management.
          </p>
          <a
            href="/about-mps/"
            className="btn-hover inline-flex items-center gap-[8px] text-[#FBEFDD] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline min-h-[44px] transition-opacity"
          >
            <span className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]">
              <svg className="w-full h-full" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Find out more
          </a>
        </div>

        <div className="flex-1">
          <p className="text-[#FBEFDD] text-[15px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-prolight)] mb-[16px] md:mb-[24px]">The MPS Way</p>
          <div className="space-y-[2px]">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#FBEFDD]/10 rounded-[4px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="btn-hover w-full flex items-center gap-[12px] md:gap-[16px] p-[14px] md:p-[20px] min-h-[44px] text-left transition-colors"
                >
                  <img src={item.icon} alt="" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] shrink-0" />
                  <h5 className="flex-1 text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD]">{item.title}</h5>
                  <svg
                    className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] text-[#FBEFDD] transition-transform shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-[14px] md:px-[20px] pb-[14px] md:pb-[20px] pl-[46px] md:pl-[60px]">
                    <p className="text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] text-[#FBEFDD]/80">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-[250px] xl:w-[300px]">
          <div className="rounded-[8px] md:rounded-[12px] overflow-hidden h-[350px] xl:h-[400px]">
            <img
              src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102400/20250507_BroadgateTower_Level10_00167-1-2-scaled-1.jpg"
              alt="MPS luxury property"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
