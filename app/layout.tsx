import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://ismaildadwad.infogeni.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ismail Dadwad — UI/UX Designer & Frontend Developer",
  description:
    "8+ years designing and building travel and SaaS interfaces. Figma to production code — booking engines, quotation CRMs and dashboards.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "UI Developer",
    "Figma",
    "Design Systems",
    "JavaScript",
    "Next.js",
    "Belagavi",
    "Bangalore",
  ],
  openGraph: {
    title: "Ismail Dadwad — UI/UX Designer & Frontend Developer",
    description:
      "8+ years designing and building travel and SaaS interfaces. Figma to production code.",
    url: SITE,
    siteName: "Ismail Dadwad",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
