import { Box, colors, Container, Typography } from '@mui/material';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import EastIcon from '@mui/icons-material/East';
import bgimg from '../../assets/images/aboutus/heroimg.png'


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Herosection() {

  const breadcrumbs = [
    <Link underline="hover" key="1" sx={{color:"#ffff",fontSize:"25px",fontFamily:"Public Sans"}} color="#ffff" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="3" sx={{ color:'#ffff',fontSize:"25px",fontFamily:"Public Sans"}}>
     About Us
    </Typography>,
  ];

  return (
    <Box>
      <Box sx={{ backgroundImage: `url(${bgimg})`, width: "100%", height: "100vh", backgroundRepeat: "no-repeat" }}>
        <Container maxWidth="xl" sx={{color:"red"}}>
          <Typography sx={{ fontSize: "52px", fontFamily: "Public Sans", fontWeight: "600", color: "#fff" }}>About Us</Typography>
          <Box sx={{}}>
            <Stack spacing={2}>
              <Breadcrumbs
                
                separator={<EastIcon fontSize="medium" sx={{color:"#DF3E26",}} />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Box>

        </Container>

      </Box>
    </Box>
  );
}

export default Herosection;
