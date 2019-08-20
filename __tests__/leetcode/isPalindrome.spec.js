import { isPalindrome } from './../../javascript/leetcode/isPalindrome.js';

describe('testing isPalindrome', () => {

    it('should be return false', () => {
        expect(isPalindrome(123)).toEqual(false);
    });

    it('should be return true', () => {
        expect(isPalindrome(323)).toEqual(true);
    });

});
