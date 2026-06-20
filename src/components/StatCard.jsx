import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion.create(Paper);

function StatCard({ value, label, delay = 0 }) {
  return (
    <MotionPaper
      elevation={0}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      sx={{
        p: { xs: 3, md: 3.5 },
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(46, 49, 146, 0.08)',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        component="div"
        sx={{
          fontSize: '3rem',
          fontWeight: 600,
          color: '#2E3192',
          lineHeight: 1.1,
          mb: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#1F2937',
          fontWeight: 400,
          fontSize: { xs: '0.95rem', md: '1rem' },
          lineHeight: 1.4,
        }}
      >
        {label}
      </Typography>
    </MotionPaper>
  );
}

export default StatCard;
