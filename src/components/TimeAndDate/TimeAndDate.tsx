import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TimeAndDate.module.css';
import { RootState } from '../../redux/store';
import timeApi from '../../redux/api/timeApi';

function TimeAndDate() {
  const position = useSelector((state: RootState) => state.toolkitSlice.position);
  const dateTimeApi = timeApi.useGetDateByLocQuery(position, {
    skip: (position.latitude === -9999 || position.latitude === undefined),
  });

  function getNetworkDate() {
    let index = 0;
    const t = dateTimeApi?.data?.date_time_txt.slice(0, -16);
    if (t?.endsWith('0')) {
      index = t.length - 1;
      return (`${dateTimeApi?.data?.date_time_txt.slice(0, index)}${dateTimeApi?.data?.date_time_txt.slice(index + 1).slice(0, -8)}`);
    }
    return dateTimeApi?.data?.date_time_txt.slice(0, -9);
  }

  return (
    <div className={styles.container}>
      <p className={styles.time}>{dateTimeApi?.data?.time_24.slice(0, -3)}</p>
      <p className={styles.date}>{getNetworkDate()}</p>
    </div>
  );
}

export default TimeAndDate;
