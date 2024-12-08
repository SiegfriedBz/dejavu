import Image from "next/image";
import ScrollArrow from "./_components/scroll-arrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomMap from "./_components/map";
import { SECTIONS_DATA } from "@/data/testimonials";
import Testimonials, { TestimonialStars } from "./_components/testimonials";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main
      // className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
      >
        <div
          id="hero"
          className="relative mt-2 flex-1 h-[calc(100lvh-5.5rem)] w-screen rounded-sm overflow-hidden"
        >
          <Image
            className="dark:invert object-cover opacity-90"
            src="https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg"
            alt="hero"
            fill
            priority
          />

          <ScrollArrow />
        </div>

        <div className="p-8 pb-20 gap-16 sm:p-20 space-y-8">
          <Accordion type="single" collapsible>
            {SECTIONS_DATA.map((section) => {
              const { title, id, items } = section;

              return (
                <AccordionItem value={id} key={id} id={id}>
                  <AccordionTrigger className="scroll-mt-32" id={id}>
                    <h2 className="font-semibold">{title}</h2>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="ps-4">
                      <Accordion type="single" collapsible>
                        {items.map((item) => {
                          const { title, description, price, src } = item;

                          return (
                            <AccordionItem value={title} key={title}>
                              <AccordionTrigger>{title}</AccordionTrigger>
                              <AccordionContent>
                                <div className="flex gap-x-4 items-center">
                                  <Image
                                    src={src}
                                    alt="title"
                                    width={75}
                                    height={75}
                                    className="rounded-full"
                                  />
                                  <div className="flex flex-col">
                                    <span>{description}</span>
                                    <span>{price}IRD</span>
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

          <div id="testimonials" className="w-full">
            <h2 className="font-semibold">Testimonials</h2>
            <TestimonialStars />
            <Testimonials />
          </div>

          <div id="visit-us">
            <h2 className="font-semibold">Visit us</h2>
            <CustomMap />
          </div>
        </div>
      </main>
    </div>
  );
}
