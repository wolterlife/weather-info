import React from 'react';
import styles from './TimeAndDate.module.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getDateByTimeZone, getTimeByTimeZone } from '../../helpers/correctionTime';

function TimeAndDate() {
  const { timezone } = useTypedSelector((state) => state.weatherReducer);
  return (
    <div className={styles.container}>
      <p className={styles.time}>{getTimeByTimeZone(timezone)}</p>
      <p className={styles.date}>{getDateByTimeZone(timezone)}</p>
    </div>
  );
}

export default TimeAndDate;
