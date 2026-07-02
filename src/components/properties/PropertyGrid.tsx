"use client";

import { useScrollReveal, useScrollRevealGroup } from "@/hooks/useScrollReveal";
import Link from "next/link";

interface PropertyCard {
  name: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  sqm: number;
  image: string;
  link: string;
  amenities: string[];
  monthlyRevenue: string;
  status: "Managed" | "Available" | "Premium";
}

const properties: PropertyCard[] = [
  {
    name: "Villa Palmeraie Oasis",
    location: "Palmeraie",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    sqm: 450,
    image: "/images/gallery/727313289_17918133387393261_5885020094673898896_n.jpg",
    link: "/properties/villa-palmeraie-oasis/",
    amenities: ["Private pool", "Garden", "Secure parking", "Air conditioning", "Concierge"],
    monthlyRevenue: "€4,200",
    status: "Managed",
  },
  {
    name: "Riad Medina Heritage",
    location: "Medina",
    type: "Riad",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    sqm: 220,
    image: "/images/gallery/727680946_17918238813393261_7302752434960266297_n.jpg",
    link: "/properties/riad-medina-heritage/",
    amenities: ["Rooftop terrace", "Daily housekeeping", "High-speed WiFi", "Private chef"],
    monthlyRevenue: "€3,800",
    status: "Managed",
  },
  {
    name: "Penthouse Hivernage View",
    location: "Hivernage",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    sqm: 140,
    image: "/images/gallery/723256853_17917386006393261_1045073267955173653_n (1).jpg",
    link: "/properties/penthouse-hivernage-view/",
    amenities: ["Rooftop terrace", "Air conditioning", "High-speed WiFi", "Airport transfer"],
    monthlyRevenue: "€2,900",
    status: "Available",
  },
  {
    name: "Villa Guéliz Modern",
    location: "Guéliz",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    sqm: 380,
    image: "/images/gallery/735393725_17920253277393261_5794717972720120506_n.jpg",
    link: "/properties/villa-gueliz-modern/",
    amenities: ["Private pool", "Garden", "Secure parking", "Spa access", "Daily housekeeping"],
    monthlyRevenue: "€5,100",
    status: "Premium",
  },
  {
    name: "Riad Al-Fassia",
    location: "Medina",
    type: "Riad",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    sqm: 300,
    image: "/images/gallery/728469101_17918238216393261_531635481015596799_n.jpg",
    link: "/properties/riad-al-fassia/",
    amenities: ["Rooftop terrace", "Private pool", "Concierge", "Airport transfer", "MPS Club"],
    monthlyRevenue: "€4,600",
    status: "Managed",
  },
  {
    name: "Apartment Guéliz Center",
    location: "Guéliz",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    sqm: 75,
    image: "/images/gallery/b3d20402-8c92-4811-b801-0b6837aa4746.png",
    link: "/properties/apartment-gueliz-center/",
    amenities: ["High-speed WiFi", "Air conditioning", "Daily housekeeping"],
    monthlyRevenue: "€1,400",
    status: "Available",
  },
  {
    name: "Villa Palmeraie Royale",
    location: "Palmeraie",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    guests: 12,
    sqm: 600,
    image: "/images/gallery/3be646bb-f615-4d70-84bb-44042bd70040.png",
    link: "/properties/villa-palmeraie-royale/",
    amenities: ["Private pool", "Garden", "Secure parking", "Spa access", "Private chef", "Concierge"],
    monthlyRevenue: "€6,800",
    status: "Premium",
  },
  {
    name: "Riad Medina Charm",
    location: "Medina",
    type: "Riad",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    sqm: 160,
    image: "/images/gallery/e2fe4e3a-9303-4244-a50a-32adb17395da.png",
    link: "/properties/riad-medina-charm/",
    amenities: ["Rooftop terrace", "Daily housekeeping", "High-speed WiFi"],
    monthlyRevenue: "€2,200",
    status: "Managed",
  },
  {
    name: "Apartment Hivernage Luxury",
    location: "Hivernage",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    sqm: 180,
    image: "/images/gallery/d43aa833-b9e8-452c-b128-39585d5ea156.png",
    link: "/properties/apartment-hivernage-luxury/",
    amenities: ["Air conditioning", "High-speed WiFi", "Concierge", "Airport transfer", "Secure parking"],
    monthlyRevenue: "€3,400",
    status: "Managed",
  },
];

const amenityIcons: Record<string, string> = {
  "Private pool": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
  "Garden": "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z",
  "Rooftop terrace": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
  "Daily housekeeping": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
  "Concierge": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  "Private chef": "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z",
  "Airport transfer": "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
  "Air conditioning": "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z",
  "Secure parking": "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
  "High-speed WiFi": "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
  "Spa access": "M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.05-1.26 2.24-2.15 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29C7.54 10.43 5.56 9.23 3.75 7.66 3.43 7.36 3.07 7.11 2.69 6.9c-.33-.19-.68-.35-1.04-.47.01-.04 0-.08-.01-.12C1.45 5.44 2.39 4.55 3.5 3.89c1.16-.68 2.53-.95 3.88-.8 1.45.16 2.86.76 4 1.73.22.19.43.39.63.61.16.18.31.37.44.57.05.08.1.16.14.24.04.08.07.17.09.26.01.04.01.07.02.11.28.9.28 1.89 0 2.8z",
  "MPS Club": "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
};

function PropertyCard({ property, index }: { property: PropertyCard; index: number }) {
  const { ref, isRevealed } = useScrollReveal();

  const statusColors = {
    Managed: "bg-[#274038] text-white",
    Available: "bg-[#D4A574] text-white",
    Premium: "bg-[#1A171A] text-white",
  };

  return (
    <div
      ref={ref}
      className={`bg-white rounded-[6px] overflow-hidden group hover-lift reveal ${isRevealed ? "revealed" : ""}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Link href={property.link} className="block">
        <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-[12px] left-[12px] flex gap-[6px]">
            <span className={`px-[10px] py-[4px] rounded-full text-[11px] font-medium ${statusColors[property.status]}`}>
              {property.status}
            </span>
            <span className="px-[10px] py-[4px] rounded-full text-[11px] font-medium bg-white/90 text-[#1A171A]">
              {property.type}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-[13px] font-medium">View property →</span>
          </div>
        </div>
        <div className="p-[14px] sm:p-[16px] md:p-[20px]">
          <div className="flex items-center gap-[6px] mb-[4px]">
            <svg className="w-[14px] h-[14px] text-[#274038]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-[13px] text-[#1A171A]/60 font-[family-name:var(--font-jakarta)]">{property.location}, Marrakech</span>
          </div>
          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#1A171A] mb-[6px] group-hover:text-[#274038] transition-colors duration-300">
            {property.name}
          </h3>

          {/* Stats Row */}
          <div className="flex items-center gap-[12px] mb-[10px] text-[13px] text-[#1A171A]/70">
            <span className="flex items-center gap-[4px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M3 7v14M21 7v14M6 11h4v4H6zM14 11h4v4h-4zM9 3h6l3 4H6l3-4z"/>
              </svg>
              {property.bedrooms} bed
            </span>
            <span className="flex items-center gap-[4px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h16a1 1 0 011 1v3a3 3 0 01-3 3H6a3 3 0 01-3-3v-3a1 1 0 011-1zM6 12V5a2 2 0 012-2h2a2 2 0 012 2v7"/>
              </svg>
              {property.bathrooms} bath
            </span>
            <span className="flex items-center gap-[4px]">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
              </svg>
              {property.guests}
            </span>
            <span className="text-[#1A171A]/40">·</span>
            <span>{property.sqm} m²</span>
          </div>

          {/* Amenity Icons */}
          <div className="flex flex-wrap gap-[6px] mb-[12px]">
            {property.amenities.map((amenity, i) => (
              <span
                key={i}
                className="flex items-center gap-[4px] px-[8px] py-[4px] bg-[#FBEFDD] rounded-full text-[11px] text-[#274038] font-medium"
              >
                <svg className="w-[12px] h-[12px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d={amenityIcons[amenity] || "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}/>
                </svg>
                {amenity}
              </span>
            ))}
          </div>

          {/* Revenue */}
          <div className="flex items-center justify-between pt-[10px] border-t border-[#1A171A]/10">
            <span className="text-[13px] text-[#1A171A]/60">Expected monthly revenue</span>
            <span className="text-[16px] font-semibold text-[#274038]">{property.monthlyRevenue}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PropertyGrid() {
  return (
    <section className="bg-[#FBEFDD] px-[24px] md:px-[40px] lg:px-[60px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
      <div className="max-w-[1356px] mx-auto">
        <div className="flex items-center justify-between mb-[16px] md:mb-[24px]">
          <span className="text-[13px] md:text-[14px] text-[#1A171A]/60">Showing {properties.length} properties</span>
          <div className="flex items-center gap-[8px]">
            <button className="p-[6px] rounded-[4px] bg-[#274038] text-white">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 16 16" fill="currentColor">
                <rect x="0" y="0" width="7" height="7" rx="1"/>
                <rect x="9" y="0" width="7" height="7" rx="1"/>
                <rect x="0" y="9" width="7" height="7" rx="1"/>
                <rect x="9" y="9" width="7" height="7" rx="1"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]">
          {properties.map((property, i) => (
            <PropertyCard key={property.name} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
