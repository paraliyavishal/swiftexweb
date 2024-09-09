import React from 'react';
import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import disposableimg1 from '../../../assets/images/products/disposableimg1.png';
import disposableimg2 from '../../../assets/images/products/disposableimg2.png';
import disposableimg3 from '../../../assets/images/products/disposableimg3.png';
import disposableimg4 from '../../../assets/images/products/disposableimg4.png';
import disposableimg5 from '../../../assets/images/products/disposableimg5.png';

const StyledCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '380px',
  borderRadius: '18px',
  overflow: 'hidden',
  marginBottom: '26px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  '& .overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-0%, -0%) scale(0)',
      borderRadius: '18px',
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(-45deg, #e13f2680 0%, #e13f2680 100%)',
      transition: 'transform 0.7s ease',
    },
    '&:hover::after': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
  '&:hover .overlay': {
    opacity: 1,
    pointerEvents: 'auto',
  },
  '&:hover .card-btn': {
    opacity: 1,
    transform: 'scale(1)',
  },
}));

const CardButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: '45%', // Center vertically
  left: '38%',
  transform: 'translate(-50%, 50%)', // Center horizontally and adjust vertical position
  fontWeight: 600,
  padding: '10px 20px',
  fontSize: '14px',
  backgroundColor: 'transparent',
  color: '#ffffff',
  border:"2px solid white",
  borderRadius: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 1,
  opacity: 0,
  boxShadow: 'none', // Remove the shadow
  transition: 'all 0.9s cubic-bezier(0.23, 1, 0.320, 1)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

function DisposableItem() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '100px' }}>
        <Typography sx={{ fontSize: '52px', fontWeight: '600', fontFamily: 'Public Sans' }}>
          Disposable Item
        </Typography>
      </Box>
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          {[disposableimg1, disposableimg2, disposableimg3, disposableimg4, disposableimg5].map((img, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <StyledCard>
                <Box
                  component="img"
                  src={img}
                  alt={`Disposable Item ${index + 1}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <CardButton className="card-btn">
                  Read More...
                  {/* <EastIcon fontSize='large' /> */}
                </CardButton>
                <Box className="overlay" />
              </StyledCard>
              <Box sx={{marginLeft:'15px'}}>
                <Typography sx={{ fontFamily: 'Public Sans', fontSize: '28px', fontWeight: '600', }}>
                  {['Bowl', 'Plate', 'Spoon', 'Fork', 'Lorem'][index]}
                </Typography>
                <Typography sx={{ borderBottom: '5px solid black', width: '16%', marginBottom: '50px'}} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default DisposableItem


