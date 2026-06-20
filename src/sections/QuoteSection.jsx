import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./QuoteSection.css";

function QuoteSection() {
  return (
    <Box className="quote-section">
      <div className="quote-overlay" />

      <Container maxWidth={false} className="quote-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>
            "Where Eagles Fly,
            <br />
            That Is Where
            <br />
            You Belong."
          </h2>

          <p>— Dr. Senhle</p>
        </motion.div>
      </Container>
    </Box>
  );
}

export default QuoteSection;