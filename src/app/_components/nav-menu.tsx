"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import logo from "../../../public/logo.png";
import { GiPeaceDove } from "react-icons/gi";
import { PiHandsPraying } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { BsChatHeart } from "react-icons/bs";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function NavMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent text-stone-900 hover:text-stone-900 hover:bg-transparent"
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-[90vw] max-w-sm pb-8 bg-gradient-to-r from-stone-50 to-stone-50">
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center justify-center space-x-3 w-full">
                <Image src={logo} height={52} width={52} alt="dejavu logo" />
                <h2 className="font-semibold opacity-90 tracking-wider">
                  DejaVu Massage & SPA
                </h2>
              </div>
            </DrawerTitle>
            <DrawerDescription className="font-bold tracking-wide text-md pt-3 pb-2 flex flex-col gap-y-2">
              <span>Relax, Refresh, Rejuvenate</span>
              <span>Your Massage Oasis in Canggu!</span>
            </DrawerDescription>
          </DrawerHeader>

          <ul className="flex flex-col justify-start items-center space-y-3 tracking-wide">
            <li>
              <DrawerClose asChild>
                <Link
                  href="/#massages"
                  className="font-semibold flex gap-x-2 items-center text-lg"
                >
                  <PiHandsPraying size={24} color="hsl(var(--primary))" />
                  Massages
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link
                  href="/#spa"
                  className="font-semibold flex gap-x-2 items-center text-lg"
                >
                  <GiPeaceDove size={20} color="hsl(var(--primary))" />
                  SPA
                </Link>
              </DrawerClose>
            </li>

            <li>
              <DrawerClose asChild>
                <Link
                  href="/#special-treatments"
                  className="font-semibold flex gap-x-2 items-center text-lg"
                >
                  <GiPeaceDove size={20} color="hsl(var(--primary))" />
                  Special Treatments
                </Link>
              </DrawerClose>
            </li>

            <li>
              <DrawerClose asChild>
                <Link
                  href="/#testimonials"
                  className="font-semibold flex gap-x-2 items-center text-lg"
                >
                  <BsChatHeart size={20} color="hsl(var(--primary))" />
                  Testimonials
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link
                  href="/#visit-us"
                  className="font-semibold flex gap-x-2 items-center text-lg"
                >
                  <FiMapPin size={20} color="hsl(var(--primary))" />
                  Visit us
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link
                  href="/about-us"
                  className="font-semibold flex gap-x-2 items-center text-lg"
                >
                  <IoPeopleOutline size={20} color="hsl(var(--primary))" />
                  About us
                </Link>
              </DrawerClose>
            </li>
          </ul>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                asChild
                className="bg-primary text-primary-foreground mt-2 font-bold tracking-wide"
              >
                <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ""}>
                  Book Your Relaxation Today
                </Link>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
