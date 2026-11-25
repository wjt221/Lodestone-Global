import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME, BOARD_TAGLINE } from "@/lib/site";

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
    <html lang="en" style={{ "--font-display": "Georgia, Cambria, serif", "--font-body": "Arial, Helvetica, sans-serif" } as React.CSSProperties}>
      <body>
        <a href="#main" className="skip-link btn-primary bg-ivory">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
