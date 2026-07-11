import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bull Runner — Trade. Learn. Earn. | Premium Trading Mentorship",
  description:
    "Bull Runner is a premium trading educator and market mentor helping traders master strategy, psychology, risk management, and disciplined execution for consistent profitability.",
  keywords: [
    "trading mentor",
    "stock market educator",
    "trading psychology",
    "price action trading",
    "risk management",
    "market analysis",
    "trading course",
    "Bull Runner",
  ],
  openGraph: {
    title: "Bull Runner — Trade. Learn. Earn.",
    description:
      "Master the markets with strategy, psychology, and disciplined execution.",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans w-full overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
