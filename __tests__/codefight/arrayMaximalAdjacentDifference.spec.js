import { arrayMaximalAdjacentDifference } from './../../javascript/codefight/arrayMaximalAdjacentDifference';

describe('find the maximal absolute difference between any two of its adjacent elements', () => {

    it('should be return 3', () => {
        expect(arrayMaximalAdjacentDifference([2, 4, 1, 0])).toEqual(3);
    });

    it('should be return 0', () => {
        expect(arrayMaximalAdjacentDifference([1, 1, 1, 1])).toEqual(0);
    });

    it('should be return 7', () => {
        expect(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2])).toEqual(7);
    });
    
});