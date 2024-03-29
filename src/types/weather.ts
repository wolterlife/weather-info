interface IHourse {
  temp: number,
  icon: string,
  datetimeEpoch: number,
}

interface IDay {
  datetimeEpoch: number,
  temp: number,
  tempmin: number,
  icon: string,
  hours: IHourse[],
}

export interface WeatherState {
  mode: string,
  timezone: string,
  currentWeather: string,
  address: string,
  weather: IDay[],
  loading: boolean,
  error: null | string,
}

export interface ResponseWeather {
  days: IDay[],
  timezone: string,
  address: string,
}

export interface SetWeatherModAction {
  type: 'SET_WEATHER_MODE',
  payload: string;
}

export interface WeatherFetchAction {
  type: 'FETCH_WEATHER';
  payload: string;
}

export interface WeatherFetchSuccessAction {
  type: 'FETCH_WEATHER_SUCCESS',
  payload: ResponseWeather,
}

export interface WeatherFetchErrorAction {
  type: 'FETCH_WEATHER_ERROR'
  payload: object;
}

export type WeatherAction =
  (SetWeatherModAction | WeatherFetchAction | WeatherFetchSuccessAction | WeatherFetchErrorAction)
