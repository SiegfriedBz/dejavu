"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./whatsapp-button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const path = usePathname();
  const isAboutUsPage = path.includes("about-us");

  useEffect(() => {
    if (isAboutUsPage) return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isAboutUsPage]);

  return (
    <div
      className={cn(
        `fixed top-0 z-[999] flex items-center justify-between px-2.5 w-full h-[5rem] transition duration-300
      `,
        isScrolled || isAboutUsPage
          ? "bg-gradient-to-r from-stone-100 to-stone-50"
          : "bg-transparent"
      )}
    >
      <Link href="/" className="flex items-center space-x-1">
        <Image src={logo} height={64} width={64} alt="dejavu logo" />
        {(isScrolled || isAboutUsPage) && (
          <h2 className="font-bold opacity-90 tracking-wider text-primary">
            DejaVu Massage & SPA
          </h2>
        )}
      </Link>

      <NavMenu isScrolled={isScrolled || isAboutUsPage} />
      {(isScrolled || isAboutUsPage) && <WhatsAppButton />}
    </div>
  );
};

export default Navbar;
