import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img14 from '../../assets/images/home/Rectangle14.png'
import home1 from '../../assets/images/home/home1.png'
import home2 from '../../assets/images/home/home2.png'
import home3 from '../../assets/images/home/home3.png'
import home4 from '../../assets/images/home/home4.png'

function WhyChooseUs() {
  return (
    <Box py={10}>
         <Box sx={{backgroundImage:`url(${img14})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
         <Container maxWidth='xl'>
               <Box sx={{padding:"30px 30px"}}>
                   <Typography py={5} sx={{color:"white",fontSize:"35px",fontWeight:"600",fontFamily:"'Public Sans',sans-serif",textAlign:"center"}}>Why Choose Us?</Typography>
                   <Box py={5}>
                     <Typography sx={{color:"white",fontSize:"28px",fontWeight:"400",fontFamily:"'Prompt',sans-serif",textAlign:"center"}}>When choosing a partner for import/export, businesses seek reliability, efficiency, and value-added</Typography>
                     <Typography sx={{color:"white",fontSize:"28px",fontWeight:"400",fontFamily:"'Prompt',sans-serif",textAlign:"center"}}> services that ensure smooth and profitable transactions.</Typography>
                   </Box>
                   <Box pt={1}>
                     <Typography sx={{color:"white",fontSize:"28px",fontWeight:"400",fontFamily:"'Prompt',sans-serif",textAlign:"center"}}>With a well-established network of trusted suppliers, manufacturers, and distributors across the world, </Typography>
                     <Typography sx={{color:"white",fontSize:"28px",fontWeight:"400",fontFamily:"'Prompt',sans-serif",textAlign:"center"}}>we ensure that your supply chain runs smoothly and efficiently.</Typography>
                   </Box>
                   <Grid item container xs={12} pt={10}>
                        <Grid item xs={12} md={6} lg={3} sx={{textAlign:"center"}}>
                            <img src={home1} alt="" width={"130px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center"}}>We Are <br /> Trusted</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} sx={{textAlign:"center"}}>
                            <img src={home2} alt="" width={"130px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center"}}>The best <br /> Security</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} sx={{textAlign:"center"}}>
                            <img src={home3} alt="" width={"130px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center"}}>100% <br /> Guarantee</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} sx={{textAlign:"center"}}>
                            <img src={home4} alt="" width={"130px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center"}}>Quick Location</Typography>
                        </Grid>   
                   </Grid>
               </Box>
            </Container>
         </Box>
    </Box>
  );
}

export default WhyChooseUs;
