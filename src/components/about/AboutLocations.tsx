"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutLocations() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] mb-[16px] md:mb-[24px]">
          Our locations
        </h2>
        <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/80 text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] max-w-[800px]">
          MPS properties are located in some of Marrakech&apos;s most exclusive and well-connected neighborhoods, from the Palmeraie and Medina to Hivernage and Guéliz.
        </p>
      </div>
    </section>
  );
}
