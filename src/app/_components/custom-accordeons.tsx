import { SECTIONS_DATA } from "@/data/testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const CustomAccordeons = () => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {SECTIONS_DATA.map((section) => {
        const { title, src, blurSrc, id, items } = section;

        return (
          <AccordionItem value={id} key={id} id={id}>
            <AccordionTrigger
              className="scroll-mt-32 grid grid-cols-8 gap-x-3"
              id={id}
            >
              <Image
                src={src}
                alt={title}
                placeholder="blur"
                blurDataURL={blurSrc}
                width={85}
                height={85}
                className="rounded-md col-span-3 shadow-md w-44 h-20"
              />
              <h2 className="col-span-4 font-medium text-left text-lg tracking-wider">
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
                        <AccordionTrigger className="text-base tracking-wide">
                          {title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-y-2 items-center">
                            {/* <Image
                                    src={src}
                                    alt="title"
                                    width={75}
                                    height={75}
                                    className="rounded-full"
                                  /> */}

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
                                      <span className="col-span-3 text-right font-semibold">
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
        );
      })}
    </Accordion>
  );
};

export default CustomAccordeons;
