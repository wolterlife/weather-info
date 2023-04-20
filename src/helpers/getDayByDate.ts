const getDayByDate = (day: string) => {
  const weekend = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mDate = new Date(Date.parse(day));
  return (weekend[mDate.getDay()]);
};

export default getDayByDate;
