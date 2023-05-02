import React from 'react';
import '../../theme.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './WeatherPanel.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import PanelTime from '../PanelTime/PanelTime';
import PanelDate from '../PanelDate/PanelDate';
import { setModeAction } from '../../redux/actions/weatherActions';

function WeatherPanel() {
  const dispatch = useDispatch();
  const {
    weather, currentWeather, loading, mode,
  } = useTypedSelector((state) => state.weatherReducer);
  const { icon, temp, tempmin } = weather[0] || 0;

  const setMode = (selectedMode: string) => {
    dispatch(setModeAction(selectedMode));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topButtons}>
        <button
          type="button"
          className={cn(currentWeather, (mode === 'daily') ? styles.activeButton : styles.button)}
          onClick={() => setMode('daily')}
        >
          date
        </button>
        <button
          type="button"
          className={cn(currentWeather, (mode === 'hourly') ? styles.activeButton : styles.button)}
          onClick={() => setMode('hourly')}
        >
          time
        </button>
      </div>
      <div className={cn(styles.panel, currentWeather)}>
        {(weather.length > 0) && (
          <>
            <div className={styles.leftContainer}>
              <img
                className={styles.imgMain}
                src={`img/${icon}.png`}
                alt="Today Icon"
              />
              <div className={styles.todayContainer}>
                <p className={styles.textToday}>Today</p>
                <p className={styles.textDegree}>
                  {Math.round(temp)}
                  °/
                  {Math.round(tempmin)}
                  °
                </p>
              </div>
            </div>
              {mode === 'daily' && <PanelDate /> }
              {mode === 'hourly' && <PanelTime /> }
          </>
        )}
        {(weather.length === 0 && !loading)
          && (<p className={styles.textNoCity}> Enter your city to get weather information</p>)}
        {loading && <p className={styles.textNoCity}>Loading...</p>}
      </div>
    </div>
  );
}

export default WeatherPanel;
