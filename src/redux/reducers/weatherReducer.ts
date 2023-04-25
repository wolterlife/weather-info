import { WeatherAction, weatherActionTypes, WeatherState } from '../../types/weather';

const initialState: WeatherState = {
  mode: 'daily',
  currentWeather: 'clear-day',
  timezone: '',
  weather: [],
  error: null,
  loading: false,
};

const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case weatherActionTypes.SET_WEATHER_MODE:
      return { ...state, mode: action.payload };
    case weatherActionTypes.FETCH_WEATHER:
      return {
        ...state,
        loading: true,
        error: null,
        timezone: '',
        weather: [],
      };
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        timezone: action.payload.timezone,
        weather: action.payload.days,
        currentWeather: action.payload.days[0].icon,
      };
    case weatherActionTypes.FETCH_WEATHER_ERROR:
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

export default weatherReducer;
