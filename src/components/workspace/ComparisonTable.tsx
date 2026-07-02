"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  "Flexible management options",
  "Access to MPS Club",
  "Sustainable properties",
  "Premium amenities",
  "Fully furnished",
  "High-speed internet",
  "Fixed monthly cost",
  "Fully managed",
  "Wi-Fi connectivity",
  "Security support",
  "Maintenance included",
  "Property Manager",
];

const traditionalOffice = [
  false, false, false, false, false, false, false, false, false, false, false, false,
];

const storey = [
  true, true, true, true, true, true, true, true, true, true, true, true,
];

export default function ComparisonTable() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#1A171A] py-[50px] sm:py-[60px] md:py-[65px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-[14px] md:p-[20px] align-top">
                  <h2 className="text-[#FBEFDD] text-[22px] sm:text-[26px] md:text-[32px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.15] mb-[6px] md:mb-[8px]">
                    MPS vs. a traditional agency
                  </h2>
                  <h5 className="text-[#FBEFDD] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)]">Benefits</h5>
                </th>
                <th className="p-[14px] md:p-[20px] align-top w-[150px] md:w-[200px]">
                  <div className="rounded-[6px] md:rounded-[8px] overflow-hidden mb-[10px] md:mb-[12px]">
                    <img
                      src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/16121433/20250725_Broadgate_Broadgate-Tower_L28_Cat-A-resized.jpg"
                      alt="Traditional office"
                      className="w-full h-[90px] md:h-[120px] object-cover"
                    />
                  </div>
                  <h5 className="text-[#FBEFDD] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)]">Traditional office</h5>
                </th>
                <th className="p-[14px] md:p-[20px] align-top w-[150px] md:w-[200px]">
                  <div className="rounded-[6px] md:rounded-[8px] overflow-hidden mb-[10px] md:mb-[12px]">
                    <img
                      src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/06/28144938/One-Triton-Event-Day-1-154.jpg"
                      alt="Marrakech Property Service"
                      className="w-full h-[90px] md:h-[120px] object-cover"
                    />
                  </div>
                  <h5 className="text-[#FBEFDD] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)]">MPS</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr key={index} className="border-t border-[#FBEFDD]/10">
                  <td className="p-[14px] md:p-[20px] text-[#FBEFDD] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)]">{benefit}</td>
                  <td className="p-[14px] md:p-[20px] text-center">
                    {traditionalOffice[index] ? (
                      <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] mx-auto text-[#274038]" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] mx-auto text-[#FBEFDD]/30" viewBox="0 0 20 20" fill="none">
                        <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </td>
                  <td className="p-[14px] md:p-[20px] text-center">
                    {storey[index] ? (
                      <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] mx-auto text-[#274038]" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] mx-auto text-[#FBEFDD]/30" viewBox="0 0 20 20" fill="none">
                        <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-[30px] md:mt-[40px] text-center">
          <a
            href="/contact-us/"
            className="btn-hover inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[24px] md:px-[32px] py-[12px] md:py-[14px] min-h-[44px] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-colors"
          >
            Enquire now
          </a>
        </div>
      </div>
    </section>
  );
}
