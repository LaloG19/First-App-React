import React, { useState } from 'react';
import { Grid, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import '../../assets/styles/header.css';
import searchIcon from '../../assets/svg/search.svg';
import userIcon from '../../assets/svg/user.svg';
import MenuIcon from '@mui/icons-material/Menu';

const MyHeader = (props: any) => {
    const smallScreen = useMediaQuery("(max-width: 600px)");
    const mediumScreen = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
    const [searchActive, setSearchActive] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <header className={`header ${smallScreen ? 'header-small' : mediumScreen ? 'header-medium' : 'header-large'}`}>
            <Grid container alignItems="center" justifyContent="space-between">
                {(smallScreen && !searchActive) && (
                    <Grid item>
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon style={{ color: '#fff', fontSize: '2rem' }} />
                        </IconButton>
                        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <List>
                                <ListItem button component="a" href="/">
                                    <ListItemText primary="Novedades" />
                                </ListItem>
                                <ListItem button component="a" href="/">
                                    <ListItemText primary="Ofertas" />
                                </ListItem>
                                <ListItem button component="a" href="/">
                                    <ListItemText primary="Más populares" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Grid>
                )}
                <Grid item xs={smallScreen ? 6 : 'auto'} className={`search-container ${searchActive ? 'search-active' : ''}`}>
                    <div className="contBuscador" onClick={() => smallScreen && setSearchActive(!searchActive)}>
                        <img src={searchIcon} alt="Buscar" />
                        {!smallScreen || searchActive ? <input type="text" className="inpBuscador" /> : null}
                    </div>
                </Grid>
                {!smallScreen && (
                    <Grid item className={`nav-container ${searchActive && smallScreen ? 'hidden' : ''}`}>
                        <nav className={smallScreen ? 'nav-small' : mediumScreen ? 'nav-mid' : ''}>
                            <a href="/">Novedades</a>
                            <a href="/">Ofertas</a>
                            <a href="/">Más populares</a>
                        </nav>
                    </Grid>
                )}
                <Grid item className={`user-container ${searchActive && smallScreen ? 'hidden' : ''}`}>
                    <div className="contUser">
                        <img src={userIcon} alt="Usuario" className={smallScreen ? 'small-icon' : ''} />
                    </div>
                </Grid>
            </Grid>
        </header>
    );
};

export default MyHeader;