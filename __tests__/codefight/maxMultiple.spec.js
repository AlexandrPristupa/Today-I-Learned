import { maxMultiple } from './../../javascript/codefight/maxMultiple'

describe("Testing maxMultiple", () => {
  it('should be return largest integer N such that:n', () => {
    expect(maxMultiple(3, 10)).toEqual(9);
    expect(maxMultiple(2, 7)).toEqual(6);
    expect(maxMultiple(10, 50)).toEqual(50);
  });
});