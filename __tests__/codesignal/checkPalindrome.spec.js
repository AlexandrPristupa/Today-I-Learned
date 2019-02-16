import { checkPalindrome } from '../../javascript/codesignal/checkPalindrome'

describe('testing checkPalindrome', () => {

  it('should be checkPalindrome', () => {
    expect(checkPalindrome("aabaa")).toBe(true);
  });

  it('should be checkPalindrome', () => {
    expect(checkPalindrome("abac")).toBe(false);
  });

  it('should be checkPalindrome', () => {
    expect(checkPalindrome("a")).toBe(true);
  });

  it('should be checkPalindrome', () => {
    expect(checkPalindrome("az")).toBe(false);
  });

});
