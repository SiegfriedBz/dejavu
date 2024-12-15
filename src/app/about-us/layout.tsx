import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dejavu-massages-spa-canggu.vercel.app"),
  title: "DejaVu Massage & SPA | About Us",
  description: "Our Experienced & Friendly Staff",
  openGraph: {
    images: "/opengraph-image.png",
    title: "DejaVu Massage & SPA | About Us",
    description: "Our Experienced & Friendly Staff",
    url: `${process.env.NEXTAUTH_URL}`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pt-[5.5rem]"> {children}</div>;
}
