import { WeatherAction, weatherActionTypes, WeatherState } from '../../types/weather';

const initialState: WeatherState = {
  mode: 'daily',
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
        weather: [],
      };
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        weather: action.payload.days,
      };
    case weatherActionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        weather: [],
      };
    default:
      return state;
  }
};

export default weatherReducer;
