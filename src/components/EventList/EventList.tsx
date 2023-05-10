import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import styles from '../GoogleEvents/GoogleEvents.module.css';
import { calendarEndDay, calendarEventTime, calendarStartDay } from '../../helpers/correctionTime';
import { fetchCalendarAction } from '../../redux/actions/calendarActions';
import useTypedSelector from '../../hooks/useTypedSelector';

function EventList({ isShowEvents } : {isShowEvents: boolean}) {
  const dispatch = useDispatch();
  const { events } = useTypedSelector((state) => state.calendarReducer);
  const { currentWeather } = useTypedSelector((state) => state.weatherReducer);

  useEffect(() => {
    function getEvents() {
      gapi.client
        .init({ apiKey: 'AIzaSyCxgDGxNFHv6gAPy_T4POQ0wB2Ou2W4sD4' })
        .then(() => gapi.client.request({ path: `https://www.googleapis.com/calendar/v3/calendars/primary/events?maxResults=5&orderBy=startTime&singleEvents=true&timeMin=${calendarStartDay()}&timeMax=${calendarEndDay()}` }))
        .then((response: any) => {
          dispatch(fetchCalendarAction(response.result.items));
        });
    }
    if (isShowEvents) {
      gapi.load('client', getEvents);
    }
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
