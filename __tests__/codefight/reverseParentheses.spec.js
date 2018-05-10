import { reverseParentheses } from './../../javascript/codefight/reverseParentheses';

describe('testing reverseParentheses', () => {

    it('should be return 3', () => {
        expect(reverseParentheses("a(bc)de")).toEqual("acbde");
    });

    it('should be return 1', () => {
        expect(reverseParentheses("a(bcdefghijkl(mno)p)q")).toEqual("apmnolkjihgfedcbq");
    });

});
