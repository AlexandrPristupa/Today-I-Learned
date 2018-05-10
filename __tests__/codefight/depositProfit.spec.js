import { depositProfit } from './../../javascript/codefight/depositProfit';

describe('testing depositProfit', () => {

    it('should be return 3', () => {
        expect(depositProfit(100, 20, 170)).toEqual(3);
    });

    it('should be return 1', () => {
        expect(depositProfit(100, 1, 101)).toEqual(1);
    });

});
