import { findArrow } from './../../javascript/practice/practice';

describe('testing findArrow', () => {
  it('should be return true or false', () => {
    expect(findArrow('<>')).toEqual(true);
    expect(findArrow('<////>')).toEqual(true);
    expect(findArrow('<///asdasd/asdasd>')).toEqual(true);
    expect(findArrow('<')).toEqual(false);
    expect(findArrow('>')).toEqual(false);
    expect(findArrow('')).toEqual(false);
  });
});