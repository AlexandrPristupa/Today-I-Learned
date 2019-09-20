import { firstReverseTry } from '../../javascript/codesignal/firstReverseTry.js';

describe('firstReverseTry', () => {

    it('should be return', () => {
        expect(firstReverseTry([])).toEqual([]);
    });

    it('should be return', () => {
        expect(firstReverseTry([1, 2, 3, 4, 5])).toEqual([5, 2, 3, 4, 1]);
    });
});
