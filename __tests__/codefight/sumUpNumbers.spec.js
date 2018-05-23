import { sumUpNumbers } from './../../javascript/codefight/sumUpNumbers'

describe("testing sumUpNumbers", () => {

    it('should be return n-int', () => {
        expect(sumUpNumbers("2 apples, 12 oranges")).toEqual(14);
    });

    it('should be return n-int', () => {
        expect(sumUpNumbers("123450")).toEqual(123450);
    });

    it('should be return n-int', () => {
        expect(sumUpNumbers("Your payment method is invalid")).toEqual(0);
    });

});
