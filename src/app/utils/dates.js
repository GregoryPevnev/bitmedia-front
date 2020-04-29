export const dateToTime = date => new Date(date).getTime();

export const padding = day => String(day).length === 1 ? `0${day}` : String(day);

export const formatDate = (year, month, day) => `${year}-${padding(month)}-${padding(day)}`;

export const timeToDate = time => {
  const date = new Date(time);

  return formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
};