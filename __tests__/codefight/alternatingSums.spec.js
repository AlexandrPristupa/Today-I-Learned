import { alternatingSums } from '../../javascript/codefights/alternatingSums';

describe('testing alternatingSums', () => {

  it('should be return an array of two integers,.', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105]);
  });

  it('should be return an array of two integers,.', () => {
    expect(alternatingSums([100, 50])).toEqual([100, 50]);
  });

  it('should be return an array of two integers,.', () => {
    expect(alternatingSums([80])).toEqual([80, 0]);
  });

});
