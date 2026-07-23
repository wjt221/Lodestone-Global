import type { Metadata } from "next";
import { BusinessPage } from "@/components/BusinessPage";
import { businessDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: businessDetail.steward.meta.title,
  description: businessDetail.steward.meta.description,
  alternates: { canonical: "/family-advisors" },
  openGraph: {
    title: businessDetail.steward.meta.title,
    description: businessDetail.steward.meta.description,
    url: "/family-advisors",
  },
};

export default function Page() {
  return <BusinessPage id="steward" />;
}
