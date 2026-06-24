import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/26876022924"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp aria-hidden="true" />
      <span className="whatsapp-label">WhatsApp</span>
    </a>
  );
}

export default WhatsappButton;
