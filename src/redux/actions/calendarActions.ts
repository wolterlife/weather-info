import { createAction } from '@reduxjs/toolkit';

const FETCH_CALENDAR = 'FETCH_CALENDAR';
const FETCH_CALENDAR_SUCCESS = 'FETCH_CALENDAR_SUCCESS';
const FETCH_CALENDAR_ERROR = 'FETCH_CALENDAR_ERROR';

const fetchCalendarAction = createAction(FETCH_CALENDAR);
const fetchCalendarGoodAction = createAction<any>(FETCH_CALENDAR_SUCCESS);
const fetchCalendarBadAction = createAction<unknown>(FETCH_CALENDAR_ERROR);

export {
  FETCH_CALENDAR,
  FETCH_CALENDAR_ERROR,
  FETCH_CALENDAR_SUCCESS,
  fetchCalendarGoodAction,
  fetchCalendarBadAction,
  fetchCalendarAction,
};
