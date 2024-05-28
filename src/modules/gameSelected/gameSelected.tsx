import gameSelected from '../../assets/img/gameSelected.png';
import '../../assets/styles/gameSelected.css';

import Xbox from '../../assets/svg/platforms/Xbox.svg';
import PS5 from '../../assets/svg/platforms/PS5.svg';
import Switch from '../../assets/svg/platforms/Switch.svg';
import Steam from '../../assets/svg/platforms/Steam.svg';

const MyGameSelected = (props: any) => {
    return (
        <>
            <div className="imgContainer">
                <img src={gameSelected} alt="Imagen del juego" className="gameSelected"/>
            </div>
            <div className="tagsContainer">
                <div className='tag'>
                    <p className='tagText'>Choices Matter</p>
                </div>
                <div className='tag'>
                    <p className='tagText'>Adventure</p>
                </div>
                <div className='tag'>
                    <p className='tagText'>Action</p>
                </div>
                <div className='tag'>
                    <p className='tagText'>Multiple Endings</p>
                </div>
                <div className='tag'>
                    <p className='tagText'>Story Rich</p>
                </div>
            </div>

            <div className="infoContainer">
                <div className="requirementsContainer">
                    <div className="systemContainer">
                        <span className='titleRequirements'> System Requirements </span>

                        <div className='platformRequirements'>
                            <span className='platformItem'> Windows </span>
                            <span className='platformItem'> MacOs </span>
                            <span className='platformItem'> Linux + SteamOS </span>
                        </div>


                        </div>
                        <div className="requirementText">
                            <p className='requirementHead'> Requerimientos mínimos: </p>
                            <p className='requirementParagraph'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae voluptates 
                                ipsa praesentium magnam ab culpa harum incidunt non cupiditate placeat deleniti aliquid
                                accusantium, odit ex delectus autem saepe ea.
                            </p>
                            <p className='requirementParagraph'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quas nihil quod rem et, 
                                tenetur aspernatur soluta nam deleniti mollitia magni necessitatibus vel cupiditate animi 
                                nesciunt error. Laudantium, voluptas odio.
                            </p>

                            <p className='requirementHead'> Requerimientos recomendados: </p>
                            <p className='requirementParagraph'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptate, nostrum 
                                ad quasi mollitia voluptatibus ex repellendus necessitatibus. Quaerat molestiae quidem 
                                obcaecati earum nostrum, dolores ut omnis nobis accusantium recusandae.
                            </p>
                    </div>
                </div>

                <div className="platformsContainer">
                    <img src={Xbox} alt="Xbox" className='platformImg'/>
                    <img src={PS5} alt="PS5" className='platformImg'/>
                    <img src={Switch} alt="Switch" className='platformImg'/>
                    <img src={Steam} alt="Steam " className='platformImg'/>
                </div>
            </div>
        </>
    )
}

export default MyGameSelected;