import { varify } from './../../javascript/practice/verify';

describe('testing verify', () => {

  it('should be return 1', () => {
    expect(varify('---(++++)----')).toEqual(1);
  });

  it('should be return 0', () => {
    expect(varify('<(   >)')).toEqual(0);
  });

  it('should be return 1', () => {
    expect(varify('before ( middle []) after ')).toEqual(1);
  });

  it('should be return 1', () => {
    expect(varify('(  [  <>  ()  ]  <>  )')).toEqual(1);
  });

  it('should be return 1', () => {
    expect(varify('   (      [)')).toEqual(0);
  });

});
