/* eslint-disable max-len */ // for comments
import React from 'react';
import '../../theme.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './WeatherPanel.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';

function WeatherPanel() {
  const dispatch = useDispatch();
  const mode = useTypedSelector((state) => state.weather.mode);

  const setMode = (selectedMode: string) => {
    dispatch({ type: 'SET_WEATHER_MODE', payload: selectedMode });
  };

  return (
    <div className={styles.container}>
      <div className={styles.topButtons}>
        <button
          type="button"
          className={mode === 'daily' ? cn(styles.activeButton, 'sun') : cn(styles.button, 'sun')}
          onClick={() => setMode('daily')}
        >
          date
        </button>
        <button
          type="button"
          className={mode === 'hourly' ? cn(styles.activeButton, 'sun') : cn(styles.button, 'sun')}
          onClick={() => setMode('hourly')}

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
          {mode === 'daily' && <p>daily</p>}
          {mode === 'hourly' && <p>hourly</p>}
        </div>
        {/* ) :
         // (<p className={styles.textNoCity}> Enter your city to get weather information</p>)} */}
      </div>
    </div>
  );
}

export default WeatherPanel;
