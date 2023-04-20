import React from 'react';
import styles from '../WeatherPanel/WeatherPanel.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';

function PanelDate() {
  const { weather } = useTypedSelector((state) => state.weatherReducer);

  const resDaily = weather.map(({
    tempmin, temp, icon, dayweek, datetime,
  }) => (
    <div key={datetime} className={styles.containerDays}>
      <p className={styles.textDays}>
        {dayweek}
      </p>
      <img
        className={styles.imgSmallDays}
        src={`https://raw.githubusercontent.com/wolterlife/weather-info/master/public/img/${icon}.png`}
        alt="imgWeather"
      />
      <p className={styles.textDaysDegree}>
        {Math.round(temp)}
        °/
        {Math.round(tempmin)}
        °
      </p>
    </div>
  ));

  return (
    <div className={styles.rightContainer}>
      {resDaily}
    </div>
  );
}

export default PanelDate;
