import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Training', href: '#training' },
  { label: 'Teachings', href: '#teachings' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appBarStyles = {
    backgroundColor: scrolled ? '#FFFFFF' : 'transparent',
    boxShadow: scrolled ? '0 4px 30px rgba(46, 49, 146, 0.08)' : 'none',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
  };

  const linkColor = scrolled ? '#1F2937' : 'rgba(255, 255, 255, 0.88)';

  const navLinks = (
    <Stack
      direction="row"
      spacing={3.5}
      alignItems="center"
      sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      {navItems.map((item) => (
        <Typography
          key={item.label}
          component="a"
          href={item.href}
          sx={{
            color: linkColor,
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.925rem',
            position: 'relative',
            transition: 'color 0.25s ease',
            '&:hover': {
              color: '#2E3192',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: 0,
              height: 2,
              borderRadius: 1,
              background: 'linear-gradient(90deg, #2E3192, #00AEEF)',
              transition: 'width 0.3s ease',
            },
            '&:hover::after': {
              width: '100%',
            },
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Stack>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component={motion.header}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={appBarStyles}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: { xs: 1, md: 1.5 }, minHeight: { xs: 64, md: 72 } }}>
            <Box component="a" href="#home" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Box
                component="img"
                src="/images/logo.jpg"
                alt="Dr Senhle"
                sx={{
                  height: { xs: 40, md: 48 },
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {navLinks}

            <Button
              variant="contained"
              color="primary"
              href="#contact"
              sx={{
                display: 'inline-flex',
                ml: { md: 3 },
                mr: { xs: 1, md: 0 },
                px: { xs: 2, sm: 2.5, md: 3 },
                py: { xs: 1, md: 1.25 },
                fontSize: { xs: '0.78rem', sm: '0.84rem', md: '0.9rem' },
                minWidth: { xs: 0, sm: 'auto' },
                boxShadow: '0 8px 24px rgba(46, 49, 146, 0.25)',
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                Book Consultation
              </Box>
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                Contact
              </Box>
            </Button>

            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: scrolled ? '#1F2937' : '#FFFFFF' }}
              aria-label="Open menu"
            >
              <HiMenuAlt3 size={26} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            pt: 2,
            background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <HiX size={24} />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 2, pt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href="#contact"
              onClick={() => setDrawerOpen(false)}
            >
              Book Consultation
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
