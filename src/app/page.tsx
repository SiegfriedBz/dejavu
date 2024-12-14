import CustomMap from "./_components/map";
import Testimonials, { TestimonialStars } from "./_components/testimonials";
import Hero from "./_components/hero";
import HeaderText from "./_components/header-text";
import CustomAccordeons from "./_components/custom-accordeons";
import Cta from "./_components/cta";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <HeaderText />

        <div
          id="massages"
          className="pt-8 pb-14 px-4 gap-16 space-y-8 scroll-mt-[5rem]"
        >
          <CustomAccordeons />

          <div id="testimonials" className="w-full scroll-mt-[6rem] space-y-4">
            <TestimonialStars />
            <Testimonials />
          </div>

          <div id="map" className="scroll-mt-[5.25rem]">
            <h2 className="font-semibold text-lg text-center text-primary mb-2">
              Come & Visit Us
            </h2>
            <CustomMap />
          </div>

          <Cta />
        </div>
      </main>
    </div>
  );
}
