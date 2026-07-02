"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const accordionItems = [
  {
    title: "Luxury, ready-to-move properties",
    content: "Step into carefully curated luxury properties from day one. No need to manage complex purchases, maintenance or set-up thanks to our expert teams.",
    icon: "/images/misc/MClogo.svg",
  },
  {
    title: "Premium amenities",
    content: "All of MPS's properties offer outstanding amenities including private pools, gardens and spa facilities with concierge services as and when you need them.",
    icon: "/images/misc/MClogo.svg",
  },
  {
    title: "Expert concierge teams",
    content: "On hand to make everything work seamlessly. From property acquisition to day-to-day management and lifestyle services.",
    icon: "/images/misc/MClogo.svg",
  },
  {
    title: "Prime locations",
    content: "MPS properties are located in some of the most prestigious and sought-after neighborhoods in Marrakech.",
    icon: "/images/misc/MClogo.svg",
  },
  {
    title: "Easy access",
    content: "All of MPS's properties are conveniently located near major transportation hubs and attractions.",
    icon: "/images/misc/MClogo.svg",
  },
  {
    title: "Local experiences",
    content: "From Marrakech's vibrant souks and restaurants to exclusive spa retreats, MPS puts you in the city's most exciting areas.",
    icon: "/images/misc/MClogo.svg",
  },
  {
    title: "Community and events",
    content: "MPS clients are part of an exclusive calendar of events – learn, connect with fellow property owners, or just be inspired.",
    icon: "/images/misc/MClogo.svg",
  },
];

export default function AboutMpsSpecial() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isRevealed } = useScrollReveal();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="why" className={`reveal ${isRevealed ? "revealed" : ""} bg-[#4F0003] text-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]`}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] xl:gap-[120px]">
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[16px] md:mb-[24px]">
              What makes MPS special
            </h2>
            <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90 mb-[16px] md:mb-[24px]">
              Being part of MPS isn&apos;t just about finding a property, it&apos;s about being part of something special – access to some of Marrakech&apos;s most exclusive and beautifully managed properties, instant connections via our packed social calendar and unrivalled concierge support.
            </p>
            <a
              href="/properties"
              className="inline-flex items-center gap-[8px] text-[#FBEFDD] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity group"
            >
              <span className="group-hover:translate-x-1 transition-transform">→</span>
              View properties
            </a>
          </div>

          <div>
            <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] mb-[16px] md:mb-[24px]">The MPS Way</p>
            <div className="flex flex-col gap-[8px] md:gap-[12px]">
              {accordionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="border border-[#FBEFDD]/20 rounded-[6px] md:rounded-[8px] overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center gap-[12px] md:gap-[16px] p-[14px] md:p-[20px] text-left hover:bg-[#FBEFDD]/5 transition-colors"
                  >
                    <img src={item.icon} alt="" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] opacity-80 shrink-0" />
                    <h5 className="text-[14px] md:text-[16px] lg:text-[18px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.2] flex-1">{item.title}</h5>
                    <svg
                      className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-transform duration-300 shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-[14px] md:px-[20px] pb-[14px] md:pb-[20px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative">
            <svg
              className="absolute -top-[20px] -left-[20px] md:-top-[40px] md:-left-[40px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] opacity-30"
              viewBox="0 0 491 467"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M162.76 8.39744L175.204 16.0337L461.841 192.418L467.793 196.859C470.446 199.008 473.462 201.775 475.683 204.202L475.824 204.372C500.831 233.524 492.822 282.54 455.11 298.952L80.8358 461.876C37.2938 480.844 -8.71147 440.107 2.43023 392.405L82.7143 48.6151L84.1117 42.6812C92.5093 6.71175 132.01 -10.497 162.768 8.42523"
                fill="#F5D6AB"
              />
            </svg>
            <div className="relative z-10 rounded-[6px] md:rounded-[8px] overflow-hidden aspect-[4/5] max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
              <img
                src="/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png"
                alt="MPS luxury property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
