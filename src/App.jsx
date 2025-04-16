import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';


import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const App = () => {
  return (
    <Box>
      <Navbar />
      
      {/* Main Content Container */}
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 5 },
          mt: { xs: '70px', sm: '90px' },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default App;
