import { adjacentElementsProduct } from './../../javascript/codefight/adjacentElementsProduct'

describe('adjacentElementsProduct', () => {
  it('should be find the pair of adjacent elements', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toEqual(21)
    expect(adjacentElementsProduct([-1, -2])).toEqual(2)
    expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toEqual(6)
  });
})
