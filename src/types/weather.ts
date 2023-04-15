export interface WeatherState {
  mode: string,
  weather: any,
  loading: boolean,
  error: null | string,
}

interface IDay {
  datetime: string,
  temp: number,
  tempmin: number,
}

export interface ResponseWeather {
  days: IDay[],
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
  payload?: any;
}

export interface WeatherFetchSuccessAction {
  type: weatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: ResponseWeather,
}

export interface WeatherFetchErrorAction {
  type: weatherActionTypes.FETCH_WEATHER_ERROR
  payload: string;
}

export type WeatherAction =
  (SetWeatherModAction | WeatherFetchAction | WeatherFetchSuccessAction | WeatherFetchErrorAction)
