import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./VisionMissionSection.css";

const items = [
  {
    number: "01",
    title: "Vision",
    text: "To serve faithfully as a shepherd-teacher, integrating theology and pedagogy to nurture holistic growth—spiritual, intellectual, moral and communal. Empowering learners to embody Christian values and transform society.",
  },
  {
    number: "02",
    title: "Mission",
    text: "To shepherd and disciple through holistic Christian education, stewarding knowledge with integrity and nurturing learners' dignity and potential as Imago Dei, while empowering leaders to transform society in faith, justice and unity.",
  },
  {
    number: "03",
    title: "Calling",
    text: "The calling of God upon my life is to faithfully serve as a mentor, teacher, counselor and spiritual leader, equipping individuals, families and communities with biblical wisdom, leadership principles and practical life skills.",
  },
];

function VisionMissionSection() {
  return (
    <Box component="section" className="vm-section">
      <Container maxWidth={false} className="vm-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="vm-label">
            PURPOSE & DIRECTION
          </span>

          <h2 className="vm-heading">
            Guiding Every Step
            <br />
            Through Faith,
            Wisdom & Service.
          </h2>
        </motion.div>

        <div className="vm-list">
          {items.map((item) => (
            <motion.div
              key={item.number}
              className="vm-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="vm-number">
                {item.number}
              </div>

              <div className="vm-title">
                {item.title}
              </div>

              <div className="vm-text">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </Box>
  );
}

export default VisionMissionSection;