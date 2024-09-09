import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import service from '../../assets/images/home/service.png'
import service1 from '../../assets/images/home/service1.png'
import service2 from '../../assets/images/home/service2.png'
import service3 from '../../assets/images/home/service3.png'
import service4 from '../../assets/images/home/service4.png'
import serviceLine from '../../assets/images/home/service-Line.png'


function ServiceProcess() {


  return (
    <Box py={15}>
         <Container maxWidth='xl'>
              <Box>
                    <Box py={5}>
                       <Typography sx={{fontSize:{lg:"51px",md:"36px",xs:"28px"},fontWeight:"600",color:"balck",fontFamily:"'Public Sans',sans-serif",textAlign:"center"}}>Our Service Process</Typography>
                       <Typography sx={{fontSize:{lg:"25px",md:"24px",xs:"18px"},fontWeight:"400",color:"#B2BCBF",fontFamily:"'Prompt',sans-serif",textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={1} paddingTop={10}>

                        <Box sx={{width: "260px",height:"260px",}}>
                            <Box sx={{backgroundImage: `url(${service})`,width: "100%",height:"100%",backgroundSize: "cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>   
                                <Box>
                                    <Typography textAlign={"center"} sx={{fontSize:"48px",fontWeight:"600",color:"white",marginBottom:"20px"}}>1</Typography>
                                    <img src={service1} alt="" width={"120px"} height={"120px"} style={{paddingBottom:"10px"}}/>
                                </Box>
                            </Box>
                            <Typography sx={{textAlign:"center",fontSize:{lg:"26px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",paddingTop:"20px"}}>Select Freight</Typography>
                        </Box>
                        <Box>
                            <img src={serviceLine} alt="" />
                        </Box>

                        <Box sx={{width: "260px",height:"260px",}}>
                            <Box sx={{backgroundImage: `url(${service})`,width: "100%",height:"100%",backgroundSize: "cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>   
                                <Box>
                                    <Typography textAlign={"center"} sx={{fontSize:"48px",fontWeight:"600",color:"white",marginBottom:"20px"}}>2</Typography>
                                    <img src={service2} alt="" width={"120px"} height={"120px"} style={{paddingBottom:"10px"}}/>
                                </Box>
                            </Box>
                            <Typography sx={{textAlign:"center",fontSize:{lg:"26px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",paddingTop:"20px"}}>Create Invoice</Typography>
                        </Box>
                        <Box>
                            <img src={serviceLine} alt="" />
                        </Box>

                        <Box sx={{width: "260px",height:"260px",}}>
                            <Box sx={{backgroundImage: `url(${service})`,width: "100%",height:"100%",backgroundSize: "cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>   
                                <Box>
                                    <Typography textAlign={"center"} sx={{fontSize:"48px",fontWeight:"600",color:"white",marginBottom:"20px"}}>3</Typography>
                                    <img src={service3} alt="" width={"120px"} height={"120px"} style={{paddingBottom:"10px"}}/>
                                </Box>
                            </Box>
                            <Typography sx={{textAlign:"center",fontSize:{lg:"26px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",paddingTop:"20px"}}>Secure Payment</Typography>
                        </Box>
                        <Box>
                            <img src={serviceLine} alt="" />
                        </Box>

                        <Box sx={{width: "260px",height:"260px",}}>
                            <Box sx={{backgroundImage: `url(${service})`,width: "100%",height:"100%",backgroundSize: "cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>   
                                <Box>
                                    <Typography textAlign={"center"} sx={{fontSize:"48px",fontWeight:"600",color:"white",marginBottom:"20px"}}>4</Typography>
                                    <img src={service4} alt="" width={"120px"} height={"120px"} style={{paddingBottom:"10px"}}/>
                                </Box>
                            </Box>
                            <Typography sx={{textAlign:"center",fontSize:{lg:"26px",md:"24px",xs:"18px"},fontFamily:"'Prompt',sans-serif",paddingTop:"20px"}}>Fast Delivery</Typography>
                        </Box>
                    </Box>
              </Box>
         </Container>
    </Box>
  );
}

export default ServiceProcess;
