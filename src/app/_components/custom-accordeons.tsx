import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SECTIONS_DATA } from "@/data/sections-data";
import CustomCarousel from "./custom-carousel";
import { CarouselItem } from "@/components/ui/carousel";

const CustomAccordeons = () => {
  return (
    <>
      <Accordion type="single" collapsible className="flex flex-col gap-y-10">
        {SECTIONS_DATA.map((section) => {
          const { title, images, id, items } = section;

          return (
            <div
              key={id}
              className="shadow-md border-4 rounded-md p-2 flex flex-col justify-start items-center min-h-76"
            >
              <CustomCarousel className="w-[90vw] pt-1">
                {images.map(({ src, blurSrc }) => {
                  return (
                    <CarouselItem
                      key={`${id}-${src}`}
                      className="relative h-44 rounded-md overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={title}
                        placeholder="blur"
                        blurDataURL={blurSrc}
                        fill
                        className="rounded-md opacity-90 object-cover h-44"
                      />
                    </CarouselItem>
                  );
                })}
              </CustomCarousel>
              <AccordionItem value={id} className="w-full self-start">
                <AccordionTrigger className="pe-2">
                  <h2 className="font-medium text-left text-lg tracking-wider text-primary">
                    {title}
                  </h2>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="ps-2">
                    <Accordion type="single" collapsible>
                      {items.map((item) => {
                        const { title, description, variants } = item;

                        return (
                          <AccordionItem value={title} key={title}>
                            <AccordionTrigger
                              className={cn(
                                "text-base tracking-wide pe-2",
                                title.toLowerCase().includes("ratus")
                                  ? "text-secondary"
                                  : ""
                              )}
                            >
                              {title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-y-2 items-center">
                                <span className="text-justify pe-2">
                                  {description}
                                </span>
                                <div className="flex flex-col w-full gap-y-2">
                                  {variants?.map((v) => {
                                    const { id, duration, price, outCall } = v;

                                    return (
                                      <div
                                        key={id}
                                        className="w-full grid grid-cols-6 px-2"
                                      >
                                        <span className="col-span-1 font-semibold">
                                          {duration}
                                        </span>
                                        <span className="col-span-2 text-center">
                                          {price} IRD
                                        </span>
                                        {outCall && (
                                          <span className="col-span-3 text-right font-medium text-primary">
                                            Outcall service
                                          </span>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </>
  );
};

export default CustomAccordeons;
