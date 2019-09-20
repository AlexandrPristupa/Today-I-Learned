import { sameElementsNaive } from '../../javascript/codesignal/sameElementsNaive';

describe('testing sameElementsNaive', () => {

  it('should be return ', () => {
    expect(sameElementsNaive([1, 2, 3], [3, 4, 5])).toEqual(1);
  });

});
