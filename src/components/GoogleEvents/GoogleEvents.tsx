import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './GoogleEvents.module.css';
import apiCalendar from '../../redux/api/googleApi';
import { RootState } from '../../redux/store';

function GoogleEvents() {
  const [events, setEvents] = useState([]);
  const currentWeather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);
  const [auth, setAuth] = useState(false);
  const getCurrentDate = () => {
    const d = new Date();
    return d.toJSON().slice(0, 10);
  };

  useEffect(() => {
    if (auth) {
      setInterval(() => {
        apiCalendar?.listUpcomingEvents(5).then(({ result }: any) => {
          setEvents(result.items);
        });
      }, 5000);
    }
  }, [auth]);

  const res = events.filter((el: any) => el.start.dateTime?.slice(0, 10) === getCurrentDate())
    .map((item: any) => (
      <div key={item.id} className={styles.eventList}>
        <p className={cn(styles.textTime, currentWeather.slice(5, -4))}>
          {item?.start.dateTime?.slice(11, 16)}
        </p>
        <p className={styles.textEvent}>{item?.summary}</p>
      </div>
    ));

  async function authFoo() {
    await apiCalendar.handleAuthClick();
    apiCalendar.onLoad(() => setAuth(true));
  }

  return (
    <>
      <input className={styles.buttonCalendar} type="image" src="/img/google-calendar.png" onClick={() => authFoo()} alt="sign in (google calendar)" />
      <div className={styles.container}>
        <div className={styles.containerEvents}>
          {res}
        </div>
      </div>
    </>

  );
}

export default GoogleEvents;
