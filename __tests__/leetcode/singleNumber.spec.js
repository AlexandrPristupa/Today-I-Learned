import { singleNumber } from './../../javascript/leetcode/singleNumber.js';

describe('testing singleNumber', () => {

    it('firstUniqChar should array', () => {
        expect(singleNumber([4,1,2,1,2])).toEqual("4");
    });
});
