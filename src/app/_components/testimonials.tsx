import React from "react";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import googleIcon from "../../../public/google_g_icon.png";
import { TESTIMONIALS_QUOTES } from "@/data/testimonials-data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Carousel opts={{ loop: true }} autoplay={true} autoplayInterval={3000}>
      <CarouselContent className="w-[92vw]">
        {TESTIMONIALS_QUOTES.map((quote, i) => {
          return (
            <CarouselItem key={`quote-${i}`} className="embla__slide">
              <figure>
                <blockquote className="relative py-3 pl-12 pr-8 ">
                  <p
                    className='
                        line-clamp-4
                        text-xl 

                        before:absolute
                        before:left-0
                        before:top-0
                        before:translate-x-1 before:translate-y-2
                        before:font-serif before:text-7xl
                        before:text-muted
                        before:content-["\201C"]

                        after:absolute
                        after:-bottom-20
                        after:right-0
                        after:-translate-x-2

                        after:-translate-y-10
                        after:font-serif after:text-7xl      
                        
                        after:text-muted
                        after:content-["\201D"]

                        md:text-2xl
                        text-muted-foreground
                      '
                  >
                    {quote.message}{" "}
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK || ""}
                    target="_blank"
                    className="mt-2 flex items-center
                        text-lg italic outline-none"
                  >
                    <span className="text-lg w-full text-muted-foreground">
                      Read full review
                    </span>
                    <Image
                      src={googleIcon}
                      width={40}
                      height={40}
                      alt="google-icon"
                      className="me-6 h-10 w-10 sm:h-12 sm:w-12"
                    />
                  </a>
                </blockquote>
                <figcaption
                  className="mt-2 px-2
                    text-right text-xl italic text-muted-foreground"
                >
                  &#8212; {quote.author}
                </figcaption>
              </figure>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Testimonials;

const renderStars = Array.from({ length: 5 }).map((_, i) => {
  return <FaStar key={`star-${i}`} className="text-2xl text-amber-400" />;
});

export const TestimonialStars = () => {
  return (
    <div id="testimonials-link" className="mx-auto mb-2 mt-8 md:my-4">
      <a href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK || ""} target="_blank">
        <h4 className="text-center text-primary text-lg font-semibold tracking-wider">
          Top-rated SPA in Canggu
        </h4>
        <div className="mt-1.5 flex justify-center items-center w-full">
          {renderStars}
        </div>
      </a>
    </div>
  );
};
