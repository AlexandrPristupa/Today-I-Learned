import { areEquallyStrong } from '../../javascript/codesignal/areEquallyStrong';

describe('find out if you two are equally strong', () => {

    it('should be return true', () => {
        expect(areEquallyStrong(10, 15, 15, 10)).toEqual(true);
    });

    it('should be return true', () => {
        expect(areEquallyStrong(15, 10, 15, 10)).toEqual(true);
    });

    it('should be return false', () => {
        expect(areEquallyStrong(15, 10, 15, 9)).toEqual(false);
    });
    
});
