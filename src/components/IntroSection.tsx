"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function IntroSection() {
  const { ref: textRef, isRevealed: textRevealed } = useScrollReveal();
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal({ rootMargin: "0px 0px -100px 0px" });

  return (
    <section className="bg-[#FBEFDD] text-[#4F0003] rounded-b-[10px] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-[40px] sm:gap-[60px] md:gap-[120px] mx-auto max-w-[1356px] py-[60px] md:py-[120px] px-[20px] sm:px-[40px]">
        <div 
          ref={textRef}
          className={`flex flex-col gap-[30px] max-w-[580px] reveal ${textRevealed ? 'revealed' : ''}`}
        >
          <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight">
            Your Marrakech property, professionally managed
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] opacity-90">
            Owning a property in Marrakech should be effortless. MPS provides
            complete property management for villas, riads, and apartments — from
            Airbnb listing optimization to guest management, cleaning, and
            maintenance.
          </p>
          <p className="text-[16px] md:text-[18px] leading-[1.6] opacity-90">
            Whether you&apos;re an absent owner, a investor, or someone who wants to
            monetize their Marrakech property without the hassle — we handle
            everything so you can enjoy the returns.
          </p>
          <p className="text-[16px] md:text-[18px] leading-[1.6] opacity-90">
            Our team covers professional photography, SEO-optimized listings on
            Airbnb, Booking.com &amp; Vrbo, 24/7 guest support, turnover cleaning,
            and property maintenance. One team, one invoice, zero stress.
          </p>
          <Link
            href="/enquire/"
            className="btn-hover flex items-center gap-[10px] no-underline transition-all duration-[350ms] hover:opacity-70 w-fit mt-4"
          >
            <span className="text-[16px]">Manage my property</span>
            <ArrowRightIcon className="w-[10px] h-[10px]" />
          </Link>
        </div>

        <div 
          ref={imageRef}
          className={`relative max-w-[500px] md:max-w-[600px] w-full reveal-right ${imageRevealed ? 'revealed' : ''}`}
        >
          <img
            src="/images/intro/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_008-1-scaled-1.jpg"
            alt="Luxury managed villa in Marrakech"
            className="w-full h-auto rounded-[9px] object-cover aspect-[4/5] img-zoom"
          />
        </div>
      </div>
    </section>
  );
}
