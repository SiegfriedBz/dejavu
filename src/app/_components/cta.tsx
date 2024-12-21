import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

const Cta: React.FC<Props> = (props) => {
  const { className = "" } = props;

  return (
    <div className={cn("space-y-2", className)}>
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
