import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import Provide1 from '../../assets/images/home/Provide1.png'
import Provide2 from '../../assets/images/home/Provide2.png'
import Provide3 from '../../assets/images/home/Provide3.png'

function ProvideLogistics() {
  return (
    <Box>
      <Box>
            <Box sx={{textAlign: 'center',padding:"70px 0px"}}>
                <Typography sx={{ fontSize: "52px", fontWeight: "600", fontFamily: "Public Sans" }}>Provide Logistics </Typography>
                <Typography sx={{ fontSize: "52px", fontWeight: "600", fontFamily: "Public Sans" }}>Services</Typography>
            </Box>
            <Container maxWidth='xl'>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative",
                            marginBottom: "20px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={Provide1}
                                alt="Image description"
                                sx={{ objectFit: "cover" }} 
                            />
                            {/* Button positioned at the bottom right */}
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute",
                                    bottom: "12px",
                                    right: "1px",
                                    zIndex: 1,
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Road Fright Shipping</Typography>
                        <Typography sx={{ color: "#00000080", fontFamily: "Prompt", fontSize: "18px", fontWeight: "400" }}>
                            Road freight shipping is a vital component of the
                            logistics and transportation industry, providing
                            flexible and reliable solutions................
                        </Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative",
                            marginBottom: "20px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={Provide2}
                                alt="Image description"
                                sx={{ objectFit: "cover" }}
                            />
                            {/* Button positioned at the bottom right */}
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute", 
                                    bottom: "12px", 
                                    right: "1px",
                                    zIndex: 1,
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: " ", fontSize: "28px", fontWeight: "600" }}>Air Fright Shipping</Typography>
                        <Typography sx={{ color: "#00000080", fontFamily: "Prompt", fontSize: "18px", fontWeight: "400" }}>
                            Air freight shipping is a crucial component of the
                            global logistics network, enabling the rapid
                            transportation of goods across vast distances.
                        </Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative", 
                            marginBottom: "20px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={Provide3}
                                alt="Image description"
                                sx={{ objectFit: "cover" }} 
                            />
                            {/* Button positioned at the bottom right */}
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute", 
                                    bottom: "12px", 
                                    right: "1px", 
                                    zIndex: 1,
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "'Public Sans',sans-serif", fontSize: "28px", fontWeight: "600" }}>Ocean Fright Shipping</Typography>
                        <Typography sx={{ color: "#00000080", fontFamily: "Prompt", fontSize: "18px", fontWeight: "400" }}>
                            Ocean freight shipping is a fundamental component
                            of global trade, providing a cost-effective and
                            efficient means of transporting........
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    </Box>
  );
}

export default ProvideLogistics;
