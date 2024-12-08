import Image from "next/image";
import ScrollArrow from "./_components/scroll-arrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomMap from "./_components/map";

const sectionsData = [
  {
    id: "massages",
    title: "Massages",
    items: [
      {
        id: 1,
        title: "Balinese Massage",
        description: "Balinese Massage is...",
        src: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg",
        price: 120,
      },
      {
        id: 2,
        title: "Deep Tissue Massage",
        description: "Deep Tissue  Massage is...",
        src: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg",
        price: 120,
      },
    ],
  },
  {
    id: "spa",
    title: "SPA",
    items: [
      {
        id: 1,
        title: "Manicure",
        description: "Manicure is...",
        src: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg",
        price: 120,
      },
      {
        id: 2,
        title: "Pedicure",
        description: "Pedicure is...",
        src: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg",
        price: 120,
      },
    ],
  },
  {
    id: "special-treatments",
    title: "Special Treatments",
    items: [
      {
        id: 1,
        title: "Vaccum",
        description: "Vaccum is...",
        src: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg",
        price: 120,
      },
      {
        id: 2,
        title: "Ratus Vagina",
        description: "Ratus Vagina is...",
        src: "https://res.cloudinary.com/dygpd9pkl/image/upload/v1733565145/dejavu/hero_01_fz07n2.jpg",
        price: 120,
      },
    ],
  },
];

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
            {sectionsData.map((section) => {
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
                                    width={35}
                                    height={35}
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

          {/* <Accordion type="single" collapsible>
            <AccordionItem value="massages">
              <AccordionTrigger>
                <h2 className="font-semibold" id="massages">
                  Massages
                </h2>
              </AccordionTrigger>

              <AccordionContent>
                <div className="ps-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="balinese">
                      <AccordionTrigger>Balinese Massage</AccordionTrigger>
                      <AccordionContent>
                        Balinese Massage is....
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="deep-tissue">
                      <AccordionTrigger>Deep Tissue Massage</AccordionTrigger>
                      <AccordionContent>
                        Deep Tissue Massage is....
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="spa">
              <AccordionTrigger>
                <h2 className="font-semibold" id="spa">
                  SPA
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="ps-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="manicure">
                      <AccordionTrigger>Manicure</AccordionTrigger>
                      <AccordionContent>Manicure is....</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="pedicure">
                      <AccordionTrigger>Pedicure</AccordionTrigger>
                      <AccordionContent>Pedicure is....</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="treatments">
              <AccordionTrigger>
                <h2 className="font-semibold" id="treatments">
                  Special Treatments
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="ps-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="r-vagina">
                      <AccordionTrigger>Ratus Vagina</AccordionTrigger>
                      <AccordionContent>Ratus Vagina is....</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="vacuum">
                      <AccordionTrigger>Vacuum...</AccordionTrigger>
                      <AccordionContent>Vacuum... is....</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}

          <div id="testimonials">
            <h2 className="font-semibold">Testimonials</h2>
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
