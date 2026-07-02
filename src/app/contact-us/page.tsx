import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactSearchCard from "@/components/contact/ContactSearchCard";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Luxury Property Marrakech | Contact MPS",
  description:
    "Get in touch with Marrakech Property Service to find luxury properties, concierge services, and exclusive experiences in Marrakech.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <ContactHero />

        <section className="px-[40px] md:px-[80px] py-[80px] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[466px_1fr] gap-[33px]">
            {/* Left column - Contact info and search */}
            <div className="flex flex-col gap-[33px]">
              <ContactInfoCard />
              <ContactSearchCard />
            </div>

            {/* Right column - Enquiry form */}
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
