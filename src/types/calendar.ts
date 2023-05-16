interface IEvent {
  id: number,
  summary: string,
  start: {
    dateTime: string,
  },
}

export interface CalendarState {
  events: IEvent[];
  loading: boolean,
  error: null | string,
}

export interface CalendarFetchSuccessAction {
  type: 'FETCH_CALENDAR_SUCCESS',
  payload: IEvent[],
}

export interface CalendarFetchAction {
  type: 'FETCH_CALENDAR';
}

export interface CalendarFetchErrorAction {
  type: 'FETCH_CALENDAR_ERROR'
  payload: string;
}

export type CalendarAction =
  (CalendarFetchSuccessAction | CalendarFetchAction | CalendarFetchErrorAction)
