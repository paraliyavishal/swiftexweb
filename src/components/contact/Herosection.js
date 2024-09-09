import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import bgContact from '../../assets/images/home/Group1.png'
import EastIcon from '@mui/icons-material/East';

function Herosection() {
  return (
    <Box sx={{ backgroundImage:`url(${bgContact})`,height:"100vh",width:"100%",backgroundRepeat:"no-repeat"}}>
      <Container maxWidth='xl'>
           <Box sx={{display:"flex",alignItems:"center",height:"100vh"}}>
               <Box marginBottom={30}>
                  <Box>
                      <Typography sx={{fontSize:"52px",fontWeight:"600",fontFamily:"'Public Sans', sans-serif",color:"white"}}>Contact</Typography>
                  </Box>
                  <Box sx={{display:"flex",gap:"10px"}}>
                      <Typography sx={{fontSize:"25px",fontWeight:"600",fontFamily:"'Public Sans', sans-serif",color:"white"}}>Home</Typography>
                      <Typography sx={{fontSize:"25px",fontWeight:"600",fontFamily:"'Public Sans', sans-serif",color:"#E13E26",display:"flex",alignItems:"center"}}><EastIcon /></Typography>
                      <Typography sx={{fontSize:"25px",fontWeight:"600",fontFamily:"'Public Sans', sans-serif",color:"white"}}>Contact</Typography>
                  </Box>
               </Box>
           </Box>
      </Container>
    </Box>
  );
}

export default Herosection;
