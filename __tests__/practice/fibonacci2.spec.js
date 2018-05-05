import { fibonacci2 } from './../../javascript/practice/fibonacci2';

describe('testing fibonacci2', () => {

    it('should be return fibonacci array', () => {
        expect(fibonacci2(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
    });

});