const correctionTimeView = (time: number, timeZone: string): string => { // 09:00:00
  const result = new Date(time * 1000).toLocaleTimeString('ru-RU', { timeZone }); // use timezone
  if (result[0] === '0') return result.slice(1, 5); // 9:00
  return result.slice(0, 5); // 10:00:00 -> 10:00
};

const getTimeByTimeZone = (timeZone: string): string => {
  if (timeZone) {
    const formatter = new Intl.DateTimeFormat([], {
      hour: 'numeric',
      minute: 'numeric',
      timeZone,
    });
    return (formatter.format(new Date()));
  }
  return new Date().toLocaleTimeString().slice(0, -3);
};

const getDateByTimeZone = (timeZone: string): string => {
  if (timeZone) {
    const formatter = new Intl.DateTimeFormat('en-EN', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      timeZone,
      year: 'numeric',
    });
    return (formatter.format(new Date()));
  }
  return new Date().toLocaleDateString('en-EN', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const fromCurrTime = (el: any) => el.datetimeEpoch * 1000 >= Date.now();

const calendarStartDay = () => new Date().toISOString();

const calendarEndDay = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).toISOString();
};

const calendarEventTime = ({ dateTime } : {dateTime: string}) => dateTime?.slice(11, -9);

export {
  getTimeByTimeZone,
  getDateByTimeZone,
  fromCurrTime,
  correctionTimeView,
  calendarStartDay,
  calendarEndDay,
  calendarEventTime,
};
