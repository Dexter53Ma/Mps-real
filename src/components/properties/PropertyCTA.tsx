"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PropertyCTA() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`bg-[#FBEFDD] px-[24px] md:px-[40px] lg:px-[60px] pb-[60px] md:pb-[80px] lg:pb-[120px] reveal ${isRevealed ? "revealed" : ""}`}
    >
      <div className="max-w-[1356px] mx-auto">
        <div className="bg-[#274038] rounded-[12px] p-[40px] md:p-[60px] lg:p-[80px] text-center">
          <h2 className="text-white text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.1] mb-[16px] md:mb-[24px]">
            Ready to List Your Property?
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[600px] mx-auto mb-[32px]">
            Join 50+ property owners who trust MPS to manage their Marrakech properties. Get a free assessment and revenue projection.
          </p>
          <div className="flex flex-wrap justify-center gap-[16px]">
            <a
              href="https://wa.me/212621189496?text=Hi%20MPS%2C%20I%27d%20like%20to%20list%20my%20property%20for%20management."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center gap-[8px] px-[24px] py-[12px] bg-white text-[#274038] rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white/90 min-h-[44px]"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="/enquire/"
              className="btn-hover inline-flex items-center gap-[8px] px-[24px] py-[12px] border border-white text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white hover:text-[#274038] min-h-[44px]"
            >
              <span>Enquire Now</span>
              <svg className="w-[16px] h-[16px]" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
