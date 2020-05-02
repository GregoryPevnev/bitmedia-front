export const dateToTime = date => new Date(date).getTime();

export const padding = day => String(day).length === 1 ? `0${day}` : String(day);

export const formatDate = (year, month, day) => `${year}-${padding(month)}-${padding(day)}`;

export const timeToDate = time => {
  const date = new Date(time);

  return formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
};

const SUFFIXES = {
  "1": "st",
  "2": "nd",
  "3": "rd"
};

const dateSuffix = date => {
  if (SUFFIXES[date]) return `${date}${SUFFIXES[date]}`;

  return `${date}th`;
};

const stripPadding = date => {
  let i = 0;

  while (i < date.length && date[i] === "0") i++;

  return date.slice(i);
};

export const stringDate = date =>
  dateSuffix(stripPadding(date.split("-")[2]));
