import { firstDigit } from './../../javascript/codefight/firstDigit';

describe('Given array of integers, remove each kth element from it.', () => {

    it('should be return "1"', () => {
        expect(firstDigit("var_1__Int")).toEqual("1");
    });

    it('should be return "2"', () => {
        expect(firstDigit("q2q-q")).toEqual("2");
    });

    it('should be return "0"', () => {
        expect(firstDigit("0ss")).toEqual("0");
    });

});