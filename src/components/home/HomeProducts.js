
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import mask1 from '../../assets/images/home/Mask1.png'
import mask2 from '../../assets/images/home/Mask2.png'
import mask3 from '../../assets/images/home/Mask3.png'
import EastIcon from '@mui/icons-material/East';

function HomeProducts() {
  return (
    <Box py={5}>
        <Container maxWidth='xl'>
               <Box>
                   <Typography pb={10} sx={{fontSize:{lg:"51px",md:"36px",xs:"28px"},textAlign:"center",fontWeight:"600",color:"black",fontFamily:"'Public Sans',sans-serif"}} >Our Product</Typography>
                   <Grid item container xs={12} spacing={4}>
                      <Grid item xs={12} md={6} lg={4}>
                          <Box>
                            <Box sx={{backgroundImage: `url(${mask1})`,width: "100%",height: "300px",backgroundSize: "cover",display: "flex",justifyContent: "flex-end",flexDirection: "column",borderRadius:"20px",backgroundPosition:"center",}}>  
                               <Button sx={{bgcolor: "#DF3E26",padding:"10px 0px",color: "#fff",border: "2px solid #DF3E26",borderRadius: "20px 0px 20px 0px",alignSelf: "flex-end"}}> <EastIcon/> </Button>
                            </Box> 
                           <Typography sx={{borderBottom:"3px solid black",marginLeft:"10px",paddingTop:"10px",fontWeight:"600",fontSize:"26px",fontFamily:"'Public Sans',sans-serif",width:"15%"}}>Grain</Typography>
                          </Box>        
                      </Grid>
                      <Grid item xs={12} md={6} lg={4}>
                          <Box>
                            <Box sx={{backgroundImage: `url(${mask3})`,width: "100%",height: "300px",backgroundSize: "cover",display: "flex",justifyContent: "flex-end",flexDirection: "column",borderRadius:"20px",backgroundPosition:"center",}}>  
                               <Button sx={{bgcolor: "#DF3E26",padding:"10px 0px",color: "#fff",border: "2px solid #DF3E26",borderRadius: "20px 0px 20px 0px",alignSelf: "flex-end"}}> <EastIcon/> </Button>
                            </Box> 
                           <Typography sx={{borderBottom:"3px solid black",marginLeft:"10px",paddingTop:"10px",fontWeight:"600",fontSize:"26px",fontFamily:"'Public Sans',sans-serif",width:"15%"}}>Vegetables</Typography>
                          </Box>
                      </Grid>
                      <Grid item xs={12} md={6} lg={4}>
                          <Box>
                            <Box sx={{backgroundImage: `url(${mask2})`,width: "100%",height: "300px",backgroundSize: "cover",display: "flex",justifyContent: "flex-end",flexDirection: "column",borderRadius:"20px",backgroundPosition:"center",}}>  
                               <Button sx={{bgcolor: "#DF3E26",padding:"10px 0px",color: "#fff",border: "2px solid #DF3E26",borderRadius: "20px 0px 20px 0px",alignSelf: "flex-end"}}> <EastIcon/> </Button>
                            </Box> 
                           <Typography sx={{borderBottom:"3px solid black",marginLeft:"10px",paddingTop:"10px",fontWeight:"600",fontSize:"26px",fontFamily:"'Public Sans',sans-serif",width:"15%"}}>Ghee</Typography>
                          </Box> 
                      </Grid>
                   </Grid>
               </Box>
        </Container>  
    </Box>
  );
}

export default HomeProducts;
