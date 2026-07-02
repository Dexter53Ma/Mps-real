"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Airbnb Management",
    description: "Complete Airbnb listing optimization, pricing strategy, guest communication, and review management. We maximize your occupancy and revenue.",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Booking.com Management",
    description: "Professional listing management on Booking.com with optimized descriptions, photos, pricing, and instant booking setup.",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
  },
  {
    title: "Professional Photography",
    description: "High-quality interior and exterior photography that makes your listing stand out. Better photos = higher rates = more bookings.",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    title: "Cleaning & Turnover",
    description: "Hospitality-grade cleaning between every guest stay. Fresh linens, towels, toiletries, and thorough deep cleaning on schedule.",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"/>
      </svg>
    ),
  },
  {
    title: "Property Maintenance",
    description: "Pool care, garden upkeep, HVAC, plumbing, electrical — routine maintenance and emergency repairs handled promptly.",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: "Guest Support 24/7",
    description: "Round-the-clock guest communication in multiple languages. Pre-booking questions, check-in, in-stay support, and issue resolution.",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
];

export default function AvailableSpaces() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-white py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] mb-[12px] md:mb-[16px]">
          Our management services
        </h2>
        <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/80 text-[15px] md:text-[16px] lg:text-[18px] mb-[40px] md:mb-[60px] leading-[1.6] max-w-[800px]">
          Every service you need to run a successful short-term rental in Marrakech.
          Pick individual services or get our complete management package.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#FBEFDD] rounded-[12px] p-[24px] md:p-[28px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-[44px] h-[44px] bg-[#274038] rounded-[10px] flex items-center justify-center text-white mb-[16px]">
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] text-[18px] md:text-[20px] mb-[8px]">
                {service.title}
              </h3>
              <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/70 text-[14px] leading-[1.6]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[40px] md:mt-[60px] bg-[#274038] rounded-[12px] p-[32px] md:p-[40px] flex flex-col md:flex-row items-center justify-between gap-[20px]">
          <div>
            <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-white text-[20px] md:text-[24px] mb-[8px]">
              Not sure what you need?
            </h3>
            <p className="text-white/80 text-[14px] md:text-[16px]">
              Get a free property assessment and customized management plan.
            </p>
          </div>
          <a
            href="/enquire/"
            className="btn-hover inline-flex items-center px-[24px] py-[12px] bg-white text-[#274038] rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-white/90 min-h-[44px] whitespace-nowrap"
          >
            Get Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
