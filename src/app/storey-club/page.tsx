import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "MPS Club | Marrakech Property Service",
  description:
    "Access premium concierge services and exclusive experiences with MPS Club membership in Marrakech.",
  openGraph: {
    title: "MPS Club | Marrakech Property Service",
    description: "Access premium concierge services and exclusive experiences with MPS Club membership.",
    url: "https://www.marrakechpropertyservice.com/storey-club/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/storey-club/",
  },
};

export default function StoreyClubPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/storey-club" />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#1A171A] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h1 className="text-[#FBEFDD] text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px] md:mb-[32px]">
              MPS Club
            </h1>
            <p className="text-[#FBEFDD]/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Buy. Sell. Manage. Access premium concierge services and exclusive experiences across Marrakech&apos;s most prestigious locations.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                What&apos;s included
              </h2>
              <div className="flex flex-col gap-[20px]">
                {[
                  "Access to premium properties across Marrakech",
                  "Dedicated property concierge",
                  "Exclusive lifestyle experiences",
                  "Priority booking for events",
                  "Networking opportunities",
                  "Complimentary welcome amenities",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#274038] mt-[8px] shrink-0" />
                    <p className="text-[16px] md:text-[18px] text-[#1A171A] font-[family-name:var(--font-gt-walsheim-prolight)]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/10/02162557/20191003-4KS-Storey-Club-3.jpeg"
                alt="MPS Club"
                className="w-full h-auto rounded-[9px] object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="bg-[#274038] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-[40px]">
              MPS Club Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="bg-white/10 rounded-[9px] p-[32px]">
                <h3 className="text-[24px] md:text-[28px] font-medium text-white mb-[12px]">
                  Palmeraie
                </h3>
                <p className="text-white/80 text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)]">
                  Exclusive access to luxury amenities in the prestigious Palmeraie area.
                </p>
              </div>
              <div className="bg-white/10 rounded-[9px] p-[32px]">
                <h3 className="text-[24px] md:text-[28px] font-medium text-white mb-[12px]">
                  Medina
                </h3>
                <p className="text-white/80 text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)]">
                  Traditional experiences in the heart of Marrakech&apos;s historic quarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#4F0003] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">
              Join MPS Club
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Experience the finest luxury living in Marrakech with our exclusive membership program.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[32px] py-[14px] rounded-[6px] text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:bg-[#F5D6AB] transition-colors"
            >
              Enquire now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
