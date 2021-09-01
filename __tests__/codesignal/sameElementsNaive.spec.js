import { sameElementsNaive } from '../../javascript/codesignal/sameElementsNaive';

describe('testing sameElementsNaive', () => {

  it('checks if sameElementsNaive returns 1 when input is [1, 2, 3] and [3, 4, 5]', () => {
    expect(sameElementsNaive([1, 2, 3], [3, 4, 5])).toEqual(1);
  });

});
