import { centuryFromYear } from './../../javascript/codefight/centuryFromYear';

describe('testing centuryFromYear', () => {

  it('should be return the century it is in.', () => {
    expect(centuryFromYear(1905)).toEqual(20);
  });

  it('should be return the century it is in.', () => {
    expect(centuryFromYear(1700)).toEqual(17);
  });

  it('should be return the century it is in.', () => {
    expect(centuryFromYear(1988)).toEqual(20);
  });

  it('should be return the century it is in.', () => {
    expect(centuryFromYear(2000)).toEqual(20);
  });

  it('should be return the century it is in.', () => {
    expect(centuryFromYear(2001)).toEqual(21);
  });

});
