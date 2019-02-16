import { constructArray } from '../../javascript/codesignal/constructArray'

describe('testing constructArray', () => {

  it('should be return [1, 7, 2, 6, 3, 5, 4]', () => {
    expect(constructArray(7)).toEqual([1, 7, 2, 6, 3, 5, 4]);
  });

  it('should be return [1]', () => {
    expect(constructArray(1)).toEqual([1]);
  });

  it('should be return [1, 2]', () => {
    expect(constructArray(2)).toEqual([1, 2]);
  });

});
