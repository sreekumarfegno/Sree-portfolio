import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

const title = "Sreekumar P.S. — SEO Analyst & Digital Marketing Specialist";
const social = "SEO strategy, technical SEO audits, search intent analysis, and organic growth for modern brands.";

export const metadata: Metadata = {
  title,
  description:
    "Sreekumar P.S — SEO Analyst and Digital Marketing Specialist based in Kochi, Kerala. SEO strategy, technical SEO, content and organic growth.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description: social, type: "website" },
  twitter: { card: "summary_large_image", title, description: social },
};

export const viewport: Viewport = { themeColor: "#f3f0e9" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
