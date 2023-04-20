import React from 'react';
import styles from '../WeatherPanel/WeatherPanel.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import getDayByDate from '../../helpers/getDayByDate';

function PanelDate() {
  const { weather, timezone } = useTypedSelector((state) => state.weatherReducer);

  const resDaily = weather.map(({
    tempmin, temp, icon, datetimeEpoch,
  }) => (
    <div key={datetimeEpoch} className={styles.containerDays}>
      <p className={styles.textDays}>
        {getDayByDate(datetimeEpoch, timezone)}
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
