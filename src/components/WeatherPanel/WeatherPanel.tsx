/* eslint-disable max-len */ // for comments
import React from 'react';
import '../../theme.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './WeatherPanel.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import { weatherActionTypes } from '../../types/weather';

function WeatherPanel() {
  const dispatch = useDispatch();
  const { weather, loading, mode } = useTypedSelector((state) => state.weatherReducer);

  const setMode = (selectedMode: string) => {
    dispatch({ type: weatherActionTypes.SET_WEATHER_MODE, payload: selectedMode });
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
        >
          time
        </button>
      </div>
      <div className={cn(styles.panel, 'sun')}>
        {loading && <p className={styles.textNoCity}>Loading...</p>}
        {(weather.length > 0) && (
          <>
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
          </>
        )}
        {(weather.length === 0 && !loading) && (<p className={styles.textNoCity}> Enter your city to get weather information</p>)}
      </div>
    </div>
  );
}

export default WeatherPanel;
