import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const timeApi = createApi({
  reducerPath: 'timeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ipgeolocation.io' }),
  endpoints: (build) => ({
    getDateByLoc: build.query({
      query: (pos) => ({
        url: `timezone?apiKey=8a579f6eeaea46c586791b835f3907d3&lat=${pos.latitude}&long=${pos.longitude}`,
      }),
    }),
  }),
});

export default timeApi;
