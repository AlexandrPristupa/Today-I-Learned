import { reverseString } from './../../../javascript/leetcode/top-easy/reversString.js';

describe('testing reverseString', () => {

    it('should be return "321"', () => {
        expect(reverseString('123')).toEqual('321');
    });

    it('should be return "olleh"', () => {
        expect(reverseString("hello")).toEqual("olleh");
    });

});
