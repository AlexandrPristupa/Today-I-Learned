import { rotate } from './../../../javascript/leetcode/top-easy/rotate';

describe('testing rotate', () => {

    it('should be return true', () => {
        expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([7, 6, 5, 1, 2, 3, 4]);
    });

});
