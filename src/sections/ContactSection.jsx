import { Box, Container } from "@mui/material";
import {
  HiOutlineChatAlt2,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import "./ContactSection.css";

const contactDetails = [
  {
    title: "Phone",
    value: "76022924",
    href: "tel:76022924",
    icon: HiOutlinePhone,
  },
  {
    title: "WhatsApp",
    value: "76022924",
    href: "https://wa.me/26776022924",
    icon: HiOutlineChatAlt2,
  },
  {
    title: "Email",
    value: "info@drsenhle.com",
    href: "mailto:info@drsenhle.com",
    icon: HiOutlineMail,
  },
];

function ContactSection() {
  return (
    <Box className="contact-section" id="contact">
      <Container maxWidth={false} className="contact-container">

        <div className="contact-left">
          <span>CONTACT</span>

          <h2>
            Let&apos;s Connect
          </h2>

          <p className="contact-intro">
            Reach out for counselling, mentorship,
            theology training or speaking engagements.
          </p>

          <div className="contact-details">
            {contactDetails.map((detail) => (
              <a
                key={detail.title}
                className="contact-detail-card"
                href={detail.href}
                target={detail.title === "WhatsApp" ? "_blank" : undefined}
                rel={detail.title === "WhatsApp" ? "noreferrer" : undefined}
                aria-label={`Contact via ${detail.title}`}
              >
                <div className="contact-detail-icon">
                  <detail.icon />
                </div>
                <h4>{detail.title}</h4>
                <p>{detail.value}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <input placeholder="Your Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <textarea
            rows="5"
            placeholder="Your Message"
          />

          <button>
            Send Message
          </button>
        </div>

      </Container>
    </Box>
  );
}

export default ContactSection;
