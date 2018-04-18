import { areSimilar } from './../../javascript/codefight/areSimilar';

describe('alternatingSums', () => {
    it('should be return true', () => {
        expect(areSimilar([1, 2, 3], [1, 2, 3])).toEqual(true);
    });

    it('should be return true', () => {
        expect(areSimilar([1, 2, 3], [2, 1, 3])).toEqual(true);
    });

    it('should be return false', () => {
        expect(areSimilar([1, 2, 2], [2, 1, 1])).toEqual(false);
    });
});
