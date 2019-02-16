import { isIPv4Address } from '../../javascript/codesignal/isIPv4Address';

describe('find out if it satisfies the IPv4 address naming rules.', () => {
    
    it('should be return true', () => {
        expect(isIPv4Address("172.16.254.1")).toEqual(true);
    });

    it('should be return false', () => {
        expect(isIPv4Address("172.316.254.1")).toEqual(false);
    });

    it('should be return false', () => {
        expect(isIPv4Address(".254.255.0")).toEqual(false);
    });

});
