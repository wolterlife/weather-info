import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Position {
  lat: number,
  lng: number
}

const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
  endpoints: (build) => ({
    getPosByCity: build.query({
      query: (city : string) => ({
        url: `geo/1.0/direct?q=${city}&limit=5&appid=3f0371b1e5c837c3e5f88f93f9562a93`,
      }),
    }),
    getCityAndWeatherByPos: build.query({
      query: (pos: Position) => ({
        url: `data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&appid=3f0371b1e5c837c3e5f88f93f9562a93`,
      }),
    }),
  }),
});

export default weatherApi;
