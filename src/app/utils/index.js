export * from "./queryParams";
export * from "./dates";

export const dedupliate = list => [...new Set(list)];

export const range = (min, max) => {
  const values = [];

  for (let i = min; i <= max; i++)
    values.push(i);

  return values;
};
