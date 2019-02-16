import { longestWord } from '../../javascript/codesignal/longestWord';

describe('testing longestWord', () => {

    it('should be return string "steady"', () => {
        expect(longestWord("Ready, steady, go!")).toEqual("steady");
    });

    it('should be return string "steady"', () => {
        expect(longestWord("Ready[[[, steady, go!")).toEqual("steady");
    });

    it('should be return string "ABCd"', () => {
        expect(longestWord("ABCd")).toEqual("ABCd");
    });

});
