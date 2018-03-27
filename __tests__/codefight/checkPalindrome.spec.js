import { checkPalindrome } from './../../javascript/codefight/checkPalindrome'

describe('checkPalindrome', () => {
  it('should be checkPalindrome', () => {
    expect(checkPalindrome("aabaa")).toBe(true);
    expect(checkPalindrome("abac")).toBe(false);
    expect(checkPalindrome("a")).toBe(true);
    expect(checkPalindrome("az")).toBe(false);
  });
});
