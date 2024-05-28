
import './App.css';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import MyHeader from './modules/layout/header';
import MySlider from './modules/slider/slider';
import MyTitle from './modules/Title';
import MyPlatforms from './modules/Platforms';
import MyGames from './modules/Games';
import MyGameSelected from './modules/gameSelected/gameSelected';

const App = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
  const plat = [0, 1, 2, 3];
  
  return (
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
            <div style={{ display: 'flex', width: `${mediumScreen ? '10rem' : '20rem'}`, height: `${mediumScreen ? '10rem' : '20rem'}`, backgroundColor: 'red' }}>
            </div>
            <div style={{ display: 'flex', width: `${mediumScreen ? '15rem' : '25rem'}`, height: `${mediumScreen ? '15rem' : '25rem'}`, backgroundColor: 'green' }}>
            </div>
            <div style={{ display: 'flex', width: `${mediumScreen ? '10rem' : '20rem'}`, height: `${mediumScreen ? '10rem' : '20rem'}`, backgroundColor: 'blue' }}>
            </div>
          </Box>
        </Grid>
        
        <MyGameSelected />

    </>
  )
};

export default App;
