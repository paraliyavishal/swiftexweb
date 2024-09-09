import { Box } from '@mui/material';
import React from 'react';
import Herosection from '../components/products/Herosection';
import OurProduct from '../components/products/OurProduct';
import OnionPowder from '../components/products/productlist/OnionPowder';
import GarlicPowder from '../components/products/productlist/GarlicPowder';
import Disposableitem from '../components/products/productlist/Disposableitem';

function Products() {
  return (
    <Box>
      {/* <Herosection />
      <OurProduct />
      <OnionPowder />
      <GarlicPowder /> */}
      <Disposableitem />
    </Box>
  );
}

export default Products;
