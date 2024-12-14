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

const staff: { name: string; url: string }[] = [
  {
    name: "Delillah",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "A",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "B",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734166938/dejavu/staff/IMG_1475_pzxqz0.png",
  },
  {
    name: "C",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734167115/dejavu/staff/IMG_1469_i0il7v.png",
  },
  {
    name: "D",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115936/dejavu/staff/girl-d-1.jpg",
  },
  {
    name: "E",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734116520/dejavu/staff/girl-e-1.jpg",
  },
  {
    name: "F",
    url: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115778/dejavu/staff/girl-f-1.jpg",
  },
];

const page = async () => {
  const staffDataPromise = await Promise.all([
    ...staff.map((girl) => {
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
