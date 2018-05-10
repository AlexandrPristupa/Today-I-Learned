import { removeDuplicates } from './../../../javascript/leetcode/top-easy/removeDuplicates';

describe('testing remove duplicates', () => {

    it('should be return [0, 1, 2, 3, 4, 5]', () => {
        expect(removeDuplicates([0, 1, 1, 2, 2, 2, 3, 4, 5])).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it('should be return [1]', () => {
        expect(removeDuplicates([1, 1, 1, 1, 1, 1])).toEqual([1]);
    });

});