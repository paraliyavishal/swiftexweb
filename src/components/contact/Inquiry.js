import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import call from '../../assets/images/contact/call.png'
import map from '../../assets/images/contact/map.png'
import mart from '../../assets/images/contact/mart.png'
import epc from '../../assets/images/contact/epc.png'
import dollar from '../../assets/images/contact/$.png'
import mail from '../../assets/images/contact/mail.png'
import insta from '../../assets/images/contact/insta.png'
import trade from '../../assets/images/contact/trade.png'
import embassy from '../../assets/images/contact/embassy.png'

function Inquiry() {
  return (
    <Box py={5}>
        <Container maxWidth='xl'>
              <Grid item container xs={12} spacing={3} pb={5} display={"flex"} justifyContent={"center"}>
                   <Grid item xs={12} md={10} lg={6}>
                          <Box sx={{padding:"50px",backgroundColor:"#EBEBEB",textAlign:"center",borderRadius:"20px"}}>
                             <Typography sx={{fontSize:"36px",fontFamily:"Public Sans', sans-serif"}}>Send Inquiry</Typography>
                             <Box py={2}>
                                <Typography sx={{fontSize:"16px",fontFamily:"Public Sans', sans-serif",color:"#294E69"}}>Let us know if you need any information or have any queries by </Typography>
                                <Typography sx={{fontSize:"16px",fontFamily:"Public Sans', sans-serif",color:"#294E69"}}>using the form below.</Typography>
                             </Box>
      
                             <Box sx={{display:"flex",flexWrap:{lg:"nowrap",md:"nowrap",xs:"wrap"},justifyContent:"center",gap:"20px"}} py={2}>
                        <TextField placeholder='First Name' variant="outlined" 
                          sx={{fontFamily:"'Gothic A1', sans-serif",color: "#294E69",width:{lg:"50%",md:"50%",xs:"100%"},
                          '& .MuiOutlinedInput-root': {
                           backgroundColor:"white", 
                           padding:"5px 0px",
                           borderRadius:"10px",                        
                            '& input': {
                              '&::placeholder': {color: '#294E69',opacity: 1,fontFamily:"'Gothic A1', sans-serif",},
                            },
                            '&:hover fieldset': {borderColor: 'white', },                             
                            '&.Mui-focused fieldset': {borderColor: '#294E69',},
                          },}}
                          />
                        <TextField placeholder='Last name *' variant="outlined"
                          sx={{fontFamily:"'Gothic A1', sans-serif",color: "#294E69",width:{lg:"50%",md:"50%",xs:"100%"},
                          '& .MuiOutlinedInput-root': {
                           backgroundColor:"white", 
                           padding:"5px 0px",
                           borderRadius:"10px",                        
                            '& input': {
                              '&::placeholder': {color: '#294E69',opacity: 1,fontFamily:"'Gothic A1', sans-serif",},
                            },
                            '&:hover fieldset': {borderColor: 'black', },                             
                            '&.Mui-focused fieldset': {borderColor: '#294E69',},
                          },}}
                          />
                             </Box>
                             <Box sx={{display:"flex",flexWrap:{lg:"nowrap",md:"nowrap",xs:"wrap"},justifyContent:"center",gap:"20px"}} pb={2}>
                                <TextField placeholder='Contact no *' variant="outlined" 
                                  sx={{fontFamily:"'Gothic A1', sans-serif",color: "#294E69",width:{lg:"50%",md:"50%",xs:"100%"},
                                  '& .MuiOutlinedInput-root': {
                                   backgroundColor:"white", 
                                   padding:"5px 0px",
                                   borderRadius:"10px",                        
                                    '& input': {
                                      '&::placeholder': {color: '#294E69',opacity: 1,fontFamily:"'Gothic A1', sans-serif",},
                                    },
                                    '&:hover fieldset': {borderColor: 'white', },                             
                                    '&.Mui-focused fieldset': {borderColor: '#294E69',},
                                  },}}
                                />
                                <TextField placeholder='Email ID *' variant="outlined"
                                  sx={{fontFamily:"'Gothic A1', sans-serif",color: "#294E69",width:{lg:"50%",md:"50%",xs:"100%"},
                                  '& .MuiOutlinedInput-root': {
                                   backgroundColor:"white", 
                                   padding:"5px 0px",
                                   borderRadius:"10px",                        
                                    '& input': {
                                      '&::placeholder': {color: '#294E69',opacity: 1,fontFamily:"'Gothic A1', sans-serif",},
                                    },
                                    '&:hover fieldset': {borderColor: 'white', },                             
                                    '&.Mui-focused fieldset': {borderColor: '#294E69',},
                                  },}}
                                />
                             </Box>
                             <Box display={"flex"} gap={2} justifyContent={"center"} pb={2}>
                              <TextField placeholder='Subject Line' variant="outlined" 
                                sx={{fontFamily:"'Gothic A1', sans-serif",color: "#294E69",width:"100%",
                                '& .MuiOutlinedInput-root': {
                                 backgroundColor:"white", 
                                 padding:"5px 0px",
                                 borderRadius:"10px",                        
                                  '& input': {
                                    '&::placeholder': {color: '#294E69',opacity: 1,fontFamily:"'Gothic A1', sans-serif",},
                                  },
                                  '&:hover fieldset': {borderColor: 'white', },                             
                                  '&.Mui-focused fieldset': {borderColor: '#294E69',},
                                },}}
                              />
                             </Box>
                             <Box display={"flex"} gap={2} justifyContent={"center"} pb={3}>
                              <TextField placeholder='Your Message *' variant="outlined"  multiline rows={5}
                                sx={{fontFamily:"'Gothic A1', sans-serif",color: "#294E69",width:"100%",
                                '& .MuiOutlinedInput-root': {
                                 backgroundColor:"white", 
                                 padding:"5px px",
                                 borderRadius:"10px",                        
                                  '& input': {
                                    '&::placeholder': {color: '#294E69',opacity: 1,fontFamily:"'Gothic A1', sans-serif"},
                                  },
                                  '&:hover fieldset': {borderColor: 'white', },                             
                                  '&.Mui-focused fieldset': {borderColor: '#294E69',},
                                },}}
                              />
                             </Box>
  
                            <Button sx={{backgroundColor:"#DF3E26",padding:"15px 30px",borderRadius:"10px",color:"white"}}>Submit Interest</Button>
                        </Box>

                   </Grid>
                   <Grid item xs={12} md={10} lg={6}>
                        <Box sx={{paddingLeft:{lg:"60px",md:"60px",xs:"0px"}}}>
                          <Typography sx={{fontSize:"40px",fontFamily:"Public Sans', sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}} fontWeight={600}>Get In Touch</Typography>
                          <Box py={2}>
                              <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>If appropriate, reach out via phone to introduce yourself and discuss </Typography>
                              <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>potential opportunities.</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Grid item xs={12} container>
                                <Grid item xs={12} md={6} lg={6} py={0} display={"flex"} justifyContent={"center"}>
                                    <Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={call} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Phone</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>+91 63527 79246</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={map} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Address</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>Surat, India</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={mart} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>India mart</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={epc} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>EPC</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={dollar} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>The Dollar Business</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} py={0} display={"flex"} justifyContent={"center"}>
                                     <Box>
                                     <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={mail} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Mail</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={insta} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Instagram</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={trade} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Trade India</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={embassy} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Indian embassy</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"Prompt Sans', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                     </Box>
                                </Grid>                               
                          </Grid>
                        </Box>
                   </Grid>
              </Grid>
              <Box pt={10}>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7700091894762!2d69.70177607934566!3d22.7367883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39572bfcd4c49b8f%3A0xac6159b9ef8cc470!2sMundra%20port!5e0!3m2!1sen!2sin!4v1725864731114!5m2!1sen!2sin" width="100%" height="650"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Box>
        </Container>
    </Box>
  );
}

export default Inquiry;
