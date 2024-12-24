import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL!),
  title: "DejaVu Massage & SPA | Canggu | Skilled Therapists",
  description:
    "Meet our skilled and friendly therapists at DejaVu Massage & SPA in Canggu. Offering expert massages and traditional treatments for your ultimate relaxation.",
  openGraph: {
    images: "/opengraph-image.png",
    title: "DejaVu Massage & SPA | Canggu | Skilled Therapists",
    description:
      "Meet our skilled and friendly therapists at DejaVu Massage & SPA in Canggu. Offering expert massages and traditional treatments for your ultimate relaxation.",
    url: `${process.env.NEXTAUTH_URL}`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pt-[5.5rem] pb-12"> {children}</div>;
}
