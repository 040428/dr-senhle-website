import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const trustBadges = [
  'Christian Mentor',
  'Leadership Development',
  'Family Counseling',
  'Theology Training',
];

const heroImages = [
  '/images/dr-senhle.png',
  '/images/dr-senhle1.png',
  '/images/dr-senhle2.png',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 + i * 0.12, ease: 'easeOut' },
  }),
};

function TrustBadges({ sx, textColor = 'text.secondary', iconBackground, iconColor = '#2E3192' }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={{ xs: 1.25, md: 2.5 }}
      sx={sx}
    >
      {trustBadges.map((badge) => (
        <Stack
          key={badge}
          direction="row"
          alignItems="center"
          spacing={0.75}
        >
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: iconBackground || 'linear-gradient(135deg, rgba(46, 49, 146, 0.1), rgba(0, 174, 239, 0.15))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <HiCheck size={14} color={iconColor} />
          </Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: textColor, fontSize: '0.875rem' }}
          >
            {badge}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

function ScrollIndicator() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      sx={{
        position: 'absolute',
        bottom: { xs: 24, md: 32 },
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.5,
        zIndex: 2,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: 'rgba(31, 41, 55, 0.45)',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontSize: '0.65rem',
        }}
      >
        Scroll
      </Typography>
      <MotionBox
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          width: 24,
          height: 38,
          borderRadius: 12,
          border: '2px solid rgba(46, 49, 146, 0.25)',
          display: 'flex',
          justifyContent: 'center',
          pt: 1,
        }}
      >
        <MotionBox
          animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            width: 4,
            height: 8,
            borderRadius: 2,
            background: 'linear-gradient(180deg, #2E3192, #00AEEF)',
          }}
        />
      </MotionBox>
    </MotionBox>
  );
}

function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 11, sm: 12, md: 14 },
        pb: { xs: 7, sm: 8, md: 8 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 18% 22%, rgba(0, 174, 239, 0.16), transparent 36%), radial-gradient(circle at 78% 18%, rgba(46, 49, 146, 0.28), transparent 30%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 4, md: 1, lg: 2 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Column — Text */}
          <Grid
            size={{ xs: 12, md: 7, lg: 6 }}
            sx={{
              display: 'flex',
              justifyContent: { md: 'flex-end' },
              pr: { md: 1, lg: 2 },
            }}
          >
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ width: '100%', maxWidth: { md: 540, lg: 560 } }}
            >
              <MotionTypography
                variant="h1"
                variants={itemVariants}
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.25rem', lg: '3.75rem' },
                  lineHeight: { xs: 1.08, md: 1.1 },
                  color: '#FFFFFF',
                  mb: { xs: 2, md: 3 },
                }}
              >
                Transforming Lives Through
                <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2E3192 0%, #00AEEF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Faith, Leadership
                </Box>
                <br />
                &amp; Mentorship
              </MotionTypography>

              <MotionTypography
                variant="body1"
                variants={itemVariants}
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: { xs: 1.65, md: 1.75 },
                  color: 'rgba(255, 255, 255, 0.74)',
                  maxWidth: 520,
                  mb: { xs: 3, md: 4 },
                }}
              >
                Christian Mentorship, Counseling and Leadership Development designed
                to help individuals, families and leaders thrive through biblical
                principles.
              </MotionTypography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: { xs: 3, md: 4 } }}
              >
                <MotionBox custom={0} variants={buttonVariants} initial="hidden" animate="visible">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="#contact"
                    sx={{
                      px: 4,
                      py: 1.5,
                      width: { xs: '100%', sm: 'auto' },
                      boxShadow: '0 12px 32px rgba(46, 49, 146, 0.3)',
                    }}
                  >
                    Book Consultation
                  </Button>
                </MotionBox>
                <MotionBox custom={1} variants={buttonVariants} initial="hidden" animate="visible">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    href="#training"
                    sx={{
                      px: 4,
                      py: 1.5,
                      width: { xs: '100%', sm: 'auto' },
                      borderColor: 'rgba(255, 255, 255, 0.45)',
                      color: '#FFFFFF',
                      '&:hover': {
                        borderColor: '#FFFFFF',
                        background: 'rgba(255, 255, 255, 0.08)',
                      },
                    }}
                  >
                    View Training
                  </Button>
                </MotionBox>
              </Stack>

              <MotionBox variants={itemVariants} sx={{ display: { xs: 'none', md: 'block' } }}>
                <TrustBadges
                  sx={{ mt: 1 }}
                  textColor="rgba(255, 255, 255, 0.78)"
                  iconBackground="linear-gradient(135deg, rgba(0, 174, 239, 0.18), rgba(255, 255, 255, 0.12))"
                  iconColor="#A5F3FC"
                />
              </MotionBox>
            </MotionBox>
          </Grid>

          {/* Right Column — Image */}
          <Grid
            size={{ xs: 12, md: 5, lg: 6 }}
            sx={{
              order: { xs: 2, md: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              pl: { md: 1, lg: 2 },
            }}
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: { xs: 240, sm: 340, md: 560 },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  minHeight: { xs: 240, sm: 340, md: 560 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: { xs: '12% 8%', md: '10% 2%' },
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(0, 174, 239, 0.12) 38%, rgba(15, 23, 42, 0) 72%)',
                    filter: 'blur(18px)',
                  },
                }}
              >
                {heroImages.map((imageSrc, index) => (
                  <MotionBox
                    key={imageSrc}
                    component="img"
                    src={imageSrc}
                    alt={index === activeImageIndex ? 'Dr Senhle — Christian Mentor and Counselor' : ''}
                    aria-hidden={index !== activeImageIndex}
                    initial={false}
                    animate={{
                      opacity: index === activeImageIndex ? 1 : 0,
                      scale: index === activeImageIndex ? 1 : 0.985,
                    }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      margin: '0 auto',
                      width: { xs: '72%', sm: '78%', md: '100%' },
                      maxWidth: { xs: 440, sm: 520, md: 600, lg: 660 },
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'top center',
                    }}
                  />
                ))}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 1 }}>
          <TrustBadges
            textColor="rgba(255, 255, 255, 0.78)"
            iconBackground="linear-gradient(135deg, rgba(0, 174, 239, 0.18), rgba(255, 255, 255, 0.12))"
            iconColor="#A5F3FC"
          />
        </Box>
      </Container>

      <ScrollIndicator />
    </Box>
  );
}

export default Hero;
