import { commonCharacterCount } from '../../javascript/codesignal/commonCharacterCount'

describe('testing commonCharacterCount', () => {

  it('should be  find the number of common characters between them.', () => {
    expect(commonCharacterCount("aabcc", "adcaa")).toBe(3);
  });

  it('should be  find the number of common characters between them.', () => {
    expect(commonCharacterCount("zzzz", "zzzzzzz")).toBe(4);
  });

  it('should be  find the number of common characters between them.', () => {
    expect(commonCharacterCount("abca", "xyzbac")).toBe(3);
  });

  it('should be  find the number of common characters between them.', () => {
    expect(commonCharacterCount("a", "b")).toBe(0);
  });

});
