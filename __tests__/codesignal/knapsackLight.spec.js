import { knapsackLight } from '../../javascript/codesignal/knapsackLight';

describe('testing knapsackLight', () => {

  it('should be return total maximum value', () => {
    expect(knapsackLight(10, 5, 6, 4, 8)).toEqual(10);
  });

  it('should be return total maximum value', () => {
    expect(knapsackLight(10, 5, 6, 4, 9)).toEqual(16);
  });

  it('should be return total maximum value', () => {
    expect(knapsackLight(5, 3, 7, 4, 6)).toEqual(7);
  });

});
