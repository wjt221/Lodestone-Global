import type { Metadata } from "next";
import { BusinessPage } from "@/components/BusinessPage";
import { businessDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: businessDetail.scale.meta.title,
  description: businessDetail.scale.meta.description,
  alternates: { canonical: "/e3-scale-network" },
  openGraph: {
    title: businessDetail.scale.meta.title,
    description: businessDetail.scale.meta.description,
    url: "/e3-scale-network",
  },
};

export default function Page() {
  return <BusinessPage id="scale" />;
}
