import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import companyabout from '../../assets/images/aboutus/companyabout.png'
import Company from '../../assets/images/aboutus/companyanimation.json'
import Lottie from 'lottie-react'


function AboutCompany() {
    return (
        <Box    sx={{marginBottom:"100px"}}>
            <Container maxWidth='xl' >
                <Grid container item xs={12} spacing={3}  >
                    <Grid item xs={12} sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>
                        {/* <img src={companyabout} alt='' width={'100%'} sx={{padding:"30px 0px"}}/> */}
                        <Lottie animationData={Company} width={'100%'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} >
                        <Typography sx={{fontSize:"40px",fontFamily:"Prompt",fontWeight:"600",marginBottom:"40px"}}>About Company</Typography>
                        <Typography sx={{fontSize:"20px",fontFamily:"Prompt",marginBottom:"36px"}}>
                            “Swift Ex” might source products from local manufacturers or produce goods in-house. These products
                            could range from textiles, electronics, food items, machinery, or other consumer goods.
                        </Typography>
                        <Typography sx={{fontSize:"20px",fontFamily:"Prompt",marginBottom:"20px"}}>Exporting Indian spices, nuts, vegetables, handicrafts and coir based products. Having ventured into
                            the activity of export and import, the organization has emerged as one of the key players in exporting
                            agree based commodities based on the requirement of clients.Exporting Indian spices, nuts, vegetables, handicrafts and coir based products. Having ventured into
                            the activity of export and import, the organization has emerged as one of the key players in exporting
                            agree based commodities based on the requirement of clients.</Typography>
                        <Typography sx={{fontSize:"20px",fontFamily:"Prompt"}}>
                            Our food products have satisfied customers all over the world with its incredible quality, extraordinary
                            taste and rich flavor. We are engaged in supplying spices, honey, herbs, dry fruits, millets and freshfruits
                            all under-one-roof. At the core of our success is our superior infrastructure. Our company is equipped with best-of-the-world technologies and has modern facilities to offer you international quality standards
                            across all of our product range.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutCompany
