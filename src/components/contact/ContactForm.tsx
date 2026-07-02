"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const capacityOptions = ["1 - 9", "10 - 19", "20 - 39", "40 - 69", "70 - 99", "100+"];

const hearAboutOptions = [
  "How did you hear about us?",
  "Advertisement",
  "Another Company's Website",
  "Blog",
  "Event",
  "Search Engines",
  "Social Media",
  "Video",
  "Word of Mouth",
  "Other",
];

export default function ContactForm() {
  const { ref, isRevealed } = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    hearAbout: "How did you hear about us?",
    capacity: "1 - 9",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] rounded-[8px] md:rounded-[12px] p-[24px] sm:p-[32px] md:p-[40px]`}>
      <h5 className="text-[20px] md:text-[24px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] mb-[8px] md:mb-[12px]">
        Enquire now
      </h5>
      <p className="text-[13px] md:text-[14px] text-[#1A171A]/70 mb-[20px] md:mb-[32px] font-[family-name:var(--font-gt-walsheim-prolight)]">
        If you would like to enquire about property at MPS, get in touch via the form below.
      </p>

      <form onSubmit={handleSubmit}>
        <h6 className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] mb-[16px] md:mb-[20px]">
          Your Details
        </h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:gap-[16px] mb-[10px] md:mb-[16px]">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            aria-label="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            aria-label="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:gap-[16px] mb-[10px] md:mb-[16px]">
          <input
            type="email"
            name="email"
            placeholder="Contact email*"
            aria-label="Contact email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact number*"
            aria-label="Contact number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white"
          />
        </div>

        <input
          type="text"
          name="company"
          placeholder="Company*"
          aria-label="Company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] mb-[10px] md:mb-[16px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] placeholder:text-[#1A171A]/40 bg-white"
        />

        <select
          name="hearAbout"
          aria-label="How did you hear about us"
          value={formData.hearAbout}
          onChange={handleChange}
          className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] mb-[16px] md:mb-[24px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] appearance-none cursor-pointer bg-white"
        >
          {hearAboutOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <p className="text-[13px] md:text-[14px] text-[#1A171A] mb-[10px] md:mb-[12px] font-[family-name:var(--font-gt-walsheim-prolight)]">
          How many people will work in your new office?
        </p>

        <div className="flex flex-wrap gap-[8px] md:gap-[12px] mb-[16px] md:mb-[24px]">
          {capacityOptions.map((opt) => (
            <label
              key={opt}
              className={`flex items-center gap-[6px] md:gap-[8px] px-[12px] md:px-[16px] py-[6px] md:py-[8px] border rounded-[6px] cursor-pointer transition-colors duration-300 ${
                formData.capacity === opt
                  ? "border-[#1A171A] bg-[#1A171A] text-white"
                  : "border-[#1A171A]/20 text-[#1A171A] hover:border-[#1A171A]/40"
              }`}
            >
              <input
                type="radio"
                name="capacity"
                value={opt}
                checked={formData.capacity === opt}
                onChange={handleChange}
                className="sr-only"
              />
              <span className="text-[12px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)]">{opt}</span>
            </label>
          ))}
        </div>

        <p className="text-[13px] md:text-[14px] text-[#1A171A] mb-[8px] md:mb-[12px] font-[family-name:var(--font-gt-walsheim-prolight)]">
          Please let us know any additional information
        </p>

        <textarea
          name="additionalInfo"
          placeholder="Please mention any specific floor numbers or additional information here..."
          aria-label="Additional information"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows={4}
          className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] mb-[16px] md:mb-[24px] border border-[#1A171A]/20 rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] placeholder:text-[#1A171A]/40 resize-none bg-white"
        />

        <button
          type="submit"
          className="btn-hover px-[24px] md:px-[32px] py-[10px] md:py-[12px] bg-[#274038] text-white rounded-[6px] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-medium)] transition-colors duration-300 hover:bg-[#1A171A] min-h-[44px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
