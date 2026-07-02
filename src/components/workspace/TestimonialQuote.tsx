"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quotes = [
  {
    text: "MPS quickly found us a property that exceeded our expectations. The service was seamless from start to finish, with first-class attention to detail and incredible local knowledge of Marrakech.",
    author: "Gareth Sinnamon",
    company: "Stace",
  },
  {
    text: "Our villa managed by MPS is a place we're proud to call our Marrakech home. The properties are of a high standard and the MPS team provide a brilliant level of concierge service.",
    author: "Simon Field",
    company: "Hain Celestial",
  },
  {
    text: "We're always happy to recommend MPS to colleagues and friends looking for luxury property in Marrakech. MPS offers a professional, personal service with the kind of local expertise that makes all the difference.",
    author: "Hannah Longley",
    company: "Sasol",
  },
];

export default function TestimonialQuote() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isRevealed } = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#FBEFDD] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px] hidden md:block`}>
      <div className="max-w-[800px] mx-auto text-center">
        <div className="min-h-[100px] md:min-h-[120px] flex items-center justify-center">
          <h5 className="text-[#1A171A] text-[18px] sm:text-[20px] md:text-[24px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.4] italic">
            &ldquo;{quotes[activeIndex].text}&rdquo;
          </h5>
        </div>

        <div className="mt-[20px] md:mt-[24px] min-h-[36px] md:min-h-[40px] flex items-center justify-center">
          <p className="text-[#1A171A] text-[13px] md:text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)]">
            <span className="font-[family-name:var(--font-gt-walsheim-medium)]">{quotes[activeIndex].author}</span>
            <br />
            <span className="opacity-70">{quotes[activeIndex].company}</span>
          </p>
        </div>

        <div className="mt-[24px] md:mt-[32px] flex justify-center gap-[6px] md:gap-[8px]">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`btn-hover w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                activeIndex === index
                  ? "bg-[#274038] scale-110"
                  : "bg-[#1A171A]/20 hover:bg-[#1A171A]/40"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            >
              <span className={`block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full ${activeIndex === index ? "bg-[#274038]" : "bg-[#1A171A]/20"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
