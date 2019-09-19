/**
 * @param {string} s
 * @return {number}
 */
export const firstUniqChar = (s) => {
  if (!s.length) {
    return -1;
  }

  const cash = {};
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (!cash[arr[i]]) {
      cash[arr[i]] = 1;
    } else {
      cash[arr[i]] += 1;
    }
  }

  const arrFromCash = Object.keys(cash);

  for (let i = 0; i < arrFromCash.length; i++) {
    if (cash[arrFromCash[i]] === 1) {
      return arr.indexOf(arrFromCash[i]);
    }
  }

  return -1
};
