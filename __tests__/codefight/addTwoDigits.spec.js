import { addTwoDigits } from './../../javascript/codefight/addTwoDigits';

describe('addTowDigits', () => {
  it('should be return the sum of its digits.', () => {
    expect(addTwoDigits(29)).toEqual(11);
    expect(addTwoDigits(48)).toEqual(12);
    expect(addTwoDigits(25)).toEqual(7);
  });
});
