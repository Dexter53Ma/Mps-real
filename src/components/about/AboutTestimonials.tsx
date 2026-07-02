"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Marrakech Property Service provided us with an exceptional property that exceeded all our expectations. The concierge service is world-class, and the team's attention to detail is remarkable.",
    author: "Client Testimonial",
    company: "Luxury Villa Owner",
    image: "/images/gallery/d43aa833-b9e8-452c-b128-39585d5ea156.png",
  },
  {
    quote: "Our previous property served us well, but as our family grew, we needed more space. Moving to MPS provided us with additional rooms and a beautiful layout, making it easier to enjoy our time in Marrakech.",
    author: "Client Testimonial",
    company: "Riad Owner",
    image: "/images/gallery/1c296e25-d249-406a-931b-acc6f9d28134.png",
  },
  {
    quote: "We're always happy to recommend MPS to colleagues and friends looking for a luxury property in Marrakech. MPS offers a professional, inspiring experience with the kind of amenities and community that enhance the lifestyle.",
    author: "Client Testimonial",
    company: "Apartment Owner",
    image: "/images/gallery/ce48f59e-a0bb-4ad7-8796-516d4f8ae380.png",
  },
  {
    quote: "Our property at MPS is a place we're proud to call our Marrakech home. The facilities are of a high standard and the MPS team provide a brilliant level of service.",
    author: "Client Testimonial",
    company: "Villa Owner",
    image: "/images/gallery/741126e5-d668-4753-84b6-50b1c35d9390.png",
  },
  {
    quote: "Choosing MPS was an easy decision for us because of the location, the property and the high-quality service offered. We needed a luxury property to support our lifestyle, which MPS provides through our own villa, concierge services and access to MPS Club.",
    author: "Client Testimonial",
    company: "Property Investor",
    image: "/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png",
  },
];

const customerLogos = [
  { name: "Mesh AI", url: "/images/logos/Mesh-AI-Logo-1.svg" },
  { name: "Hain Celestial", url: "/images/logos/Hain-Celestial-Logo.png" },
  { name: "Stace", url: "/images/logos/Stace-Logo-1.svg" },
  { name: "Orange", url: "/images/logos/Orange-Logo.png" },
  { name: "Oliver Bernard", url: "/images/logos/Oliver-Bernard-Logo-1-1.svg" },
  { name: "VertoFX", url: "/images/logos/VertoFX-1-1.png" },
  { name: "Zedonk", url: "/images/logos/Zedonk.png" },
  { name: "Sasol", url: "/images/logos/Sasol-1.png" },
];

export default function AboutTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, isRevealed } = useScrollReveal();

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] text-[#4F0003] py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[60px] xl:px-[80px]`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-[32px] sm:mb-[40px] md:mb-[60px]">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.05] tracking-tight">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[40px] lg:gap-[60px] mb-[50px] md:mb-[80px]">
          <div className="relative rounded-[6px] md:rounded-[8px] overflow-hidden aspect-[4/3]">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].company}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-[24px] md:mb-[32px]">
              <h4 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.3] mb-[20px] md:mb-[32px]">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </h4>
              <div>
                <p className="text-[13px] md:text-[14px] mb-[6px] md:mb-[8px] font-[family-name:var(--font-gt-walsheim-prolight)]">{testimonials[currentTestimonial].author}</p>
                <a
                  href="#"
                  className="text-[16px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-medium)] no-underline hover:opacity-70 transition-opacity"
                >
                  {testimonials[currentTestimonial].company}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-[12px] md:gap-[16px]">
              <button
                onClick={prevTestimonial}
                className="btn-hover w-[40px] h-[40px] md:w-[48px] md:h-[48px] min-h-[44px] border border-[#4F0003] rounded-full flex items-center justify-center hover:bg-[#4F0003] hover:text-[#FBEFDD] transition-colors"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-[24px] md:h-[24px]">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="btn-hover w-[40px] h-[40px] md:w-[48px] md:h-[48px] min-h-[44px] border border-[#4F0003] rounded-full flex items-center justify-center hover:bg-[#4F0003] hover:text-[#FBEFDD] transition-colors"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-[24px] md:h-[24px]">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[13px] md:text-[14px] mb-[16px] md:mb-[24px] font-[family-name:var(--font-gt-walsheim-prolight)]">Customers</p>
          <div className="flex flex-wrap items-center gap-[24px] md:gap-[32px] lg:gap-[40px]">
            {customerLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-[24px] md:h-[32px] lg:h-[40px] w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
