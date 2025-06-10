
import {ReactComponent as SettingIcon} from '../../../assets/main/icons/settings.svg';
import {ReactComponent as OverviewIcon} from '../../../assets/main/icons/overview.svg';
import {ReactComponent as ClockIcon} from '../../../assets/main/icons/clock.svg';
import {ReactComponent as CameraIcon} from '../../../assets/main/icons/cam.svg';


export const GreenHouseOption = () => {
    return(
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
    );
}

export default GreenHouseOption;