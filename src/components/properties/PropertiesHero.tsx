"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PropertiesHero() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[60px] md:pb-[80px] px-[24px] md:px-[40px] lg:px-[60px] reveal ${isRevealed ? "revealed" : ""}`}
    >
      <div className="max-w-[1356px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-center">
          <div>
            <div className="mb-[24px] md:mb-[32px]">
              <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-medium leading-[1] tracking-tight">
                Properties
              </h1>
            </div>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[600px] mb-[32px]">
              Premium villas, riads, and apartments managed by MPS across Marrakech&apos;s most exclusive locations. Each property comes with full management, professional photography, and transparent revenue reporting.
            </p>
            <div className="flex flex-wrap gap-[16px]">
              <a
                href="/enquire/"
                className="btn-hover inline-flex items-center px-[24px] py-[12px] bg-white text-[#274038] rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white/90 min-h-[44px]"
              >
                List Your Property
              </a>
              <a
                href="/meeting-and-events/"
                className="btn-hover inline-flex items-center gap-[8px] px-[24px] py-[12px] border border-white text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white hover:text-[#274038] min-h-[44px]"
              >
                <span>Our Services</span>
                <svg className="w-[16px] h-[16px]" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="bg-white/10 rounded-[12px] p-[24px]">
                <p className="text-white text-[32px] font-bold mb-[4px]">50+</p>
                <p className="text-white/70 text-[14px]">Properties Managed</p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-[24px]">
                <p className="text-white text-[32px] font-bold mb-[4px]">4</p>
                <p className="text-white/70 text-[14px]">Prime Locations</p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-[24px]">
                <p className="text-white text-[32px] font-bold mb-[4px]">24/7</p>
                <p className="text-white/70 text-[14px]">Concierge Support</p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-[24px]">
                <p className="text-white text-[32px] font-bold mb-[4px]">15-20%</p>
                <p className="text-white/70 text-[14px]">Avg. Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
