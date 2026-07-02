import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Marrakech Property Service",
  description: "Terms and conditions for property management services provided by Marrakech Property Service.",
};

export default function TermsConditionsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-white/70 text-[14px] mt-[12px]">Last updated: July 2026</p>
          </div>
        </section>

        <section className="bg-white py-[60px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px]">1. Introduction</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              These Terms and Conditions (&quot;Terms&quot;) govern the property management services provided by Marrakech Property Service (&quot;MPS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to property owners (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;). By engaging our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">2. Services</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              MPS provides short-term rental property management services including but not limited to:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Listing creation and optimization on Airbnb, Booking.com, Vrbo, and other platforms</li>
              <li>Dynamic pricing strategy and revenue management</li>
              <li>Guest communication and support (24/7)</li>
              <li>Check-in and check-out coordination</li>
              <li>Professional photography of the property</li>
              <li>Turnover cleaning and hospitality-grade housekeeping</li>
              <li>Property maintenance and repairs</li>
              <li>Pool and garden maintenance</li>
              <li>Linens, towels, and toiletries management</li>
              <li>Review and reputation management</li>
            </ul>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              The specific services included in your management package will be agreed upon in writing before the start of the engagement.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">3. Property Owner Obligations</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              As a property owner using our services, you agree to:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Provide accurate and complete information about your property</li>
              <li>Maintain adequate insurance coverage for your property</li>
              <li>Ensure your property complies with all local regulations and permits</li>
              <li>Keep the property in good condition and address structural issues promptly</li>
              <li>Provide timely access for guests, cleaning, and maintenance</li>
              <li>Respond to communications from MPS within a reasonable timeframe</li>
              <li>Notify MPS of any changes to the property or ownership</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">4. Fees and Payment</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[12px]">
              Our fee structure is as follows:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li><strong className="text-[#1A171A]">Management fee:</strong> A percentage of gross rental revenue, as agreed in your management agreement</li>
              <li><strong className="text-[#1A171A]">Setup fee:</strong> A one-time fee for onboarding, photography, and listing creation (if applicable)</li>
              <li><strong className="text-[#1A171A]">Cleaning fees:</strong> Included in the management fee for standard turnovers</li>
              <li><strong className="text-[#1A171A]">Maintenance:</strong> Routine maintenance included; major repairs quoted separately</li>
            </ul>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              Payments to property owners are processed monthly, within 15 days of the end of each calendar month. MPS provides detailed monthly reports with occupancy data, revenue, and expenses.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">5. Cancellation Policy</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              Either party may terminate the management agreement with 30 days&apos; written notice. Upon termination:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>MPS will complete any active guest bookings</li>
              <li>Outstanding payments will be settled within 30 days</li>
              <li>MPS will remove all listings from platforms within 7 days</li>
              <li>Property access keys and codes will be returned</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">6. Guest Bookings</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              MPS acts as an agent for the property owner in managing guest bookings. The rental agreement is between the guest and the property owner. MPS is not a party to the rental contract and does not assume liability for guest actions or property damage beyond what is covered by the security deposit.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">7. Property Damage</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              MPS will collect a security deposit from guests as part of the booking process. In the event of guest-caused damage, MPS will:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Document the damage with photos and a written report</li>
              <li>Deduct repair costs from the security deposit</li>
              <li>Notify the property owner within 48 hours</li>
              <li>Pursue additional compensation if damage exceeds the deposit</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">8. Insurance</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              Property owners are responsible for maintaining adequate property insurance, including coverage for short-term rental activity. MPS recommends comprehensive coverage including liability, contents, and loss of income. MPS carries its own professional liability insurance.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">9. Limitation of Liability</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              MPS shall not be liable for:
            </p>
            <ul className="list-disc pl-[24px] text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px] space-y-[8px]">
              <li>Loss of revenue due to market conditions, platform changes, or force majeure</li>
              <li>Damage caused by guests beyond the security deposit amount</li>
              <li>Structural issues or pre-existing conditions in the property</li>
              <li>Changes in local regulations that affect rental operations</li>
              <li>Acts of nature, civil unrest, or other force majeure events</li>
            </ul>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">10. Confidentiality</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              MPS will keep all property owner information confidential and will not share it with third parties except as necessary to provide our services (e.g., with booking platforms, cleaning teams, or as required by law).
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">11. Governing Law</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              These Terms are governed by the laws of Morocco. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco.
            </p>

            <h2 className="text-[24px] font-medium text-[#1A171A] mb-[16px] mt-[40px]">12. Contact Us</h2>
            <p className="text-[15px] text-[#1A171A]/70 leading-[1.7] mb-[24px]">
              For questions about these Terms &amp; Conditions:
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
