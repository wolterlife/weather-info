import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/geo/1.0/' }),
  endpoints: (build) => ({
    getCity: build.query({
      query: (city : string) => ({
        url: `direct?q=${city}&limit=5&appid=3f0371b1e5c837c3e5f88f93f9562a93`,
      }),
    }),
  }),
});

export default weatherApi;
