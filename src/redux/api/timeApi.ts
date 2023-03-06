import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const timeApi = createApi({
  reducerPath: 'timeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ipgeolocation.io/timezone?apiKey=ca0d62cf9f0e4374a86a04960701e32f' }),
  endpoints: (build) => ({
    getDateByLoc: build.query({
      query: (pos) => ({
        url: `&lat=${pos.latitude}&long=${pos.longitude}`,
      }),
    }),
  }),
});

export default timeApi;
