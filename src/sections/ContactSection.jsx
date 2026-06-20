import { Box, Container } from "@mui/material";
import {
  HiOutlineChatAlt2,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import "./ContactSection.css";

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
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <HiOutlinePhone />
              </div>
              <h4>Phone</h4>
              <p>76022924</p>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <HiOutlineChatAlt2 />
              </div>
              <h4>WhatsApp</h4>
              <p>76022924</p>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <HiOutlineMail />
              </div>
              <h4>Email</h4>
              <p>info@drsenhle.com</p>
            </div>
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
