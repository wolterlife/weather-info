const getDayByDate = (day: number, timeZone: string) => new Date(day * 1000).toLocaleString('en', {
    weekday: 'short',
    timeZone,
  });

export default getDayByDate;
