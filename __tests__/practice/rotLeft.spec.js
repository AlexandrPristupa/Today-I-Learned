import { rotLeft } from './../../javascript/practice/rotLeft';

describe('testing rotLeft', () => {

    it('should be return array', () => {
        expect(rotLeft([1,2,3,4,5], 4)).toEqual([5,1,2,3,4]);
    });
});