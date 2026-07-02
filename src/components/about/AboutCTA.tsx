"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutCTA() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} grid grid-cols-1 md:grid-cols-2`}>
      <div className="bg-[#4F0003] text-[#FBEFDD] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[20px] md:mb-[32px]">
          Want to know more?
        </h3>
        <div className="flex flex-col gap-[12px] md:gap-[16px] mb-[20px] md:mb-[32px]">
          <a href="tel:+212621189496" className="text-[16px] md:text-[18px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity">
            +212 6 21 18 94 96
          </a>
          <a href="mailto:info@marrakechpropertyservice.com" className="text-[16px] md:text-[18px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity break-all">
            info@marrakechpropertyservice.com
          </a>
        </div>
        <a
          href="/contact-us"
          className="btn-hover inline-flex items-center justify-center border border-[#FBEFDD] text-[#FBEFDD] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] px-[20px] md:px-[24px] py-[10px] md:py-[12px] min-h-[44px] rounded-[6px] no-underline hover:bg-[#FBEFDD] hover:text-[#4F0003] transition-all"
        >
          Contact us
        </a>
      </div>

      <div className="bg-[#274038] text-white py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
        <img
          src="/images/logo.png"
          alt="Marrakech Property Service"
          className="h-[24px] md:h-[32px] w-auto mb-[20px] md:mb-[32px]"
        />
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[20px] md:mb-[32px]">
          Find a space to call your own
        </h2>
        <form className="flex flex-col sm:flex-row gap-[10px] md:gap-[16px]">
          <select className="flex-1 bg-white text-[#1A171A] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] px-[14px] md:px-[16px] py-[12px] md:py-[14px] rounded-[6px] border-none outline-none cursor-pointer">
            <option value="/properties/">Properties</option>
            <option value="/meeting-space/">Meeting space</option>
            <option value="/event-space/">Event space</option>
          </select>
          <button
            type="submit"
            className="btn-hover bg-[#FBEFDD] text-[#1A171A] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] px-[24px] md:px-[32px] py-[12px] md:py-[14px] min-h-[44px] rounded-[6px] hover:bg-[#F5D6AB] transition-colors whitespace-nowrap"
          >
            Start Search
          </button>
        </form>
      </div>
    </section>
  );
}
