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
        background: 'linear-gradient(180deg, #0F172A 0%, #111827 100%)',
        overflowX: 'clip',
      }}
    >
      <Hero />
    </Box>
  );
}

export default HeroSection;
