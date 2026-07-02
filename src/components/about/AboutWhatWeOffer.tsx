"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutWhatWeOffer() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#1A171A] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] mb-[16px] md:mb-[24px]">
          What we offer
        </h2>
        <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/80 text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] max-w-[800px]">
          Complete short-term rental management for Marrakech property owners.
          From listing creation and dynamic pricing to guest communication,
          turnover cleaning, and property maintenance — we handle everything so
          you earn passive income without the workload.
        </p>
      </div>
    </section>
  );
}
