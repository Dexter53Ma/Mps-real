import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { BackToTop, WhatsAppButton } from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Marrakech Property Service | Luxury Property Management & Conciergerie",
    template: "%s | Marrakech Property Service",
  },
  description:
    "Full-service property management for villas, riads, and apartments in Marrakech. Airbnb & Booking.com optimization, professional photography, cleaning, maintenance, and 24/7 guest support.",
  metadataBase: new URL("https://www.marrakechpropertyservice.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.marrakechpropertyservice.com",
    siteName: "Marrakech Property Service",
  },
  verification: {
    google: "0RD8ybrQpiCMgR9Wj37C-4Elr37AO5lF5AJLhoZ9ygs",
  },
  icons: {
    icon: [
      { url: "/seo/cropped-Tangrams-Circle-Corner-3-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-Tangrams-Circle-Corner-3-192x192.png", sizes: "192x192" },
    ],
    apple: [
      { url: "/seo/cropped-Tangrams-Circle-Corner-3-180x180.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
