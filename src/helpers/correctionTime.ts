const correctionTimeView = (time: number, timeZone: string): string => { // 09:00:00
  const result = new Date(time * 1000).toLocaleTimeString('ru-RU', { timeZone }); // use timezone
  if (result[0] === '0') return result.slice(1, 5); // 9:00
  return result.slice(0, 5); // 10:00:00 -> 10:00
};

export default correctionTimeView;
