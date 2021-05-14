export const isValidNumberInput = (e) => {
  if (isNaN(parseInt(e.key))) e.preventDefault();
};

export const parseInputAsNumber = (val) => {
  if (val === "") return -1;
  return parseInt(val);
};

export const isValidName = (val) => {
  if (val.length > 0) return true;
  return false;
};
