import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <Box component="section" className="experience-section">
      <Container maxWidth={false} className="experience-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="experience-label">
            MINISTRY & LEADERSHIP EXPERIENCE
          </span>

          <h2 className="experience-heading">
            Decades Of Service,
            <br />
            Teaching & Impact.
          </h2>
        </motion.div>

        <div className="experience-grid">

          <motion.div
            className="experience-column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Ministry Experience</h3>

            <ul>
              <li>Preaching and Teaching</li>
              <li>Discipleship & Spiritual Formation</li>
              <li>Bible Studies & Church Education</li>
              <li>Pastoral Care & Counseling</li>
              <li>Missionary Ministry</li>
              <li>Christian Mentorship</li>
              <li>Radio Ministry Leadership</li>
              <li>Marriage & Family Support</li>
            </ul>

            <p>
              For more than 28 years, Dr. Senhle has served
              as a shepherd-teacher, helping believers grow
              spiritually through biblical teaching,
              discipleship and pastoral leadership.
            </p>
          </motion.div>

          <motion.div
            className="experience-column"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Leadership Experience</h3>

            <ul>
              <li>Curriculum Development</li>
              <li>Academic Leadership</li>
              <li>Student Mentorship</li>
              <li>Teaching Team Coordination</li>
              <li>Community Development Initiatives</li>
              <li>Faith-Based Leadership Programs</li>
              <li>Institutional Administration</li>
              <li>Theological Education Management</li>
            </ul>

            <p>
              His leadership experience spans theological
              institutions, ministry organizations and
              community development initiatives, combining
              servant leadership with academic excellence.
            </p>
          </motion.div>

        </div>

      </Container>
    </Box>
  );
}

export default ExperienceSection;