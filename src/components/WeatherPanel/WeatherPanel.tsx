import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../theme.css';
import cn from 'classnames';
import styles from './WeatherPanel.module.css';
import { RootState } from '../../redux/store';
import weatherApi from '../../redux/api/weatherApi';
import { changeWeather } from '../../redux/mainSlice';
import PanelDate from '../panelDate/panelDate';
import PanelTime from '../panelTime/panelTime';

function WeatherPanel() {
  const dispatch = useDispatch();
  const [selectedMod, setMod] = useState('daily');
  const pos = useSelector((state: RootState) => state.toolkitSlice.position);
  const [getWeather, weather] = weatherApi.useLazyGetWeatherByPosQuery();
  const currentWeather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);

  function getImage(i: number) {
    switch (i) {
      case undefined: return '/img/sun.png';
      case (0): return '/img/sun.png';
      case (1): return '/img/sun.png';
      case (2): return '/img/partly-cloudy.png';
      case (3): return '/img/cloudy.png';
      case (45): return '/img/cloudy.png';
      case (48): return '/img/cloudy.png';
      case (71): return '/img/snowy.png';
      case (73): return '/img/snowy.png';
      case (75): return '/img/snowy.png';
      case (77): return '/img/snowy.png';
      case (85): return '/img/snowy.png';
      case (86): return '/img/snowy.png';
      case (95): return '/img/storm.png';
      case (96): return '/img/storm.png';
      case (99): return '/img/storm.png';
      default: return '/img/rain.png';
    }
  }

  useEffect(() => {
    if (pos.latitude !== -9999 && pos.latitude !== undefined) {
      getWeather(pos).then((res) => {
        dispatch(changeWeather(getImage(res.data?.daily.weathercode[0])));
      });
    }
  }, [pos]);

  return (
    <div className={styles.container}>
      <div className={styles.topButtons}>
        <button
          type="button"
          onClick={() => setMod('daily')}
          className={selectedMod === 'daily' ? cn(styles.activeButton, currentWeather.slice(5, -4)) : cn(styles.button, currentWeather.slice(5, -4))}
        >
          date
        </button>
        <button
          type="button"
          onClick={() => setMod('hourly')}
          className={selectedMod === 'hourly' ? cn(styles.activeButton, currentWeather.slice(5, -4)) : cn(styles.button, currentWeather.slice(5, -4))}
        >
          time
        </button>
      </div>
      <div className={cn(styles.panel, currentWeather.slice(5, -4))}>
        {(weather.data !== undefined) ? (
          <>
            <div className={styles.leftContainer}>
              <img
                className={styles.imgMain}
                src={getImage(weather.data.daily.weathercode[0])}
                alt="Today Icon"
              />
              <div className={styles.todayContainer}>
                <p className={styles.textToday}>Today</p>
                <p className={styles.textDegree}>
                  {Math.round(weather.data?.daily?.temperature_2m_max[0])}
                  °/
                  {Math.round(weather.data?.daily?.temperature_2m_min[0])}
                  °
                </p>
              </div>
            </div>
            <div className={styles.rightContainer}>
              {selectedMod === 'daily' && <PanelDate weather={weather.data} />}
              {selectedMod !== 'daily' && <PanelTime weather={weather.data} />}
            </div>
          </>
        ) : (<p className={styles.textNoCity}> Enter your city to get weather information</p>)}
      </div>
    </div>
  );
}

export default WeatherPanel;
