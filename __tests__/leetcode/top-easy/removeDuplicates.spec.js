import { removeDuplicates } from './../../../javascript/leetcode/top-easy/removeDuplicates';

describe('testing remove duplicates', () => {

    it('should be return 6', () => {
        expect(removeDuplicates([0, 1, 1, 2, 2, 2, 3, 4, 5])).toEqual(6);
    });

    it('should be return 1', () => {
        expect(removeDuplicates([1, 1, 1, 1, 1, 1])).toEqual(1);
    });

    it('should be return [1, 2]', () => {
        expect(removeDuplicates([1, 1, 2])).toEqual(2);
    });

});
