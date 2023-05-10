import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './GoogleEvents.module.css';
import { attachSignIn, checkAuth, exitFoo } from '../../helpers/googleAuth';
import EventList from '../EventList/EventList';
import useTypedSelector from '../../hooks/useTypedSelector';

function GoogleEvents() {
  const { currentWeather } = useTypedSelector((state) => state.weatherReducer);
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    checkAuth(setAuth);
  }, []);

  if (isAuth) {
    return (
      <>
        <button
          className={cn(styles.buttonExit, currentWeather)}
          type="button"
          onClick={() => exitFoo(setAuth)}
        >
          Logout
        </button>
        <EventList isShowEvents={isAuth} />
      </>
    );
  }

  return (
    <input
      onFocus={() => attachSignIn(setAuth)}
      id="loginButton"
      className={styles.buttonCalendar}
      type="image"
      src="img/google-calendar.png"
      alt="sign in"
    />
  );
}

export default GoogleEvents;
