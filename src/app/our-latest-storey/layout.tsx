import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Latest MPS | Marrakech Property Service",
  description:
    "A collection of updates from our team and experienced partners in Marrakech. News, insights, and property management tips.",
  openGraph: {
  title: "Our Latest MPS",
    description: "A collection of updates from our team and experienced partners in Marrakech.",
    url: "https://www.marrakechpropertyservice.com/our-latest-storey/",
  },
  alternates: {
    canonical: "https://www.marrakechpropertyservice.com/our-latest-storey/",
  },
};

export default function OurLatestStoreyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema path="/our-latest-storey" />
      {children}
    </>
  );
}
