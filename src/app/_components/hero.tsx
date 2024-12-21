import Image from "next/image";
import ScrollArrow from "./scroll-arrow";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex-1 h-[100svh] w-screen overflow-hidden"
    >
      <Image
        className="object-cover opacity-90"
        src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg"
        alt="hero"
        fill
        priority
      />

      <ScrollArrow />
    </div>
  );
};

export default Hero;
