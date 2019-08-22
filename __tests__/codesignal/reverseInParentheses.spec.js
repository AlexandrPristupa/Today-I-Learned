import { reverseInParentheses } from '../../javascript/codesignal/reverseInParentheses.js'

describe("testing reverseInParentheses", () => {

  it('should be return true', () => {
    expect(reverseInParentheses("(bar)")).toEqual("rab");
  });

  it('should be return false', () => {
    expect(reverseInParentheses("(ad)")).toEqual("da");
  });

});
