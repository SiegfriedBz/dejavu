import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL!),
  title: "DejaVu Massage & SPA | Canggu | In House & Outcall",
  description:
    "Relax at DejaVu Massage & SPA in Canggu, Bali. Enjoy traditional treatments like Balinese massage, Deep Tissue, Hot Stone, and more. In-house and outcall services available.",
  openGraph: {
    images: "/opengraph-image.png",
    title: "DejaVu Massage & SPA | Canggu | In House & Outcall",
    description:
      "Relax at DejaVu Massage & SPA in Canggu, Bali. Enjoy traditional treatments like Balinese massage, Deep Tissue, Hot Stone, and more. In-house and outcall services available.",
    url: `${process.env.NEXTAUTH_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} antialiased
          font-[family-name:var(--font-geist-sans)]
          relative grid grid-rows-[1fr_3rem] items-center justify-items-center min-h-screen
          bg-gradient-to-r from-stone-100 to-stone-50`}
      >
        <Navbar />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
