import React from 'react';
import styles from '../WeatherPanel/WeatherPanel.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import correctionTimeView from '../../helpers/correctionTime';

function PanelTime() {
  const { weather, timezone } = useTypedSelector((state) => state.weatherReducer);

  const resHourly = weather[0].hours?.map(({ icon, temp, datetimeEpoch }) => (
    <div key={datetimeEpoch} className={styles.containerDays}>
      <p className={styles.textDays}>{correctionTimeView(datetimeEpoch, timezone)}</p>
      <img
        className={styles.imgSmallDays}
        src={`https://raw.githubusercontent.com/wolterlife/weather-info/master/public/img/${icon}.png`}
        alt="imgWeather"
      />
      <p className={styles.textDaysDegree}>
        {Math.round(temp)}
        °
      </p>
    </div>
  ));

  return (
    <div className={styles.rightContainer}>
      {resHourly}
    </div>
  );
}

export default PanelTime;
