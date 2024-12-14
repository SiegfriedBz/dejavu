import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getImageData from "@/lib/getImageData";
import CustomImage from "../_components/custom-image";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import { STAFF_DATA } from "@/data/sfaff-data";
import Cta from "../_components/cta";

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

const page = async () => {
  const staffDataPromise = await Promise.all([
    ...STAFF_DATA.map((girl) => {
      return { name: girl.name, imageDataPromise: getImageData(girl.url) };
    }),
  ]);

  return (
    <div className="flex p-4 flex-col gap-4 min-w-full min-h-screen pt-6 pb-12">
      <h1 className="text-xl font-medium text-primary">About Us</h1>
      <div className="space-y-2 text-justify">
        <p>
          Our{" "}
          <span className="text-secondary">experienced and friendly team</span>{" "}
          is here to welcome you{" "}
          <span className="text-primary font-medium">
            every day from 9 AM to 11 PM
          </span>
          .
        </p>
        <p>
          Prefer to enjoy our services in the comfort of your own space? Choose
          our <span className="text-secondary">Outcall Services</span>,
          we&apos;re happy to bring the{" "}
          <span className="text-primary italic">DéjàVu Massage & Spa</span>{" "}
          experience to you anywhere in Canggu.
        </p>
      </div>

      {staffDataPromise.map((girl) => {
        const { name, imageDataPromise } = girl;

        return (
          <div key={name} className="flex w-full min-h-[29rem]">
            <Card className="w-full h-full py-4 bg-gradient-to-r from-stone-100 to-stone-50">
              <CardHeader className="px-4 py-2">
                <CardTitle className="text-secondary">{name}</CardTitle>
                <CardDescription>Description...</CardDescription>
              </CardHeader>
              <div className="px-8 pb-4">
                <CardContent className="relative h-[27rem] rounded-lg overflow-hidden">
                  <Suspense
                    fallback={
                      <Skeleton className="h-full w-full rounded-xl bg-primary/70" />
                    }
                  >
                    <CustomImage
                      imageDataPromise={imageDataPromise}
                      alt={name}
                    />
                  </Suspense>
                </CardContent>
              </div>
            </Card>
          </div>
        );
      })}

      <Cta />
    </div>
  );
};

export default page;
