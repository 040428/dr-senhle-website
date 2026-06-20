import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineMicrophone,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";
import "./TeachingsSection.css";

const teachings = [
  {
    number: "01",
    title: "Marriage & Family",
    icon: HiOutlineHeart,
    description:
      "Biblical guidance for healthy relationships, marriage enrichment, family development and conflict resolution.",
  },
  {
    number: "02",
    title: "Christian Leadership",
    icon: HiOutlineUserGroup,
    description:
      "Developing servant leaders equipped to influence churches, communities and organizations with integrity.",
  },
  {
    number: "03",
    title: "Biblical Studies",
    icon: HiOutlineBookOpen,
    description:
      "Deep theological teaching designed to strengthen faith, understanding and ministry effectiveness.",
  },
  {
    number: "04",
    title: "Personal Growth",
    icon: HiOutlineSparkles,
    description:
      "Practical Christian principles that help individuals discover purpose, resilience and spiritual maturity.",
  },
  {
    number: "05",
    title: "Radio Ministry",
    icon: HiOutlineMicrophone,
    description:
      "There Is None Like Him — a teaching ministry broadcast for over 15 years on Voice of the Church Radio.",
  },
];

function TeachingsSection() {
  return (
    <Box component="section" className="teachings-section" id="teachings">
      <Container maxWidth={false} className="teachings-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="teachings-label">
            TEACHINGS & MEDIA
          </span>

          <h2 className="teachings-heading">
            Biblical Teaching
            <br />
            For Everyday Life
          </h2>

          <p className="teachings-intro">
            Organized into simple cards so visitors can quickly scan topics and
            find the area most relevant to them.
          </p>
        </motion.div>

        <div className="teachings-list">
          {teachings.map((item, index) => (
            <motion.div
              key={item.title}
              className="teaching-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="teaching-number">
                {item.number}
              </div>

              <div className="teaching-icon">
                <item.icon />
              </div>

              <div className="teaching-title">
                {item.title}
              </div>

              <div className="teaching-description">
                {item.description}
              </div>

              <a className="teaching-link" href="#contact">
                Read More
                <HiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="radio-highlight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span>Featured Ministry</span>

          <h3>There Is None Like Him</h3>

          <p>
            A long-running radio ministry dedicated to
            teaching biblical truth, strengthening faith
            and encouraging believers through practical
            Christian teaching.
          </p>
        </motion.div>

      </Container>
    </Box>
  );
}

export default TeachingsSection;
