import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./ProgramsSection.css";

function ProgramsSection() {
  return (
    <Box component="section" className="programs-section">
      <Container maxWidth={false} className="programs-container">
        <div className="programs-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="programs-label">
              THEOLOGY & TRAINING
            </span>

            <h2 className="programs-heading">
              Diploma in
              <br />
              Bible &
              <br />
              Theology
            </h2>

            <p className="programs-text">
              A comprehensive theological training program
              designed to equip future pastors, ministry
              leaders and Christian workers with biblical
              knowledge, leadership skills and practical
              ministry experience.
            </p>
          </motion.div>

          <motion.div
            className="programs-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="program-feature">
              <span>01</span>
              <h3>Accredited Program</h3>
            </div>

            <div className="program-feature">
              <span>02</span>
              <h3>Physical Classes</h3>
            </div>

            <div className="program-feature">
              <span>03</span>
              <h3>Online Learning</h3>
            </div>

            <div className="program-feature">
              <span>04</span>
              <h3>Flexible Study Options</h3>
            </div>

            <button className="programs-btn">
              Register Today
            </button>
          </motion.div>

        </div>
      </Container>
    </Box>
  );
}

export default ProgramsSection;