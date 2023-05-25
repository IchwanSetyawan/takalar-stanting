export const convertPercent = (value) => {
  if (value > 100) {
    return 100;
  }
  return Math.ceil(value);
};

export const maxWidthConvert = (value) => {
  if (value > 100) {
    return 100;
  }
};
