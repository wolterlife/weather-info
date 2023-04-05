import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../WeatherPanel/WeatherPanel.module.css';
import { RootState } from '../../redux/store';
import timeApi from '../../redux/api/timeApi';

function PanelTime(props: any) {
  const position = useSelector((state: RootState) => state.toolkitSlice.position);
  const dateTimeApi = timeApi.useGetDateByLocQuery(position, {
    skip: (position.latitude === -9999 || position.latitude === undefined),
  });

  function getImage(i: number, mod: string) {
    switch (props.weather?.[mod].weathercode[i]) {
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

  function filterByTime(el: any) {
    return +el.time.slice(11, 13) >= +dateTimeApi.data.date_time.slice(11, 13);
  }

  const arrsToObjTimes = props.weather?.hourly.time.map((item: object, index: number) => (
    {
      time: item,
      weathercode: props.weather?.hourly.weathercode[index],
      temperature_2m: props.weather?.hourly.temperature_2m[index],
    }
  ));

  const resTimes = arrsToObjTimes
    ?.filter(filterByTime)
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

  return (
      // resTimes?.slice(0, 24 - +dateTimeApi.data.date_time.slice(11, 13))
      resTimes?.slice(0, 24 - +dateTimeApi.data.date_time.slice(11, 13))
    );
}

export default PanelTime;
