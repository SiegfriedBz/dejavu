import { CircleArrowDown } from "lucide-react";
import Link from "next/link";

const ScrollArrow = () => {
  return (
    <Link
      href="#welcome"
      className="absolute bottom-0 left-1/2 w-full z-50 animate-bounce"
    >
      <CircleArrowDown
        size="1.75rem"
        color="hsl(var(--accent-foreground))"
        className="-translate-x-1/2"
      />
    </Link>
  );
};

export default ScrollArrow;
