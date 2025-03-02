import Image from "next/image";
import ScrollArrow from "./scroll-arrow";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex-1 h-[100svh] w-screen overflow-hidden"
    >
      <Image
        className="object-cover opacity-90 object-top"
        src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1735207807/dejavu/AdobeStock_281771608_2_1_qyvgdp.png"
        alt="hero"
        fill
        priority
      />

      <ScrollArrow />
    </div>
  );
};

export default Hero;
