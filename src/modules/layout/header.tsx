import { Grid } from '@mui/material';
/* import { useMediaQuery } from '@mui/material'; */
import '../../assets/styles/header.css';
import searchIcon from '../../assets/svg/search.svg';
import userIcon from '../../assets/svg/user.svg';

/* function SmallDimensions() {
    const smallScreen = useMediaQuery("(max-width: 600px)")
} */

const MyHeader  = () => {

    return (
        <>

                <Grid>
                    <header>
                        
                        <Grid item lg={4} md={4} sm={8}>
                        <div className="contBuscador">
                                <img className='imgInp' src={searchIcon} alt="icono_Buscador"/>
                                <input type="text" className='inpBuscador'> 
                                </input>
                        </div>
                        </Grid>
                        <nav>
                            <a href="/"> Novedades </a>
                            <a href="/"> Ofertas </a>
                            <a href="/"> Más populares </a>
                        </nav>    
                        <div className='contUser'>
                                <img src={userIcon} alt="icono_Usuario"/>
                        </div>
                    </header>
                </Grid>
                
        </>
    );
};

export default MyHeader;