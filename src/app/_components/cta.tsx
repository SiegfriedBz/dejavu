import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="space-y-2">
      <Button
        asChild
        size="lg"
        className="bg-primary flex justify-center text-primary-foreground font-bold tracking-wide"
      >
        <Link
          className="max-w-fit mx-auto"
          href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ""}
        >
          Book Your Relaxation Today
        </Link>
      </Button>

      <h3 className="text-center text-sm font-semibold text-secondary">
        Every day 9am - 11pm
      </h3>
    </div>
  );
};

export default Cta;
