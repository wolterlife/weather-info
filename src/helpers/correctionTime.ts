const correctionTimeView = (time: number, timeZone: string): string => { // 09:00:00
  const result = new Date(time * 1000).toLocaleTimeString('ru-RU', { timeZone });
  if (result[0] === '0') return result.slice(1, 5);
  return result.slice(0, 5);
};

export default correctionTimeView;
