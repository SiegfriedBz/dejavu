import CustomMap from "./_components/map";
import Testimonials, { TestimonialStars } from "./_components/testimonials";
import Hero from "./_components/hero";

import CustomAccordeons from "./_components/custom-accordeons";
import Cta from "./_components/cta";
import Welcome from "./_components/welcome";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <div className="px-4 space-y-12">
          <div
            id="welcome"
            className="scroll-mt-[4.75rem] min-h-[calc(100lvh-5rem)] pt-8"
          >
            <Welcome />
          </div>

          <div id="massages" className="scroll-mt-[6rem]">
            <h2 className="text-center text-primary tracking-wider font-medium text-xl mb-2">
              Discover Our Treatments
            </h2>
            <CustomAccordeons />
          </div>

          <div id="testimonials" className="scroll-mt-[6rem]">
            <TestimonialStars />
            <Testimonials />
          </div>

          <div id="map" className="scroll-mt-[6rem] pb-8">
            <h2 className="text-center text-primary tracking-wider font-medium text-xl mb-2">
              Come & Visit Us
            </h2>
            <CustomMap />

            <div className="my-8">
              <Cta />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
