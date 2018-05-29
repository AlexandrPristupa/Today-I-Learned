import { evenDigitsOnly } from '../../javascript/codefights/evenDigitsOnly';

describe('testing evenDigitsOnly', () => {

  it('should be check if all digits of the given integer are even.', () => {
    expect(evenDigitsOnly(248622)).toEqual(true);
  });

  it('should be check if all digits of the given integer are even.', () => {
    expect(evenDigitsOnly(642386)).toEqual(false);
  });

});
