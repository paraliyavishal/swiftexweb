import React from 'react';
import { Box } from '@mui/material';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Products from './pages/Products';
import Cursor from './commoncomponent/cursor/Cursor';

function App() {
  return (
    <Box>
      {/* <Cursor /> */}
      <Aboutus />
      <Services />
      <Products />
    </Box>
  );
}

export default App;
