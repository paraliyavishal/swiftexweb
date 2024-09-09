// import React, { useEffect, useRef } from 'react';
// import { styled } from '@mui/material/styles';
// import { gsap } from 'gsap';
// import { Box } from '@mui/material';
// import logo from '../../assets/images/home/mainlogo.png';

// // Styled component for the custom cursor
// const Flair = styled('div')(({ theme }) => ({
//   width: '100px',
//   height: '100px',
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   pointerEvents: 'none',
//   cursor:"zoom-in",
//   background: `url(${logo}) no-repeat center center`, // Set image as background
//   backgroundSize: 'contain', // Ensure the image scales correctly
//   borderRadius: '50%',
//   zIndex:'2',
//   transform: 'translate(-50%, -50%)', // Center the cursor
// }));

// function Cursor() {
//   const flairRef = useRef(null);

//   useEffect(() => {
//     const flair = flairRef.current;
//     gsap.set(flair, { xPercent: -50, yPercent: -50 });

//     const xTo = gsap.quickTo(flair, 'x', { duration: 0.6, ease: 'power3' });
//     const yTo = gsap.quickTo(flair, 'y', { duration: 0.6, ease: 'power3' });

//     const handleMouseMove = (e) => {
//       xTo(e.clientX);
//       yTo(e.clientY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <Box>
//       <Flair ref={flairRef} />
//     </Box>
//   );
// }

// export default Cursor;



import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import logo from '../../assets/images/home/mainlogo.png';

// Styled component for the custom cursor
const Flair = styled('div')({
  width: '100px',
  height: '100px',
  position: 'fixed',
  top: '0',
  left: '0',
  pointerEvents: 'none', // Ensure the cursor does not interfere with other elements
  cursor: 'none', // Hide the default cursor
  background: `url(${logo}) no-repeat center center`, // Set image as background
  backgroundSize: 'contain', // Ensure the image scales correctly
  borderRadius: '50%',
  zIndex: '1000', // Ensure it is above other content
  transform: 'translate(-50%, -50%)', // Center the cursor on the pointer
});

function Cursor() {
  const flairRef = useRef(null);

  useEffect(() => {
    const flair = flairRef.current;
    gsap.set(flair, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(flair, 'x', { duration: 0.3, ease: 'power3' });
    const yTo = gsap.quickTo(flair, 'y', { duration: 0.3, ease: 'power3' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box>
      <Flair ref={flairRef} />
    </Box>
  );
}

export default Cursor;



