import '../assets/styles/platforms.css';
import MyGame from './Game';
import Xbox1 from '../assets/img/platforms/xbox/1.png';
import Xbox2 from '../assets/img/platforms/xbox/2.png';
import Xbox3 from '../assets/img/platforms/xbox/3.png';

import PS51 from '../assets/img/platforms/ps5/1.png';
import PS52 from '../assets/img/platforms/ps5/2.png';
import PS53 from '../assets/img/platforms/ps5/3.png';

import Switch1 from '../assets/img/platforms/switch/1.png';
import Switch2 from '../assets/img/platforms/switch/2.png';
import Switch3 from '../assets/img/platforms/switch/3.png';

import Steam1 from '../assets/img/platforms/steam/1.png';
import Steam2 from '../assets/img/platforms/steam/2.png';
import Steam3 from '../assets/img/platforms/steam/3.png';

const MyGames = (props: any) => {

    const XboxGames: object[] = [ 
        {"game": Xbox1, "deal": "50%"},
        {"game": Xbox2, "deal": "10%"},
        {"game": Xbox3, "deal": "25%"}, 
    ];
    
    const PS5Games: object[] = [ 
        {"game": PS51, "deal": "75%"},
        {"game": PS52, "deal": "15%"},
        {"game": PS53, "deal": "30%"}, 
    ];
    
    const SwitchGames: object[] = [
        {"game": Switch1, "deal": "40%"},
        {"game": Switch2, "deal": "30%"},
        {"game": Switch3, "deal": "25%"}, 
    ];
    
    const SteamGames: object[] = [ 
        {"game": Steam1, "deal": "75%"},
        {"game": Steam2, "deal": "50%"},
        {"game": Steam3, "deal": "20%"}, 
    ];

    return (
        <>
        <div className={`grid-games ${props.smallScreen ? 'grid-games-small' : props.mediumScreen ? 'grid-games-small' : ''}`} >
            
            {props.plat === 0 && (
                <div className={`games ${props.smallScreen ? 'games-sm' : ''}`}>
                    <>
                        <img src={ Xbox1 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`} />
                        <img src={ Xbox2 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ Xbox3 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                    </>
                </div>
            )}
            
            {props.plat === 1 && (
                <div className={`games ${props.smallScreen ? 'games-sm' : ''}`}>
                    <>
                        <img src={ PS51 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ PS52 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ PS53 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                    </>
                </div>
            )}

            {props.plat === 2 && (
                <div className={`games ${props.smallScreen ? 'games-sm' : ''}`}>
                    <>
                        <img src={ Switch1 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ Switch2 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ Switch3 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                    </>
                </div>
            )}
            
            {props.plat === 3 && (
            <div className={`games ${props.smallScreen ? 'games-sm' : ''}`}>
                    <>
                        <img src={ Steam1 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ Steam2 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                        <img src={ Steam3 } alt="Icono Juego" className={`game-icon ${props.smallScreen ? 'game-icon-sm' : props.mediumScreen ? 'game-icon-sm' : ''}`}/>
                    </>
                </div>
            )}
            
        </div>
        </>
    )
}

export default MyGames;