import { commonCharacterCount } from './../../javascript/codefight/commonCharacterCount'

describe('commonCharacterCount', () => {
  it('should be  find the number of common characters between them.', () => {
    expect(commonCharacterCount("aabcc", "adcaa")).toBe(3);
    expect(commonCharacterCount("zzzz", "zzzzzzz")).toBe(4);
    expect(commonCharacterCount("abca", "xyzbac")).toBe(3);
    expect(commonCharacterCount("a", "b")).toBe(0);
  });
});