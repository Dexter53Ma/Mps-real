"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSustainability() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery/e2fe4e3a-9303-4244-a50a-32adb17395da.png"
          alt="Sustainability at MPS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#274038]/80 via-[#274038]/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-[40px] sm:pb-[60px] md:pb-[80px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
        <div className="max-w-[800px]">
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[20px] md:mb-[32px]">
            Sustainability at MPS
          </h2>
          <div className="flex flex-col gap-[16px] md:gap-[24px] mb-[24px] md:mb-[32px]">
            <p className="text-white text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
              Pioneering luxury properties need sustainable practices – and across all our Marrakech properties, MPS has set new standards and won recognition for sustainable design and construction across new and renovated buildings.
            </p>
            <p className="text-white text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
              Our commitment to sustainability informs everything from renewable energy and creating low carbon buildings to local community support, responsible practices and fair wages.
            </p>
            <p className="text-white text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
              As an MPS client, you&apos;ll benefit from our experience, in-house expertise and tried-and-tested initiatives to help you meet or exceed your own sustainability goals and targets.
            </p>
          </div>
          <a
            href="/sustainability/"
            className="btn-hover inline-flex items-center justify-center border border-[#FBEFDD] text-[#FBEFDD] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] px-[20px] md:px-[24px] py-[10px] md:py-[12px] min-h-[44px] rounded-[6px] no-underline hover:bg-[#FBEFDD] hover:text-[#274038] transition-all"
          >
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
}
