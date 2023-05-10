interface IEvent {
  id: number,
  summary: string,
  start: {
    dateTime: string,
  },
}

export interface CalendarState {
  events: IEvent[];
}
