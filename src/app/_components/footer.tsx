"use client";

import React from "react";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-full h-32">
      <div className="flex-1 relative w-full h-full">
        <Image
          fill
          className="object-cover"
          src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733562221/dejavu/footer.png"
          sizes="100vw"
          alt="DejaVu Massage & SPA - Canggu Bali"
        />
        <div className="text-xs font-medium absolute right-2 text-right top-[21%] flex flex-col">
          <span>
            ©{year} <span className="italic">DejaVu Massage & Spa</span> -
            Canggu.
          </span>
          <span className="">All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
