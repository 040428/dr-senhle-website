import { Box } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/HeroSection";
import StatisticsSection from "./sections/StatisticsSection";
import AboutSection from "./sections/AboutSection";
import VisionMissionSection from "./sections/VisionMissionSection";
import ServicesSection from "./sections/ServicesSection";
import ProgramsSection from "./sections/ProgramsSection";
import QualificationsSection from "./sections/QualificationsSection";
import ExperienceSection from "./sections/ExperienceSection";
import TeachingsSection from "./sections/TeachingsSection";
import QuoteSection from "./sections/QuoteSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
function App() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <ProgramsSection />
      <QualificationsSection />
      <ExperienceSection />
      <TeachingsSection />
      <QuoteSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsappButton />
      </Box>
  );
}

export default App;