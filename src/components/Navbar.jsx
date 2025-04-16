import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      px: '20px',
      mt: { sm: '32px', xs: '20px' },
      flexWrap: 'wrap',
      gap: '20px',
      position: 'relative',
      zIndex: 1000, // Ensure it's on top
      backgroundColor: '#FFFAFB', // Match body background
    }}
  >
    {/* Logo + Title */}
    <Stack direction="row" alignItems="center" gap="12px">
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px' }}
        />
      </Link>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: '#FF2625', fontFamily: 'Josefin Sans' }}
      >
        Golds Gym
      </Typography>
    </Stack>

    {/* Navigation buttons */}
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{ textDecoration: 'none', color: '#3A1212' }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
