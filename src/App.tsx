import React from 'react';
import './App.css';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyTable from './modules/table/table';

import MyHeader from './modules/layout/header';
import MySlider from './modules/slider/slider';
import MyTitle from './modules/Title';
import MyPlatforms from './modules/Platforms';
import MyGames from './modules/Games';
import MyGameSelected from './modules/gameSelected/gameSelected';

import Popular1 from './assets/img/populars/1.png';
import Popular2 from './assets/img/populars/2.png';
import Popular3 from './assets/img/populars/3.png';

const App = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
  const plat = [0, 1, 2, 3];
  
  return (
    <Router>
      <>
        <Grid container alignItems="center" justifyContent="center">
          <MyHeader smallScreen={smallScreen} mediumScreen={mediumScreen} />
        </Grid>

        <MyTitle smallScreen={smallScreen} mediumScreen={mediumScreen} texto={'Novedades'} />

        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', 
            width: smallScreen ? '20rem' : mediumScreen ? '40rem' : '80rem', 
            height: smallScreen ? '8rem' : mediumScreen ? '16rem' : '32rem',
            marginTop: smallScreen ? '1rem' : mediumScreen ? '2rem' : '3rem'
          }}>
            <MySlider/>
          </Box>
        </Grid>

        <MyTitle smallScreen={smallScreen} mediumScreen={mediumScreen} texto={'Ofertas'} />

        <Grid container alignItems="center" justifyContent="center">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', 
            width: smallScreen ? '20rem' : mediumScreen ? '40rem' : '80rem', 
            height: smallScreen ? '4rem' : mediumScreen ? '6rem' : '8rem',
            marginTop: smallScreen ? '1rem' : mediumScreen ? '2rem' : '3rem',
            backgroundColor: '#000', borderRadius: smallScreen ? '1rem' : '2rem' 
           }}>
            <MyPlatforms smallScreen={smallScreen} mediumScreen={mediumScreen} />
           </Box>
           <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', 
           width: smallScreen ? '20rem' : mediumScreen ? '40rem' : '80rem',
           marginTop: smallScreen ? '1rem' : mediumScreen ? '2rem' : '3rem',
           backgroundColor: '#000', borderRadius: smallScreen ? '1rem' : '2rem',
           gap: '1.5rem'
          }}>
            <MyGames smallScreen={smallScreen} mediumScreen={mediumScreen} plat={plat[0]}
            />
            <MyGames smallScreen={smallScreen} mediumScreen={mediumScreen} plat={plat[1]}
            />
            <MyGames smallScreen={smallScreen} mediumScreen={mediumScreen} plat={plat[2]}
            />
            <MyGames smallScreen={smallScreen} mediumScreen={mediumScreen} plat={plat[3]}
            />
           </Box>
        </Grid>

        <MyTitle smallScreen={smallScreen} mediumScreen={mediumScreen} texto={'Más populares'} />

        <Grid container alignItems="center" justifyContent="center">
          <Box sx={{ 
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', 
            gap: '4rem', width: smallScreen ? '20rem' : mediumScreen ? '40rem' : '80rem',
            marginTop: smallScreen ? '1rem' : mediumScreen ? '2rem' : '3rem',
             marginBottom: smallScreen ? '1rem' : mediumScreen ? '2rem' : '3rem',
          }}>
            <div style={{ display: 'flex', cursor: 'pointer' , width: `${mediumScreen ? '10rem' : '20rem'}`, height: `${mediumScreen ? '10rem' : '20rem'}` }}>
              <img src={Popular1} alt="1" />
            </div>
            <div style={{ display: 'flex', cursor: 'pointer' , width: `${mediumScreen ? '15rem' : '25rem'}`, height: `${mediumScreen ? '15rem' : '25rem'}` }}>
              <img src={Popular2} alt="2" />
            </div>
            <div style={{ display: 'flex', cursor: 'pointer' , width: `${mediumScreen ? '10rem' : '20rem'}`, height: `${mediumScreen ? '10rem' : '20rem'}` }}>
              <img src={Popular3} alt="3" />
            </div>
          </Box>
        </Grid>
        
        <MyTitle smallScreen={smallScreen} mediumScreen={mediumScreen} texto={'Table API'} />
          <MyTable/>

        <Routes>
          <Route path="/game" element={<MyGameSelected />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
