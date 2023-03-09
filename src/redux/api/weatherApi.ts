import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currentDate = () => {
  const d = new Date();
  return d.toJSON().slice(0, 10);
};

const nextDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 10);
  return d.toJSON().slice(0, 10);
};

const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1/forecast' }),
  endpoints: (build) => ({
    getWeatherByPos: build.query({
      query: (pos) => ({
        url: `?latitude=${pos.latitude}&longitude=${pos.longitude}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${currentDate()}&end_date=${nextDate()}`,
      }),
    }),
  }),
});

export default weatherApi;
