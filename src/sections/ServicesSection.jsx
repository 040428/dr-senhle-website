import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./ServicesSection.css";

const services = [
  {
    title: "Premarital Counseling",
    tag: "Relationships",
    description:
      "Preparing couples for a strong and lasting marriage through biblical principles, communication skills and spiritual growth.",
  },
  {
    title: "Marriage Counseling",
    tag: "Support",
    description:
      "Helping couples strengthen relationships, resolve conflict and build healthy foundations rooted in faith and mutual understanding.",
  },
  {
    title: "Family Counseling",
    tag: "Family Care",
    description:
      "Supporting families in restoring harmony, strengthening relationships and navigating life’s challenges together.",
  },
  {
    title: "Leadership Training",
    tag: "Leadership",
    description:
      "Equipping leaders with practical leadership principles, servant leadership values and organizational excellence.",
  },
  {
    title: "Theology Training",
    tag: "Biblical Study",
    description:
      "Providing theological education and biblical training for pastors, ministry leaders and believers seeking deeper understanding.",
  },
  {
    title: "Christian Mentorship",
    tag: "Growth",
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
            Practical Christian
            <br />
            Support For Life
          </h2>

          <p className="services-intro">
            Each service is presented as a focused offering so visitors can
            quickly understand how they can get help and take the next step.
          </p>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="service-content">
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default ServicesSection;
