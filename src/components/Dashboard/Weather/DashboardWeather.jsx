import React, { useEffect, useState } from 'react';
import { ReactComponent as BlackarrowIcon } from '../../../assets/main/icons/weather/black-arrow-right.svg';
import { ReactComponent as WhitearrowIcon } from '../../../assets/main/icons/weather/white-arrow-right.svg';
import { ReactComponent as PartlyIcon } from '../../../assets/main/icons/weather/partly-cloudy.svg';
import { ReactComponent as CloudlyIcon } from '../../../assets/main/icons/weather/cloudly.svg';
import { ReactComponent as OptionIcon } from './../../../assets/main/icons/option.svg';
import { ReactComponent as SunIcon } from '../../../assets/main/icons/weather/sun.svg';
import { ReactComponent as RainIcon } from '../../../assets/main/icons/weather/rain.svg';
import { ReactComponent as TempIcon } from '../../../assets/main/icons/weather/temp-info.svg';
import { Link } from 'react-router-dom';

export const DashboardWeather = () => {
  const lat = 43.2389;
  const lon = 76.8897;
  const [weather, setWeather] = useState({
    temp: null,
    wind: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed096897ea395bffcecec59f006b14dc&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          temp: Math.round(data.main.temp),
          wind: data.wind.speed,
          loading: false,
          error: null,
        });
      })
      .catch(() => {
        setWeather((prev) => ({ ...prev, loading: false, error: 'Error loading weather' }));
      });
  }, []);

  return (
    <div className="dashboard-overview__weather">
      <div className="weather-today bora">
        <div className="weather-today__top">
          <span className="weather-today__top-title title">The weather today</span>
          <span className="weather-today__top-option">
          <Link to="/7dayWeather">
            <button>more</button>
          </Link>
          </span>
        </div>
        <div className="weather-today__bottom">
          <div className="weather-today__bottom-now bora">
            <div className="bottom-later__date">Now</div>
            <div className="bottom-later__temp">
              <span>
                <PartlyIcon />
              </span>
              {weather.loading ? '...' : `${weather.temp}° C`}
            </div>
            <div className="bottom-later__wind-speed">
              <span>
                <WhitearrowIcon />
              </span>
              {weather.loading ? '...' : `${weather.wind} m/s`}
            </div>
          </div>
          <div className="weather-today__bottom-later">
            <div className="bottom-later__date">2:00 PM</div>
            <div className="bottom-later__temp">
              <span>
                <CloudlyIcon />
              </span>
              14° C
            </div>
            <div className="bottom-later__wind-speed">
              <span>
                <BlackarrowIcon />
              </span>
              8.4 m/s
            </div>
          </div>
        </div>
      </div>
      {/* <div className="weather-forecast bora">
        <div className='weather-forecast-top'>
          <span className='weather-forecast-title title'>The next day forecast </span>
          <span className='weather-forecast-button'><button><OptionIcon /></button></span>
        </div>
        <div className="weather-forecast__settings">
          <nav className='settings__nav'>
            <li className='settings__nav-links'><Link to='#'>7 days</Link></li>
          </nav>
        </div>
        <div className="weather-forecast__module">
          <div className="weather-forecast__module-data">
            <span><SunIcon /></span>
            Tuesday
            <div className="weather-forecast__module-data-speed">
              <span><BlackarrowIcon /></span>
              7.8 m/s
            </div>
            <div className="weather-forecast__module-data-temp">
              <span><TempIcon /></span>
              <p className="module-data-temp__block">
                <span>9°</span>
                <span>16°</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};