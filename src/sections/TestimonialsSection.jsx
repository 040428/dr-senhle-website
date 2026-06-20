import { Box, Container } from "@mui/material";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <Box component="section" className="testimonials-section" id="testimonials">
      <Container maxWidth={false} className="testimonials-container">

        <span className="section-label">
          TESTIMONIALS
        </span>

        <h2>
          Lives Transformed Through
          Faith & Mentorship
        </h2>

        <div className="testimonial-grid">

          <div className="testimonial">
            <p>
              "Dr. Senhle's guidance strengthened our
              marriage and helped us rediscover purpose."
            </p>

            <span>Marriage Counselling Client</span>
          </div>

          <div className="testimonial">
            <p>
              "His leadership training transformed the
              way I serve in ministry."
            </p>

            <span>Church Leader</span>
          </div>

          <div className="testimonial">
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
