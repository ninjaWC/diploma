import React, { useEffect } from 'react';
import styles from './WeatherBoard.module.css';

export const WeatherBoard = () => {
  useEffect(() => {

    const oldWidget = document.getElementById('openweathermap-widget-11');
    if (oldWidget) oldWidget.innerHTML = '';

    // eslint-disable-next-line no-unused-expressions
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
      id: 11,
      cityid: '2643743', 
      appid: 'ed096897ea395bffcecec59f006b14dc',
      units: 'metric',
      containerid: 'openweathermap-widget-11',
    });

    const script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.weatherBoardWrapper}>
      <div id="openweathermap-widget-11" className={styles.weatherWidget}></div>
    </div>
  );
};

export default WeatherBoard;