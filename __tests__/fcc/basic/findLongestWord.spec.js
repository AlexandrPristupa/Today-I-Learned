import { findLongestWord } from '../../../javascript/fcc/basic/findLongestWord'

describe('findLongestWord', () => {
    it('should be return 5', () => {
        expect(findLongestWord("May the force be with you")).toEqual(5);
    });

    it('should be return 6', () => {
        expect(findLongestWord("Google do a barrel roll")).toEqual(6);
    });

    it('should be return 8', () => {
        expect(findLongestWord("What is the average airspeed velocity of an unladen swallow")).toEqual(8);
    });
});
