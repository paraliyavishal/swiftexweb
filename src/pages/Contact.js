import React from 'react';
import Herosection from '../components/contact/Herosection';
import { Box } from '@mui/material';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Inquiry from '../components/contact/Inquiry';

function Contact() {
  return (
    <Box>
      <Header />
      <Navbar />
      <Herosection />
      <Inquiry />
    </Box>
  );
}

export default Contact;
