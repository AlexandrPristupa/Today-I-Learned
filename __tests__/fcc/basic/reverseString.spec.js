import { reverseString1, reverseString2 } from '../../../javascript/fcc/basic/reverseString'

describe('adjacentElementsProduct', () => {

  it('should be reverse string 1', () => {
    expect(reverseString1("hello")).toEqual("olleh");
  });

  it('should be reverse string 2', () => {
    expect(reverseString2("Howdy")).toEqual("ydwoH");
  });

});
