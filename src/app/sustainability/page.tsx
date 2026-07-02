import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sustainability | Marrakech Property Service",
  description:
    "Our commitment to sustainable luxury property management in Marrakech.",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[80px] md:pb-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-[family-name:var(--font-gt-walsheim-medium)] leading-[0.9] tracking-tight mb-[20px] md:mb-[32px]">
              Sustainability
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-gt-walsheim-prolight)] leading-[1.6] max-w-[800px]">
              Our commitment to sustainable luxury property management in Marrakech.
            </p>
          </div>
        </section>

        <section className="bg-[#FBEFDD] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px]">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#1A171A] mb-[32px]">
                Our Commitment
              </h2>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Pioneering luxury properties need sustainable practices. Across all our Marrakech properties, MPS has set new standards for sustainable design and construction.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  Our commitment to sustainability informs everything from renewable energy and creating low carbon buildings to local community support, responsible practices and fair wages.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1A171A]/80 leading-[1.6]">
                  As an MPS client, you benefit from our experience, in-house expertise and tried-and-tested initiatives to help you meet or exceed your own sustainability goals.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              {[
                { title: "Renewable Energy", description: "Solar panels and energy-efficient systems across our properties" },
                { title: "Water Conservation", description: "Smart irrigation and water recycling programs" },
                { title: "Local Sourcing", description: "Supporting local artisans and sustainable suppliers" },
                { title: "Community Support", description: "Investing in local education and environmental initiatives" },
              ].map((initiative) => (
                <div key={initiative.title} className="bg-white rounded-[9px] p-[24px]">
                  <h3 className="text-[20px] font-medium text-[#1A171A] mb-[8px]">
                    {initiative.title}
                  </h3>
                  <p className="text-[14px] text-[#1A171A]/70">
                    {initiative.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#274038] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-[40px]">
              Our Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { year: "2025", goal: "Carbon Neutral Operations" },
                { year: "2027", goal: "100% Renewable Energy" },
                { year: "2030", goal: "Zero Waste Properties" },
              ].map((item) => (
                <div key={item.year} className="bg-white/10 rounded-[9px] p-[32px] text-center">
                  <p className="text-[48px] font-medium text-white mb-[8px]">
                    {item.year}
                  </p>
                  <p className="text-white/80 text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)]">
                    {item.goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A171A] py-[80px] md:py-[120px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-[#FBEFDD] mb-[32px]">
              Join Our Sustainable Future
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#FBEFDD]/80 font-[family-name:var(--font-gt-walsheim-prolight)] max-w-[600px] mx-auto mb-[40px]">
              Be part of our commitment to sustainable luxury living in Marrakech.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-[8px] bg-[#FBEFDD] text-[#1A171A] px-[32px] py-[14px] rounded-[6px] text-[16px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline hover:bg-[#F5D6AB] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
