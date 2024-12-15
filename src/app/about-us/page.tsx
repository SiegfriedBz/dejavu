import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getImageData from "@/lib/getImageData";
import CustomImage from "../_components/custom-image";
import { Skeleton } from "@/components/ui/skeleton";
import { STAFF_DATA } from "@/data/sfaff-data";
import Cta from "../_components/cta";

const page = async () => {
  const staffDataPromise = await Promise.all([
    ...STAFF_DATA.map((girl) => {
      return { name: girl.name, imageDataPromise: getImageData(girl.url) };
    }),
  ]);

  return (
    <div className="flex px-4 flex-col gap-4 min-h-screen">
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

      <ul className="space-y-8">
        {staffDataPromise.map((girl) => {
          const { name, imageDataPromise } = girl;

          return (
            <li key={name}>
              <Card className="shadow-md border-4 p-4 bg-gradient-to-r from-stone-100 to-stone-50 rounded-lg h-full">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-secondary">{name}</CardTitle>
                  {/* <CardDescription>Description...</CardDescription> */}
                </CardHeader>
                <div className="w-full ">
                  <CardContent className="relative w-full h-[32rem] rounded-lg overflow-hidden shadow-md">
                    <Suspense
                      fallback={
                        <Skeleton className="h-full w-full rounded-lg bg-primary/80" />
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
            </li>
          );
        })}
      </ul>

      <Cta />
    </div>
  );
};

export default page;
