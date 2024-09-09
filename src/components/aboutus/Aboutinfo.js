import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import bgimg from '../../assets/images/aboutus/infobgimg.png'
import logo1 from '../../assets/images/aboutus/logo1.png'
import logo2 from '../../assets/images/aboutus/logo2.png'
import logo3 from '../../assets/images/aboutus/logo3.png'


function Aboutinfo() {
    return (
        <Box marginTop={3}>
            <Container maxWidth='xl'>
                <Box sx={{ backgroundImage:`url(${bgimg})`, objectFit: "cover", backgroundSize: "cover",borderRadius:"30px",padding:"30px" ,backgroundRepeat: "no-repeat", width: "100%" }}>
                    <Grid container item xs={12} color={"#FFFF"} >
                        <Grid item xs={12} sm={6} md={4} lg={4} padding={6} sx={{ textAlign: 'center' }}>
                            <Box>
                                <img src={logo1} alt='' />
                                <Typography sx={{ fontSize: "30px", fontFamily: "Public Sans", fontWeight: "700",paddingTop:"18px" ,marginBottom: "28px" }}>Trust Worthiness</Typography>
                                <Typography sx={{ color: "#FFFFFF80", fontFamily: "Prompt", }}>
                                    People may feel that trust is no longer valuable in
                                    relationships or business dealings, particularly if they
                                    have experienced betrayal or dishonesty.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid itemxs={12} sm={6} md={4} lg={4} padding={6} sx={{ textAlign: 'center' }}>
                            <Box>
                                <img src={logo2} alt='' />
                                <Typography sx={{ fontSize: "30px", fontFamily: "Public Sans", fontWeight: "700", marginBottom: "28px" }}>High Quality</Typography>
                                <Typography sx={{ color: "#FFFFFF80", fontFamily: "Prompt", }}>
                                    High-quality items are designed to withstand wear and
                                    tear over time, providing long-term use and reducing
                                    the need for frequent replacements.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} padding={6} sx={{ textAlign: 'center' }}>
                            <Box>
                                <img src={logo3} alt='' />
                                <Typography sx={{ fontSize: "30px", fontFamily: "Public Sans", fontWeight: "700", marginBottom: "28px" }}>Worldwide Services</Typography>
                                <Typography sx={{ color: "#FFFFFF80", fontFamily: "Prompt", }}>
                                    worldwide services leverage technology to deliver their offerings,
                                    such as e-commerce websites, mobile apps, and digital marketing
                                    tools.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Aboutinfo;
