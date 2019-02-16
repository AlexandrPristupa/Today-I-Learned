import { maxProfit } from './../../../javascript/leetcode/top-easy/bestTime';

describe('testing bestTime', () => {

    it('should be return 7', () => {
        expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
    });

    it('should be return 4', () => {
        expect(maxProfit([1,2,3,4,5])).toEqual(4);
    });

    it('should be return 0', () => {
      expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });
  
});
