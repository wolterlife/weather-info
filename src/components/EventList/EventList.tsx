import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import styles from '../GoogleEvents/GoogleEvents.module.css';
import { calendarEventTime } from '../../helpers/correctionTime';
import { fetchCalendarAction } from '../../redux/actions/calendarActions';
import useTypedSelector from '../../hooks/useTypedSelector';

function EventList({ isShowEvents } : {isShowEvents: boolean}) {
  const dispatch = useDispatch();
  const { events } = useTypedSelector((state) => state.calendarReducer);
  const { currentWeather } = useTypedSelector((state) => state.weatherReducer);

  useEffect(() => {
    if (isShowEvents) dispatch(fetchCalendarAction());
  }, [isShowEvents]);

  const res = events?.map(({ id, start, summary }) => (
    <div key={id} className={styles.eventList}>
      <p className={cn(styles.textTime, currentWeather)}>
        {calendarEventTime(start)}
      </p>
      <p className={styles.textEvent}>{summary}</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.containerEvents}>
        {res}
      </div>
    </div>
  );
}

export default EventList;
