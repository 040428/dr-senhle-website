import { Box } from '@mui/material';
import Hero from '../components/Hero';

function HeroSection() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100svh' },
        backgroundColor: '#FFFFFF',
        overflow: { xs: 'visible', md: 'hidden' },
      }}
    >
      <Hero />
    </Box>
  );
}

export default HeroSection;
