import { findLongestSubarrayBySum } from '../../javascript/codesignal/findLongestSubarrayBySum';

describe('findLongestSubarrayBySum', () => {

  it('should be return [2, 4]', () => {
    expect(findLongestSubarrayBySum(12, [1, 2, 3, 7, 5])).toEqual([2, 4]);
  });

  it('should be return [1, 5]', () => {
    expect(findLongestSubarrayBySum(15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 5]);
  });

});
