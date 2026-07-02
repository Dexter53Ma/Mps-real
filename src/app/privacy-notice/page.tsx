import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Notice | Marrakech Property Service",
  description: "How Marrakech Property Service collects, uses, and protects your personal information.",
};

export default function PrivacyNoticePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-[#274038] pt-[120px] md:pt-[140px] pb-[40px] md:pb-[60px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1356px] mx-auto">
            <a
              href="/"
              className="inline-flex items-center gap-[8px] text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-300 mb-[24px]"
            >
              <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </a>
            <h1 className="text-white text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1] tracking-tight">
              Privacy Notice
            </h1>
            <p className="text-white/70 text-[14px] mt-[12px]">Last updated: July 2026</p>
          </div>
        </section>

        <section className="bg-white py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[800px] mx-auto prose prose-lg">
            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px]">1. Who We Are</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              Marrakech Property Service (&quot;MPS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a property management company registered in Morocco. We provide short-term rental management services for villas, riads, and apartments in Marrakech.
            </p>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We are the data controller responsible for your personal information when you use our services, visit our website, or communicate with us.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">2. Information We Collect</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li><strong className="text-[#1A171A]">Identity data:</strong> name, last name, nationality</li>
              <li><strong className="text-[#1A171A]">Contact data:</strong> email address, phone number, postal address</li>
              <li><strong className="text-[#1A171A]">Property data:</strong> property details, location, photos, ownership information</li>
              <li><strong className="text-[#1A171A]">Financial data:</strong> payment information, bank details for rental payouts</li>
              <li><strong className="text-[#1A171A]">Technical data:</strong> IP address, browser type, device information, cookies</li>
              <li><strong className="text-[#1A171A]">Communication data:</strong> messages, inquiries, and feedback you send us</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">3. How We Use Your Information</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              We use your personal information to:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Provide and manage our property management services</li>
              <li>Create and optimize listings on Airbnb, Booking.com, Vrbo, and other platforms</li>
              <li>Communicate with you about your property and our services</li>
              <li>Process payments and manage financial transactions</li>
              <li>Handle guest bookings, inquiries, and support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">4. Sharing Your Information</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              We may share your information with:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li><strong className="text-[#1A171A]">Booking platforms:</strong> Airbnb, Booking.com, Vrbo, and other listing platforms to manage your property</li>
              <li><strong className="text-[#1A171A]">Service providers:</strong> cleaning teams, maintenance crews, photographers, and other contractors</li>
              <li><strong className="text-[#1A171A]">Guests:</strong> limited information necessary for check-in and property access</li>
              <li><strong className="text-[#1A171A]">Legal authorities:</strong> when required by law or to protect our rights</li>
            </ul>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">5. Data Security</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access controls.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">6. Data Retention</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">7. Your Rights</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              Under applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">8. Cookies</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">9. Changes to This Notice</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We may update this Privacy Notice from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this notice periodically.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">10. Contact Us</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              If you have any questions about this Privacy Notice or how we handle your personal information, please contact us:
            </p>
            <div className="bg-[#FBEFDD] rounded-[12px] p-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7]">
              <p><strong className="text-[#1A171A]">Marrakech Property Service</strong></p>
              <p>Email: info@marrakechpropertyservice.com</p>
              <p>Phone: +212 6 21 18 94 96</p>
              <p>WhatsApp: +212 6 21 18 94 96</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
