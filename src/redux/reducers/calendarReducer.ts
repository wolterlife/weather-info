import { AnyAction } from '@reduxjs/toolkit';
import { CalendarState } from '../../types/calendar';
import { FETCH_CALENDAR } from '../actions/calendarActions';

export const initStateCalendar: CalendarState = {
  events: [],
};

export const calendarReducer = (state = initStateCalendar, action: AnyAction): CalendarState => {
  switch (action.type) {
    case FETCH_CALENDAR:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
