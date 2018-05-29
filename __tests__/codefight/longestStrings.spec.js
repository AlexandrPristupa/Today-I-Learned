import { longestStrings } from '../../javascript/codefights/longestStrings';

describe('testing largestNumber', () => {
  
  it('should be return array containing all of its longest strings.', () => {
    expect(longestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual(["aba", "vcd", "aba"]);
  });

  it('should be return array containing all of its longest strings.', () => {
    expect(longestStrings(["abc", "eeee", "abcd", "dcd"])).toEqual(["eeee", "abcd"]);
  });

  it('should be return array containing all of its longest strings.', () => {
    expect(longestStrings(["aa"])).toEqual(["aa"]);
  });

  it('should be return array containing all of its longest strings.', () => {
    expect(longestStrings([])).toEqual([]);
  });

});
