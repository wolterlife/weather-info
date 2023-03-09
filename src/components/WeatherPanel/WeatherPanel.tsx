import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './WeatherPanel.module.css';
import { RootState } from '../../redux/store';
import weatherApi from '../../redux/api/weatherApi';
import { changeWeather } from '../../redux/mainSlice';

function WeatherPanel() {
  const localTime = new Date();
  const dispatch = useDispatch();
  const [selectedMod, setMod] = useState('daily');
  const pos = useSelector((state: RootState) => state.toolkitSlice.position);
  const weather = weatherApi.useGetWeatherByPosQuery(pos, {
    skip: pos.latitude === -9999 || pos.latitude === undefined,
  });

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

  const arrsToObjDays = weather.data?.daily.time.map((item: object, index: number) => (
    {
      time: item,
      weathercode: weather.data.daily.weathercode[index],
      temperature_2m_max: weather.data.daily.temperature_2m_max[index],
      temperature_2m_min: weather.data.daily.temperature_2m_min[index],
    }
  ));

  const arrsToObjTimes = weather.data?.hourly.time.map((item: object, index: number) => (
    {
      time: item,
      weathercode: weather.data.hourly.weathercode[index],
      temperature_2m: weather.data.hourly.temperature_2m[index],
    }
  ));

  const resTimes = arrsToObjTimes
    ?.filter((el: any) => +el.time.slice(11, 13) >= +localTime.toLocaleTimeString().slice(0, -6))
    .map((item: any, index: number) => (
      <div key={item?.time} className={styles.containerDays}>
        <p className={styles.textDays}>{item.time.slice(11)}</p>
        <img className={styles.imgSmallDays} src={getImage(index, 'hourly')} alt="imgWeather" />
        <p className={styles.textDaysDegree}>
          {Math.round(item.temperature_2m)}
          °
        </p>
      </div>
  ));

  function getDate(time: string) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const mDate = new Date(Date.parse(time));
    return (days[mDate.getDay()]);
  }

  const resDays = arrsToObjDays?.map((item: any, index: number) => (
    <div key={item?.time} className={styles.containerDays}>
      <p className={styles.textDays}>{getDate(item.time)}</p>
      <img className={styles.imgSmallDays} src={getImage(index, 'daily')} alt="imgWeather" />
      <p className={styles.textDaysDegree}>
        {Math.round(item.temperature_2m_max)}
        °/
        {Math.round(item.temperature_2m_min)}
        °
      </p>
    </div>
  ));

  return (
    <>
      <div className={styles.topButtons}>
        <button
          type="button"
          onClick={() => setMod('daily')}
          className={selectedMod === 'daily' ? styles.activeButton : styles.button}
        >
          date
        </button>
        <button
          type="button"
          onClick={() => setMod('hourly')}
          className={selectedMod === 'hourly' ? styles.activeButton : styles.button}
        >
          time
        </button>
      </div>
      <div className={styles.panel}>
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
          {selectedMod === 'daily' && resDays?.slice(1)}
          {selectedMod !== 'daily' && resTimes?.slice(0, 24 - +localTime.toLocaleTimeString().slice(0, -6))}
        </div>
      </div>
    </>
  );
}

export default WeatherPanel;
