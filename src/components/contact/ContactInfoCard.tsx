"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactInfoCard() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#274038] rounded-[8px] md:rounded-[12px] p-[24px] md:p-[32px]`}>
      <h4 className="text-[20px] md:text-[24px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] mb-[12px] md:mb-[16px]">
        Get in Contact
      </h4>

      <div className="flex flex-col gap-[6px] md:gap-[8px] mb-[20px] md:mb-[24px]">
        <a
          href="tel:+212621189496"
          className="text-[16px] md:text-[18px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-opacity duration-300 hover:opacity-70"
        >
          +212 6 21 18 94 96
        </a>
        <a
          href="mailto:info@marrakechpropertyservice.com"
          className="text-[14px] md:text-[16px] lg:text-[18px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-opacity duration-300 hover:opacity-70 break-all"
        >
          info@marrakechpropertyservice.com
        </a>
      </div>

      <div className="flex gap-[14px] md:gap-[16px]">
        <a
          href="https://www.facebook.com/MarrakechPropertyService"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <img src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/27073919/facebook-icon-white.svg" alt="Facebook" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
        </a>
        <a
          href="https://www.instagram.com/marrakechpropertyservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <img src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/27073947/instagram-icon.svg" alt="Instagram" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
        </a>
        <a
          href="https://www.linkedin.com/company/marrakech-property-service/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <img src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/31115646/LinkedIn.svg" alt="LinkedIn" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
        </a>
      </div>
    </div>
  );
}
