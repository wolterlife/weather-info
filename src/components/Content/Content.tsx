import React from 'react';
import styles from './content.module.css';
import InputCity from '../InputCity/InputCity';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import GoogleEvents from '../GoogleEvents/GoogleEvents';
import WeatherPanel from '../WeatherPanel/WeatherPanel';
import useTypedSelector from '../../hooks/useTypedSelector';

function Content() {
  const { loading } = useTypedSelector((state) => state.weatherReducer);
  return (
    <div className={styles.content}>
      <InputCity />
      {!loading && <TimeAndDate />}
      <GoogleEvents />
      <WeatherPanel />
    </div>
  );
}

export default Content;
