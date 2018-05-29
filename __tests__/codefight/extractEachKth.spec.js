import { extractEachKth } from '../../javascript/codefights/extractEachKth';

describe('Given array of integers, remove each kth element from it.', () => {

    it('should be return [1, 2, 4, 5, 7, 8, 10]', () => {
        expect(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });

    it('should be return []', () => {
        expect(extractEachKth([1, 1, 1, 1, 1], 1)).toEqual([]);
    });

    it('should be return [1, 1, 1, 1]', () => {
        expect(extractEachKth([1, 2, 1, 2, 1, 2, 1, 2], 2)).toEqual([1, 1, 1, 1]);
    });

});
