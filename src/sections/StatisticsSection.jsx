import { Box, Container, Grid } from '@mui/material';
import StatCard from '../components/StatCard';

const stats = [
  { value: '28+', label: 'Years Experience' },
  { value: '15+', label: 'Years Radio Ministry' },
  { value: '6+', label: 'Institutions Served' },
  { value: '1000+', label: 'Lives Impacted' },
];

function StatisticsSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        zIndex: 10,
        mt: '-80px',
        pb: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '120%', md: '80%' },
          height: { xs: '80%', md: '100%' },
          background: 'radial-gradient(circle, rgba(0, 174, 239, 0.15), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }}>
          {stats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard
                value={stat.value}
                label={stat.label}
                delay={index * 0.12}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default StatisticsSection;
