import { Box, Container } from "@mui/material";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <Box component="section" className="testimonials-section" id="testimonials">
      <Container maxWidth={false} className="testimonials-container">

        <span className="section-label">
          TESTIMONIALS
        </span>

        <h2>
          Stories Of Growth
          <br />
          And Transformation
        </h2>

        <p className="testimonials-intro">
          Testimonials are now presented as clean cards to break up the page and
          make each story easier to notice.
        </p>

        <div className="testimonial-grid">

          <div className="testimonial">
            <div className="testimonial-icon">
              <HiOutlineChatAlt2 />
            </div>
            <div className="testimonial-rating">★★★★★</div>
            <p>
              "Dr. Senhle's guidance strengthened our
              marriage and helped us rediscover purpose."
            </p>

            <span>Marriage Counselling Client</span>
          </div>

          <div className="testimonial">
            <div className="testimonial-icon">
              <HiOutlineChatAlt2 />
            </div>
            <div className="testimonial-rating">★★★★★</div>
            <p>
              "His leadership training transformed the
              way I serve in ministry."
            </p>

            <span>Church Leader</span>
          </div>

          <div className="testimonial">
            <div className="testimonial-icon">
              <HiOutlineChatAlt2 />
            </div>
            <div className="testimonial-rating">★★★★★</div>
            <p>
              "One of the most impactful theological
              educators I have ever encountered."
            </p>

            <span>Former Student</span>
          </div>

        </div>

      </Container>
    </Box>
  );
}

export default TestimonialsSection;
