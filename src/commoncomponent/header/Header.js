import { Box, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import headerimg from '../../assets/images/home/image 4.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <Box sx={{ backgroundColor: "#21324D" }}>
      <Box
        py={1}
        mx={{ xs: 2, sm: 4, md: 10 }} 
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        
        <Box sx={{ color: "white", textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "'Public Sans', sans-serif",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <LocalPostOfficeIcon fontSize="large" sx={{ alignItems: "center" }} /> 
            info@swiftexinternational.com
          </Typography>
        </Box>

        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: { xs: "center", sm: "center" },
            my: { xs: 2, sm: 0 }, 
          }}
        >
          <img src={headerimg} alt="Registered Member" style={{ width: '40px', height: 'auto' }} />
          <Typography sx={{ fontFamily: "'Public Sans', sans-serif" }}>Registered Member</Typography>
        </Box>

       
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={{ xs: "center", sm: "flex-end" }} 
          flexWrap="wrap" 
        >
          <Box sx={{ backgroundColor: "white", padding: "2px 2px", borderRadius: "5px", display: "flex" }}>
            <TwitterIcon sx={{ color: "#21324D" }} />
          </Box>
          <Box sx={{ backgroundColor: "white", padding: "2px 2px", borderRadius: "5px", display: "flex" }}>
            <InstagramIcon sx={{ color: "#21324D" }} />
          </Box>
          <Box sx={{ backgroundColor: "white", padding: "2px 3px", borderRadius: "5px", display: "flex" }}>
            <i className="fa-brands fa-linkedin-in" style={{ color: "#21324D", fontSize: "1.5rem" }}></i>
          </Box>
          <Box sx={{ backgroundColor: "white", padding: "2px 6px", borderRadius: "5px", display: "flex" }}>
            <i className="fa-brands fa-facebook-f" style={{ color: "#21324D", fontSize: "1.5rem" }}></i>
          </Box>

          <TextField
            id="outlined-password-input"
            value={"Global"}
            variant="outlined"
            sx={{
              width: { xs: "100%", sm: "50%" }, 
              color: "white", 
              '& .MuiOutlinedInput-root': {
                '& input': {
                  textAlign: 'center', 
                  color: 'white', 
                },
                '& fieldset': {
                  borderColor: 'white',
                  borderRadius: "50px"
                },
                '&:hover fieldset': {
                  borderColor: 'white', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', 
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fa-solid fa-globe" style={{ color: "white", fontSize: "1.5rem" }}></i>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <KeyboardArrowDownIcon sx={{ color: "white", fontSize: "2rem" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
