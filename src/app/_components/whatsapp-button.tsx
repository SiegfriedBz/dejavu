import Link from "next/link";
import React from "react";
import { PiWhatsappLogoBold } from "react-icons/pi";

const WhatsAppButton = () => {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ""}
      className="fixed top-[5.25rem] right-1 font-bold"
    >
      <PiWhatsappLogoBold size={44} color="#128c7e" />
    </Link>
  );
};

export default WhatsAppButton;
