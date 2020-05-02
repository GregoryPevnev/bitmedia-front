export * from "./queryParams";

export const dedupliate = list => [...new Set(list)];

export const range = (min, max) => {
  const values = [];

  for (let i = min; i <= max; i++)
    values.push(i);

  return values;
};

export const stripPadding = date => {
  let i = 0;

  while (i < date.length && date[i] === "0") i++;

  return date.slice(i);
};
