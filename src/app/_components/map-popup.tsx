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
              Come & Relax
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MapPopup;
