import { circleOfNumbers } from './../../javascript/codefight/circleOfNumbers';

describe('testing circleOfNumbers', () => {

    it('should be return 7', () => {
        expect(circleOfNumbers(10, 2)).toEqual(7);
    });

    it('should be return 2', () => {
        expect(circleOfNumbers(10, 7)).toEqual(2);
    });

});
