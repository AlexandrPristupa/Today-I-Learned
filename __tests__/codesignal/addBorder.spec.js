import { addBorder } from '../../javascript/codesignal/addBorder';

describe('testing addBorder', () => {
  
  it('should be return "*****", "*abc*", "*ded*", "*****"', () => {
    expect(addBorder(["abc", "ded"])).toEqual(["*****", "*abc*", "*ded*", "*****"]);
  });

  it('should be return "***", "*a*", "***"', () => {
    expect(addBorder(['a'])).toEqual(["***", "*a*", "***"]);
  });

  it('should be return "****", "*aa*", "****", "*zz*", "****"', () => {
    expect(addBorder(["aa", "**", "zz"])).toEqual(["****", "*aa*", "****", "*zz*", "****"]);
  });

});
