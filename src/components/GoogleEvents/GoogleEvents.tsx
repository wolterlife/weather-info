import React from 'react';
import styles from './GoogleEvents.module.css';

function GoogleEvents() {
  // const res = events.filter((el: any) => el.start.dateTime?.slice(0, 10) === getCurrentDate())
  //   .map((item: any) => (
  //     <div key={item.id} className={styles.eventList}>
  //       <p className={cn(styles.textTime, currentWeather.slice(5, -4))}>
  //         {item?.start.dateTime?.slice(11, 16)}
  //       </p>
  //       <p className={styles.textEvent}>{item?.summary}</p>
  //     </div>
  //   ));

  return (
    <>
      <input className={styles.buttonCalendar} type="image" src="/img/google-calendar.png" alt="sign in" />
      <div className={styles.container}>
        <div className={styles.containerEvents}>
          {/* {res} */}
        </div>
      </div>
    </>
  );
}

export default GoogleEvents;
