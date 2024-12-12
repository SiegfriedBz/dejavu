import CustomMap from "./_components/map";
import Testimonials, { TestimonialStars } from "./_components/testimonials";
import Hero from "./_components/hero";
import HeaderText from "./_components/header-text";
import CustomAccordeons from "./_components/custom-accordeons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <HeaderText />

        <div className="py-12 px-4 pb-20 gap-16 sm:p-20 space-y-12">
          <CustomAccordeons />

          <div id="testimonials" className="w-full">
            <TestimonialStars />
            <Testimonials />
          </div>

          <div id="visit-us">
            <h2 className="font-semibold text-lg text-center">
              Get Directions to Our Location
            </h2>
            <CustomMap />
          </div>

          <Button
            asChild
            className="bg-primary flex justify-center text-primary-foreground mt-2 font-bold tracking-wide"
          >
            <Link
              className="max-w-fit mx-auto"
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ""}
            >
              Book Your Relaxation Today
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
