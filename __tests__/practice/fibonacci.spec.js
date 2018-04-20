import { fibonacci } from './../../javascript/practice/fibonacci';

describe('testing fibonacci', () => {

    it('should be return 3', () => {
        expect(fibonacci(3)).toEqual(3);
    });

    it('should be return 89', () => {
        expect(fibonacci(10)).toEqual(89);
    });

    it('should be return 317811', () => {
        expect(fibonacci(27)).toEqual(317811);
    });

});
