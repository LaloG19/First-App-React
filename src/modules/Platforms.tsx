import xboxSvg from '../assets/svg/platforms/Xbox.svg';
import ps5Svg from '../assets/svg/platforms/PS5.svg';
import switchSvg from '../assets/svg/platforms/Switch.svg';
import steamSvg from '../assets/svg/platforms/Steam.svg';
import '../assets/styles/platforms.css';

const MyPlatforms = (props: any) => {
    return (
        <>
        <div className={`grid-platforms ${props.smallScreen ? 'grid-platforms-small' : props.mediumScreen ? 'grid-platforms-mid' : 'grid-platforms-large'}`} >
            <img className='platform-icon' src={xboxSvg} alt="Xbox"/>
            <img className='platform-icon' src={ps5Svg} alt="PS5"/>
            <img className='platform-icon' src={switchSvg} alt="Switch" />
            <img className='platform-icon' src={steamSvg} alt="Steam" />
        </div>
        </>
    )
}

export default MyPlatforms;