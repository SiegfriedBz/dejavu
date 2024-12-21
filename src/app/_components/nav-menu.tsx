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
import Cta from "./cta";
import { cn } from "@/lib/utils";

export function NavMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-primary bg-transparent hover:text-secondary hover:bg-transparent">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="text-mutated-foreground pb-6 bg-gradient-to-r from-stone-50 to-stone-50">
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex items-center justify-center space-x-3 w-full my-2">
              <Image src={logo} height={52} width={52} alt="dejavu logo" />
              <div className="flex flex-col space-y-1 items-start">
                <h2 className="font-semibold opacity-90 tracking-wider text-primary">
                  DejaVu Massage & SPA
                </h2>
                <span className="text-secondary font-medium text-sm">
                  Relax, Refresh, Rejuvenate
                </span>
              </div>
            </div>
          </DrawerTitle>
          <DrawerDescription className="font-semibold text-primary tracking-wide text-sm flex flex-col">
            Your Massage Oasis in Canggu!
          </DrawerDescription>
        </DrawerHeader>
        <ul className="flex flex-col justify-start items-center my-2 space-y-4 tracking-wide">
          <li>
            <DrawerClose asChild>
              <Link
                href="/#massages"
                className="font-semibold flex gap-x-2 items-center text-lg"
              >
                <PiHandsPraying size={24} color="hsl(var(--secondary))" />
                Massages
              </Link>
            </DrawerClose>
          </li>
          <li>
            <DrawerClose asChild>
              <Link
                href="/#massages"
                className="font-semibold flex gap-x-2 items-center text-lg"
              >
                <GiPeaceDove size={26} color="hsl(var(--secondary))" />
                SPA
              </Link>
            </DrawerClose>
          </li>

          <li>
            <DrawerClose asChild>
              <Link
                href="/#massages"
                className="font-semibold flex gap-x-2 items-center text-lg"
              >
                <GiPeaceDove size={26} color="hsl(var(--secondary))" />
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
                <BsChatHeart size={24} color="hsl(var(--primary))" />
                Testimonials
              </Link>
            </DrawerClose>
          </li>
          <li>
            <DrawerClose asChild>
              <Link
                href="/#map"
                className="font-semibold flex gap-x-2 items-center text-lg"
              >
                <FiMapPin size={24} color="hsl(var(--primary))" />
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
                <IoPeopleOutline size={30} color="hsl(var(--secondary))" />
                About us
              </Link>
            </DrawerClose>
          </li>
        </ul>
        <DrawerFooter>
          <DrawerClose asChild>
            <Cta />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
