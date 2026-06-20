import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./ServicesSection.css";

const services = [
  {
    title: "Premarital Counseling",
    description:
      "Preparing couples for a strong and lasting marriage through biblical principles, communication skills and spiritual growth.",
  },
  {
    title: "Marriage Counseling",
    description:
      "Helping couples strengthen relationships, resolve conflict and build healthy foundations rooted in faith and mutual understanding.",
  },
  {
    title: "Family Counseling",
    description:
      "Supporting families in restoring harmony, strengthening relationships and navigating life’s challenges together.",
  },
  {
    title: "Leadership Training",
    description:
      "Equipping leaders with practical leadership principles, servant leadership values and organizational excellence.",
  },
  {
    title: "Theology Training",
    description:
      "Providing theological education and biblical training for pastors, ministry leaders and believers seeking deeper understanding.",
  },
  {
    title: "Christian Mentorship",
    description:
      "Guiding individuals toward spiritual maturity, personal growth and purposeful living through mentorship and discipleship.",
  },
];

function ServicesSection() {
  return (
    <Box component="section" className="services-section" id="services">
      <Container maxWidth={false} className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="services-label">
            SERVICES
          </span>

          <h2 className="services-heading">
            Empowering People
            <br />
            Through Practical
            <br />
            Christian Guidance.
          </h2>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`service-row ${
                index % 2 === 1 ? "reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default ServicesSection;