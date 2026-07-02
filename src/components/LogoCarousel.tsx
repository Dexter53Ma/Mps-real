"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  SiAirbnb,
  SiBookingdotcom,
  SiExpedia,
  SiTripadvisor,
  SiHotelsdotcom,
  SiOyo,
  SiMarriott,
  SiHilton,
  SiTrivago,
} from "react-icons/si";

const logos = [
  { Icon: SiAirbnb, name: "Airbnb" },
  { Icon: SiBookingdotcom, name: "Booking.com" },
  { Icon: SiExpedia, name: "Expedia" },
  { Icon: SiTripadvisor, name: "TripAdvisor" },
  { Icon: SiHotelsdotcom, name: "Hotels.com" },
  { Icon: SiOyo, name: "OYO" },
  { Icon: SiMarriott, name: "Marriott" },
  { Icon: SiHilton, name: "Hilton" },
  { Icon: SiTrivago, name: "Trivago" },
];

export default function LogoCarousel() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`reveal ${isRevealed ? "revealed" : ""} bg-white py-10 overflow-hidden`}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-scroll flex w-max items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 text-[#1A171A]"
          >
            <logo.Icon size={48} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
