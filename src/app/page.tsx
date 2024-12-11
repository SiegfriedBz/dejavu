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

        <div className="pt-8 pb-0 px-4">
          <h1 className="text-center font-medium text-2xl mb-2.5 tracking-wider">
            Welcome to <span className="italic">DejaVu Massage & SPA</span> -
            Your Relaxation Haven in Canggu
          </h1>
          <p className="text-justify">
            At <span className="italic">DejaVu Massage & SPA</span>, we offer a
            variety of treatments designed to rejuvenate your body and mind.
            Whether you&apos;re looking for a soothing Balinese Massage, a
            refreshing scrub, or a luxurious spa experience, our skilled
            therapists tailor each treatment to your needs, ensuring deep
            relaxation and restoration.
          </p>
          <h2 className="text-center tracking-wider font-medium text-xl mt-8 mb-2.5">
            Outcall Services - We Bring the Spa to You
          </h2>
          <p className="text-justify">
            For your convenience, we offer outcall services throughout Canggu.
            Whether you&apos;re at a villa, hotel, or private residence, we
            bring our high-quality treatments directly to you, creating a
            peaceful spa experience wherever you are. Explore our services and
            let us provide a personalized experience to help you unwind and feel
            your best.
          </p>
        </div>

        <div className="py-4 px-4 pb-20 gap-16 sm:p-20 space-y-8">
          <Accordion type="single" collapsible>
            {SECTIONS_DATA.map((section) => {
              const { title, id, items } = section;

              return (
                <AccordionItem value={id} key={id} id={id}>
                  <AccordionTrigger className="scroll-mt-32" id={id}>
                    <h2 className="font-semibold text-lg tracking-wider">
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
                                      const { id, duration, price, outCall } =
                                        v;

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

          <div id="testimonials" className="w-full">
            <TestimonialStars />
            <Testimonials />
          </div>

          <div id="visit-us">
            <h2 className="font-semibold text-lg">Visit us</h2>
            <CustomMap />
          </div>
        </div>
      </main>
    </div>
  );
}
