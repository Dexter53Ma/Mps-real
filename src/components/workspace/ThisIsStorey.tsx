"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ThisIsStorey() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} relative`}>
      <div className="bg-[#FBEFDD] px-[24px] md:px-[40px] lg:px-[60px] pb-[60px] md:pb-[80px]">
        <div className="max-w-[1356px] mx-auto" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-[1356px] mx-auto px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="bg-[#1A171A] rounded-[8px] md:rounded-[12px] p-[24px] sm:p-[32px] md:p-[40px] flex flex-col md:flex-row items-center justify-between gap-[16px] md:gap-[24px] -mb-[30px] md:-mb-[40px]">
            <div className="text-center md:text-left">
              <h2 className="text-[#FBEFDD] text-[24px] sm:text-[28px] md:text-[32px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.15] mb-[6px] md:mb-[8px]">
                Marrakech Property Service. Buy. Sell. Manage.
              </h2>
              <p className="text-[#FBEFDD]/70 text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)]">
                Premium properties, expertly managed.
              </p>
            </div>
            <a
              href="/contact-us/"
              className="btn-hover inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[24px] md:px-[32px] py-[12px] md:py-[14px] min-h-[44px] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-colors shrink-0"
            >
              Enquire now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
