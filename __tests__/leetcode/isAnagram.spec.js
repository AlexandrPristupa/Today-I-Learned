import { isAnagram } from './../../javascript/leetcode/isAnagram.js';

describe('testing isAnagram', () => {

    it('firstUniqChar should array', () => {
        expect(isAnagram('anagram', 'nagaram')).toEqual(false);
    });
});
