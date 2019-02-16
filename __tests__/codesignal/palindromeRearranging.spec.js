import { palindromeRearranging } from '../../javascript/codesignal/palindromeRearranging'

describe("testing palindromeRearranging", () => {

    it('should be return largest integer N such that:n', () => {
        expect(palindromeRearranging("aabb")).toEqual(true);
    });

    it('should be return largest integer N such that:n', () => {
        expect(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")).toEqual(false);
    });

    it('should be return largest integer N such that:n', () => {
        expect(palindromeRearranging("abbcabb")).toEqual(true);
    });

});