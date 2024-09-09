import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import serviceimg1 from '../../assets/images/services/servicesimg1.png'
import serviceimg2 from '../../assets/images/services/servicesimg2.png'
import serviceimg3 from '../../assets/images/services/servicesimg3.png'

function Ourservice() {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', textAlign: 'center',marginBottom:"100px"}}>
                <Typography sx={{ fontSize: "52px", fontWeight: "600", fontFamily: "Public Sans" }}>Our Services</Typography>
            </Box>
            <Container maxWidth='xl'>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative", // Add relative positioning to the Box
                            marginBottom: "40px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={serviceimg1}
                                alt="Image description"
                                sx={{ objectFit: "cover" }} // Apply objectFit to the CardMedia component
                            />
                            {/* Button positioned at the bottom right */}
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute", // Position absolutely within the Box
                                    bottom: "12px", // Adjust as needed
                                    right: "1px", // Adjust as needed
                                    zIndex: 1,// Ensure button is in front of the image
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
                            position: "relative", // Add relative positioning to the Box
                            marginBottom: "40px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={serviceimg2}
                                alt="Image description"
                                sx={{ objectFit: "cover" }} // Apply objectFit to the CardMedia component
                            />
                            {/* Button positioned at the bottom right */}
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute", // Position absolutely within the Box
                                    bottom: "12px", // Adjust as needed
                                    right: "1px", // Adjust as needed
                                    zIndex: 1,// Ensure button is in front of the image
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Air Fright Shipping</Typography>
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
                            position: "relative", // Add relative positioning to the Box
                            marginBottom: "40px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={serviceimg3}
                                alt="Image description"
                                sx={{ objectFit: "cover" }} // Apply objectFit to the CardMedia component
                            />
                            {/* Button positioned at the bottom right */}
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute", // Position absolutely within the Box
                                    bottom: "12px", // Adjust as needed
                                    right: "1px", // Adjust as needed
                                    zIndex: 1,// Ensure button is in front of the image
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Ocean Fright Shipping</Typography>
                        <Typography sx={{ color: "#00000080", fontFamily: "Prompt", fontSize: "18px", fontWeight: "400" }}>
                            Ocean freight shipping is a fundamental component
                            of global trade, providing a cost-effective and
                            efficient means of transporting........
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    )
}

export default Ourservice
