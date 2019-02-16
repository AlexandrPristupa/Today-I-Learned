import { isDigit } from '../../javascript/codesignal/isDigit';

describe('testing isDigit', () => {

    it('should be return true', () => {
        expect(isDigit("0")).toEqual(true);
    });

    it('should be return false', () => {
        expect(isDigit("-")).toEqual(false);
    });

    it('should be return "0"', () => {
        expect(isDigit("6")).toEqual(true);
    })

});
