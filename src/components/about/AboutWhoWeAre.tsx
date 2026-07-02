"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutWhoWeAre() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] mb-[16px] md:mb-[24px]">
          Who we are
        </h2>
        <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/80 text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] max-w-[800px]">
          Marrakech Property Service is a specialized property management company
          focused exclusively on short-term and vacation rentals in Marrakech.
          We help property owners maximize returns on their villas, riads, and
          apartments by handling every aspect of hosting — from listing optimization
          on Airbnb and Booking.com to guest management, cleaning, and maintenance.
        </p>
      </div>
    </section>
  );
}
