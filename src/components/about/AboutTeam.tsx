"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  {
    name: "MPS Leadership Team",
    role: "Founding Team",
    bio: "With over 15 years of combined experience in luxury hospitality and property management across Morocco and Europe, the MPS founding team identified a gap in Marrakech's market for a premium, technology-driven property management service. Their vision was to combine traditional Moroccan hospitality with modern property management systems to deliver exceptional returns for property owners.",
  },
  {
    name: "Property Management",
    role: "Operations Team",
    bio: "Our operations team brings deep expertise in short-term rental management, with specialists in listing optimization, dynamic pricing, guest relations, and property maintenance. Each property manager oversees a portfolio of properties, ensuring personalized attention and consistent quality standards across all MPS-managed properties.",
  },
  {
    name: "Guest Experience",
    role: "Concierge Team",
    bio: "Multilingual concierge professionals available 24/7 to support guests from check-in to check-out. Our team speaks English, French, Arabic, and Spanish, providing seamless communication for international travelers. From airport transfers to restaurant reservations and excursion bookings, our concierge team ensures every guest enjoys an authentic Marrakech experience.",
  },
];

export default function AboutTeam() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-white py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] mb-[16px] md:mb-[24px]">
          Our Team
        </h2>
        <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/80 text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] max-w-[800px] mb-[40px] md:mb-[60px]">
          The people behind Marrakech Property Service combine local expertise with international standards to deliver exceptional property management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px]">
          {team.map((member) => (
            <div key={member.name} className="bg-[#FBEFDD] rounded-[9px] p-[24px] md:p-[32px]">
              <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[18px] md:text-[20px] mb-[4px]">
                {member.name}
              </h3>
              <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#274038] text-[13px] md:text-[14px] uppercase tracking-[0.1em] mb-[16px]">
                {member.role}
              </p>
              <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/70 text-[14px] md:text-[15px] leading-[1.6]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[40px] md:mt-[60px] bg-[#274038] rounded-[9px] p-[24px] md:p-[40px]">
          <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-white text-[20px] md:text-[24px] mb-[12px]">
            Our Credentials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
            {[
              { stat: "50+", label: "Properties Managed" },
              { stat: "4.8", label: "Average Guest Rating" },
              { stat: "80%+", label: "Average Occupancy Rate" },
              { stat: "24/7", label: "Guest Support" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-[32px] md:text-[40px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] mb-[4px]">
                  {item.stat}
                </p>
                <p className="text-[13px] md:text-[14px] text-white/70 font-[family-name:var(--font-gt-walsheim-prolight)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
