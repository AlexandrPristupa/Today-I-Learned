import { arrayReplace } from './../../javascript/codefight/arrayReplace';

describe('arrayReplace', () => {
  it('should be replace all the occurrences of elemToReplace with substitutionElem.', () => {
    expect(arrayReplace([1, 2, 1], 1, 3)).toEqual([3, 2, 3]);
    expect(arrayReplace([1, 2, 3, 4, 5], 3, 0)).toEqual([1, 2, 0, 4, 5]);
    expect(arrayReplace([1, 1, 1], 1, 10)).toEqual([10, 10, 10]);
  });
});
