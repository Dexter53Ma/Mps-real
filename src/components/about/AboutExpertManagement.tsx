"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutExpertManagement() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#1A171A] text-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]`}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] xl:gap-[120px] items-center">
        <div className="flex flex-col gap-[20px] md:gap-[32px]">
          <div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight mb-[16px] md:mb-[24px]">
              Expert property management
            </h2>
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
                Our expertise means you&apos;re guaranteed a best-in-class property experience.
              </p>
              <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
                Marrakech Property Service is Marrakech&apos;s leading luxury real estate conciergerie, creating exceptional property experiences where clients can thrive, with a focus on beautiful design, high-quality properties, incredible locations, world-class amenities – that&apos;s why discerning clients call our properties home.
              </p>
              <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
                MPS is Marrakech&apos;s premier property conciergerie — purpose-built for discerning clients who want exceptional properties with outstanding service, flexibility and ease at every step.
              </p>
              <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-90">
                It means you can get started quickly, stay focused on enjoying your lifestyle, and know your property will be managed as your needs evolve.
              </p>
            </div>
          </div>

          <a
            href="/about-mps/"
            className="inline-flex items-center gap-[8px] text-[#FBEFDD] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:opacity-70 transition-opacity group"
          >
            <span className="group-hover:translate-x-1 transition-transform">→</span>
            About MPS
          </a>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative">
            <svg
              className="absolute -top-[30px] -right-[30px] md:-top-[60px] md:-right-[60px] w-[250px] h-[250px] md:w-[500px] md:h-[500px] opacity-10"
              viewBox="0 0 836 773"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M183.435 90.9371L32.5131 340.508C-44.5668 467.963 26.4185 644.978 165.259 671.602L675.469 769.439C760.669 785.821 843.607 737.354 878.196 651.035L1000.98 344.309C1054.87 209.697 968.707 52.9914 834.55 41.6247L352.496 0.900507C284.873 -4.8113 220.605 29.3908 183.45 90.8945"
                fill="#FBEFDD"
                fillOpacity="0.05"
              />
            </svg>
            <div className="relative z-10 rounded-[6px] md:rounded-[8px] overflow-hidden aspect-[4/3]">
              <img
                src="/images/gallery/ccb71a5d-edb6-44dc-abde-6f86549c9297.png"
                alt="Luxury property in Marrakech"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
