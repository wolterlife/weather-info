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
  const weather = weatherApi.useGetWeatherByPosQuery(pos, {
    skip: pos.latitude === -9999 || pos.latitude === undefined,
  });
  const currentWeather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);

  function getImage(i: number, mod: string) {
    switch (weather.data?.[mod].weathercode[i]) {
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
      case (80): return '/img/snowy.png';
      case (81): return '/img/snowy.png';
      case (82): return '/img/snowy.png';
      case (85): return '/img/snowy.png';
      case (86): return '/img/snowy.png';
      case (95): return '/img/storm.png';
      case (96): return '/img/storm.png';
      case (99): return '/img/storm.png';
      default: return '/img/rain.png';
    }
  }

  useEffect(() => {
    dispatch(changeWeather(getImage(0, 'daily')));
  }, [weather]);

  return (
    <>
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
        <div className={styles.leftContainer}>
          <img
            className={styles.imgMain}
            src={getImage(0, 'daily')}
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
      </div>
    </>
  );
}

export default WeatherPanel;
