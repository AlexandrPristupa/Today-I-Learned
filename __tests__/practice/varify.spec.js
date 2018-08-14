import { verify } from './../../javascript/practice/verify';

describe('testing verify', () => {

  it('should be return 1', () => {
    expect(verify('---(++++)----')).toEqual(1);
  });

  it('should be return 0', () => {
    expect(verify('<(   >)')).toEqual(0);
  });

  it('should be return 1', () => {
    expect(verify('before ( middle []) after ')).toEqual(1);
  });

  it('should be return 1', () => {
    expect(verify('(  [  <>  ()  ]  <>  )')).toEqual(1);
  });

  it('should be return 0', () => {
    expect(verify('   (      [)')).toEqual(0);
  });

  it('should be return 0', () => {
    expect(verify(') (')).toEqual(0);
  });

});
