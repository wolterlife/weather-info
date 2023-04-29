import ct from 'countries-and-timezones';

const getCountryFlag = (timezone: string) => `fi fi-${ct.getTimezone(timezone)?.countries[0].toLowerCase()}`;

export default getCountryFlag;
