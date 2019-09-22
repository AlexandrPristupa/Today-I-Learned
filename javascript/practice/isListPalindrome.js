export const isListPalindrome = (l) => {
  const reverseStr = l.reverse().join('');
  const str = l.join('');

  return str === reverseStr;     
};
