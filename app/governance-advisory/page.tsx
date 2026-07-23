import type { Metadata } from "next";
import { BusinessPage } from "@/components/BusinessPage";
import { businessDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: businessDetail.govern.meta.title,
  description: businessDetail.govern.meta.description,
  alternates: { canonical: "/governance-advisory" },
  openGraph: {
    title: businessDetail.govern.meta.title,
    description: businessDetail.govern.meta.description,
    url: "/governance-advisory",
  },
};

export default function Page() {
  return <BusinessPage id="govern" />;
}
