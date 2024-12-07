import Image from "next/image";
import logo from "../../../public/logo.png";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-between px-1.5 pt-2 w-full h-full
    bg-gradient-to-r from-stone-200 to-stone-100"
    >
      <Link href="/" className="flex items-center space-x-1">
        <Image src={logo} height={64} width={64} alt="dejavu logo" />
        <h2 className="font-semibold opacity-90">DejaVu Massage & SPA</h2>
      </Link>
      <NavMenu />
    </div>
  );
};

export default Navbar;
