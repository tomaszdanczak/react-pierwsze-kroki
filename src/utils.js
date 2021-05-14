export const isValidNumberInput = (e) => {
  if (isNaN(parseInt(e.key))) e.preventDefault();
};

export const parseInputAsNumber = (val) => {
  if (val === "") return -1;
  if (isNaN(parseInt(val))) return -1;
  return parseInt(val);
};

export const isValidName = (val) => {
  if (val.length > 0) return true;
  return false;
};

export const isValidHour = (val) => {
  if (val >= 0 && val <= 23) return true;
  return false;
};

export const isValidMinute = (val) => {
  if (val >= 0 && val <= 59) return true;
  return false;
};

export const hourMinuteToSeconds = (h, m) => {
  return h * 3600 + m * 60;
};
