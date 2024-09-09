import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import productimg1 from '../../assets/images/products/servicesimg1.png'
import productimg2 from '../../assets/images/products/servicesimg2.png'
import productimg3 from '../../assets/images/products/servicesimg3.png'
import productimg4 from '../../assets/images/products/servicesimg1.png'
import productimg5 from '../../assets/images/products/servicesimg2.png'

function OurProduct() {
  return (
      <Box>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', textAlign: 'center', marginBottom: "100px" }}>
        <Typography sx={{ fontSize: "52px", fontWeight: "600", fontFamily: "Public Sans" }}>Our Product
        </Typography>
    </Box>
    <Container maxWidth='xl'>
        <Grid container spacing={3}>
            {/* Product Item 1 */}
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
                        src={productimg1}
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
                <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Onion Powder</Typography>
                <Typography sx={{ borderBottom:"5px solid black",width:"16%",marginBottom:"50px"}}></Typography>
            </Grid>

            {/* Product Item 2 */}
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
                        src={productimg2}
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
                <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Garlic Powder</Typography>
                <Typography sx={{ borderBottom:"5px solid black",width:"16%",marginBottom:"50px"}}></Typography>
            </Grid>

            {/* Product Item 3 */}
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
                        src={productimg3}
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
                <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Aluminium Foil</Typography>
                <Typography sx={{ borderBottom:"5px solid black",width:"16%",marginBottom:"50px"}}></Typography>
            </Grid>

            {/* Product Item 4 */}
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
                        src={productimg4}
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
                <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Disposable Item</Typography>
                <Typography sx={{ borderBottom:"5px solid black",width:"16%",marginBottom:"50px"}}></Typography>
            </Grid>

            {/* Product Item 5 */}
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
                        src={productimg5}
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
                <Typography sx={{ fontFamily: "Public Sans", fontSize: "28px", fontWeight: "600" }}>Row Cotton Fabric</Typography>
                <Typography sx={{ borderBottom:"5px solid black",width:"16%",marginBottom:"50px"}}></Typography>
            </Grid>
        </Grid>
    </Container>
</Box>
  )
}

export default OurProduct
