import { createAction } from '@reduxjs/toolkit';

const FETCH_CALENDAR = 'FETCH_CALENDAR';

const fetchCalendarAction = createAction(FETCH_CALENDAR);

export {
  FETCH_CALENDAR,
  fetchCalendarAction,
};
