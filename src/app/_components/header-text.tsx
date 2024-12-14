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
    <div id="welcome" className="pt-6 px-4 scroll-mt-[4.75rem]">
      <h1 className="text-center font-medium text-2xl mb-2 tracking-wider">
        Welcome to{" "}
        <span className="italic text-primary">DejaVu Massage & SPA</span> - Your{" "}
        <FlipWords words={words} className="text-secondary font-normal" />
        <span className="inline-block">in Canggu</span>
      </h1>
      <p className="text-justify">
        At{" "}
        <span className="italic text-primary font-medium">
          DejaVu Massage & SPA
        </span>
        , we offer a variety of treatments designed to{" "}
        <span className="text-secondary font-medium">
          rejuvenate your body and mind
        </span>
        . Whether you&apos;re looking for a soothing Balinese Massage, a
        refreshing scrub, or a luxurious spa experience, our skilled therapists
        tailor each treatment to your needs, ensuring deep relaxation and
        restoration.
      </p>
      <h2 className="text-center tracking-wider font-medium text-xl mt-6 mb-2">
        <span className="text-primary">Outcall Services</span>
      </h2>
      <p className="text-justify">
        For your convenience, we offer{" "}
        <span className="text-secondary font-medium">
          outcall services throughout Canggu
        </span>
        . Whether you&apos;re at a villa, hotel, or private residence, we bring
        our high-quality treatments directly to you, creating a peaceful spa
        experience wherever you are.
      </p>
    </div>
  );
};

export default HeaderText;
