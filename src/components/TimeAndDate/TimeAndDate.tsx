import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TimeAndDate.module.css';
import { RootState } from '../../redux/store';
import timeApi from '../../redux/api/timeApi';

function TimeAndDate() {
  const localTime = new Date();
  const position = useSelector((state: RootState) => state.toolkitSlice.position);
  const dateTimeApi = timeApi.useGetDateByLocQuery(position, {
    skip: (position.latitude === -9999 || position.latitude === undefined),
  });

  function getLocalDate() {
    return localTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <div className={styles.container}>
      {
        (position.latitude === undefined)
          ? (
            <>
              <p className={styles.time}>{localTime.toLocaleTimeString().slice(0, 5)}</p>
              <p className={styles.date}>{getLocalDate()}</p>
            </>
          )
          : (
            <>
              <p className={styles.time}>{dateTimeApi?.data?.time_24.slice(0, -3)}</p>
              <p className={styles.date}>{dateTimeApi?.data?.date_time_txt.slice(0, -9)}</p>
            </>
          )
      }
    </div>
  );
}

export default TimeAndDate;
