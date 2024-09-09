import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/images/home/swift ex logo -1 2.png';
import { Grid } from '@mui/material';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <AppBar position='static' sx={{ backgroundColor: "white", padding: "10px 0px", boxShadow: "none" }}>
        <Box px={{ xs: 2, md: 10 }}>
          <Toolbar disableGutters>
            <Grid container item xs={12} alignItems="center">
              {/* Logo Section */}
              <Grid item xs={6} md={3} display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-start' }}>
                <Box sx={{ display: { xs: 'none', md: 'block' }, mr: 1 }}>
                  <img src={logo} alt="Logo" width={"250px"} />
                </Box>
                {/* Display logo in the center for mobile */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}>
                  <img src={logo} alt="Logo" width={"150px"} />
                </Box>
              </Grid>

              {/* Hamburger Menu Icon for Small Screens */}
              <Grid item xs={6} md={9} display="flex" justifyContent={{ xs: 'flex-end', md: 'flex-start' }} alignItems="center">
                <IconButton
                  size="large"
                  aria-label="open navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: 'black', display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About Us</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Services</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Products</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Blog</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Contact</Typography>
                  </MenuItem>
                </Menu>

                {/* Menu Items for Larger Screens */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                  <Typography
                    sx={{my: 2,color: '#DF3E26',display: 'block',fontWeight: 500,fontSize: '18px',
                    fontFamily: "'Public Sans', sans-serif",padding: '0px 30px',}}>Home</Typography>
                  <Typography
                    sx={{my: 2,color: 'black',display: 'block',fontWeight: 500,fontSize: '18px',
                    fontFamily: "'Public Sans', sans-serif",padding: '0px 30px',}}>About Us</Typography>
                  <Typography
                    sx={{my: 2,color: 'black',display: 'block',fontWeight: 500,fontSize: '18px',
                    fontFamily: "'Public Sans', sans-serif",padding: '0px 30px',}}>Services</Typography>
                  <Typography
                    sx={{my: 2,color: 'black',display: 'block',fontWeight: 500,fontSize: '18px',
                    fontFamily: "'Public Sans', sans-serif",padding: '0px 30px',}}>Products</Typography>
                  <Typography
                    sx={{my: 2,color: 'black',display: 'block',fontWeight: 500,fontSize: '18px',
                    fontFamily: "'Public Sans', sans-serif",padding: '0px 30px',}}>Blog</Typography>
                  <Typography sx={{ my: 2, color: 'black', display: 'block', fontWeight: 500, fontSize: '18px',
                   fontFamily: "'Public Sans', sans-serif", padding: '0px 30px',}} > Contact </Typography>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
