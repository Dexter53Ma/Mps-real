"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  "Full property management",
  "Airbnb & Booking.com optimization",
  "Guest communication & support",
];

const perfectForCol1 = ["Absent owners", "Investors", "First-time hosts", "International owners", "Busy professionals"];
const perfectForCol2 = ["Villa management", "Riad management", "Apartment management", "Multi-property owners", "Seasonal rentals"];

export default function FlexibleSpaces() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#1A171A] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] xl:gap-[80px]">
        <div className="grid grid-cols-2 gap-[12px] md:gap-[16px]">
          <div className="rounded-[12px] md:rounded-[16px] overflow-hidden aspect-[4/5]">
            <img
              src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/10/02162557/20191003-4KS-Storey-Club-3.jpeg"
              alt="Luxury managed property"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[12px] md:rounded-[16px] overflow-hidden aspect-[4/5] mt-[20px] md:mt-[32px]">
            <img
              src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/26135952/Storey-01-highres-sRGB_0-1.jpeg"
              alt="Professional property photography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] mb-[16px] md:mb-[24px]">
            Full-service property management
          </h2>
          <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/80 text-[15px] md:text-[16px] lg:text-[18px] mb-[28px] md:mb-[40px] leading-[1.6]">
            Whether you live abroad, travel frequently, or simply want to earn
            from your Marrakech property without the hassle — our full-service
            management covers every aspect of hosting and maintenance.
          </p>

          <div className="mb-[24px] md:mb-[32px]">
            <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[16px] md:text-[18px] mb-[12px] md:mb-[16px]">
              Our services include
            </h3>
            <ul className="space-y-[8px] md:space-y-[10px]">
              {services.map((item, i) => (
                <li key={i} className="flex items-start gap-[10px] md:gap-[12px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/80 text-[13px] md:text-[14px] lg:text-[16px]">
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#FB4920] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[16px] md:text-[18px] mb-[12px] md:mb-[16px]">
              Perfect for
            </h3>
            <div className="grid grid-cols-2 gap-x-[20px] md:gap-x-[32px] gap-y-[6px] md:gap-y-[8px]">
              <ul className="space-y-[6px] md:space-y-[8px]">
                {perfectForCol1.map((item, i) => (
                  <li key={i} className="flex items-start gap-[10px] md:gap-[12px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/80 text-[13px] md:text-[14px] lg:text-[16px]">
                    <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#FB4920] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-[6px] md:space-y-[8px]">
                {perfectForCol2.map((item, i) => (
                  <li key={i} className="flex items-start gap-[10px] md:gap-[12px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/80 text-[13px] md:text-[14px] lg:text-[16px]">
                    <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#FB4920] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
