/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function(s, t) {
  const first = s.toLowerCase().split('').reverse().join('');
  const second = t.toLowerCase().split('').reverse().join('');

  return first === second;
};
