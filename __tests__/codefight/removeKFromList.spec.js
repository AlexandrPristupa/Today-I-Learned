import { removeKFromList } from './../../javascript/codefight/removeKFromList';

describe('testing addTowDigits', () => {
  
  it('should be remove all elements from list l that have a value equal to k', () => {
    expect(removeKFromList([3, 1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
  });

  it('should be remove all elements from list l that have a value equal to k', () => {
    expect(removeKFromList([123, 456, 789, 0], 0)).toEqual([123, 456, 789]);
  });

  it('should be remove all elements from list l that have a value equal to k', () => {
    expect(removeKFromList([1, 2, 3, 4, 5, 6, 7], 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should be remove all elements from list l that have a value equal to k', () => {
    expect(removeKFromList([1000, 1000], 1000)).toEqual([]);
  });
  
  it('should be remove all elements from list l that have a value equal to k', () => {
    expect(removeKFromList(null, -1000)).toEqual([]);
  });

});
