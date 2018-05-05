import { largestNumber } from './../../javascript/codefight/largestNumber';

describe('largestNumber', () => {
  
  it('should be return the largest number that contains exactly n digits', () => {
    expect(largestNumber(2)).toEqual(99);
  });

  it('should be return the largest number that contains exactly n digits', () => {
    expect(largestNumber(1)).toEqual(9);
  });

  it('should be return the largest number that contains exactly n digits', () => {
    expect(largestNumber(7)).toEqual(9999999);
  });

  it('should be return the largest number that contains exactly n digits', () => {
    expect(largestNumber(4)).toEqual(9999);
  });

  it('should be return the largest number that contains exactly n digits', () => {
    expect(largestNumber(3)).toEqual(999);
  });

});
