import { intersect } from './../../javascript/leetcode/intersect.js';

describe('testing intersect', () => {

    it('firstUniqChar should array', () => {
        expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([4,9]);
    });
});
