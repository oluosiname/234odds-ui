export const capitalize = (text) => {
  if (!text) {
    return;
  }

  return text.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
};
