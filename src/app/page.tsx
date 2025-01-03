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

        <div className="px-4 space-y-14">
          <div id="welcome" className="scroll-mt-[4.5rem] pt-6">
            <Welcome />
          </div>

          <div id="massages" className="scroll-mt-[6.2rem]">
            <h2 className="text-center text-primary tsracking-wider font-medium text-xl mb-2">
              Discover Our Treatments
            </h2>
            <CustomAccordeons />
          </div>

          <div id="testimonials" className="scroll-mt-[6.2rem]">
            <TestimonialStars />
            <Testimonials />
          </div>

          <div id="map" className="scroll-mt-[6.2rem] pb-8">
            <h2 className="text-center text-primary tracking-wider font-medium text-xl mb-2">
              Come & Relax
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
