import { maxMultiple } from './../../javascript/codefight/maxMultiple'

describe("testing maxMultiple", () => {
  
  it('should be return largest integer N such that:n', () => {
    expect(maxMultiple(3, 10)).toEqual(9);
  });

  it('should be return largest integer N such that:n', () => {
    expect(maxMultiple(2, 7)).toEqual(6);
  });

  it('should be return largest integer N such that:n', () => {
    expect(maxMultiple(10, 50)).toEqual(50);
  });
  
});
