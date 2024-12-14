import Image from "next/image";
import { FaHandHoldingHeart } from "react-icons/fa6";

const MapPopup = () => {
  return (
    <div className="flex h-72 w-full flex-col items-center justify-center rounded-lg">
      <div className="w-full min-h-32 relative flex-1">
        <Image
          fill
          src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733562324/dejavu/laid.png"
          alt="dejavu massage"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dygpd9pkl/image/upload/e_blur:500/v1733562324/dejavu/laid.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full rounded-lg object-cover shadow-lg object-right"
        />
      </div>

      <div>
        <a
          href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK || ""}
          target="_blank"
          className="my-2 text-lg flex flex-col items-center justify-center outline-none"
        >
          <span className="">Canggu&apos;s Secret</span>
          <span>
            to <span className="font-normal">Wellness</span>
          </span>

          <div className="mt-2 -ms-[1.25rem] flex items-center justify-center gap-x-2 text-secondary">
            <FaHandHoldingHeart className="text-xl" />
            <span className="text-center font-normal text-xl underline underline-offset-2">
              Visit us
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MapPopup;
