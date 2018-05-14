import { findArrow } from './../../javascript/practice/practice';

describe('testing findArrow', () => {
  it('should be return 0 or 1 m         .', () => {
    expect(findArrow('<>')).toEqual(1);
    expect(findArrow('<////>')).toEqual(1);
    expect(findArrow('<///asdasd/asdasd>')).toEqual(1);
    expect(findArrow('<')).toEqual(0);
    expect(findArrow('>')).toEqual(0);
    expect(findArrow('')).toEqual(0);
  });
});
