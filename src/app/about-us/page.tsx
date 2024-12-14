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

export const metadata: Metadata = {
  metadataBase: new URL("https://dejavu-massages-spa-canggu.vercel.app"),
  title: "DejaVu Massage & SPA | About Us",
  description: "Our Experienced & Friendly Staff",
  openGraph: {
    images: "/opengraph-image.png",
    title: "DejaVu Massage & SPA | About Us",
    description: "Our Experienced Friendly Staff",
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
    <div className="flex p-4 flex-col gap-8 min-w-full min-h-screen pt-6 pb-16">
      <h1 className="text-xl font-semibold text-primary">About Us</h1>
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
    </div>
  );
};

export default page;
