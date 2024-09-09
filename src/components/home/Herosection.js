import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import homebg from '../../assets/images/home/Image3.png'
import homebg2 from '../../assets/images/home/Rectangle12.png'
import jcb from '../../assets/images/home/image9.png'

function Herosection() {
  return (
  <Box>
    <Box sx={{backgroundImage:`url(${homebg})`,height:"1200px",width:"100%",objectFit:"cover",backgroundRepeat:"no-repeat"}}>
          <Box sx={{backgroundImage:`url(${homebg2})`,height:"91.25%",width:"100%",objectFit:"cover",display:"flex",alignItems:"center"}}>
          <Container maxWidth='xl'>
              <Grid  item container xs={12} sx={{display:"flex",alignItems:"center"}}>
                  <Grid item xs={12} md={7}>
                      <Box>
                           <Box pb={2} >
                              <Typography sx={{fontSize:{lg:"51px",md:"36px",xs:"28px"},fontWeight:"600",color:"white",fontFamily:"'Public Sans',sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>Connecting Global Markets with </Typography>
                              <Typography sx={{fontSize:{lg:"51px",md:"36px",xs:"28px"},fontWeight:"600",color:"white",fontFamily:"'Public Sans',sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>Reliable Import-Export Solutions.</Typography>
                           </Box>
                           <Box py={3} sx={{color:"#B2BCBF",}}>                     
                              <Typography sx={{fontSize:{lg:"25px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>Connecting global markets with seamless trade solutions,</Typography>
                              <Typography sx={{fontSize:{lg:"25px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>empowering businesses to expand, thrive, and succeed across</Typography>
                              <Typography sx={{fontSize:{lg:"25px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>international borders</Typography>
                           </Box>
                           <Box py={3} sx={{textAlign:{lg:"start",md:"start",xs:"center"}}}>
                               <Button sx={{padding:"15px 30px",border:"1px solid white",borderRadius:"50px",color:"white",fontFamily:"'Public Sans',sans-serif",fontWeight:"500",fontSize:{lg:"25px",md:"24px",xs:"16px"}}}>Enquiry Now</Button>
                           </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                      <Box sx={{display:"flex",alignItems:"end",paddingTop:{lg:"200px",md:"100px",xs:"50px"}}}>
                         <img src={jcb} alt="" width={"100%"}/>
                      </Box>
                  </Grid>
              </Grid>
          </Container>
          </Box>  
    </Box> 
</Box>
  );
}

export default Herosection;
