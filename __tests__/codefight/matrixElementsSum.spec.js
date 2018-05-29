import { matrixElementsSum } from '../../javascript/codefights/matrixElementsSum';

describe('testing matrixElementsSum', () => {

    it('should be return sum', () => {
        expect(matrixElementsSum([[0,1,1,2], [0,5,0,0], [2,0,3,3]])).toEqual(9);
    });

    it('should be return sum', () => {
        expect(matrixElementsSum([[1,1,1], [2,2,2], [3,3,3]])).toEqual(18);
    });

});
