import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/26876022924"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

export default WhatsappButton;
