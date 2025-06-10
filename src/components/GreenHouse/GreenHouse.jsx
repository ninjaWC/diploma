// import { GreenHouseCam } from "./GreenHouseCam/GreenHouseCam";
// import { GreenHouseOption } from "./GreenHouseOption/GreenHouseOption";
import { ReactComponent as CameraIcon } from '../../assets/main/icons/cam.svg';
import { ReactComponent as ModelIcon } from '../../assets/main/icons/globe.svg';
import { ReactComponent as MapsIcon } from '../../assets/main/icons/map.svg';
import {ReactComponent as SettingIcon} from '../../assets/main/icons/settings.svg';
import {ReactComponent as OverviewIcon} from '../../assets/main/icons/overview.svg';
import {ReactComponent as ClockIcon} from '../../assets/main/icons/clock.svg';

export const GreenHouse = () => {
    return (
        <div className="greenhouse">
            <div className='greenhouse__cam'>
                            <nav className='greenhouse__cam-navigation'>
                                <div className='greenhouse__cam-navigation-links blur'>
                                    <li className=''><CameraIcon/> Camera</li>
                                    <li className=''><ModelIcon/> Model</li>
                                    <li className=''><MapsIcon/> Maps</li>
                                </div>
                            </nav>
                    </div>
            <div className='greenhouse__cam-bottom'>
                        <div className='greenhouse__cam-bottom-title'>Greenhouse 11</div>
                        <nav className='greenhouse__cam-bottom-navigation'>
                            <div className='cam-bottom-navigation__option'>
                                <span className='option-settings blur'><SettingIcon/></span>
                                <span className='option-overview'>
                                    <OverviewIcon/>
                                    Overview
                                </span>
                                <span className='option-time'>
                                    <ClockIcon/>
                                    1:22 PM
                                </span>
                                <span className='option-date'>Mon 14th</span>
                            </div>
                            <div className='cam-bottom-navigation__camera'>
                                <span className=" blur"> <CameraIcon/> A2 </span>
                                <span className=" blur"> <CameraIcon/> A1 </span>
                            </div>
                        </nav>
                    </div>
        </div>
    )
}

export default GreenHouse;