import { Box, Button, Container, Grid, InputAdornment, TextField, Typography, } from '@mui/material';
import React from 'react';
import logo from '../../assets/images/home/swift ex logo -1 2.png'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import headerimg from '../../assets/images/home/image 4.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box>
       <Container maxWidth='xl'>
             <Box py={5}>
                  <Box sx={{backgroundColor:"#21324D",padding:"40px",textAlign:"center",borderRadius:"30px"}}>
                        <Typography py={1} sx={{fontSize:{lg:"36px",md:"30px",sm:"24px",xs:"18px"},color:"white",lineHeight:"30px"}}>Newsletter</Typography>
                        <Typography paddingBottom={3} sx={{fontSize:{lg:"14px",md:"14px",xs:"12px"},color:"white",fontFamily:"'Gothic A1', sans-serif"}}>Subscribe us & get update to your inbox</Typography>
                        <TextField id="outlined-password-input" placeholder='Your Email ID' variant="outlined"
                         sx={{
                          fontFamily:"'Gothic A1', sans-serif",
                           color: "white",
                           '& .MuiOutlinedInput-root': {
                            backgroundColor:"rgba(255, 255, 255, 0.19)", 
                            borderRadius:"50px",
                            paddingRight:"0px",
                            overflow:"hidden",
                          
                             '& input': {
                               color: 'white',
                               '&::placeholder': {
                                  color: 'white',
                                  opacity: 1,
                                  fontFamily:"'Gothic A1', sans-serif",
                                },
                             },
                             '& fieldset': {
                               borderColor: 'transparent',
                               borderRadius: "50px"
                             },
                             '&:hover fieldset': {
                               borderColor: 'transparent', 
                             },                             
                             '&.Mui-focused fieldset': {
                               borderColor: 'transparent', 
                             },
                           },
                         }}
                         InputProps={{
                           endAdornment: (
                             <InputAdornment position="end">
                               <Button sx={{backgroundColor:"#E13E26",padding:"15px 25px",borderRadius:"50px",color:"white",fontFamily:"'Gothic A1', sans-serif"}}>Subscribe</Button>
                             </InputAdornment>
                           ),
                         }}/>
                  </Box>
                  <Box pt={10}>
                      <Grid item container xs={12} py={5} sx={{display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid black",flexDirection:{xs:"column",md:"row"}}}>
                        
                        <Grid item xs={12} md={12} lg={4} sx={{display: "flex",gap:{lg:"100px",xs:"50px"}, justifyContent: { xs: "center", md: "center",lg:"center" }, mb: { xs: 3, md: 0 }}}>
                          <Typography sx={{ fontFamily: "'Public Sans', sans-serif", fontSize: { xs: "16px", md: "20px" } }}>
                            Home
                          </Typography>
                          <Typography sx={{ fontFamily: "'Public Sans', sans-serif", fontSize: { xs: "16px", md: "20px" } }}>
                            About Us
                          </Typography>
                          <Typography sx={{ fontFamily: "'Public Sans', sans-serif", fontSize: { xs: "16px", md: "20px" } }}>
                            Services
                          </Typography>
                        </Grid>
                      
                        <Grid item xs={12}  md={4} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: { xs: 3, md: 0 } }}>
                          <img src={logo} alt="" style={{ width: "100%" }} />
                        </Grid>
                      
                        <Grid item xs={12} md={12} lg={4} sx={{display: "flex",gap:{lg:"100px",xs:"50px"}, justifyContent: "center", mb: { xs: 3, md: 0 }}}>
                          <Typography sx={{ fontFamily: "'Public Sans', sans-serif", fontSize: { xs: "16px", md: "20px" } }}>
                            Products
                          </Typography>
                          <Typography sx={{ fontFamily: "'Public Sans', sans-serif", fontSize: { xs: "16px", md: "20px" } }}>
                            Blog
                          </Typography>
                          <Typography sx={{ fontFamily: "'Public Sans', sans-serif", fontSize: { xs: "16px", md: "20px" } }}>
                            Contact
                          </Typography>
                        </Grid>
                      </Grid>


                     
                  </Box>
             </Box>
        
            <Grid py={1} item container xs={12} spacing={3} sx={{display:"flex",justifyContent:{sm:"center",xs:"center"}}}>
                <Grid item xs={12} md={6} lg={4} sx={{display:"flex",justifyContent:{lg:"start",md:"start",sm:"center",xs:"center"}}}>
                    <Box sx={{ color: "black", textAlign: { xs: "center", sm: "left" } }}>
                        <Typography sx={{display: "flex",alignItems: "center",fontFamily: "'Public Sans', sans-serif",fontSize:{lg:"20px",md:"18px",sm:"16px",xs:"14px"}}}>
                          © 2024 swiftex. All rights reserved
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{display:"flex",justifyContent:"center"}}>
                    <Box display={"flex"} gap={2} alignItems={"center"} justifyContent={{ xs: "center", sm: "center" }} flexWrap="wrap">
                      <Box sx={{ backgroundColor: "#21324D", padding: "2px 2px", borderRadius: "5px", display: "flex" }}>
                        <TwitterIcon sx={{ color: "white",fontSize:"1.9rem"}} />
                      </Box>
                      <Box sx={{ backgroundColor: "#21324D", padding: "2px 2px", borderRadius: "5px", display: "flex" }}>
                        <InstagramIcon sx={{ color: "white",fontSize:"1.9rem" }} />
                      </Box>
                      <Box sx={{ backgroundColor: "#21324D", padding: "2px 3px", borderRadius: "5px", display: "flex" }}>
                        <i className="fa-brands fa-linkedin-in" style={{ color: "white", fontSize: "1.9rem" }}></i>
                      </Box>
                      <Box sx={{ backgroundColor: "#21324D", padding: "2px 6px", borderRadius: "5px", display: "flex" }}>
                        <i className="fa-brands fa-facebook-f" style={{ color: "white", fontSize: "1.9rem" }}></i>
                      </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{display:"flex",justifyContent:{lg:"end",md:"center",sm:"center",xs:"center"}}}>
                    <Box display={"flex"} gap={3} >
                       <Typography sx={{color:"black",fontFamily: "'Public Sans', sans-serif",fontSize:{lg:"20px",md:"18px",sm:"16px",xs:"14px"}}}>Privacy Policy</Typography>
                       <Typography sx={{color:"black",fontFamily: "'Public Sans', sans-serif",fontSize:{lg:"20px",md:"18px",sm:"16px",xs:"14px"}}}>Terms & Conditions</Typography>
                    </Box>
                </Grid>
            </Grid>

       </Container>
    </Box>
  );
}

export default Footer;
