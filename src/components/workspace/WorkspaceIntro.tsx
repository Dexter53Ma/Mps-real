"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WorkspaceIntro() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      className={`bg-[#FBEFDD] py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px] reveal ${isRevealed ? 'revealed' : ''}`}
    >
      <div className="max-w-[1356px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-center">
          <div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[24px]">
              Properties managed by MPS
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6] mb-[20px]">
              We manage a portfolio of premium villas, riads, and apartments across
              Marrakech. Each property is optimized for short-term rentals on
              Airbnb, Booking.com, and Vrbo.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6] mb-[32px]">
              Our management covers everything from professional photography and
              dynamic pricing to guest communication and turnover cleaning. Want
              to see how your property could perform? Get a free assessment.
            </p>
            <div className="flex flex-wrap gap-[16px]">
              <a
                href="/enquire/"
                className="btn-hover inline-flex items-center px-[24px] py-[12px] bg-[#274038] text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#1A171A] min-h-[44px]"
              >
                List Your Property
              </a>
              <a
                href="/meeting-and-events/"
                className="btn-hover inline-flex items-center px-[24px] py-[12px] border border-[#1A171A] text-[#1A171A] rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#1A171A] hover:text-white min-h-[44px]"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/intro/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_008-1-scaled-1.jpg"
              alt="Luxury managed property in Marrakech"
              className="w-full h-auto rounded-[12px] object-cover aspect-[4/3] img-zoom"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#274038] text-white p-[24px] rounded-[12px] hidden md:block">
              <p className="text-[24px] font-bold mb-[4px]">50+</p>
              <p className="text-[14px] text-white/80">Properties Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
