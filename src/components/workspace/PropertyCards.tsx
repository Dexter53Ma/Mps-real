import Link from "next/link";

interface PropertyCard {
  name: string;
  location: string;
  status: string;
  image: string;
  link: string;
  tags: string[];
}

const properties: PropertyCard[] = [
  {
    name: "6 Orsman Road",
    location: "Hackney, N1",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131048/6-Orsman-Road.jpg",
    link: "/workspace/6-orsman-road/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185639/Property-1RoofTerrace_BLACK-01.svg",
    ],
  },
  {
    name: "4 Kingdom Street",
    location: "Paddington Central, W2",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12154656/4-Kingdon-Steet.jpg",
    link: "/workspace/4-kingdom-street/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
    ],
  },
  {
    name: "2 Kingdom Street",
    location: "Paddington Central, W2",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/01/10135213/Storey-2-Kingdom-St-24-highres-sRGB-1.jpeg",
    link: "/workspace/2-kingdom-street/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
    ],
  },
  {
    name: "338 Euston Road",
    location: "Regent's Place, NW1",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/10155555/338-Euston-Road.jpg",
    link: "/workspace/338-euston-road/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185639/Property-1RoofTerrace_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
    ],
  },
  {
    name: "1 Triton Square",
    location: "Regent's Place, NW1",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/06/28144938/One-Triton-Event-Day-1-154.jpg",
    link: "/workspace/1-triton-square/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185639/Property-1RoofTerrace_BLACK-01.svg",
    ],
  },
  {
    name: "Nicholls & Clarke",
    location: "Norton Folgate, E1",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131110/Nicholls-Clarke.jpg",
    link: "/workspace/nicholls-clarke/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185639/Property-1RoofTerrace_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
    ],
  },
  {
    name: "100 Liverpool Street",
    location: "Broadgate, EC2",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/10/26133422/100-Liverpool-Street.jpg",
    link: "/workspace/100-liverpool-street/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185639/Property-1RoofTerrace_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
    ],
  },
  {
    name: "1 Finsbury Avenue",
    location: "Broadgate, EC2",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131035/2-Finsbury-Avenue.jpg",
    link: "/workspace/1-finsbury-avenue/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185639/Property-1RoofTerrace_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
    ],
  },
  {
    name: "Broadgate Tower",
    location: "Broadgate, EC2",
    status: "Space Available",
    image: "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131106/Broadgate-Tower.jpg",
    link: "/workspace/broadgate-tower/",
    tags: [
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08112011/Property-1CallButton-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03190142/Property-1Showers.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/12083425/Towel-forest-green.png",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185026/Property-1CoffeeMeeting.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111205/Property-1CleaninginProgress_BLACK-01-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185023/Property-1Coffee_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111353/Property-1CaptiveAudience-1.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03184857/Property-1BikeFacilities.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/08111842/Property-1People_BLACK-01.svg",
      "https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/03185528/wififi.svg",
    ],
  },
];

function PropertyCard({ property }: { property: PropertyCard }) {
  return (
    <div className="bg-white rounded-[6px] overflow-hidden group hover-lift">
      <Link href={property.link} className="block">
        <div className="relative h-[160px] sm:h-[180px] md:h-[200px] overflow-hidden img-zoom">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-[13px] font-[family-name:var(--font-gt-walsheim-prolight)]">View property →</span>
          </div>
        </div>
        <div className="p-[14px] sm:p-[16px] md:p-[20px]">
          <div className="flex items-center gap-[6px] md:gap-[8px] mb-[6px] md:mb-[8px]">
            <span className="text-[11px] md:text-[12px] text-[#1A171A]/60 font-[family-name:var(--font-gt-walsheim-prolight)]">Property</span>
            <span className="text-[11px] md:text-[12px] text-[#274038] font-[family-name:var(--font-gt-walsheim-medium)]">{property.status}</span>
          </div>
          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] mb-[2px] md:mb-[4px] group-hover:text-[#274038] transition-colors duration-300">{property.name}</h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/70 mb-[12px] md:mb-[16px]">{property.location}</p>
          <div className="flex flex-wrap gap-[4px] md:gap-[6px]">
            {property.tags.slice(0, 8).map((tag, i) => (
              <img
                key={i}
                src={tag}
                alt=""
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
            ))}
            {property.tags.length > 8 && (
              <span className="text-[11px] md:text-[12px] text-[#1A171A]/50 self-center">+{property.tags.length - 8}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PropertyCards() {
  return (
    <section className="bg-[#FBEFDD] px-[24px] md:px-[40px] lg:px-[60px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
      <div className="max-w-[1356px] mx-auto">
        <div className="mb-[16px] md:mb-[24px]">
          <span className="text-[13px] md:text-[14px] text-[#1A171A]/60 font-[family-name:var(--font-gt-walsheim-prolight)]">Latest Availability</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]">
          {properties.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
