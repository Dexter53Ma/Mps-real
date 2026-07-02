import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | Marrakech Property Service",
  description: "Terms and conditions for using the Marrakech Property Service website.",
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/terms-of-use/",
  },
};

export default function TermsOfUsePage() {
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
              Terms of Use
            </h1>
            <p className="text-white/70 text-[14px] mt-[12px]">Last updated: July 2026</p>
          </div>
        </section>

        <section className="bg-white py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px]">1. Acceptance of Terms</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              By accessing and using the Marrakech Property Service website (&quot;Website&quot;), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Website.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">2. About Our Website</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              This Website is operated by Marrakech Property Service (MPS), a property management company registered in Morocco. The Website provides information about our property management services and allows property owners to submit inquiries.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">3. Use of the Website</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              You agree to use this Website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Website. You must not:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Use the Website for any fraudulent or illegal purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Transmit any harmful code, viruses, or malware</li>
              <li>Scrape, copy, or reproduce content without written permission</li>
              <li>Use automated systems to access the Website</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">4. Intellectual Property</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              All content on this Website, including text, images, logos, graphics, and software, is the property of Marrakech Property Service or its licensors and is protected by Moroccan and international intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">5. Accuracy of Information</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We strive to provide accurate and up-to-date information on this Website. However, we make no warranties or representations about the accuracy, completeness, or reliability of any information on the Website. Property descriptions, images, and availability may change without notice.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">6. Third-Party Links</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              This Website may contain links to third-party websites, including booking platforms. We are not responsible for the content, privacy practices, or availability of these external sites. Use of third-party links is at your own risk.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">7. Limitation of Liability</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              To the maximum extent permitted by law, Marrakech Property Service shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use this Website, including but not limited to loss of data, revenue, or profits.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">8. Indemnification</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              You agree to indemnify and hold harmless Marrakech Property Service, its directors, employees, and agents from any claims, losses, damages, liabilities, and expenses arising out of your use of the Website or violation of these terms.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">9. Changes to These Terms</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Website after any changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">10. Governing Law</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              These Terms of Use are governed by and construed in accordance with the laws of Morocco. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Morocco.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">11. Contact Us</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              If you have any questions about these Terms of Use, please contact us:
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
