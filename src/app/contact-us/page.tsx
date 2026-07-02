import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactSearchCard from "@/components/contact/ContactSearchCard";
import ContactForm from "@/components/contact/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Marrakech Property Service",
  description:
    "Get in touch with Marrakech Property Service to find luxury properties, concierge services, and exclusive experiences in Marrakech.",
  openGraph: {
  title: "Contact Us",
    description: "Get in touch with MPS for luxury properties and concierge services in Marrakech.",
    url: "https://www.marrakechpropertyservice.com/contact-us/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/contact-us/",
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema path="/contact-us" />
      <JsonLdScript schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us | Marrakech Property Service",
        description: "Get in touch with Marrakech Property Service for property management inquiries, consultations, and support.",
        url: "https://www.marrakechpropertyservice.com/contact-us/",
        mainEntity: {
          "@type": "LocalBusiness",
          name: "Marrakech Property Service",
          url: "https://www.marrakechpropertyservice.com",
        },
      }} />
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
