import { firstNotRepeatingCharacter1, firstNotRepeatingCharacter } from '../../javascript/codefights/firstNotRepeatingCharacter';

describe('firstNotRepeatingCharacter', () => {

  it('should be return c', () => {
    expect(firstNotRepeatingCharacter1("abacabad")).toEqual("c");
  });

  it('should be return c', () => {
    expect(firstNotRepeatingCharacter("abacabad")).toEqual("c");
  });

});
