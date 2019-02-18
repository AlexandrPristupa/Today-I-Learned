import { confirmEnding } from '../../../javascript/freecodecamp/basic/confirmEnding';

describe('adjacentElementsProduct', () => {
  it('should be return 120.', () => {
    expect(confirmEnding("Open sesame", "game")).toEqual(false);
  });

  it('should be return 1', () => {
    expect(confirmEnding("Open sesame", "same")).toEqual(true);
  });
});
