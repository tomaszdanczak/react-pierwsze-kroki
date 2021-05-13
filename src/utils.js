export const isValidNumberInput = (e) => {
  if (isNaN(parseInt(e.key))) e.preventDefault();
};
