import { booWho } from '../../../javascript/freecodecamp/intermediate/booWho';

describe('testing booWho', () => {

    it('should be return false', () => {
        expect(booWho(null)).toEqual(false);
    });

    it('should be return true', () => {
        expect(booWho(true)).toEqual(true);
    });

    it('should be return false', () => {
        expect(booWho([])).toEqual(false);
    });

});
