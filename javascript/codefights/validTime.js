export const validTime = (time) => {
  return /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
};
