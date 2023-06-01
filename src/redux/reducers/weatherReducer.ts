import { WeatherAction, WeatherState } from '../../types/weather';
import {
 SET_WEATHER_MODE, FETCH_WEATHER, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS,
} from '../../actions/weatherActions';

export const initStateWeather: WeatherState = {
  mode: 'daily',
  currentWeather: 'clear-day',
  timezone: '',
  address: '',
  weather: [],
  error: null,
  loading: false,
};

export const weatherReducer = (state = initStateWeather, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case SET_WEATHER_MODE:
      return { ...state, mode: action.payload };
    case FETCH_WEATHER:
      return {
        ...state,
        loading: true,
        error: null,
        timezone: '',
        weather: [],
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        address: action.payload.address,
        timezone: action.payload.timezone,
        weather: action.payload.days,
        currentWeather: action.payload.days[0].icon,
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
        weather: [],
      };
    default:
      return state;
  }
};
