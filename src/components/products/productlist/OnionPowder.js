import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import onionimg1 from '../../../assets/images/products/servicesimg1.png'
import onionimg2 from '../../../assets/images/products/servicesimg2.png'
import onionimg3 from '../../../assets/images/products/servicesimg3.png'

function OnionPowder() {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', textAlign: 'center', marginBottom: "100px" }}>
                <Typography sx={{ fontSize: "52px", fontWeight: "600", fontFamily: "Public Sans" }}>
                    Onion Powder
                </Typography>
            </Box>
            <Container maxWidth='xl'>
                <Grid container spacing={3}>
                    {/* Onion Item 1 */}
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative",
                            marginBottom: "26px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={onionimg1}
                                alt="Image description"
                                sx={{ objectFit: "cover" }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute",
                                    bottom: "12px",
                                    right: "12px",
                                    zIndex: 1,
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Red Onion Powder</Typography>
                        <Typography sx={{ borderBottom: "5px solid black", width: "16%", marginBottom: "50px" }}></Typography>
                    </Grid>

                    {/* Onion Item 2 */}
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative",
                            marginBottom: "26px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={onionimg2}
                                alt="Image description"
                                sx={{ objectFit: "cover" }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute",
                                    bottom: "12px",
                                    right: "12px",
                                    zIndex: 1,
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>White Onion Powder</Typography>
                        <Typography sx={{ borderBottom: "5px solid black", width: "16%", marginBottom: "50px" }}></Typography>
                    </Grid>

                    {/* Onion Item 3 */}
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Box sx={{
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative",
                            marginBottom: "26px"
                        }}>
                            <CardMedia
                                component="img"
                                height="380"
                                src={onionimg3}
                                alt="Image description"
                                sx={{ objectFit: "cover" }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    boxShadow: "0 0 0",
                                    bgcolor: "transparent",
                                    position: "absolute",
                                    bottom: "12px",
                                    right: "12px",
                                    zIndex: 1,
                                    transition: "0.7s",
                                    "&:hover": { boxShadow: "0 0 0", color: "#DF3E26", right: "-10px" }
                                }}
                            >
                                <EastIcon fontSize='large' />
                            </Button>
                        </Box>
                        <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Dehydrated Onion Powder</Typography>
                        <Typography sx={{ borderBottom: "5px solid black", width: "16%", marginBottom: "50px" }}></Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OnionPowder
