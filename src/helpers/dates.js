export const nextDates = () => {
  const dt = new Date();
  return [1, 2].map((i) => {
    return new Date().setDate(dt.getDate() + i);
  });
};

export const stringifyDate = (value, options = {}) => {
  if (!value) {
    return;
  }
  return new Intl.DateTimeFormat("en-US", options).format(value);
};
