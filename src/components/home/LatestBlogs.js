import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Latest1 from '../../assets/images/home/Latest1.png'
import Latest2 from '../../assets/images/home/Latest2.png'
import Latest3 from '../../assets/images/home/Latest3.png'
import EastIcon from '@mui/icons-material/East';

function LatestBlogs() {
  return (
    <Box py={10}>
          <Container maxWidth='xl'>
                   <Box>
                        <Box>
                             <Typography py={5}  pb={10} sx={{fontSize:{lg:"52px",md:"36px",xs:"28px"},textAlign:"center",fontWeight:"600",color:"black",fontFamily:"'Public Sans',sans-serif"}} >Latest Blogs</Typography>
                        </Box>
                        <Grid item container xs={12} spacing={4} display={"flex"} justifyContent={"center"}>
                            <Grid item xs={12} md={6} lg={4}>
                                 <Box>
                                     <img src={Latest1} alt="" width={"100%"}/>
                                     <Typography py={1} sx={{fontSize:{lg:"22px",md:"24px",xs:"18px"},fontWeight:"600",color:"black",fontFamily:"'Public sans',sans-serif"}}>Road Freight Solutions for Global Emport </Typography>
                                     <Typography py={1} sx={{fontFamily:"'Prompt',sans-serif",color:"#808080"}}>Road freight shipping is essential for trade between neighboring countries where trucks transport goods across borders.</Typography>
                                     <Typography py={2} sx={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:{lg:"20px",md:"20px",xs:"16px"},fontWeight:"600",color:"black",fontFamily:"'Public sans',sans-serif"}}>Read More <EastIcon sx={{color:"#808080"}}/></Typography>
                                 </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                 <Box>
                                     <img src={Latest2} alt="" width={"100%"}/>
                                     <Typography py={1} sx={{fontSize:{lg:"22px",md:"24px",xs:"18px"},fontWeight:"600",color:"black",fontFamily:"'Public sans',sans-serif"}}>Air Freight Solutions for Worldwide Shipping</Typography>
                                     <Typography py={1} sx={{fontFamily:"'Prompt',sans-serif",color:"#808080"}}>Goods are monitored closely from the point of origin to their final destination, reducing the risk of theft or damage.</Typography>
                                     <Typography py={2} sx={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:{lg:"20px",md:"20px",xs:"16px"},fontWeight:"600",color:"black",fontFamily:"'Public sans',sans-serif"}}>Read More <EastIcon sx={{color:"#808080"}}/></Typography>
                                 </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                 <Box>
                                     <img src={Latest3} alt="" width={"100%"}/>
                                     <Typography py={1} sx={{fontSize:{lg:"22px",md:"24px",xs:"18px"},fontWeight:"600",color:"black",fontFamily:"'Public sans',sans-serif"}}>Expert Freight Shipping for Global Trade</Typography>
                                     <Typography py={1} sx={{fontFamily:"'Prompt',sans-serif",color:"#808080"}}>Freight shipping is an essential component of global trade, enabling businesses to move products across borders and continents.</Typography>
                                     <Typography py={2} sx={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:{lg:"20px",md:"20px",xs:"16px"},fontWeight:"600",color:"black",fontFamily:"'Public sans',sans-serif"}}>Read More <EastIcon sx={{color:"#808080"}}/></Typography>
                                 </Box>
                            </Grid>
                        </Grid>
                   </Box>
          </Container>
    </Box>
  );
}

export default LatestBlogs;
