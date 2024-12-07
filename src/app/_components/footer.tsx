"use client";

import React from "react";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";

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
        alt="Description of my image"
      />
    </div>
  );
};

export default Footer;
