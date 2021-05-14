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

export const secondsToHourMinuteSecond = (s) => {
  let seconds = s;

  const hour = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, 0);

  seconds -= hour * 3600;
  const minute = Math.floor(seconds / 60)
    .toString()
    .padStart(2, 0);

  seconds -= minute * 60;
  seconds = seconds.toString().padStart(2, 0);

  return `${hour}:${minute}:${seconds}`;
};
