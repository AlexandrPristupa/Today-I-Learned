import { palindrome } from '../../../javascript/freecodecamp/basic/palindrome';

describe('findLongestWord', () => {
    it('should be return true', () => {
        expect(palindrome("eye")).toEqual(true);
    });

    it('should be return false', () => {
        expect(palindrome("nope")).toEqual(false);
    });

    it('should be return false', () => {
        expect(palindrome("1 eye for of 1 eye.")).toEqual(false);
    });
});
