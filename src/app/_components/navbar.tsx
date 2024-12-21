import Image from "next/image";
import logo from "../../../public/logo.png";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./whatsapp-button";

const Navbar = () => {
  return (
    <div
      className={cn(
        `fixed top-0 z-[999] flex items-center justify-between px-2.5 w-full h-[5rem] transition duration-300
      bg-gradient-to-r from-stone-100 to-stone-50`
      )}
    >
      <Link href="/" className="flex items-center space-x-1">
        <Image src={logo} height={64} width={64} alt="dejavu logo" />

        <h2 className="font-bold opacity-90 tracking-wider text-primary">
          DejaVu Massage & SPA
        </h2>
      </Link>

      <NavMenu />

      <WhatsAppButton />
    </div>
  );
};

export default Navbar;
