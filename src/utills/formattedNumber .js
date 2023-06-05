export const formattedNumber = (number) => {
  const options = {
    style: "decimal",
    useGrouping: true,
    maximumFractionDigits: 0,
  };
  if (number <= 0) {
    return 0;
  }
  return number.toLocaleString("id-ID", options);
};
