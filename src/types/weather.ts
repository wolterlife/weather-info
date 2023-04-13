export interface WeatherState {
  mode: string,
  weather: Array<any>,
  loading: boolean,
  error: null | string,
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
  type: weatherActionTypes.FETCH_WEATHER_SUCCESS
  payload: any[];
}

export interface WeatherFetchErrorAction {
  type: weatherActionTypes.FETCH_WEATHER_ERROR
  payload: string;
}

export type WeatherAction =
  (SetWeatherModAction | WeatherFetchAction | WeatherFetchSuccessAction | WeatherFetchErrorAction)
