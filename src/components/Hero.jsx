import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
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
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 14 },
        pb: { xs: 10, md: 8 },
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
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.25rem', lg: '3.75rem' },
                  lineHeight: { xs: 1.15, md: 1.1 },
                  color: '#1F2937',
                  mb: 3,
                }}
              >
                Empowering
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
                  Families,
                </Box>
                <br />
                Leaders &amp;
                <br />
                Communities
              </MotionTypography>

              <MotionTypography
                variant="body1"
                variants={itemVariants}
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.75,
                  color: 'text.secondary',
                  maxWidth: 520,
                  mb: 4,
                }}
              >
                Christian Mentorship, Counseling and Leadership Development designed
                to help individuals, families and leaders thrive through biblical
                principles.
              </MotionTypography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
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
                    href="#programs"
                    sx={{
                      px: 4,
                      py: 1.5,
                      width: { xs: '100%', sm: 'auto' },
                      borderColor: 'rgba(46, 49, 146, 0.3)',
                      color: '#2E3192',
                      '&:hover': {
                        borderColor: '#2E3192',
                        background: 'rgba(46, 49, 146, 0.04)',
                      },
                    }}
                  >
                    Explore Programs
                  </Button>
                </MotionBox>
              </Stack>

              <MotionBox variants={itemVariants}>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={{ xs: 1.5, md: 2.5 }}
                  sx={{ mt: 1 }}
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
                          background: 'linear-gradient(135deg, rgba(46, 49, 146, 0.1), rgba(0, 174, 239, 0.15))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <HiCheck size={14} color="#2E3192" />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: 'text.secondary', fontSize: '0.875rem' }}
                      >
                        {badge}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
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
                minHeight: { xs: 380, sm: 460, md: 560 },
              }}
            >
              <Box
                component="img"
                src="/images/dr-senhle.png"
                alt="Dr Senhle — Christian Mentor and Counselor"
                sx={{
                  width: { xs: '92%', sm: '90%', md: '100%' },
                  maxWidth: { xs: 440, sm: 520, md: 600, lg: 660 },
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      <ScrollIndicator />
    </Box>
  );
}

export default Hero;
