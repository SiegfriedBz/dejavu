import Link from "next/link";
import React from "react";
import { PiWhatsappLogoBold } from "react-icons/pi";

const WhatsAppButton = () => {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ""}
      className="fixed top-[67.5%] right-1 font-extrabold"
    >
      <PiWhatsappLogoBold size={44} color="#25D366" />
    </Link>
  );
};

export default WhatsAppButton;
