interface IEvent {
  id: number,
  summary: string,
}

export interface CalendarState {
  events: IEvent[];
}
