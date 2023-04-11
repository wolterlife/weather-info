import React from 'react';
import styles from './TimeAndDate.module.css';

function TimeAndDate() {
  return (
    <div className={styles.container}>
      <p className={styles.time}>16:24</p>
      <p className={styles.date}>Friday, April 5, 2023</p>
    </div>
  );
}

export default TimeAndDate;
