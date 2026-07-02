"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqSections = [
  {
    title: "Most Asked Questions",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    items: [
      {
        question: "What does your price include?",
        answer:
          "At MPS we have one single, all-inclusive rate which includes: property management; utilities; maintenance; services; and facilities. In addition access to our concierge services is available to all MPS clients.",
      },
      {
        question: "What types of properties do you offer?",
        answer:
          "MPS provides luxury properties including villas, riads, and apartments across Marrakech. We cater to individuals, families, and corporate clients looking for the perfect Marrakech experience.",
      },
      {
        question: "Can I change my property in the future?",
        answer:
          "At MPS we want to offer flexibility. If your requirements change, we can look at different options to upsize, downsize, or relocate depending on your needs. Our team will help you find the perfect property.",
      },
      {
        question: "What size properties are available?",
        answer:
          "MPS properties range from 1-bedroom apartments to 10+ bedroom villas. Whether you're looking for a cozy retreat or a grand estate, we have options to suit every need. Please speak to one of the team to discuss your requirements in more detail.",
      },
      {
        question: "What are the minimum rental periods?",
        answer:
          "The minimum rental period at MPS is typically 3 nights. On average our clients tend to stay between 1 – 4 weeks. We also offer long-term rental options for those looking to make Marrakech their home.",
      },
      {
        question: "What type of services do you offer?",
        answer:
          "MPS properties are completely private and personalised to each client. Clients can benefit from a mix of private spaces and concierge services, such as housekeeping, chef services, and airport transfers. Our concierge team is available to all MPS clients.",
      },
    ],
  },
  {
    title: "Pricing & Booking",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    items: [
      {
        question: "How much does an MPS property cost?",
        answer:
          "MPS properties are priced according to size, location, and season. We offer competitive rates for luxury properties in Marrakech. Please speak to one of the team to discuss your requirements and get a personalized quote.",
      },
      {
        question: "Is there a concierge at your properties?",
        answer:
          "We have dedicated concierge teams at all our managed properties. Your dedicated concierge is available during business hours and on-call for emergencies. They can help with everything from restaurant reservations to arranging excursions.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, bank transfers, and can arrange payment plans for longer stays. For international clients, we accept payments in multiple currencies.",
      },
    ],
  },
  {
    title: "Property Customisation",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    items: [
      {
        question: "Can I customise my property?",
        answer:
          "Yes. The MPS team will work with you to personalise your property to meet your needs. This includes: interior design; furniture selection; plant arrangements; and even your preferred amenities. We want your property to feel like home.",
      },
      {
        question: "Are chef services available?",
        answer:
          "Each property can be set up with chef services based on your preferences. The MPS team can help you identify the best catering options. There are also several dining options available within the local area. Plus, our concierge team can arrange private dining experiences for all MPS clients.",
      },
      {
        question: "What furniture is included?",
        answer:
          "As standard, we provide all MPS properties with fully furnished interiors curated by our design team. You can also request custom furniture selections. It's your space, we want to give you the flexibility to make it a place for you to enjoy Marrakech.",
      },
      {
        question: "Can I request additional services?",
        answer:
          "Yes. The team at MPS will work with you to personalise your experience. This includes: private pool access; spa services; personal training; and even personalised welcome packages.",
      },
    ],
  },
  {
    title: "Concierge Services",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    items: [
      {
        question: "What concierge services are included?",
        answer:
          "MPS provides a range of concierge services including airport transfers, restaurant reservations, excursion bookings, and personal shopping assistance. Our team is dedicated to making your Marrakech experience unforgettable.",
      },
      {
        question: "Who can access concierge services?",
        answer: "Any MPS client – and only MPS clients. Our concierge services are exclusive to our valued clients.",
      },
      {
        question: "How do concierge services work?",
        answer:
          "Every client gets access to our dedicated concierge team. You can use our services to book excursions, arrange dining, or request special experiences. Additional premium services are available at preferential rates.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Property bookings: You get a 100% refund if you cancel at least 14 days before; a 50% refund if you cancel at least 7 days before; Non-refundable if you cancel within 7 days. Concierge services: Full refund if you cancel at least 24 hours before.",
      },
      {
        question: "Can I arrange private events at my property?",
        answer:
          "Yes. You can arrange private events at your property with our event planning services. We can help with venue setup, catering, entertainment, and more. Our team will ensure your event is memorable.",
      },
    ],
  },
  {
    title: "MPS Club Membership",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    items: [
      {
        question: "What is MPS Club?",
        answer:
          "MPS Club is our exclusive membership program offering priority access to new properties, special rates, and premium concierge services across Marrakech. Members enjoy benefits like early access to new listings and exclusive events.",
      },
      {
        question: "How do I join MPS Club?",
        answer:
          "Joining MPS Club is easy. Simply contact our team or sign up through our website. Membership is available to all MPS clients and comes with no additional fees for the first year.",
      },
    ],
  },
  {
    title: "Property Services",
    icon: (
      <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    items: [
      {
        question: "Can I register visitors to my property?",
        answer:
          "Yes. You can do this via our visitor management system. Specific access arrangements may apply during out of business hours. Our security team ensures your property remains safe and secure.",
      },
      {
        question: "What are your support hours?",
        answer:
          "All MPS locations have 24/7 concierge support. Any specific arrangements will be communicated to you prior to arrival. Our team is always available to help with any questions or concerns.",
      },
      {
        question: "What WiFi services are available?",
        answer:
          "At MPS we have fast, secure, resilient WiFi across all our properties. High-speed connectivity is included in all our managed properties, perfect for both work and leisure.",
      },
      {
        question: "Are housekeeping services available?",
        answer:
          "There are housekeeping services available within all MPS properties which are included in your stay. All housekeeping includes: daily cleaning; laundry service; and property maintenance. Our concierge team is also available for additional requests.",
      },
      {
        question: "What additional services do you provide?",
        answer:
          "We can provide additional services such as: private chef; personal training; spa treatments; excursion bookings; and event planning. Access to MPS Club including priority bookings and special rates is included in the MPS experience.",
      },
      {
        question: "What services and facilities are included in the price?",
        answer:
          "MPS services include: daily housekeeping; maintenance; utility management; and a dedicated concierge. Our facilities include: private pools; gardens; parking; air conditioning; and premium amenities.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="block border-b border-[#1A171A]/10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-[20px] md:py-[24px] bg-transparent border-none cursor-pointer transition-all duration-300 text-[18px] md:text-[20px] font-medium leading-[1.4] text-[#1A171A] hover:text-[#274038] min-h-[44px]"
      >
        <span className="pr-[16px]">{question}</span>
        <svg
          className={`w-[16px] h-[16px] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5L7 11L13 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-[1000px] opacity-100 pb-[20px]" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A171A]/80 max-w-[90%]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const { ref, isRevealed } = useScrollReveal();

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section 
      ref={ref}
      className={`bg-white py-[60px] md:py-[80px] lg:py-[100px] px-[24px] md:px-[40px] lg:px-[60px] reveal ${isRevealed ? 'revealed' : ''}`}
    >
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col gap-[40px] md:gap-[60px]">
          {faqSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-[12px] mb-[24px] md:mb-[32px]">
                <div className="text-[#274038]">
                  {section.icon}
                </div>
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[1.2] text-[#1A171A]">
                  {section.title}
                </h2>
              </div>
              <div className="flex flex-col">
                {section.items.map((item, idx) => {
                  const key = `${section.title}-${idx}`;
                  return (
                    <AccordionItem
                      key={key}
                      question={item.question}
                      answer={item.answer}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
