
import './App.css';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

import MyHeader from './modules/layout/header';
import MySlider from './modules/slider/slider';
import MyTitle from './modules/Title';

const App = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
  
  return (
    <>
        <Grid container alignItems="center" justifyContent="center">
          <MyHeader smallScreen={smallScreen} mediumScreen={mediumScreen} />
        </Grid>
        

        <MyTitle smallScreen={smallScreen} mediumScreen={mediumScreen} texto={'Novedades'} />
        {/* <Box sx={{ marginTop: smallScreen ? '2rem' : '3rem', fontSize: smallScreen ? '2rem' : '3rem', fontWeight: '700', color: '#fff', textAlign: 'center'  }}>
          <h1 className='TitleSection' > Novedades </h1>
        </Box> */}

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

        <MyTitle smallScreen={smallScreen} mediumScreen={mediumScreen} texto={'Más populares'} />


    </>
  )
};

export default App;
