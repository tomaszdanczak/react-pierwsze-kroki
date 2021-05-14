export const isValidNumberInput = (e) => {
  if (isNaN(parseInt(e.key))) e.preventDefault();
};

export const parseInputAsNumber = (val) => {
  if (val === "") return -1;
  return parseInt(val);
};
