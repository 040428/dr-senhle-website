import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./AboutSection.css";

const stats = [
  { value: "28+", label: "Years Experience" },
  { value: "15+", label: "Years Radio Ministry" },
  { value: "6+", label: "Institutions Served" },
  { value: "1000+", label: "Lives Impacted" },
];

const purposeItems = [
  {
    title: "Vision",
    text: "To nurture holistic growth through theology, mentorship and Christian education that shapes lives, families and communities.",
  },
  {
    title: "Mission",
    text: "To equip people with biblical wisdom, practical leadership skills and faith-rooted guidance for everyday life and ministry.",
  },
  {
    title: "Calling",
    text: "To serve faithfully as a mentor, teacher, counselor and spiritual leader who helps others grow with purpose and conviction.",
  },
];

function AboutSection() {
  return (
    <Box component="section" className="about-section" id="about">
      <Container maxWidth={false} className="about-container">
        <div className="about-grid">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="about-label">
              ABOUT DR SENHLE
            </span>

            <h2 className="about-heading">
              Transforming Lives
              <br />
              Through Faith,
              <br />
              Leadership and
              <br />
              Mentorship.
            </h2>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Typography className="about-description">
              Dr Senhle is a dedicated Christian mentor,
              counselor, theology trainer and leadership
              development specialist committed to empowering
              individuals, families and communities through
              biblical principles and practical guidance.
            </Typography>

            <Typography className="about-description">
              With over 28 years of experience in ministry,
              mentorship and leadership development, he has
              impacted countless lives through counseling,
              training programs, radio ministry and community
              empowerment initiatives.
            </Typography>

            <div className="about-divider" />

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="about-quote">
              "Our mission is to equip people with biblical wisdom,
              practical leadership skills and the confidence to live
              purposeful lives."
            </blockquote>

            <div className="about-purpose-grid">
              {purposeItems.map((item) => (
                <div key={item.title} className="about-purpose-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </Box>
  );
}

export default AboutSection;
