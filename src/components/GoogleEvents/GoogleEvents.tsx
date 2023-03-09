import React, { useState } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './GoogleEvents.module.css';
import apiCalendar from '../../redux/api/googleApi';
import { RootState } from '../../redux/store';

function GoogleEvents() {
  const [events, setEvents] = useState([]);
  const currentWeather = useSelector((state: RootState) => state.toolkitSlice.currentWeather);

  const getCurrentDate = () => {
    const d = new Date();
    return d.toJSON().slice(0, 10);
  };

  const getEvents = () => {
    apiCalendar.listUpcomingEvents(5).then(({ result }: any) => {
      setEvents(result.items);
    });
  };

  const res = events.filter((el: any) => el.start.dateTime?.slice(0, 10) === getCurrentDate())
    .map((item: any) => (
      <div key={item.id} className={styles.eventList}>
        <p className={cn(styles.textTime, currentWeather.slice(5, -4))}>
          {item?.start.dateTime?.slice(11, 16)}
        </p>
        <p className={styles.textEvent}>{item?.summary}</p>
      </div>
    ));

  return (
    <div className={styles.container}>
      <button onClick={() => apiCalendar.handleAuthClick()} type="button">sign in</button>
      <button onClick={() => getEvents()} type="button">events</button>
      {res}
    </div>
  );
}

export default GoogleEvents;
