import { ReactComponent as CameraIcon } from '../../../assets/main/icons/cam.svg';
import { ReactComponent as ModelIcon } from '../../../assets/main/icons/globe.svg';
import { ReactComponent as MapsIcon } from '../../../assets/main/icons/map.svg';

export const GreenHouseCam = () => {
    return(
        <div className='greenhouse__cam'>
                <nav className='greenhouse__cam-navigation'>
                    <div className='greenhouse__cam-navigation-links blur'>
                        <li className=''><CameraIcon/> Camera</li>
                        <li className=''><ModelIcon/> Model</li>
                        <li className=''><MapsIcon/> Maps</li>
                    </div>
                </nav>
        </div>
    );
}

export default GreenHouseCam;