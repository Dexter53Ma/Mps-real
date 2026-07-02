"use client";

import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StoreyClubSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isRevealed } = useScrollReveal();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} relative py-[80px] sm:py-[120px] lg:py-[180px] px-[24px] md:px-[40px] lg:px-[60px] overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1599" viewBox="0 0 1440 1599" fill="none" className="w-full h-full">
          <path d="M1494.68 549.564L1590.8 1096.25C1639.89 1375.45 1391.88 1640.67 1126.96 1592.34L153.443 1414.76C-9.15611 1385.19 -123.065 1242.11 -125.032 1065.14L-131.798 436.413C-134.776 160.478 126.192 -58.2597 372.283 13.9119L1256.46 273.449C1380.49 309.859 1471.06 414.779 1494.68 549.478" fill="#1A171A"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1356px] mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center">
        <div className="flex-1 text-[#FBEFDD]">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[1.1] mb-[12px] md:mb-[16px]">MPS Club</h2>
          <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.15] mb-[12px] md:mb-[16px]">Buy. Sell. Manage.</h3>
          <p className="text-[15px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] mb-[24px] md:mb-[32px] opacity-80">
            Access premium concierge services and exclusive experiences. In Marrakech&apos;s most prestigious locations.
          </p>
          <a
            href="/storey-club"
            className="btn-hover inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[20px] md:px-[24px] py-[10px] md:py-[12px] min-h-[44px] rounded-[6px] text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-colors"
          >
            <span className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]">
              <svg className="w-full h-full" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Find out more
          </a>
        </div>

        <div className="flex-1 w-full max-w-[600px]">
          <div className="relative rounded-[8px] md:rounded-[12px] overflow-hidden aspect-video">
            <video
              ref={videoRef}
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03183428/thumb-1.jpg"
            >
              <source src="https://player.vimeo.com/progressive_redirect/playback/1192546750/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=39809982b03d3ccd5ad5effe326e5044c2f13814f854b513329dee54d1e55f90" type="video/mp4" />
            </video>
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
              >
                <svg className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] text-white" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="29" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 18L42 30L24 42V18Z" fill="currentColor"/>
                </svg>
              </button>
            )}
            {isPlaying && (
              <button
                onClick={handlePause}
                className="btn-hover absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/20 backdrop-blur-sm text-white px-[10px] md:px-[12px] py-[4px] md:py-[6px] min-h-[44px] rounded-[4px] text-[11px] md:text-[12px]"
              >
                Unmute
              </button>
            )}
          </div>

          <div className="mt-[20px] md:mt-[24px] text-[#FBEFDD]">
            <h4 className="text-[15px] md:text-[18px] font-[family-name:var(--font-gt-walsheim-medium)] mb-[10px] md:mb-[12px]">
              Enjoy access to premium concierge services across Marrakech&apos;s most exclusive neighborhoods
            </h4>
            <p className="text-[14px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.5] opacity-80 mb-[20px] md:mb-[24px]">
              Whichever MPS property you choose, you can access our concierge services, property management, or drop in to enjoy exclusive experiences across Marrakech.
            </p>
            <div className="flex flex-wrap gap-[12px] md:gap-[16px]">
              <a href="/storey-club/broadgate" className="text-[#FBEFDD] text-[13px] md:text-[14px] underline hover:opacity-70 transition-opacity">
                MPS Club Palmeraie
              </a>
              <a href="/storey-club/paddington" className="text-[#FBEFDD] text-[13px] md:text-[14px] underline hover:opacity-70 transition-opacity">
                MPS Club Medina
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
