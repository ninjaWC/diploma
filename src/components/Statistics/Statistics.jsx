import React from 'react';
import { ReactComponent as CameraIcon } from '../../assets/main/icons/cam.svg'; 
import { ReactComponent as ModelIcon } from '../../assets/main/icons/globe.svg';
import { ReactComponent as MapsIcon } from '../../assets/main/icons/map.svg';
import { ReactComponent as ArrowIcon } from '../../assets/main/icons/arrow.svg';
import { ReactComponent as LightsIcon } from '../../assets/main/icons/climate.svg';
import { ReactComponent as WaterIcon } from '../../assets/main/icons/water-pump.svg';
import { ReactComponent as ClimateIcon } from '../../assets/main/icons/climate.svg';
import { ReactComponent as IrrigationIcon } from '../../assets/main/icons/irrigation.svg';
import { ReactComponent as SettingIcon } from '../../assets/main/icons/settings.svg';
import { ReactComponent as OverviewIcon } from '../../assets/main/icons/overview.svg';
import { ReactComponent as ClockIcon } from '../../assets/main/icons/clock.svg';
import { DashboardOverview } from '../Dashboard/DashboardOverview.jsx';


export const Statistics = () => {
    return (
        <section className="statistics">
              <div className="greenhouse">
                <div className='greenhouse__cam'>
                  <nav className='greenhouse__cam-navigation'>
                    <div className='greenhouse__cam-navigation-links blur'>
                      <li className=''><CameraIcon/> Camera</li>
                      <li className=''><ModelIcon/> Model</li>
                      <li className=''><MapsIcon/> Maps</li>
                    </div>
                  </nav>
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
                <div className='greenhouse__panels'>
                  <div className='greenhouse__panels-top'>
                    <div className='greenhouse__panels-title title'>Greenhouse 11</div>
                    <div className='greenhouse__panels-button'><button><ArrowIcon/></button></div>
                  </div>
                  <div className='greenhouse__panels-settings'>
                    <nav className='settings__nav'>
                      <li className='settings__nav-links'><a href='#'>Equipment</a></li>
                      <li className='settings__nav-links'><a href='#'>Plants</a></li>
                      <li className='settings__nav-links'><a href='#'>Automation</a></li>
                    </nav>
                    <div className='settings__options'>
                      <div className='settings__options-control'>
                        <LightsIcon></LightsIcon>
                        <span className='control-name'>
                          Lights
                        </span>
                        <span className='mode'> On </span>
                      </div>
                      <div className='settings__options-control'>
                        <WaterIcon></WaterIcon>
                        <span className='control-name'>
                          Water Pump
                        </span>
                        <span className='mode'> Off </span>
                      </div>
                      <div className='settings__options-control'>
                        <ClimateIcon></ClimateIcon>
                        <span className='control-name'>
                          Climate Control
                        </span>
                        <span className='mode'> Off </span>
                      </div>
                      <div className='settings__options-control'>
                        <IrrigationIcon></IrrigationIcon>
                        <span className='control-name'>
                          Irrigation
                        </span>
                        <span className='mode'> Running </span>
                      </div>
                      <div className='settings__options-control'>
                        <IrrigationIcon></IrrigationIcon>
                        <span className='control-name'>
                          Irrigation
                        </span>
                        <span className='mode'> Running </span>
                      </div>
                      <div className='settings__options-control'>
                        <IrrigationIcon></IrrigationIcon>
                        <span className='control-name'>
                          Irrigation
                        </span>
                        <span className='mode'> Running </span>
                      </div>
                      <div className='settings__options-control'>
                        <IrrigationIcon></IrrigationIcon>
                        <span className='control-name'>
                          Irrigation
                        </span>
                        <span className='mode'> Running </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DashboardOverview/>
            </section>
    );
}