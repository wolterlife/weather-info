const fetchWeatherFromApi = (city: string) => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetimeEpoch%2Ctempmin%2Ctemp%2Cicon&include=days%2Chours&iconSet=icons2&key=RT2ZU89V94SD7RSVZ9E85NCG3&contentType=json`)
  .then((res) => res.json());

export default fetchWeatherFromApi;
