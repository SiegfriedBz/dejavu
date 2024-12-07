import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import WhatsAppButton from "./_components/whatsapp-button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dejavu-opal.vercel.app/"),
  title: "DejaVu Massage & SPA",
  description: "Best Massage & SPA in Canggu",
  openGraph: {
    images: "/opengraph-image.png",
    title: "DejaVu Massage & SPA",
    description: "Best Massage & SPA in Canggu",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          relative grid grid-rows-[5rem_1fr_3rem] items-center justify-items-center min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
