import { rotate } from './../../../javascript/leetcode/top-easy/rotate';
import { rotateArray } from './../../../javascript/leetcode/top-easy/rotateArray';

describe('testing rotate', () => {

    it('should be return [7, 6, 5, 1, 2, 3, 4]', () => {
        expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([7, 6, 5, 1, 2, 3, 4]);
    });

    it('should be return [5, 6, 7, 1, 2, 3, 4]', () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

});
