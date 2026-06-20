import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineDesktopComputer,
  HiOutlineUserGroup,
} from "react-icons/hi";
import "./ProgramsSection.css";

const trainingFeatures = [
  {
    title: "Diploma in Bible and Theology",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "Leadership development workshops",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Flexible physical and online learning",
    icon: HiOutlineDesktopComputer,
  },
  {
    title: "Mentorship for ministry and community impact",
    icon: HiOutlineBriefcase,
  },
];

const trainingSupport = [
  {
    title: "Academic Foundation",
    icon: HiOutlineBookOpen,
    items: [
      "Doctor of Ministry Degree",
      "PhD in Practical Theology",
      "PhD in Theological Studies",
      "Master of Arts in Intercultural Studies",
    ],
  },
  {
    title: "Ministry Experience",
    icon: HiOutlineBriefcase,
    items: [
      "Preaching and teaching",
      "Pastoral care and counseling",
      "Curriculum development",
      "Faith-based leadership programs",
    ],
  },
];

function ProgramsSection() {
  return (
    <Box component="section" className="programs-section" id="training">
      <Container maxWidth={false} className="programs-container">
        <div className="programs-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="programs-label">
              TRAINING
            </span>

            <h2 className="programs-heading">
              Training For
              <br />
              Ministry,
              <br />
              Leadership & Service
            </h2>

            <p className="programs-text">
              Practical and theological training designed to
              equip pastors, leaders, students and Christian
              workers with biblical knowledge, leadership
              skills and ministry confidence.
            </p>

            <a className="programs-secondary-link" href="#contact">
              Read More About Training
            </a>

            <div className="training-support-grid">
              {trainingSupport.map((group) => (
                <div key={group.title} className="training-support-card">
                  <div className="training-support-icon">
                    <group.icon />
                  </div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="programs-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {trainingFeatures.map((feature, index) => (
              <div key={feature.title} className="program-feature">
                <div className="program-feature-icon">
                  <feature.icon />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
              </div>
            ))}

            <a className="programs-btn" href="#contact">
              Enquire About Training
              <HiArrowRight />
            </a>
          </motion.div>

        </div>
      </Container>
    </Box>
  );
}

export default ProgramsSection;
