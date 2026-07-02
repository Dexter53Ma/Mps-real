"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const amenities = [
  {
    title: "Dynamic Pricing",
    description: "We use real-time market data to optimize your nightly rates, maximizing revenue while maintaining high occupancy rates across all platforms.",
  },
  {
    title: "Multi-Platform Listings",
    description: "Your property listed on Airbnb, Booking.com, Vrbo, and direct booking channels — all synchronized to prevent double bookings.",
  },
  {
    title: "Professional Photography",
    description: "High-quality photos that showcase your property at its best. Great photos mean more bookings, higher rates, and better guest expectations.",
  },
  {
    title: "24/7 Guest Support",
    description: "Our team handles all guest communication — from pre-booking questions to check-in instructions and in-stay support. Fast, professional, multilingual.",
  },
  {
    title: "Cleaning & Turnover",
    description: "Hospitality-grade cleaning between every guest stay. Fresh linens, towels, toiletries, and deep cleaning on a regular schedule.",
  },
  {
    title: "Property Maintenance",
    description: "Pool care, garden upkeep, HVAC servicing, plumbing, electrical — we handle routine maintenance and emergency repairs so your property stays in perfect condition.",
  },
];

export default function EverythingYouNeed() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] xl:gap-[80px]">
        <div>
          <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] mb-[12px] md:mb-[16px]">
            Everything you need
          </h2>
          <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/80 text-[15px] md:text-[16px] lg:text-[18px] mb-[28px] md:mb-[40px] leading-[1.6]">
            From the moment we take over your property, every detail is handled.
            Our comprehensive management means you earn passive income while we
            handle the workload.
          </p>

          <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[16px] md:text-[18px] mb-[16px] md:mb-[24px]">
            Our management always includes
          </h3>

          <div className="space-y-[16px] md:space-y-[20px]">
            {amenities.map((item, i) => (
              <div key={i} className="flex gap-[12px] md:gap-[16px]">
                <div className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full bg-[#274038] flex items-center justify-center shrink-0 mt-[2px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FBEFDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[16px] md:h-[16px]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[14px] md:text-[16px] mb-[4px]">
                    {item.title}
                  </h4>
                  <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/70 text-[13px] md:text-[14px] leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[12px] md:gap-[16px]">
          <div className="rounded-[12px] md:rounded-[16px] overflow-hidden aspect-[3/4]">
            <img
              src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131048/6-Orsman-Road.jpg"
              alt="Managed property interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[12px] md:rounded-[16px] overflow-hidden aspect-[3/4] mt-[20px] md:mt-[32px]">
            <img
              src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/10135716/20260415_Broadgate_100LS-Storey-Club_BG-Community-Fund-Round-4-50.jpg"
              alt="Property maintenance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
