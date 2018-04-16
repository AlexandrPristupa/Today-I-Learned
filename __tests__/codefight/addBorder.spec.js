import { addBorder } from './../../javascript/codefight/addBorder';

describe('addBorder', () => {
  it('should be return the sum of its digits.', () => {
    expect(addBorder(["abc", "ded"])).toEqual(["*****", "*abc*", "*ded*", "*****"]);
    expect(addBorder(['a'])).toEqual(["***", "*a*", "***"]);
    expect(addBorder(["aa", "**", "zz"])).toEqual(["****", "*aa*", "****", "*zz*", "****"]);
  });
});