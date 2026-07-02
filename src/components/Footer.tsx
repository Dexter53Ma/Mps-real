"use client";

import Link from "next/link";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";

export default function Footer() {
  const { containerRef: leftRef, isRevealed: leftRevealed } = useScrollRevealGroup();
  const { containerRef: rightRef, isRevealed: rightRevealed } = useScrollRevealGroup();

  return (
    <footer className="bg-[#1A171A] text-[#F1F4F1]">
      <div className="px-[24px] md:px-[40px] lg:px-[60px] pt-[60px] md:pt-[80px] pb-[40px] max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] lg:gap-[201px]">
          {/* Left Column */}
          <div 
            ref={leftRef}
            className={`flex-1 reveal ${leftRevealed ? 'revealed' : ''}`}
          >
            <p className="text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] text-white mb-[20px]">
              Quicklinks
            </p>
            <div className="flex flex-col gap-[10px] mb-[24px]">
              <Link
                href="/properties/"
                className="nav-link text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Properties
              </Link>
              <Link
                href="/meeting-and-events/"
                className="nav-link text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Our Services
              </Link>
            </div>
            <div className="flex flex-col gap-[10px] mb-[24px]">
              <Link
                href="/about-mps/"
                className="nav-link text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                About MPS
              </Link>
              <Link
                href="/contact-us/"
                className="nav-link text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Contact Us
              </Link>
              <Link
                href="/contact-us/"
                className="nav-link text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-[10px] mb-[24px]">
              <a
                href="/privacy-notice/"
                className="nav-link text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Privacy Notice
              </a>
              <a
                href="/terms-of-use/"
                className="nav-link text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Terms of Use
              </a>
              <a
                href="/terms-conditions/"
                className="nav-link text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="flex gap-[16px]">
              <a
                href="https://www.facebook.com/MarrakechPropertyService"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-70 hover:scale-110"
              >
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/marrakechpropertyservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-70 hover:scale-110"
              >
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/marrakech-property-service/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-70 hover:scale-110"
              >
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div 
            ref={rightRef}
            className={`flex-1 reveal reveal-delay-2 ${rightRevealed ? 'revealed' : ''}`}
          >
            <p className="text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] text-white mb-[20px]">
              What property owners say
            </p>
            <div className="mb-[32px]">
              <p className="italic text-[15px] md:text-[16px] leading-[1.6] text-[#F1F4F1]/90 font-[family-name:var(--font-gt-walsheim-prolight)]">
                &quot;MPS took over our villa and within two months our bookings increased by 40%. They handle everything and we just receive our monthly reports. Professional, responsive, and genuinely cares about our property.&quot;
              </p>
              <p className="text-[13px] text-white/60 mt-[12px] font-[family-name:var(--font-gt-walsheim-prolight)]">
                Fatima &amp; Youssef El Alami, Villa owners
              </p>
            </div>

            <p className="text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] text-white mb-[12px]">
              MPS Team
            </p>
            <div className="flex flex-col gap-[8px]">
              <a
                href="tel:+212621189496"
                className="nav-link text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                +212 6 21 18 94 96
              </a>
              <a
                href="mailto:info@marrakechpropertyservice.com"
                className="nav-link text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                info@marrakechpropertyservice.com
              </a>
              <Link
                href="/contact-us/"
                className="nav-link text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#F1F4F1] no-underline transition-opacity duration-300 hover:opacity-70 inline-block w-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[50px] md:mt-[60px] pt-[24px] md:pt-[30px] border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px] md:gap-[30px]">
            <div className="flex items-center gap-[8px] opacity-50">
              <span className="text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)]">Marrakech Property Service</span>
            </div>
            <div className="flex gap-[20px] md:gap-[28px] items-center opacity-60">
              <img src="/images/misc/airbnb.svg" alt="Airbnb" className="h-[26px] md:h-[30px] w-auto" />
              <img src="/images/misc/booking.svg" alt="Booking.com" className="h-[20px] md:h-[24px] w-auto" />
            </div>
          </div>
          <div className="mt-[16px] flex flex-col md:flex-row justify-between items-start md:items-center gap-[12px]">
            <p className="text-[11px] text-white/40 font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5]">
              Marrakech Property Service. Registered in Morocco. All rights reserved.
            </p>
            <p className="text-[11px] text-white/40 font-[family-name:var(--font-gt-walsheim-prolight)]">
              Made by <span className="font-[family-name:var(--font-gt-walsheim-medium)]">MPS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
