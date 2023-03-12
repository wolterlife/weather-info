import React from 'react';
import styles from '../WeatherPanel/WeatherPanel.module.css';

function PanelTime(props: any) {
  const localTime = new Date();

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

  const arrsToObjTimes = props.weather?.hourly.time.map((item: object, index: number) => (
    {
      time: item,
      weathercode: props.weather?.hourly.weathercode[index],
      temperature_2m: props.weather?.hourly.temperature_2m[index],
    }
  ));

  // TODO: (fix) В другом городе идёт сравнение с локальным времнем
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

  return (
    resTimes?.slice(0, 24 - +localTime.toLocaleTimeString().slice(0, -6))
    );
}

export default PanelTime;
