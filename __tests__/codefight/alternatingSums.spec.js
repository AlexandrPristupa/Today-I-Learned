import { alternatingSums } from './../../javascript/codefight/alternatingSums';

describe('alternatingSums', () => {
  it('should be return an array of two integers,.', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105]);
    expect(alternatingSums([100, 50])).toEqual([100, 50]);
    expect(alternatingSums([80])).toEqual([80, 0]);
  });
});
