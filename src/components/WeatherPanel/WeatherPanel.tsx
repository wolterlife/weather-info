/* eslint-disable max-len */ // for comments
import React from 'react';
import '../../theme.css';
import cn from 'classnames';
import styles from './WeatherPanel.module.css';

function WeatherPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.topButtons}>
        <button
          type="button"
          className={cn(styles.activeButton, 'sun')}
          // className={selectedMod === 'daily' ? cn(styles.activeButton, currentWeather.slice(5, -4)) : cn(styles.button, currentWeather.slice(5, -4))}
        >
          date
        </button>
        <button
          type="button"
          className={cn(styles.button, 'sun')}
          // className={selectedMod === 'hourly' ? cn(styles.activeButton, currentWeather.slice(5, -4)) : cn(styles.button, currentWeather.slice(5, -4))}
        >
          time
        </button>
      </div>
      <div className={cn(styles.panel)}>
        {/* {(info.daily.weathercode.length > 0) ? ( */}
        <div className={styles.leftContainer}>
          <img
            className={styles.imgMain}
            alt="Today Icon"
          />
          <div className={styles.todayContainer}>
            <p className={styles.textToday}>Today</p>
            <p className={styles.textDegree}>
              {/* {Math.round(info.daily?.temperature_2m_max[0])} */}
              °/
              {/* {Math.round(info.daily?.temperature_2m_min[0])} */}
              °
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          {/* {selectedMod === 'daily' && <PanelDate weather={info} />} */}
          {/* {selectedMod !== 'daily' && <PanelTime weather={info} />} */}
        </div>
        {/* ) :
         // (<p className={styles.textNoCity}> Enter your city to get weather information</p>)} */}
      </div>
    </div>
  );
}

export default WeatherPanel;
