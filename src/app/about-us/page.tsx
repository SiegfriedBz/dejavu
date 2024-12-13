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

const staff: { name: string; url1: string; url2: string; blurUrl: string }[] = [
  {
    name: "Delillah",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115900/dejavu/staff/girl-a-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734116159/dejavu/staff/girl-a-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "A",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115900/dejavu/staff/girl-a-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734116159/dejavu/staff/girl-a-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "B",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115900/dejavu/staff/girl-a-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115843/dejavu/staff/girl-b-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "C",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115900/dejavu/staff/girl-a-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115815/dejavu/staff/girl-c-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "D",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115936/dejavu/staff/girl-d-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115929/dejavu/staff/girl-d-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "E",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734116520/dejavu/staff/girl-e-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734116461/dejavu/staff/girl-e-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
  {
    name: "F",
    url1: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115778/dejavu/staff/girl-f-1.jpg",
    url2: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1734115740/dejavu/staff/girl-f-2.jpg",
    blurUrl:
      "https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1734115900/dejavu/staff/girl-a-1.jpg",
  },
];

const page = async () => {
  const staffDataPromise = await Promise.all([
    ...staff.map((girl) => {
      return { name: girl.name, imageDataPromise: getImageData(girl.url1) };
    }),
  ]);

  return (
    <div className="flex p-4 flex-col gap-8 min-w-full min-h-screen pt-8 pb-16">
      <h1 className="text-xl font-semibold">About Us</h1>
      {staffDataPromise.map((girl) => {
        const { name, imageDataPromise } = girl;

        return (
          <div key={name} className="flex w-full min-h-[29rem]">
            <Card className="w-full h-full py-4">
              <CardHeader className="px-4 py-2">
                <CardTitle>{name}</CardTitle>
                <CardDescription>Description...</CardDescription>
              </CardHeader>
              <div className="px-8 pb-4">
                <CardContent className="relative h-[27rem] rounded-lg overflow-hidden">
                  <Suspense fallback={<>LOADING</>}>
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
