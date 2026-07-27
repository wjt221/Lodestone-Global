import type { Metadata } from "next";
import { Source_Serif_4, Public_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lodestone Global | Governance, Capital, and Family Office Advisory",
    template: "%s | Lodestone Global",
  },
  description:
    "Lodestone works with private-company principals to strengthen governance, scale the operating business, allocate capital, and steward family wealth across generations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Lodestone Global | Governance, Capital, and Family Office Advisory",
    description:
      "For owners building something meant to outlast them: governance, operating support, capital, and family-office coordination in one relationship.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link btn-primary bg-ivory">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
