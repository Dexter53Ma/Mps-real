import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { BackToTop, WhatsAppButton } from "@/components/FloatingButtons";
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
  title: "Marrakech Property Service | Luxury Real Estate Conciergerie",
  description: "Find your perfect luxury property in Marrakech. Premium real estate conciergerie by Marrakech Property Service.",
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
        {children}
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
