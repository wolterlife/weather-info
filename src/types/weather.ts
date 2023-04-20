interface IHourse {
  temp: number,
  icon: string,
  datetimeEpoch: number,
}

interface IDay {
  datetime: string,
  temp: number,
  tempmin: number,
  icon: string,
  dayweek: string,
  hours: IHourse[],
}

export interface WeatherState {
  mode: string,
  timezone: string,
  weather: IDay[],
  loading: boolean,
  error: null | string,
}

export interface ResponseWeather {
  days: IDay[],
  timezone: string,
}

export enum weatherActionTypes {
  SET_WEATHER_MODE = 'SET_WEATHER_MODE',
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

export interface SetWeatherModAction {
  type: weatherActionTypes.SET_WEATHER_MODE,
  payload: string;
}

export interface WeatherFetchAction {
  type: weatherActionTypes.FETCH_WEATHER;
  payload: string;
}

export interface WeatherFetchSuccessAction {
  type: weatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: ResponseWeather,
}

export interface WeatherFetchErrorAction {
  type: weatherActionTypes.FETCH_WEATHER_ERROR
  payload: object;
}

export type WeatherAction =
  (SetWeatherModAction | WeatherFetchAction | WeatherFetchSuccessAction | WeatherFetchErrorAction)
