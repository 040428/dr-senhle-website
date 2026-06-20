import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineBriefcase,
  HiOutlineBookOpen,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";
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
    icon: HiOutlineLightBulb,
    text: "To nurture holistic growth through theology, mentorship and Christian education that shapes lives, families and communities.",
  },
  {
    title: "Mission",
    icon: HiOutlineBookOpen,
    text: "To equip people with biblical wisdom, practical leadership skills and faith-rooted guidance for everyday life and ministry.",
  },
  {
    title: "Calling",
    icon: HiOutlineUserGroup,
    text: "To serve faithfully as a mentor, teacher, counselor and spiritual leader who helps others grow with purpose and conviction.",
  },
];

const impactAreas = [
  "Christian mentorship",
  "Pastoral counseling",
  "Leadership development",
  "Theology training",
];

const profileHighlights = [
  {
    title: "Practical Ministry",
    icon: HiOutlineBriefcase,
    text: "Grounded guidance for churches, families and leaders navigating real-life challenges.",
  },
  {
    title: "Faith-Rooted Teaching",
    icon: HiOutlineSparkles,
    text: "Biblical truth presented with clarity, compassion and a focus on personal transformation.",
  },
];

function AboutSection() {
  return (
    <Box component="section" className="about-section" id="about">
      <Container maxWidth={false} className="about-container">
        <div className="about-grid">
          <motion.div
            className="about-visual-column"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-visual-frame">
              <div className="about-visual-badge">
                <span>Trusted Mentor</span>
                <strong>28+ Years of Service</strong>
              </div>

              <div className="about-image-shell">
                <img
                  className="about-image"
                  src="/images/dr-senhle.png"
                  alt="Portrait of Dr Senhle"
                />
              </div>

              <div className="about-floating-card about-floating-card-primary">
                <strong>Leadership & Theology</strong>
                <span>Training, mentoring and community impact</span>
              </div>

              <div className="about-floating-card about-floating-card-secondary">
                <strong>Radio Ministry</strong>
                <span>15+ years of consistent teaching</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-content-column"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="about-label">
              ABOUT DR SENHLE
            </span>

            <h2 className="about-heading">
              A Shepherd, Teacher
              <br />
              and Mentor Serving
              <br />
              With Purpose.
            </h2>

            <p className="about-intro">
              Dr Senhle is a trusted Christian mentor, counselor and leadership
              development specialist helping individuals, families and
              communities grow through biblical wisdom and practical guidance.
            </p>

            <div className="about-impact-pills">
              {impactAreas.map((item) => (
                <span key={item} className="about-impact-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="about-story-card">
              <Typography className="about-description">
                With more than 28 years of ministry and leadership experience,
                he has shaped lives through counseling, mentorship, theological
                training, radio teaching and faith-based empowerment
                initiatives.
              </Typography>

              <Typography className="about-description">
                His work blends pastoral care with practical leadership
                formation, offering wisdom that helps people lead, serve and
                live with conviction in every season of life.
              </Typography>
            </div>

            <div className="about-actions">
              <a className="about-primary-btn" href="#contact">
                Start a Conversation
                <HiArrowRight />
              </a>

              <a className="about-secondary-link" href="#training">
                Explore Training
              </a>
            </div>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="about-highlight-grid">
              {profileHighlights.map((item) => (
                <div key={item.title} className="about-highlight-card">
                  <div className="about-highlight-icon">
                    <item.icon />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-quote-card">
              <blockquote className="about-quote">
                "Our mission is to equip people with biblical wisdom,
                practical leadership skills and the confidence to live
                purposeful lives."
              </blockquote>
            </div>

            <div className="about-purpose-grid">
              {purposeItems.map((item) => (
                <div key={item.title} className="about-purpose-card">
                  <div className="about-purpose-icon">
                    <item.icon />
                  </div>
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
