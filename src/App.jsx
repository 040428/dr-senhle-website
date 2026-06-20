import { Box } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProgramsSection from "./sections/ProgramsSection";
import TeachingsSection from "./sections/TeachingsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
function App() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <TeachingsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsappButton />
      </Box>
  );
}

export default App;
