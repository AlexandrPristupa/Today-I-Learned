import { arrayChange } from '../../javascript/codefights/arrayChange';

describe('testing arrayChange', () => {

  it('should be return true', () => {
    expect(arrayChange([1,1,1])).toEqual(3);
  });

});
