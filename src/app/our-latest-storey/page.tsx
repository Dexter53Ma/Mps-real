"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogCards = [
  {
    title: "Marrakech's most exciting luxury property collection",
    tag: "MPS",
    image:
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/13141449/240605_Storey_201Bishopsgate_%C2%A9JackHobhouse_068-copy-1.jpg",
    link: "/londons-most-exciting-new-flexible-workspace/",
  },
  {
    title: "How to enjoy the best of Marrakech living",
    tag: "MPS",
    image:
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/30093856/20210423_Storey_100LS_59-scaled.jpg",
    link: "/how-to-boost-wellbeing-in-your-workspace/",
  },
  {
    title:
      "Seven things you need to consider when choosing the right property in Marrakech",
    tag: "Latest MPS",
    image:
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/02/14171505/20200625_Orsman-Road-4-6-scaled-1.jpg",
    link: "/seven-things-you-need-to-consider-when-choosing-the-right-workspace-for-you/",
  },
  {
    title: "MPS Club: Exclusive access to premium experiences",
    tag: "MPS",
    image:
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/02/10125710/210928-Broadgate-100LS-Lifestyle-20-2_0.jpeg",
    link: "/storey-club-meeting-room-and-event-space/",
  },
  {
    title:
      "Uniquely designed properties: Palmeraie Villas and Medina Riads",
    tag: "MPS",
    image:
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2022/12/10131316/230321-Broadgate-100-Liverpool-Street-Return-To-Office-1.jpeg",
    link: "/uniquely-adaptable-workspace-1-finsbury-avenue-and-100-liverpool-street/",
  },
  {
    title: "What to check for when viewing luxury properties",
    tag: "MPS",
    image:
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2022/07/10132445/210928-Broadgate-100LS-Lifestyle-26.png",
    link: "/what-check-when-viewing-office-space/",
  },
];

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

export default function OurLatestStoreyPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(false);

  const visibleCards = blogCards.slice(0, visibleCount);
  const hasMore = visibleCount < blogCards.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, blogCards.length));
      setIsLoading(false);
    }, 400);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-[229.25px] pb-[50px] -mt-[10px] rounded-b-[10px] z-0">
          {/* Decorative SVG Wave Background */}
          <div className="absolute right-[-15px] bottom-[-229.25px] w-[1869px] h-[1236.62px] -z-10 pointer-events-none origin-bottom-right scale-[1.0067]">
            <svg
              viewBox="0 0 1869 1236.62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0 400C200 300 400 500 600 450C800 400 1000 550 1200 500C1400 450 1600 600 1800 550L1869 530V1236.62H0V400Z"
                fill="#FBEFDD"
                fillOpacity="0.3"
              />
              <path
                d="M0 500C250 420 500 580 750 520C1000 460 1250 620 1500 560C1700 510 1800 600 1869 580V1236.62H0V500Z"
                fill="#F1F4F1"
                fillOpacity="0.4"
              />
              <path
                d="M0 600C300 540 600 660 900 610C1200 560 1500 680 1869 640V1236.62H0V600Z"
                fill="#FBEFDD"
                fillOpacity="0.25"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-[30px] px-[39.249px] mx-[46.7031px] max-w-[1760.6px]">
            <h1 className="text-[55px] md:text-[103.833px] font-medium leading-[53.35px] md:leading-[100.718px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-medium)]">
              Our Latest MPS
            </h1>
            <p className="text-[20.7667px] font-normal leading-[24.0893px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[939.692px]">
              A collection of updates from our team and experienced
              partners in Marrakech
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="px-[39.249px] mx-[46.7031px] max-w-[1760.6px] mt-[30px]">
          <div className="flex flex-col gap-[40px]">
            <Link href={blogCards[0].link} className="block group">
              <article className="relative rounded-[6px] border border-[#F1F4F1] overflow-hidden cursor-pointer transition-all duration-350 hover:shadow-lg">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                  <img
                    src={blogCards[0].image}
                    alt={blogCards[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-350 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-[30px] md:p-[50px]">
                  <span className="inline-block text-[12px] uppercase tracking-[0.1em] text-white/80 font-[family-name:var(--font-gt-walsheim-prolight)] mb-[12px]">
                    {blogCards[0].tag}
                  </span>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-white font-[family-name:var(--font-gt-walsheim-medium)] leading-tight">
                    {blogCards[0].title}
                  </h3>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Blog Card Grid */}
        <section className="px-[39.249px] mx-[46.7031px] max-w-[1760.6px] mt-[30px] rounded-b-[10px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {visibleCards.slice(1).map((card) => (
              <Link key={card.link} href={card.link} className="block group">
                <article className="rounded-[6px] border border-[#F1F4F1] overflow-hidden cursor-pointer transition-all duration-350 hover:shadow-lg flex flex-col h-full">
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-350 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-[24px] flex flex-col gap-[12px] flex-1">
                    <span className="text-[12px] uppercase tracking-[0.1em] text-[#274038] font-[family-name:var(--font-gt-walsheim-prolight)]">
                      {card.tag}
                    </span>
                    <h3 className="text-[20px] md:text-[24px] font-medium text-[#1A171A] font-[family-name:var(--font-gt-walsheim-medium)] leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-[50px] mb-[80px]">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-[56px] py-[20px] rounded-[6px] border border-[#1A171A] text-[20.7667px] font-normal text-[#1A171A] bg-transparent cursor-pointer transition-all duration-350 font-[family-name:var(--font-gt-walsheim-medium)] hover:bg-[#1A171A] hover:text-white disabled:opacity-50 disabled:cursor-wait"
            >
              {isLoading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
