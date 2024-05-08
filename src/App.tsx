import React, { useState } from 'react';
import { TextField, Typography, CircularProgress, Button, Box, Stack } from '@mui/material';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [displayText, setDisplayText] = useState("First React App");

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const filledBasicElement = document.getElementById("filled-basic");
      if (filledBasicElement instanceof HTMLInputElement && filledBasicElement.value) {
        setDisplayText(filledBasicElement.value);
        filledBasicElement.value = '';
      }
    }, 500);
  };

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#e5e5e5',
      }}>
        <Stack sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20rem',
          backgroundColor: '#f5f5f5',
          padding: '6rem',
          borderRadius: '2rem',
          boxShadow: '0.5rem 0.5rem 0.5rem #999'
        }}>
          <Typography variant="h1" gutterBottom sx={{ color: '#61DAFB', textDecoration: 'underline'}} >{displayText}</Typography>
          <TextField id="filled-basic" label="Titulo" variant="filled" sx={{ marginBottom: '2rem', width: '40rem', borderRadius: '2rem', color: '#fff' }} onKeyDown={handleKeyPress}/>
          {!loading && <Button variant="contained" onClick={handleButtonClick} sx={{ marginBottom: '2rem', backgroundColor: '#3b96af' }}> Cambiar titulo </Button>}
          {loading && <CircularProgress color="success" sx={{ marginTop: '2rem'}} />}
        </Stack>

      </Box>
    </>
  )
};

export default App;
