"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function EnquireSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    hearAbout: "",
    teamSize: "",
    message: "",
  });
  const { ref, isRevealed } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#F5D6AB] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[40px] lg:gap-[60px]">
        {/* Left: Contact Info */}
        <div className="text-[#1A171A]">
          <div className="bg-[#274038] text-[#FBEFDD] p-[24px] md:p-[32px] rounded-[8px] md:rounded-[12px] mb-[20px] md:mb-[32px]">
            <h4 className="text-[20px] md:text-[24px] font-[family-name:var(--font-gt-walsheim-medium)] mb-[12px] md:mb-[16px]">Get in Contact</h4>
            <a href="tel:+212621189496" className="text-[16px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline block mb-[6px] md:mb-[8px] hover:opacity-70 transition-opacity">
              +212 6 21 18 94 96
            </a>
            <a href="mailto:info@marrakechpropertyservice.com" className="text-[14px] md:text-[16px] lg:text-[18px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline block mb-[20px] md:mb-[24px] hover:opacity-70 transition-opacity break-all">
              info@marrakechpropertyservice.com
            </a>
            <div className="flex gap-[14px] md:gap-[16px]">
              <a href="https://www.facebook.com/MarrakechPropertyService" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                <img src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/27073919/facebook-icon-white.svg" alt="Facebook" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
              </a>
              <a href="https://www.instagram.com/marrakechpropertyservice/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <img src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/27073947/instagram-icon.svg" alt="Instagram" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
              </a>
              <a href="https://www.linkedin.com/company/marrakech-property-service/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                <img src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/31115646/LinkedIn.svg" alt="LinkedIn" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
              </a>
            </div>
          </div>

          <div className="bg-[#274038] text-[#FBEFDD] p-[24px] md:p-[32px] rounded-[8px] md:rounded-[12px]">
            <p className="text-[16px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-medium)] mb-[12px] md:mb-[16px]">Find a property to call your own</p>
            <div className="flex flex-wrap gap-[8px] md:gap-[12px] mb-[20px] md:mb-[24px]">
              <button className="btn-hover bg-[#FBEFDD] text-[#1A171A] px-[14px] md:px-[20px] py-[8px] md:py-[10px] min-h-[44px] rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-medium)]">Property</button>
              <button className="btn-hover bg-transparent text-[#FBEFDD] border border-[#FBEFDD]/30 px-[14px] md:px-[20px] py-[8px] md:py-[10px] min-h-[44px] rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)]">Concierge</button>
              <button className="btn-hover bg-transparent text-[#FBEFDD] border border-[#FBEFDD]/30 px-[14px] md:px-[20px] py-[8px] md:py-[10px] min-h-[44px] rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)]">Event Space</button>
            </div>
            <div className="flex gap-[8px] md:gap-[12px]">
              <div className="flex-1 bg-white rounded-[6px] px-[14px] md:px-[16px] py-[12px] md:py-[14px] flex items-center">
                <span className="text-[13px] md:text-[14px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)]">Property</span>
                <svg className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] ml-auto text-[#1A171A]" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <button className="btn-hover bg-[#FBEFDD] text-[#1A171A] px-[20px] md:px-[32px] py-[12px] md:py-[14px] min-h-[44px] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] transition-colors">
                Start Search
              </button>
            </div>
          </div>

          <div className="mt-[24px] md:mt-[32px]">
            <a href="/contact-us/" className="btn-hover inline-flex items-center gap-[8px] bg-[#1A171A] text-[#FBEFDD] px-[20px] md:px-[24px] py-[10px] md:py-[12px] min-h-[44px] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-colors">
              Enquire now
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-[#FBEFDD] rounded-[8px] md:rounded-[12px] p-[24px] sm:p-[32px] md:p-[40px]">
          <h3 className="text-[20px] md:text-[24px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] mb-[20px] md:mb-[24px]">Your Details</h3>
          <form onSubmit={handleSubmit} className="space-y-[14px] md:space-y-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[16px]">
              <input
                type="text"
                placeholder="First name*"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[16px]">
              <input
                type="email"
                placeholder="Contact email*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              />
              <input
                type="tel"
                placeholder="Contact number*"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company*"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              />
            </div>
            <div>
              <select
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              >
                <option value="">How did you hear about us?</option>
                <option value="advertisement">Advertisement</option>
                <option value="website">Another Company&apos;s Website</option>
                <option value="blog">Blog</option>
                <option value="event">Event</option>
                <option value="search">Search Engines</option>
                <option value="social">Social Media</option>
                <option value="video">Video</option>
                <option value="word">Word of Mouth</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <select
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              >
                <option value="">How many people will work in your new office?</option>
                <option value="1-9">1 - 9</option>
                <option value="10-19">10 - 19</option>
                <option value="20-39">20 - 39</option>
                <option value="40-69">40 - 69</option>
                <option value="70-99">70 - 99</option>
                <option value="100+">100+</option>
              </select>
            </div>
            <div>
              <p className="text-[12px] md:text-[13px] text-[#1A171A]/60 mb-[6px] md:mb-[8px] font-[family-name:var(--font-gt-walsheim-prolight)]">Please let us know any additional information</p>
              <textarea
                placeholder="Please mention any specific floor numbers or additional information here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full border border-[#1A171A]/10 rounded-[6px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1A171A] placeholder:text-[#1A171A]/40 resize-none bg-white font-[family-name:var(--font-gt-walsheim-prolight)]"
              />
            </div>
            <button
              type="submit"
              className="btn-hover bg-[#274038] text-white py-[12px] md:py-[14px] px-[24px] md:px-[32px] min-h-[44px] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] transition-colors"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
