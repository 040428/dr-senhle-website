import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./QualificationsSection.css";

const qualifications = [
  "PhD in Religious Education (In Progress)",
  "Doctor of Ministry Degree",
  "PhD in Theological Studies (Christian Education)",
  "PhD in Practical Theology",
  "Master of Arts in Intercultural Studies",
  "Bachelor of Arts in Bible and Theology",
  "Diploma in Ministry",
  "Diploma in Theology",
  "Certificate of Merit in Ministerial Training",
];

function QualificationsSection() {
  return (
    <Box component="section" className="qualifications-section">
      <Container maxWidth={false} className="qualifications-container">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="qualifications-label">
            ACADEMIC QUALIFICATIONS
          </span>

          <h2 className="qualifications-heading">
            Lifelong Learning
            <br />
            In Service Of
            <br />
            Faith & Leadership.
          </h2>
        </motion.div>

        <div className="qualifications-list">
          {qualifications.map((item, index) => (
            <motion.div
              key={item}
              className="qualification-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <span className="qualification-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item}</h3>
            </motion.div>
          ))}
        </div>

      </Container>
    </Box>
  );
}

export default QualificationsSection;