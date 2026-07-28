"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const whatsappNumber = "+923333202090"; // replace with your WhatsApp number
  const message = "Hello! I would like to get in touch."; // optional prefilled message

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(
        /[^\d]/g,
        ""
      )}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
