import { longestStrings } from './../../javascript/codefight/longestStrings';

describe('largestNumber', () => {
  it('should be return array containing all of its longest strings.', () => {
    // expect(longestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual(["aba", "vcd", "aba"]);
    // expect(longestStrings(["abc", "eeee", "abcd", "dcd"])).toEqual(["eeee", "abcd"]);
    expect(longestStrings(["aa"])).toEqual(["aa"]);
  });
});
