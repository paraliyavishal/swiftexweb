import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import work1 from '../../assets/images/services/workimg1.png'
import work2 from '../../assets/images/services/workimg2.png'

function Howwework() {
    return (
        <Box marginTop={'130px'} marginBottom={'100px'}>
            <Container maxWidth='xl'>
                <Grid container item xs={12} spacing={4}>
                    <Grid
                        item
                        xs={12} // Full width on small screens
                        sm={12} // Half width on medium screens and up
                        md={12}
                        lg={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center content vertically
                            alignItems: '', // Center content horizontally
                            marginBottom: '50px',
                            width: '100%',
                            height: 'auto',// Full viewport height
                            overflow: '',
                            position: 'relative',
                            '@media (max-width: 310px)': {
                                height: 'auto', // Adjust height for very small screens
                            },
                        }}
                    >
                        <img
                            src={work1}
                            alt=''
                            style={{
                                width: '70%', // Full width of the container
                                height: 'auto',
                                objectFit: 'cover',
                                display: 'block',
                                maxHeight: '100%', // Ensure the image does not overflow the container
                                borderRadius:'10px'
                            }}
                        />
                        <img
                            src={work2}
                            alt=''
                            style={{
                                position: 'absolute',
                                objectFit: 'cover',
                                bottom: '-80px', // Space from bottom
                                right: '10px',  // Space from right
                                width: '50%',   // Adjust size to make it smaller
                                maxWidth: '400px', // Optionally set a max-width to ensure it doesn't get too large
                                height: 'auto',
                                borderRadius:'10px'
                            }}
                        />
                    </Grid>




                    <Grid item xs={12} sm={12} md={12} lg={6} sx={{width:'100%'}}>
                            <Typography sx={{fontSize:"16px",fontFamily:"Public Sans"}}>How We Work...</Typography>
                            <Typography sx={{fontSize:"30px",fontFamily:'Public Sans',fontWeight:'700'}}>Our Services</Typography>

                            <Typography sx={{fontSize:"24px",fontFamily:"Public Sans",fontWeight:"600"}}>We are provide Import and Export Services</Typography>
                            <Typography sx={{fontSize:"18px",fontFamily:"Public Sans",marginTop:'24px',marginBottom:'30px'}}>
                                The company identifies products in foreign markets that have
                                potential demand in their home country. They assess factors
                                like price, quality, and availability. They also determine which
                                domestically produced goods have strong potential in foreign
                                markets.
                            </Typography>

                            <Typography sx={{fontSize:"24px",fontFamily:"Public Sans",fontWeight:"600"}} >Import Services</Typography>
                            <Typography sx={{fontSize:"18px",fontFamily:"Public Sans",marginTop:'24px',marginBottom:'30px'}}>
                                Import services encompass a range of essential activities designed
                                to facilitate the smooth and efficient importation of goods. These
                                services typically start with customs brokerage, where experts
                                handle the clearance of goods through customs, ensuring all
                                necessary documents are prepared and that the importer
                                complies with local regulations. Freight forwarding is another
                                critical service, 
                            </Typography>

                            <Typography sx={{fontSize:"24px",fontFamily:"Public Sans",fontWeight:"600"}} >Export Services</Typography>
                            <Typography sx={{fontSize:"18px",fontFamily:"Public Sans",marginTop:'24px',marginBottom:'30px'}}>
                                Export services are a comprehensive set of offerings that support
                                businesses in selling and shipping goods to international markets.
                                These services typically begin with market research and advisory,
                                where experts analyze potential markets, assess demand, and
                                provide insights into the competitive landscape.
                            </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Howwework;
