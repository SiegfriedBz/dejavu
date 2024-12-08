import Image from "next/image";
import { FaHandHoldingHeart } from "react-icons/fa6";

const MapPopup = () => {
  return (
    <div className="flex h-64 w-auto flex-col items-center justify-center">
      <Image
        width="600"
        height="600"
        src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733562324/dejavu/laid.png"
        alt="dejavu massage"
        // placeholder="blur"
        // blurDataURL={popup.image.blurDataUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-full rounded-t-lg object-cover shadow-2xl object-right"
      />
      <div className="w-full rounded-b-lg">
        <a
          href="https://g.co/kgs/96mGqdj"
          target="_blank"
          className="my-2 flex flex-col items-center justify-center outline-none"
        >
          <span className="text-lg">Canggu&apos;s Secret</span>
          <span className="text-lg">to Wellness</span>

          <div className="mt-2 flex items-center justify-center gap-2">
            <FaHandHoldingHeart className="text-2xl text-red-400" />
            <span className="block text-center text-xl">Visit us</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MapPopup;
