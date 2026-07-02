"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MeetingHero() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[40px] md:pb-[60px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h1 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[1.05] mb-[16px] md:mb-[24px]">
          Our Services
        </h1>
        <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] text-[15px] md:text-[16px] lg:text-[18px] max-w-[800px] leading-[1.6]">
          Complete property management for your Marrakech villa, riad, or apartment.
          From listing optimization on Airbnb &amp; Booking.com to guest management,
          cleaning, and maintenance — we handle everything so you earn passive income.
        </p>
      </div>
    </section>
  );
}
