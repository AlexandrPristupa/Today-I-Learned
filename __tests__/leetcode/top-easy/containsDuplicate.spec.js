import { containsDuplicate } from './../../../javascript/leetcode/top-easy/containsDuplicate';

describe('testing containsDuplicate', () => {

    it('should be return true', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    });

    it('should be return false', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
    });

    it('should be return true', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
    });

});
