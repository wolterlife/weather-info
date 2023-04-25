export const correctionTimeView = (time: number, timeZone: string): string => { // 09:00:00
  const result = new Date(time * 1000).toLocaleTimeString('ru-RU', { timeZone }); // use timezone
  if (result[0] === '0') return result.slice(1, 5); // 9:00
  return result.slice(0, 5); // 10:00:00 -> 10:00
};

export const getTimeByTimeZone = (timeZone: string): string => {
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

export const getDateByTimeZone = (timeZone: string): string => {
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
