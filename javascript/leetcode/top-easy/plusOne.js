/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const plusOne = (digits) => {
  let num = digits[digits.length - 1];
  digits.push(num + 1);
  return digits;
};
