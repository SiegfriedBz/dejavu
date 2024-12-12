import { FlipWords } from "@/components/ui/flip-words";

const words = [
  "Relaxation Haven",
  "Blissful Refuge",
  "Zenful Retreat",
  "Healing Oasis",
  "Harmony Retreat",
  "Wellness Refuge",
];

const HeaderText = () => {
  return (
    <div className="pt-8 pb-0 px-4">
      <h1 className="text-center font-medium text-2xl mb-2.5 tracking-wider">
        Welcome to <span className="italic">DejaVu Massage & SPA</span> - Your{" "}
        <FlipWords words={words} />
        <span className="inline-block">in Canggu</span>
      </h1>
      <p className="text-justify">
        At <span className="italic">DejaVu Massage & SPA</span>, we offer a
        variety of treatments designed to rejuvenate your body and mind. Whether
        you&apos;re looking for a soothing Balinese Massage, a refreshing scrub,
        or a luxurious spa experience, our skilled therapists tailor each
        treatment to your needs, ensuring deep relaxation and restoration.
      </p>
      <h2 className="text-center tracking-wider font-medium text-xl mt-8 mb-2.5">
        Outcall Services - We Bring the Spa to You
      </h2>
      <p className="text-justify">
        For your convenience, we offer outcall services throughout Canggu.
        Whether you&apos;re at a villa, hotel, or private residence, we bring
        our high-quality treatments directly to you, creating a peaceful spa
        experience wherever you are. Explore our services and let us provide a
        personalized experience to help you unwind and feel your best.
      </p>
    </div>
  );
};

export default HeaderText;
