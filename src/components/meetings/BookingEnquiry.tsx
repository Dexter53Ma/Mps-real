"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BookingEnquiry() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#1A171A] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] xl:gap-[80px]">
        <div>
          <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[24px] sm:text-[28px] md:text-[32px] leading-[1.15] mb-[16px] md:mb-[24px]">
            Manage your booking
          </h2>
          <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/70 text-[15px] md:text-[16px] leading-[1.6] mb-[24px] md:mb-[32px]">
            Already reserved an event space or meeting room?<br />
            To make changes, update your requirements, or get support with your upcoming reservation, please contact our bookings team here.
          </p>
          <a
            href="#"
            className="btn-hover inline-block border border-[#FBEFDD] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-medium)] text-[13px] md:text-[14px] px-[24px] md:px-[32px] py-[10px] md:py-[12px] rounded-full hover:bg-[#FBEFDD] hover:text-[#1A171A] transition-colors duration-300 min-h-[44px]"
          >
            Contact bookings team
          </a>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[24px] sm:text-[28px] md:text-[32px] leading-[1.15] mb-[12px] md:mb-[16px]">
            Enquire now
          </h2>
          <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/70 text-[13px] md:text-[14px] mb-[24px] md:mb-[32px] leading-[1.6]">
            Ready to book, or have a question? Fill in the form below to reach our MPS team, or contact us directly at info@marrakechpropertyservice.com or +212 6 21 18 94 96.
          </p>

          <form className="space-y-[14px] md:space-y-[16px]" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[14px] md:text-[16px]">
              Your Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:gap-[12px]">
              <input
                type="text"
                placeholder="First name*"
                className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] placeholder:text-[#FBEFDD]/40 focus:outline-none focus:border-[#FBEFDD]/60"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] placeholder:text-[#FBEFDD]/40 focus:outline-none focus:border-[#FBEFDD]/60"
              />
            </div>
            <input
              type="email"
              placeholder="Contact email*"
              className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] placeholder:text-[#FBEFDD]/40 focus:outline-none focus:border-[#FBEFDD]/60"
            />
            <input
              type="tel"
              placeholder="Contact number*"
              className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] placeholder:text-[#FBEFDD]/40 focus:outline-none focus:border-[#FBEFDD]/60"
            />
            <input
              type="text"
              placeholder="Company*"
              className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] placeholder:text-[#FBEFDD]/40 focus:outline-none focus:border-[#FBEFDD]/60"
            />
            <select className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD]/60 font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] focus:outline-none focus:border-[#FBEFDD]/60 appearance-none">
              <option value="">How did you hear about us?</option>
              <option>Advertisement</option>
              <option>Another Company&apos;s Website</option>
              <option>Blog</option>
              <option>Event</option>
              <option>Search Engines</option>
              <option>Social Media</option>
              <option>Video</option>
              <option>Word of Mouth</option>
              <option>Other</option>
            </select>
            <div>
              <p className="font-[family-name:var(--font-gt-walsheim-prolight)] text-[#FBEFDD]/50 text-[11px] md:text-[12px] mb-[6px] md:mb-[8px]">
                Please let us know any additional information
              </p>
              <textarea
                placeholder="Please mention any specific room numbers or additional information here..."
                rows={4}
                className="w-full bg-transparent border border-[#FBEFDD]/30 rounded-[6px] md:rounded-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#FBEFDD] font-[family-name:var(--font-gt-walsheim-prolight)] text-[13px] md:text-[14px] placeholder:text-[#FBEFDD]/40 focus:outline-none focus:border-[#FBEFDD]/60 resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-hover bg-[#FB4920] text-white font-[family-name:var(--font-gt-walsheim-medium)] text-[13px] md:text-[14px] px-[32px] md:px-[40px] py-[10px] md:py-[12px] rounded-full hover:bg-[#FB4920]/90 transition-colors duration-300 min-h-[44px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
