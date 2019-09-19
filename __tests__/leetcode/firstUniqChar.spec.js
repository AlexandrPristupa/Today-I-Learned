import { firstUniqChar } from './../../javascript/leetcode/firstUniqChar.js';

describe('testing firstUniqChar', () => {

    it('firstUniqChar should be return 0', () => {
        expect(firstUniqChar("leetcode")).toEqual(0);
    });

    it('firstUniqChar should be return 2', () => {
        expect(firstUniqChar("loveleetcode")).toEqual(2);
    });

});
