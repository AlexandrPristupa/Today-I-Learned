import { candies } from './../../javascript/codefight/candies';

describe('testing arrayReplace', () => {

    it('should be return 9', () => {
        expect(candies(3, 10)).toEqual(9);
    });

    it('should be return 2', () => {
        expect(candies(1, 2)).toEqual(2);
    });

    it('should be return 0', () => {
        expect(candies(10, 5)).toEqual(0);
    });

});