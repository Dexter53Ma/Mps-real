"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutHero() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} relative h-[70vh] sm:h-[75vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src="/images/gallery/727313289_17918133387393261_5885020094673898896_n.jpg"
          alt="About MPS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A171A]/80 via-[#1A171A]/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-[24px] sm:p-[32px] md:p-[40px] lg:p-[60px] xl:p-[80px]">
        <div className="max-w-[1356px] mx-auto">
          <h1 className="text-[#FBEFDD] text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight">
            About MPS
          </h1>
        </div>
      </div>
    </section>
  );
}
