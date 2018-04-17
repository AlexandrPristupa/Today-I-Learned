import { sortByHeight } from './../../javascript/codefight/sortByHeight'

describe("Testing sortedByHeight", () => {
  it('should be return n-int', () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
    expect(sortByHeight([-1, -1, -1, -1, -1])).toEqual([-1, -1, -1, -1, -1]);
    expect(sortByHeight([4, 2, 9, 11, 2, 16])).toEqual([2, 2, 4, 9, 11, 16]);
  });
});
