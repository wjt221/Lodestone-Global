import type { Metadata } from "next";
import { Source_Serif_4, Public_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, BOARD_TAGLINE } from "@/lib/site";

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
    default: "Lodestone Global | Private Company Board Advisory",
    template: "%s | Lodestone Global",
  },
  description:
    `${BOARD_TAGLINE} Lodestone Global helps privately held companies build, recruit for and strengthen their boards. Explore board advisory and compensation research.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Lodestone Global | Private Company Board Advisory",
    description:
      "Board formation, independent director recruitment, board effectiveness and private-company compensation research.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: false,
    follow: false, // Preview only; change at approved Wix cutover.
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
