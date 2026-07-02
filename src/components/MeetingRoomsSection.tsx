"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MeetingRoomsSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#274038] text-white`}>
      <div className="flex flex-col md:flex-row items-center gap-[40px] sm:gap-[60px] max-w-[1356px] mx-auto py-[60px] md:py-[120px] px-[20px] sm:px-[40px]">
        <div className="flex-1 max-w-[600px]">
          <h2 className="text-[40px] md:text-[60px] font-medium leading-[1] tracking-tight text-white">
            Expert concierge services
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/90 mt-6">
            Property management, luxury experiences, exclusive access – whatever you need,
            you&apos;ll have access to our premium concierge services and expert teams
            across Marrakech&apos;s most prestigious neighborhoods.
          </p>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/90 mt-5">
            With dedicated property managers, expert local knowledge and curated experiences,
            our concierge services provide everything you need – while creating the perfect
            environment for a luxurious lifestyle.
          </p>
        </div>
        <div className="flex-1 w-full">
          <img
            src="/images/meeting/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_019-copy-scaled-1.jpg"
            alt="Concierge service"
            width={600}
            height={450}
            loading="lazy"
            className="w-full h-auto rounded-[9px] object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
