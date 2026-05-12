import type { Metadata } from "next";
import {
  DM_Sans,
  Playfair_Display,
  DM_Serif_Display,
} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BtnCta from "@/components/ui/BtnCta";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Trippoo — Your Journey Starts Before You Go",
  description:
    "Premium travel experiences. Curated packages for couples, families, and solo adventurers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfair.variable} ${dmSerif.variable}`}
    >
      <body suppressHydrationWarning>
        <Navbar />
        <BtnCta />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}