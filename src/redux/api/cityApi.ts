import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cityApi = createApi({
  reducerPath: 'cityApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
  endpoints: (build) => ({
    getCityByPos: build.query({
      query: (pos) => ({
        url: `data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=3f0371b1e5c837c3e5f88f93f9562a93`,
      }),
    }),
    getPosByCity: build.query({
      query: (city : string) => ({
        url: `geo/1.0/direct?q=${city}&limit=1&appid=3f0371b1e5c837c3e5f88f93f9562a93`,
      }),
    }),
  }),
});

export default cityApi;
