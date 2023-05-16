import { CalendarAction, CalendarState } from '../../types/calendar';
import { FETCH_CALENDAR, FETCH_CALENDAR_ERROR, FETCH_CALENDAR_SUCCESS } from '../actions/calendarActions';

export const initStateCalendar: CalendarState = {
  events: [],
  loading: false,
  error: null,
};

export const calendarReducer = (
  state = initStateCalendar,
  action: CalendarAction,
): CalendarState => {
  switch (action.type) {
    case FETCH_CALENDAR:
      return { ...state, loading: true };
    case FETCH_CALENDAR_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload.map(({ id, summary, start }) => (
          {
            id, summary, start,
          }
        )),
      };
    case FETCH_CALENDAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
