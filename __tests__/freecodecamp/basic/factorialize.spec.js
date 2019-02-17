import { factorialize } from '../../../javascript/freecodecamp/basic/factorialize';

describe('adjacentElementsProduct', () => {
  it('should be return 120.', () => {
    expect(factorialize(5)).toEqual(120);
  });

  it('should be return 1', () => {
    expect(factorialize(0)).toEqual(1);
  });
});
