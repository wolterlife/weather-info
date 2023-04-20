import { WeatherAction, weatherActionTypes, WeatherState } from '../../types/weather';
import getDayByDate from '../../helpers/getDayByDate';

const initialState: WeatherState = {
  mode: 'daily',
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
        weather: [],
      };
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        timezone: action.payload.timezone,
        weather: action.payload.days
          .map((
            {
              temp,
              tempmin,
              datetime,
              icon,
              hours,
            },
            ) => ({
              temp,
              tempmin,
              datetime,
              icon,
              dayweek: getDayByDate(datetime),
              hours: hours.map(({ temp, datetimeEpoch, icon }) => (
                {
                  icon,
                  temp,
                  datetimeEpoch,
                })),
            })),
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
