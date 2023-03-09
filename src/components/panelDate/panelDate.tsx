import React from 'react';
import styles from '../WeatherPanel/WeatherPanel.module.css';

function PanelDate(props: any) {
  function getDate(time: string) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const mDate = new Date(Date.parse(time));
    return (days[mDate.getDay()]);
  }

  function getImage(i: number, mod: string) {
    switch (props.weather?.[mod].weathercode[i]) {
      case (1): return '/img/sun.png';
      case (0): return '/img/sun.png';
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

  const arrsToObjDays = props.weather?.daily.time.map((item: object, index: number) => (
    {
      time: item,
      weathercode: props.weather?.daily.weathercode[index],
      temperature_2m_max: props.weather?.daily.temperature_2m_max[index],
      temperature_2m_min: props.weather?.daily.temperature_2m_min[index],
    }
  ));

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
      resDays?.slice(1)
  );
}

export default PanelDate;
