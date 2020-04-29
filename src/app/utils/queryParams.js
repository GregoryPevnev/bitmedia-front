const combineParams = (params, name, value) => {
  if (!params[name]) return value;

  if (Array.isArray(params[name])) return [...params[name], value];

  return [params[name], value];
};

const queryParams = (query, params) => {
  const paramValues = query.slice(1).split("&").reduce((values, param) => {
    const [name, value] = param.split("=");

    return {
      ...values,
      [name]: combineParams(params, name, value),
    };
  }, {});

  return params.reduce((total, param) => ({
    ...total,
    [param]: paramValues[param] || null,
  }), {});
};

export default queryParams;
