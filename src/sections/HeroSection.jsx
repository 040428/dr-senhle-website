import { Box } from '@mui/material';
import Hero from '../components/Hero';

function HeroSection() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <Hero />
    </Box>
  );
}

export default HeroSection;
