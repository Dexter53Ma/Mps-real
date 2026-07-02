"use client";

import { useState } from "react";
import { useScrollReveal, useScrollRevealGroup } from "@/hooks/useScrollReveal";

const cards = [
  {
    title: "Airbnb & Booking.com Management",
    desc: "We optimize your listings, manage pricing, and handle guest communication across all major platforms.",
    image: "/images/pillars/20240506_Storey_201-Bishopsgate_-17-copy-scaled-1.jpg",
    span: "col-span-2",
  },
  {
    title: "Professional Photography",
    desc: "Stunning property photos that attract more guests and boost your booking rates.",
    image: "/images/pillars/20240902_PaddingtonCentral_2KS_Interior_Storey_Level1_116-1-scaled-1.jpg",
    span: "col-span-1",
  },
  {
    title: "Cleaning & Turnover",
    desc: "Hospitality-grade cleaning between every guest stay. Linens, towels, and deep cleaning included.",
    image: "/images/pillars/20250425_NortonFolgate_NichollsClarke_Storey_Level9_Interior_088-1-scaled-1.jpg",
    span: "col-span-1",
  },
  {
    title: "Property Maintenance",
    desc: "Pool care, garden upkeep, repairs, and 24/7 emergency support — all handled.",
    image: "/images/pillars/20200625_6-Orsman-Road-12-1-scaled-1.jpg",
    span: "col-span-1",
  },
];

const features = [
  { name: "Dynamic pricing optimization", traditional: "✕", mps: "✓" },
  { name: "Multi-platform listing (Airbnb, Booking, Vrbo)", traditional: "✕", mps: "✓" },
  { name: "24/7 guest support", traditional: "✕", mps: "✓" },
  { name: "Professional photography", traditional: "✕", mps: "✓" },
  { name: "SEO-optimized listings", traditional: "✕", mps: "✓" },
  { name: "All-inclusive management fee", traditional: "✕", mps: "✓" },
];

export default function PillarsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { containerRef: cardsRef, isRevealed: cardsRevealed } = useScrollRevealGroup();
  const { ref: tableRef, isRevealed: tableRevealed } = useScrollReveal();

  return (
    <section className="bg-[#4F0003] text-[#FBEFDD]">
      <div className="px-[20px] sm:px-[40px] py-[60px] md:py-[120px] flex flex-col gap-[40px] sm:gap-[60px] max-w-[1356px] mx-auto">
        <div 
          ref={titleRef}
          className={`flex flex-col reveal ${titleRevealed ? 'revealed' : ''}`}
        >
          <h2 className="text-[40px] md:text-[60px] font-medium leading-[1] tracking-tight">
            What MPS does best
          </h2>
          <div className="mt-[40px] flex flex-col gap-[20px] max-w-[800px]">
            <p className="text-[16px] md:text-[18px] leading-[1.6]">
              Marrakech Property Service provides end-to-end property management
              for short-term and vacation rentals. We handle everything from listing
              creation and pricing to guest management and property maintenance — so
              you earn passive income without the workload.
            </p>
            <p className="text-[16px] md:text-[18px] leading-[1.6]">
              Our team manages properties across Marrakech&apos;s most desirable
              neighborhoods — Palmeraie, Medina, Hivernage, and Guéliz. Whether
              it&apos;s a villa, riad, or apartment, we maximize your returns while
              keeping your property in perfect condition.
            </p>
            <p className="text-[16px] md:text-[18px] leading-[1.6]">
              One team. One invoice. Complete peace of mind.
            </p>
          </div>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 reveal ${cardsRevealed ? 'revealed' : ''}`}
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`${card.span} relative h-[400px] md:h-[500px] rounded-[9px] overflow-hidden cursor-pointer group hover-lift`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={card.image}
                alt={card.title}
                className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ${
                  hoveredIndex === i ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />
              <div className="relative z-[2] p-6 md:p-8 flex flex-col justify-end h-full">
                <h3 className="text-[20px] md:text-[24px] font-medium mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-white/90 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={tableRef}
          className={`mt-[40px] reveal ${tableRevealed ? 'revealed' : ''}`}
        >
          <h3 className="text-[36px] md:text-[48px] font-medium leading-[1.1] mb-8">
            Why property owners choose MPS
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-[#FBEFDD]/30">
                  <th className="py-4 pr-4 text-[16px] font-medium">Feature</th>
                  <th className="py-4 pr-4 text-[16px] font-medium text-center">Self-manage</th>
                  <th className="py-4 pr-4 text-[16px] font-medium text-center">MPS</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-[#FBEFDD]/20 transition-colors duration-300 hover:bg-white/5">
                    <td className="py-4 pr-4 text-[16px]">{f.name}</td>
                    <td className="py-4 pr-4 text-[18px] text-[#FBEFDD]/50 text-center">{f.traditional}</td>
                    <td className="py-4 pr-4 text-[18px] text-center">{f.mps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
