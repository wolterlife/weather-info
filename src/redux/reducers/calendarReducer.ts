import { AnyAction } from '@reduxjs/toolkit';
import { CalendarState } from '../../types/calendar';
import { FETCH_CALENDAR, FETCH_CALENDAR_SUCCESS } from '../actions/calendarActions';

const initialState: CalendarState = {
  events: [],
};

const calendarReducer = (state = initialState, action: AnyAction): CalendarState => {
  switch (action.type) {
    case FETCH_CALENDAR:
      return { ...state, events: [] };
    case FETCH_CALENDAR_SUCCESS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
