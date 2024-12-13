"use client";

import React from "react";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex-1 relative w-full h-32">
      {/* <CldImage
        width="960"
        height="600"
        // fill
        src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733562221/dejavu/footer.png"
        sizes="100vw"
        alt="Description of my image"
      /> */}
      <Image
        // width="960"
        // height="600"
        fill
        className="object-cover"
        src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733562221/dejavu/footer.png"
        sizes="100vw"
        alt="DejaVu Massage & SPA - Canggu Bali"
      />
      <div className="z-[999] text-xs font-medium absolute right-2 text-right top-[20%] flex flex-col">
        <span className="">©{year} DejaVu Massage & Spa - Canggu.</span>
        <span className="">All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
