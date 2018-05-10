import { convertHTML } from './../../../javascript/fcc/intermediate/convertHTML';

describe('convertHTML', () => {

    it('should return Hamburgers &​lt; Pizza &​lt; Tacos', () => {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &​lt; Pizza &​lt; Tacos");
    });

    it('should return Sixty &​gt; twelve', () => {
        expect(convertHTML("Sixty > twelve")).toEqual("Sixty &​gt; twelve");
    });

});
