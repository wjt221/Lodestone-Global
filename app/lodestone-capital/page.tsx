import type { Metadata } from "next";
import { BusinessPage } from "@/components/BusinessPage";
import { businessDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: businessDetail.compound.meta.title,
  description: businessDetail.compound.meta.description,
  alternates: { canonical: "/lodestone-capital" },
  openGraph: {
    title: businessDetail.compound.meta.title,
    description: businessDetail.compound.meta.description,
    url: "/lodestone-capital",
  },
};

export default function Page() {
  return <BusinessPage id="compound" />;
}
