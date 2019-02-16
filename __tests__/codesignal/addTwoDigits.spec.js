import { addTwoDigits } from '../../javascript/codesignal/addTwoDigits';

describe('testing addTowDigits', () => {
  
  it('should be return the sum of its 11', () => {
    expect(addTwoDigits(29)).toEqual(11);
  });

  it('should be return the sum of its 12', () => {
    expect(addTwoDigits(48)).toEqual(12);
  });

  it('should be return the sum of its 7', () => {
    expect(addTwoDigits(25)).toEqual(7);
  });

});
