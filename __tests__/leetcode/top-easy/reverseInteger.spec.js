import { reverseInteger } from './../../../javascript/leetcode/top-easy/reverseInteger';

describe('testing reverse integer', () => {

    it('should be return reverse integer 321', () => {
        expect(reverseInteger(123)).toEqual(321);
    });

    it('should be return reverse integer 21', () => {
        expect(reverseInteger(120)).toEqual(21);
    });

    it('should be return reverse integer -321', () => {
        expect(reverseInteger(-123)).toEqual(-321);
    });

});
