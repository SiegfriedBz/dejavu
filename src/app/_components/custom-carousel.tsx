import React, { PropsWithChildren } from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const CustomCarousel: React.FC<PropsWithChildren<Props>> = (props) => {
  const { className = "", children } = props;

  return (
    <Carousel
      opts={{ loop: true }}
      autoplay={true}
      autoplayInterval={3000}
      className="flex overflow-hidden"
    >
      <CarouselContent className={cn("w-full", className)}>
        {children}
      </CarouselContent>
    </Carousel>
  );
};

export default CustomCarousel;
