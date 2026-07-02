"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { JsonLdScript } from "@/components/JsonLd";

const testimonials = [
  {
    quote:
      "MPS took over our villa in Palmeraie and within two months our bookings increased by 40%. Their photography and listing optimization made a huge difference. We finally feel like our property is in professional hands.",
    author: "Fatima & Youssef El Alami",
    company: "Villa owners, Palmeraie",
  },
  {
    quote:
      "Living abroad, I was struggling to manage my riad in the Medina. MPS handles everything — guests, cleaning, maintenance — and I just receive my monthly reports. It's exactly what I needed.",
    author: "Thomas Richter",
    company: "Riad owner, Medina",
  },
  {
    quote:
      "The team at MPS is responsive, professional, and genuinely cares about our property. They treat it like their own. Our occupancy rate is consistently above 80% thanks to their dynamic pricing strategy.",
    author: "Amina Bennani",
    company: "Apartment owner, Guéliz",
  },
  {
    quote:
      "We tried self-managing our Airbnb for a year. It was exhausting. MPS stepped in and now we earn more with zero stress. Their guest communication is outstanding — always fast and professional.",
    author: "David & Sarah Collins",
    company: "Villa owners, Hivernage",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const totalSlides = testimonials.length;

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, totalSlides - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-[#FBEFDD] text-[#4F0003]">
      {testimonials.map((testimonial, index) => (
        <JsonLdScript
          key={`review-${index}`}
          schema={{
            "@context": "https://schema.org",
            "@type": "Review",
            author: {
              "@type": "Person",
              name: testimonial.author,
            },
            datePublished: "2024-06-15",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: testimonial.quote,
            itemReviewed: {
              "@type": "LocalBusiness",
              name: "Marrakech Property Service",
            },
          }}
        />
      ))}
      <div className="py-[60px] md:py-[120px] px-[20px] sm:px-[40px] max-w-[1356px] mx-auto">
        <h2 className="text-[40px] md:text-[60px] font-medium leading-[1] tracking-tight mb-12">
          What property owners say
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-[9px]">
            <div
              className="flex transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] gap-5"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesPerView + 2)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-1"
                  style={{ width: `calc(${100 / slidesPerView}% - 10px)` }}
                >
                  <div className="bg-white rounded-[9px] p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.05)] h-full flex flex-col transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <p className="italic text-[16px] md:text-[18px] leading-[1.6] flex-1">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <p className="font-medium text-[14px] text-[#1A171A]">
                        {testimonial.author}
                      </p>
                      <p className="text-[13px] text-gray-500 mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="btn-hover absolute left-[0px] sm:left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#4F0003] flex items-center justify-center bg-[#FBEFDD] hover:bg-[#4F0003] hover:text-[#FBEFDD] transition-colors z-10 min-w-[44px] min-h-[44px]"
          >
            <ChevronLeftIcon className="w-3 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="btn-hover absolute right-[0px] sm:right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#4F0003] flex items-center justify-center bg-[#FBEFDD] hover:bg-[#4F0003] hover:text-[#FBEFDD] transition-colors z-10 min-w-[44px] min-h-[44px]"
          >
            <ChevronRightIcon className="w-3 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full bg-[#4F0003] transition-all duration-300 ${
                currentSlide === index ? "opacity-100 scale-125" : "opacity-30 hover:opacity-50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
