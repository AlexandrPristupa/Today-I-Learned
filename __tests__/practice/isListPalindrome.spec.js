import { isListPalindrome } from './../../javascript/practice/isListPalindrome';

describe('testing isListPalindrome', () => {

    it('should be return true', () => {
        expect(isListPalindrome([0,1,0])).toEqual(true);
    });
});