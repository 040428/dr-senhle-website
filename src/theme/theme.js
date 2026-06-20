import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3192',
      light: '#00AEEF',
      dark: '#1E2166',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D4AF37',
      light: '#E8C547',
      dark: '#B8941F',
      contrastText: '#1F2937',
    },
    background: {
      default: '#F8FAFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: 'rgba(31, 41, 55, 0.72)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: '14px 28px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2E3192 0%, #00AEEF 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #252878 0%, #0099D4 100%)',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
  },
});

export default theme;
