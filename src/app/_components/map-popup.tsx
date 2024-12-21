import Image from "next/image";
import { FaHandHoldingHeart } from "react-icons/fa6";
import CustomCarousel from "./custom-carousel";
import { SECTIONS_DATA } from "@/data/sections-data";
import { CarouselItem } from "@/components/ui/carousel";

const MASSAGES_IMAGES = SECTIONS_DATA.find(
  (section) => section.id === "massages"
)?.images;

const MapPopup = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CustomCarousel className="w-56 pt-1">
        {MASSAGES_IMAGES?.map(({ src, blurSrc }) => {
          return (
            <CarouselItem
              key={`map-${src}`}
              className="max-w-56 h-24 rounded-md overflow-hidden"
            >
              <div className="flex-1 h-24 relative">
                <Image
                  src={src}
                  alt="DejaVu Massage & SPA - Massages"
                  placeholder="blur"
                  blurDataURL={blurSrc}
                  fill
                  // className="rounded-md opacity-90 object-cover w-44 min-h-16"
                  className="rounded-lg object-cover shadow-md "
                />
              </div>
            </CarouselItem>
          );
        })}
      </CustomCarousel>
      {/* <div className="w-56 min-h-32 relative flex-1">
        <Image
          fill
          src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733562324/dejavu/laid.png"
          alt="dejavu massage"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:1000/v1733562324/dejavu/laid.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full rounded-lg object-cover shadow-md object-right"
        />
      </div> */}

      <div>
        <a
          href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK || ""}
          target="_blank"
          className="mt-1 text-base flex flex-col items-center justify-center outline-none"
        >
          <span>Canggu&apos;s Secret</span>
          <span>to Wellness</span>

          <div className="mt-1 -ms-[1.25rem] flex items-center justify-center gap-x-2 text-secondary">
            <FaHandHoldingHeart className="text-xl" />
            <span className="text-center font-normal text-lg underline underline-offset-2">
              Visit us
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MapPopup;
