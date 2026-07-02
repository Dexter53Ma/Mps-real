"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutGallery() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`reveal ${isRevealed ? "revealed" : ""} bg-[#274038] py-[50px] sm:py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]`}>
      <div className="max-w-[1356px] mx-auto">
        <h2 className="font-[family-name:var(--font-gt-walsheim-medium)] text-[#FBEFDD] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] mb-[16px] md:mb-[24px]">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px] md:gap-[16px]">
          <div className="rounded-[8px] md:rounded-[12px] overflow-hidden aspect-[4/3]">
            <Image src="/images/gallery/727680946_17918238813393261_7302752434960266297_n.jpg" alt="Gallery" width={600} height={450} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[8px] md:rounded-[12px] overflow-hidden aspect-[4/3]">
            <Image src="/images/gallery/723256853_17917386006393261_1045073267955173653_n (1).jpg" alt="Gallery" width={600} height={450} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[8px] md:rounded-[12px] overflow-hidden aspect-[4/3] col-span-2 md:col-span-1">
            <Image src="/images/gallery/735393725_17920253277393261_5794717972720120506_n.jpg" alt="Gallery" width={600} height={450} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
