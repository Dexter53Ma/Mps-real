"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png",
  "/images/gallery/ccb71a5d-edb6-44dc-abde-6f86549c9297.png",
  "/images/gallery/727313289_17918133387393261_5885020094673898896_n.jpg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#1A171A] min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] w-full overflow-hidden relative z-[6]">
      <div className="absolute inset-0 z-[2] overflow-hidden">
        {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Luxury villa in Marrakech"
              width={1920}
              height={1080}
              priority={index === 0}
              className={`absolute inset-0 w-full h-[110%] object-cover transition-all duration-[2000ms] ease-out ${
              currentImage === index ? "opacity-80 ken-burns" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${-scrollY * 0.15}px) scale(${currentImage === index ? 1 : 1.1})`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A171A]/50 via-transparent to-[#1A171A]/20 z-[3]" />

      <div className="relative z-[5] h-full flex flex-col justify-between min-h-[600px] sm:min-h-[700px] lg:min-h-[900px]">
        <div className="pt-[120px] sm:pt-[140px] lg:pt-[180px] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
          <h1 className="text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-medium leading-[0.95] tracking-tight text-left animate-fade-in-up">
            Marrakech Property Service
          </h1>
          <div className="mt-3 sm:mt-4">
            <p className="text-white text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-normal leading-[1.2] text-left animate-fade-in-up animation-delay-200">
              We manage your Marrakech property so you don&apos;t have to
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-[10px] px-[10px] pb-[10px] animate-fade-in-up animation-delay-400">
          <div className="flex-1 bg-[#274038]/90 backdrop-blur-sm rounded-[8px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px] p-[14px_16px] sm:p-[14px_23px]">
            <div className="flex flex-col">
              <p className="text-[14px] sm:text-[16px] font-medium text-white mb-[4px]">
                Full-service property management
              </p>
              <p className="text-[12px] sm:text-[14px] text-white/70">
                Airbnb, Booking.com &amp; direct rentals — we handle it all
              </p>
            </div>
            <a
              href="/enquire/"
              className="btn-hover bg-[#FBEFDD] text-[#1A171A] text-[14px] sm:text-[16px] font-normal px-[20px] sm:px-[32px] py-[12px] sm:py-[15px] rounded-[6px] hover:bg-[#F5D6AB] transition-colors min-h-[44px] no-underline whitespace-nowrap"
            >
              List Your Property
            </a>
          </div>

          <div className="flex items-center bg-[#4F0003]/90 backdrop-blur-sm rounded-[8px] overflow-hidden">
            <div className="flex items-center gap-[10px] sm:gap-[12px] p-[14px_16px] sm:p-[14px_20px]">
              <div className="flex flex-col">
                <p className="text-white text-[16px] sm:text-[18px] font-medium leading-tight">
                  50+ Properties Managed
                </p>
                <p className="text-white/70 text-[12px] sm:text-[14px]">
                  Across Marrakech
                </p>
              </div>
            </div>
            <Image
              src="/images/gallery/63053ac8-bf63-41f0-9d3c-b7a7731511bc.png"
              alt="Managed property"
              width={120}
              height={70}
              loading="lazy"
              className="w-[80px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
