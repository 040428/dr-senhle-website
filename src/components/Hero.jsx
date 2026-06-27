import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const trustBadges = [
  'Christian Mentorship',
  'Faith-Based Counseling',
  'Leadership Development',
  'Biblical Guidance',
];

const identityHighlights = [
  'Christian Mentor',
  'Counselor',
  'Leadership Development Specialist',
  '28+ Years Experience',
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

function TrustBadges({ sx, textColor = 'text.secondary', iconBackground, iconColor = '#2E3192' }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={{ xs: 1.25, md: 2.5 }} sx={sx}>
      {trustBadges.map((badge) => (
        <Stack key={badge} direction="row" alignItems="center" spacing={0.75}>
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background:
                iconBackground ||
                'linear-gradient(135deg, rgba(46, 49, 146, 0.1), rgba(0, 174, 239, 0.15))',
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
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
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
          color: 'rgba(255, 255, 255, 0.52)',
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
          border: '2px solid rgba(255, 255, 255, 0.24)',
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

function HighlightRotator({ activeHighlight }) {
  return (
    <Box sx={{ minHeight: { xs: 42, sm: 48, md: 56 }, mb: { xs: 2.5, md: 3 } }}>
      <AnimatePresence mode="wait">
        <MotionTypography
          key={activeHighlight}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          sx={{
            fontSize: { xs: '1.05rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 700,
            color: '#7DD3FC',
            letterSpacing: '-0.02em',
          }}
        >
          {activeHighlight}
        </MotionTypography>
      </AnimatePresence>
    </Box>
  );
}

function HeroVisual({ activeImageIndex, mobile = false }) {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: mobile ? 420 : 680,
        minHeight: mobile ? { xs: 320, sm: 380 } : { md: 560 },
        mx: mobile ? 'auto' : 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: mobile ? '8% 8% 16%' : '8% 4% 14%',
          borderRadius: mobile ? '36px' : '44px',
          background:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.14) 0%, rgba(0, 174, 239, 0.14) 34%, rgba(15, 23, 42, 0) 72%)',
          filter: 'blur(16px)',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          minHeight: mobile ? { xs: 320, sm: 380 } : { md: 560 },
          borderRadius: mobile ? '28px' : '36px',
          overflow: 'hidden',
          background:
            'linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {heroImages.map((imageSrc, index) => (
          <MotionBox
            key={imageSrc}
            component="img"
            src={imageSrc}
            alt={index === activeImageIndex ? 'Dr Senhle - Christian mentor and counselor' : ''}
            aria-hidden={index !== activeImageIndex}
            initial={false}
            animate={{
              opacity: index === activeImageIndex ? 1 : 0,
              scale: index === activeImageIndex ? 1 : 0.985,
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              inset: 0,
              margin: '0 auto',
              width: mobile ? { xs: '88%', sm: '82%' } : '100%',
              maxWidth: mobile ? { xs: 360, sm: 420 } : 660,
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        ))}

        <Box
          sx={{
            position: 'absolute',
            left: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 'auto' },
            bottom: { xs: 16, sm: 24 },
            maxWidth: 290,
            px: 2,
            py: 1.4,
            borderRadius: '18px',
            background: 'rgba(15, 23, 42, 0.72)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Typography
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { xs: '1rem', sm: '1.08rem' },
              lineHeight: 1.3,
              mb: 0.4,
            }}
          >
            Transforming Lives Through
            <br />
            Faith, Leadership
            <br />
            &amp; Mentorship
          </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
}

function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (identityHighlights.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveHighlightIndex((currentIndex) => (currentIndex + 1) % identityHighlights.length);
    }, 2400);

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
        <Grid container spacing={{ xs: 2, sm: 3, md: 1, lg: 2 }} alignItems="center">
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
              sx={{ width: '100%', maxWidth: { xs: 680, md: 560 } }}
            >
              <MotionTypography
                variant="h1"
                variants={itemVariants}
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.1rem', md: '4rem', lg: '4.35rem' },
                  lineHeight: 1,
                  color: '#FFFFFF',
                  letterSpacing: '-0.04em',
                  mb: 1,
                }}
              >
                Dr. Senhle
              </MotionTypography>

              <MotionBox variants={itemVariants}>
                <HighlightRotator activeHighlight={identityHighlights[activeHighlightIndex]} />
              </MotionBox>

              <MotionBox variants={itemVariants} sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
                <HeroVisual activeImageIndex={activeImageIndex} mobile />
              </MotionBox>

              <MotionTypography
                variant="body1"
                variants={itemVariants}
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: { xs: 1.72, md: 1.8 },
                  color: 'rgba(255, 255, 255, 0.76)',
                  maxWidth: 560,
                  mb: { xs: 3, md: 4 },
                }}
              >
                Faith-led counseling, Christian mentorship and leadership development for
                individuals, couples, families and leaders who need practical guidance
                rooted in biblical truth.
              </MotionTypography>

              <MotionBox variants={itemVariants} sx={{ mb: { xs: 3, md: 4 } }}>
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

              <MotionBox variants={itemVariants}>
                <TrustBadges
                  textColor="rgba(255, 255, 255, 0.78)"
                  iconBackground="linear-gradient(135deg, rgba(0, 174, 239, 0.18), rgba(255, 255, 255, 0.12))"
                  iconColor="#A5F3FC"
                />
              </MotionBox>
            </MotionBox>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5, lg: 6 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-start',
              pl: { md: 1, lg: 2 },
            }}
          >
            <HeroVisual activeImageIndex={activeImageIndex} />
          </Grid>
        </Grid>
      </Container>

      <ScrollIndicator />
    </Box>
  );
}

export default Hero;
