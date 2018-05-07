// check palindrome

export const checkPalindrome = (inputString) => {
  let reversStr = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversStr += inputString[i];
  }

  return inputString === reversStr ? true : false;
};
